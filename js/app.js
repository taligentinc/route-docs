/**
 * ROUTE Documentation Engine (SPA)
 * Dynamic Markdown Rendering, GitHub Tree API / structure.json Discovery,
 * Client-Side Search, TOC Scroll-Spy, Admonitions, Syntax Highlighting & Theme Switching.
 */

(function () {
  'use strict';

  // Configuration
  const CONFIG = {
    appName: 'ROUTE Docs',
    githubRepo: 'taligentinc/route-docs', // default GitHub repository
    githubBranch: 'main',
    docsFolder: '', // directory within repo (root)
    defaultDoc: 'index.md',
    structurePath: 'structure.json',
  };

  // State
  const state = {
    tree: [],
    flatDocs: [],
    currentDocPath: '',
    searchIndex: [],
    isSearchOpen: false,
    selectedSearchIndex: 0,
    activeTheme: localStorage.getItem('route_docs_theme') || 'dark',
  };

  // DOM Elements Cache
  const dom = {
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    navTree: document.getElementById('navTree'),
    sidebarFilter: document.getElementById('sidebarFilter'),
    mainContent: document.getElementById('mainContent'),
    breadcrumbs: document.getElementById('breadcrumbs'),
    articleHeader: document.getElementById('articleHeader'),
    articleTitle: document.getElementById('articleTitle'),
    articleMeta: document.getElementById('articleMeta'),
    editGithubBtn: document.getElementById('editGithubBtn'),
    markdownBody: document.getElementById('markdownBody'),
    articleNav: document.getElementById('articleNav'),
    tocList: document.getElementById('tocList'),
    sidebarRight: document.getElementById('sidebarRight'),
    searchBackdrop: document.getElementById('searchBackdrop'),
    searchInput: document.getElementById('searchInput'),
    searchResults: document.getElementById('searchResults'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    openSearchBtns: document.querySelectorAll('.js-open-search'),
    mobileToggleBtn: document.getElementById('mobileToggleBtn'),
    sidebarLeft: document.getElementById('sidebarLeft'),
    sidebarBackdrop: document.getElementById('sidebarBackdrop'),
  };

  // Initialize
  async function init() {
    initTheme();
    initEventListeners();
    await loadDocumentationTree();
    handleRoute();
    buildSearchIndex();
  }

  /* -------------------------------------------------------------------------- */
  /* Theme Management                                                           */
  /* -------------------------------------------------------------------------- */
  function initTheme() {
    applyTheme(state.activeTheme);

    if (dom.themeToggleBtn) {
      dom.themeToggleBtn.addEventListener('click', () => {
        const newTheme = state.activeTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      });
    }
  }

  function applyTheme(theme) {
    state.activeTheme = theme;
    localStorage.setItem('route_docs_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    if (dom.themeIcon) {
      if (theme === 'light') {
        dom.themeIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      } else {
        dom.themeIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      }
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Tree Discovery & Loading                                                   */
  /* -------------------------------------------------------------------------- */
  async function loadDocumentationTree() {
    try {
      // 1. First try to load local structure.json
      const response = await fetch(CONFIG.structurePath, { cache: 'no-cache' });
      if (response.ok) {
        state.tree = await response.json();
      } else {
        throw new Error('Failed to load local structure.json');
      }
    } catch (e) {
      console.warn('Falling back to GitHub Tree API or generated index:', e);
      try {
        const ghUrl = `https://api.github.com/repos/${CONFIG.githubRepo}/git/trees/${CONFIG.githubBranch}?recursive=1`;
        const ghRes = await fetch(ghUrl);
        if (ghRes.ok) {
          const ghData = await ghRes.json();
          state.tree = parseGitHubTree(ghData.tree);
        }
      } catch (ghErr) {
        console.error('Error fetching GitHub tree:', ghErr);
      }
    }

    flattenTree(state.tree);
    renderSidebarTree(state.tree);
  }

  function parseGitHubTree(ghTree) {
    const rootItems = [];
    const dirMap = {};

    const mdFiles = ghTree.filter(
      item => item.type === 'blob' && item.path.endsWith('.md')
    );

    mdFiles.forEach(file => {
      const parts = file.path.split('/');
      // If within docsFolder, strip prefix
      if (parts[0] === CONFIG.docsFolder) {
        parts.shift();
      }

      const fileName = parts.pop();
      const folderPath = parts.join('/');

      const fileItem = {
        type: 'file',
        name: fileName,
        title: formatSlugToTitle(fileName),
        path: parts.length > 0 ? `${folderPath}/${fileName}` : fileName,
      };

      if (parts.length === 0) {
        rootItems.push(fileItem);
      } else {
        const catName = parts[0];
        if (!dirMap[catName]) {
          dirMap[catName] = {
            type: 'category',
            name: catName,
            title: formatSlugToTitle(catName),
            path: catName,
            children: [],
          };
          rootItems.push(dirMap[catName]);
        }
        dirMap[catName].children.push(fileItem);
      }
    });

    return rootItems;
  }

  function flattenTree(items) {
    state.flatDocs = [];
    function traverse(nodes) {
      nodes.forEach(node => {
        if (node.type === 'file') {
          state.flatDocs.push(node);
        } else if (node.type === 'category' && node.children) {
          traverse(node.children);
        }
      });
    }
    traverse(items);
  }

  function formatSlugToTitle(slug) {
    return slug
      .replace(/[-_]+/g, ' ')
      .replace(/\.md$/i, '')
      .replace(/\b\w/g, char => char.toUpperCase())
      .replace(/\bAnd\b/g, '&')
      .replace(/\bApi\b/g, 'API')
      .replace(/\bFaq\b/g, 'FAQ')
      .replace(/\bQr\b/g, 'QR')
      .replace(/\bPdf\b/g, 'PDF')
      .replace(/\bObs\b/g, 'OBS');
  }

  /* -------------------------------------------------------------------------- */
  /* Sidebar Tree Rendering                                                     */
  /* -------------------------------------------------------------------------- */
  function renderSidebarTree(tree) {
    if (!dom.navTree) return;
    dom.navTree.innerHTML = '';

    // Put Overview / index.md at top if present
    const rootIndex = tree.find(i => i.name === 'index.md');
    if (rootIndex) {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="#/${rootIndex.path}" class="pk-nav-link" data-path="${rootIndex.path}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span>${rootIndex.title || 'Documentation Hub'}</span>
        </a>
      `;
      dom.navTree.appendChild(li);
    }

    tree.forEach(item => {
      if (item.name === 'index.md') return;

      if (item.type === 'category') {
        const groupLi = document.createElement('li');
        groupLi.className = 'pk-nav-group';
        groupLi.dataset.group = item.name;

        const headerDiv = document.createElement('div');
        headerDiv.className = 'pk-nav-group-header';
        headerDiv.innerHTML = `
          <div class="pk-group-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <span>${item.title}</span>
          </div>
          <svg class="pk-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        `;

        headerDiv.addEventListener('click', () => {
          groupLi.classList.toggle('collapsed');
        });

        const subList = document.createElement('ul');
        subList.className = 'pk-nav-subitems';

        if (item.children) {
          item.children.forEach(child => {
            if (child.type === 'file') {
              const childLi = document.createElement('li');
              childLi.innerHTML = `
                <a href="#/${child.path}" class="pk-nav-link" data-path="${child.path}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                  <span>${child.title}</span>
                </a>
              `;
              subList.appendChild(childLi);
            }
          });
        }

        groupLi.appendChild(headerDiv);
        groupLi.appendChild(subList);
        dom.navTree.appendChild(groupLi);
      } else if (item.type === 'file') {
        const li = document.createElement('li');
        li.innerHTML = `
          <a href="#/${item.path}" class="pk-nav-link" data-path="${item.path}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            <span>${item.title}</span>
          </a>
        `;
        dom.navTree.appendChild(li);
      }
    });

    highlightActiveNavLink();
  }

  function highlightActiveNavLink() {
    const links = document.querySelectorAll('.pk-nav-link');
    links.forEach(link => {
      const path = link.getAttribute('data-path');
      if (path === state.currentDocPath) {
        link.classList.add('active');
        // Ensure parent group is not collapsed
        const group = link.closest('.pk-nav-group');
        if (group) group.classList.remove('collapsed');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /* Routing & Document Rendering                                               */
  /* -------------------------------------------------------------------------- */
  async function handleRoute() {
    let hash = window.location.hash.replace(/^#\/?/, '').trim();
    let anchor = '';

    if (hash.includes('#')) {
      const parts = hash.split('#');
      hash = parts[0];
      anchor = parts[1];
    }

    if (!hash || hash === '') {
      hash = CONFIG.defaultDoc;
    }

    if (!hash.endsWith('.md')) {
      // Check if matching doc exists
      const match = state.flatDocs.find(
        d => d.path === `${hash}.md` || d.path.replace(/\.md$/, '') === hash
      );
      if (match) hash = match.path;
      else if (!hash.includes('.')) hash = `${hash}.md`;
    }

    state.currentDocPath = hash;
    highlightActiveNavLink();
    closeMobileSidebar();

    await loadAndRenderDoc(hash, anchor);
  }

  async function loadAndRenderDoc(docPath, anchor) {
    dom.markdownBody.innerHTML = `
      <div class="pk-loading-state">
        <div class="pk-spinner"></div>
        <span>Loading document...</span>
      </div>
    `;

    try {
      const response = await fetch(docPath, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Document not found: ${docPath}`);
      }
      const markdown = await response.text();
      renderMarkdown(markdown, docPath, anchor);
    } catch (err) {
      console.error(err);
      dom.markdownBody.innerHTML = `
        <div class="pk-callout pk-callout-danger">
          <div class="pk-callout-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <div class="pk-callout-content">
            <div class="pk-callout-title">Page Not Found</div>
            <p>Could not load documentation file <code>${docPath}</code>. Please choose an article from the sidebar.</p>
          </div>
        </div>
      `;
    }
  }

  function renderMarkdown(rawMarkdown, docPath, anchor) {
    // 1. Extract First Heading for Document Title
    let docTitle = formatSlugToTitle(docPath);
    const titleMatch = rawMarkdown.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      docTitle = titleMatch[1].trim();
    }

    document.title = `${docTitle} | ${CONFIG.appName}`;
    if (dom.articleTitle) dom.articleTitle.textContent = docTitle;

    // 2. Render Breadcrumbs
    renderBreadcrumbs(docPath, docTitle);

    // 3. Render Reading Time & Metadata
    renderMetadata(rawMarkdown, docPath);

    // 4. Configure Marked Parser
    marked.setOptions({
      gfm: true,
      breaks: true,
      headerIds: true,
      mangle: false,
    });

    // Custom renderer for code blocks, tables, headings, and links
    const renderer = new marked.Renderer();

    // Headings with anchor IDs & hover links
    renderer.heading = function (text, level, raw) {
      const slug = raw
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');

      if (level === 1) {
        return `<h1 id="${slug}">${text}</h1>`;
      }
      return `
        <h${level} id="${slug}">
          <span>${text}</span>
          <a class="pk-heading-anchor" href="#/${docPath}#${slug}" aria-label="Direct link to ${raw}">#</a>
        </h${level}>
      `;
    };

    // Table with responsive wrapper
    renderer.table = function (header, body) {
      return `
        <div class="pk-table-wrapper">
          <table>
            <thead>${header}</thead>
            <tbody>${body}</tbody>
          </table>
        </div>
      `;
    };

    // Code blocks with syntax highlighting & 1-click copy
    renderer.code = function (code, lang) {
      const language = (lang || 'text').trim().toLowerCase();

      // Mermaid diagram support
      if (language === 'mermaid') {
        return `<div class="mermaid">${code}</div>`;
      }

      let highlighted = code;
      if (window.Prism && window.Prism.languages[language]) {
        try {
          highlighted = Prism.highlight(code, Prism.languages[language], language);
        } catch (e) {
          highlighted = escapeHtml(code);
        }
      } else {
        highlighted = escapeHtml(code);
      }

      const escapedRawCode = encodeURIComponent(code);

      return `
        <div class="pk-code-block-wrapper">
          <div class="pk-code-header">
            <span>${language}</span>
            <button class="pk-code-copy-btn js-copy-code" data-code="${escapedRawCode}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copy</span>
            </button>
          </div>
          <pre><code class="language-${language}">${highlighted}</code></pre>
        </div>
      `;
    };

    // Links rewriter (Relative markdown links -> SPA hash links)
    renderer.link = function (href, title, text) {
      let targetHref = href;
      let isExternal = false;

      if (href.startsWith('http://') || href.startsWith('https://')) {
        isExternal = true;
      } else if (href.startsWith('file:///')) {
        // Fix file:// links in markdown to relative SPA hashes
        const cleaned = href.replace(/^file:\/\/\/?(docs\.prokeeper\.com\/)?/, '');
        targetHref = `#/${cleaned}`;
      } else if (href.endsWith('.md') || href.includes('.md#')) {
        // Resolve relative paths
        const resolved = resolveRelativePath(docPath, href);
        targetHref = `#/${resolved}`;
      }

      const externalAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${targetHref}" title="${title || ''}"${externalAttr}>${text}</a>`;
    };

    // Transform Markdown with Admonitions / Callouts support
    const transformedMarkdown = processAdmonitions(rawMarkdown);

    // Render HTML
    dom.markdownBody.innerHTML = marked.parse(transformedMarkdown, { renderer });

    // Initialize Mermaid if diagrams exist
    if (window.mermaid && dom.markdownBody.querySelector('.mermaid')) {
      try {
        mermaid.init(undefined, dom.markdownBody.querySelectorAll('.mermaid'));
      } catch (e) {
        console.error('Mermaid render error:', e);
      }
    }

    // Attach copy button listeners
    dom.markdownBody.querySelectorAll('.js-copy-code').forEach(btn => {
      btn.addEventListener('click', () => {
        const rawCode = decodeURIComponent(btn.getAttribute('data-code'));
        navigator.clipboard.writeText(rawCode).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span style="color: #10b981;">Copied!</span>
          `;
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2000);
        });
      });
    });

    // Build Table of Contents & Scroll-Spy
    buildTableOfContents();

    // Render Prev / Next Navigation Cards
    renderArticlePagination(docPath);

    // Handle Anchor Scroll
    if (anchor) {
      setTimeout(() => {
        const targetEl = document.getElementById(anchor);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Admonition / Callout Processing                                            */
  /* -------------------------------------------------------------------------- */
  function processAdmonitions(markdown) {
    // 1. GitHub style: > [!NOTE], > [!TIP], > [!WARNING], > [!IMPORTANT], > [!CAUTION]
    const alertRegex = />\s*\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION|INFO|DANGER)\]\s*\n((?:>.*(?:\n|$))*)/gi;

    let processed = markdown.replace(alertRegex, (match, type, content) => {
      const alertType = type.toLowerCase();
      const cleanedContent = content
        .split('\n')
        .map(line => line.replace(/^>\s?/, ''))
        .join('\n')
        .trim();

      const title = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
      const icon = getAdmonitionIcon(alertType);

      return `\n<div class="pk-callout pk-callout-${alertType}">
        <div class="pk-callout-icon">${icon}</div>
        <div class="pk-callout-content">
          <div class="pk-callout-title">${title}</div>
          ${cleanedContent}
        </div>
      </div>\n`;
    });

    // 2. Docusaurus/MkDocs style: :::note, :::tip, :::warning, :::danger
    const blockRegex = /:::(note|tip|warning|danger|caution|info)\s*([^\n]*)\n([\s\S]*?):::/gi;
    processed = processed.replace(blockRegex, (match, type, customTitle, content) => {
      const alertType = type.toLowerCase();
      const title = customTitle.trim() || type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
      const icon = getAdmonitionIcon(alertType);

      return `\n<div class="pk-callout pk-callout-${alertType}">
        <div class="pk-callout-icon">${icon}</div>
        <div class="pk-callout-content">
          <div class="pk-callout-title">${title}</div>
          ${content.trim()}
        </div>
      </div>\n`;
    });

    return processed;
  }

  function getAdmonitionIcon(type) {
    switch (type) {
      case 'tip':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v1"></path><path d="M12 21v1"></path><path d="M4.93 4.93l.7.7"></path><path d="M18.36 18.36l.7.7"></path><path d="M2 12h1"></path><path d="M21 12h1"></path><path d="M4.93 19.07l.7-.7"></path><path d="M18.36 5.64l.7-.7"></path><circle cx="12" cy="12" r="5"></circle></svg>`;
      case 'warning':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
      case 'caution':
      case 'danger':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
      case 'important':
      case 'info':
      case 'note':
      default:
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Breadcrumbs, Metadata & Pagination                                         */
  /* -------------------------------------------------------------------------- */
  function renderBreadcrumbs(docPath, docTitle) {
    if (!dom.breadcrumbs) return;

    const parts = docPath.split('/');
    let html = `
      <a href="#/index.md" title="Home">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
      </a>
    `;

    if (parts.length > 1) {
      const category = parts[0];
      html += `
        <span class="pk-breadcrumbs-separator">/</span>
        <span>${formatSlugToTitle(category)}</span>
      `;
    }

    html += `
      <span class="pk-breadcrumbs-separator">/</span>
      <span style="color: var(--pk-text-primary); font-weight: 500;">${docTitle}</span>
    `;

    dom.breadcrumbs.innerHTML = html;
  }

  function renderMetadata(markdown, docPath) {
    const words = markdown.trim().split(/\s+/).length;
    const readMinutes = Math.max(1, Math.ceil(words / 200));

    if (dom.articleMeta) {
      dom.articleMeta.innerHTML = `
        <div class="pk-article-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>${readMinutes} min read</span>
        </div>
        <div class="pk-article-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z"></path></svg>
          <span>${words} words</span>
        </div>
      `;
    }

    if (dom.editGithubBtn) {
      const prefix = CONFIG.docsFolder ? `${CONFIG.docsFolder}/` : '';
      const githubEditUrl = `https://github.com/${CONFIG.githubRepo}/edit/${CONFIG.githubBranch}/${prefix}${docPath}`;
      dom.editGithubBtn.setAttribute('href', githubEditUrl);
    }
  }

  function renderArticlePagination(currentPath) {
    if (!dom.articleNav) return;

    const currentIndex = state.flatDocs.findIndex(d => d.path === currentPath);
    if (currentIndex === -1) {
      dom.articleNav.innerHTML = '';
      return;
    }

    const prevDoc = currentIndex > 0 ? state.flatDocs[currentIndex - 1] : null;
    const nextDoc = currentIndex < state.flatDocs.length - 1 ? state.flatDocs[currentIndex + 1] : null;

    let html = '';

    if (prevDoc) {
      html += `
        <a href="#/${prevDoc.path}" class="pk-nav-card prev">
          <span class="pk-nav-card-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Previous
          </span>
          <span class="pk-nav-card-title">${prevDoc.title}</span>
        </a>
      `;
    } else {
      html += `<div></div>`;
    }

    if (nextDoc) {
      html += `
        <a href="#/${nextDoc.path}" class="pk-nav-card next">
          <span class="pk-nav-card-label">
            Next
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </span>
          <span class="pk-nav-card-title">${nextDoc.title}</span>
        </a>
      `;
    } else {
      html += `<div></div>`;
    }

    dom.articleNav.innerHTML = html;
  }

  /* -------------------------------------------------------------------------- */
  /* Right-Hand Table of Contents & Scroll-Spy                                  */
  /* -------------------------------------------------------------------------- */
  function buildTableOfContents() {
    if (!dom.tocList) return;
    dom.tocList.innerHTML = '';

    const headings = dom.markdownBody.querySelectorAll('h2, h3');
    if (headings.length === 0) {
      if (dom.sidebarRight) dom.sidebarRight.style.display = 'none';
      return;
    }

    if (dom.sidebarRight) dom.sidebarRight.style.display = 'flex';

    headings.forEach(h => {
      const id = h.getAttribute('id');
      const text = h.innerText.replace(/^#\s*/, '').replace(/#$/, '').trim();
      const level = h.tagName.toLowerCase();

      const li = document.createElement('li');
      li.innerHTML = `
        <a href="#/${state.currentDocPath}#${id}" class="pk-toc-link pk-toc-${level}" data-target="${id}">
          ${text}
        </a>
      `;
      dom.tocList.appendChild(li);
    });

    initScrollSpy();
  }

  function initScrollSpy() {
    const headings = dom.markdownBody.querySelectorAll('h2, h3');
    const tocLinks = dom.tocList.querySelectorAll('.pk-toc-link');

    if (window.pkScrollObserver) {
      window.pkScrollObserver.disconnect();
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            tocLinks.forEach(link => {
              if (link.getAttribute('data-target') === id) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    headings.forEach(h => observer.observe(h));
    window.pkScrollObserver = observer;
  }

  /* -------------------------------------------------------------------------- */
  /* Client-Side Search Engine                                                  */
  /* -------------------------------------------------------------------------- */
  async function buildSearchIndex() {
    state.searchIndex = [];

    for (const doc of state.flatDocs) {
      try {
        const res = await fetch(doc.path, { cache: 'no-cache' });
        if (res.ok) {
          const content = await res.text();
          state.searchIndex.push({
            path: doc.path,
            title: doc.title,
            category: doc.path.includes('/') ? formatSlugToTitle(doc.path.split('/')[0]) : 'General',
            content: content.replace(/[#*`_~[\]()]/g, ' '),
            raw: content,
          });
        }
      } catch (e) {
        // ignore
      }
    }
  }

  function handleSearch(query) {
    if (!query || query.trim() === '') {
      dom.searchResults.innerHTML = `
        <div class="pk-search-empty">
          <p>Type keywords to search documentation...</p>
        </div>
      `;
      return;
    }

    const q = query.toLowerCase().trim();
    const results = [];

    state.searchIndex.forEach(item => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const contentIndex = item.content.toLowerCase().indexOf(q);

      if (titleMatch || contentIndex !== -1) {
        let snippet = '';
        if (contentIndex !== -1) {
          const start = Math.max(0, contentIndex - 40);
          const end = Math.min(item.content.length, contentIndex + 90);
          snippet = item.content.substring(start, end).trim();
          if (start > 0) snippet = '...' + snippet;
          if (end < item.content.length) snippet += '...';
          // Highlight match
          const regex = new RegExp(`(${escapeRegex(q)})`, 'gi');
          snippet = snippet.replace(regex, '<mark>$1</mark>');
        } else {
          snippet = item.content.substring(0, 100) + '...';
        }

        results.push({
          item,
          score: titleMatch ? 2 : 1,
          snippet,
        });
      }
    });

    results.sort((a, b) => b.score - a.score);

    if (results.length === 0) {
      dom.searchResults.innerHTML = `
        <div class="pk-search-empty">
          <p>No documentation found for "<strong>${escapeHtml(query)}</strong>"</p>
        </div>
      `;
      return;
    }

    state.selectedSearchIndex = 0;
    dom.searchResults.innerHTML = results
      .map(
        (r, idx) => `
        <div class="pk-search-item ${idx === 0 ? 'selected' : ''}" data-path="${r.item.path}">
          <div class="pk-search-item-top">
            <span class="pk-search-item-title">${escapeHtml(r.item.title)}</span>
            <span class="pk-search-item-category">${escapeHtml(r.item.category)}</span>
          </div>
          <div class="pk-search-item-snippet">${r.snippet}</div>
        </div>
      `
      )
      .join('');

    // Click listeners on search items
    dom.searchResults.querySelectorAll('.pk-search-item').forEach(item => {
      item.addEventListener('click', () => {
        const path = item.getAttribute('data-path');
        window.location.hash = `#/${path}`;
        closeSearch();
      });
    });
  }

  function openSearch() {
    state.isSearchOpen = true;
    if (dom.searchBackdrop) dom.searchBackdrop.classList.add('open');
    if (dom.searchInput) {
      dom.searchInput.value = '';
      dom.searchInput.focus();
      handleSearch('');
    }
  }

  function closeSearch() {
    state.isSearchOpen = false;
    if (dom.searchBackdrop) dom.searchBackdrop.classList.remove('open');
  }

  /* -------------------------------------------------------------------------- */
  /* Event Listeners & Keyboard Shortcuts                                       */
  /* -------------------------------------------------------------------------- */
  function initEventListeners() {
    window.addEventListener('hashchange', handleRoute);

    // Search Open Triggers
    dom.openSearchBtns.forEach(btn => btn.addEventListener('click', openSearch));

    if (dom.searchBackdrop) {
      dom.searchBackdrop.addEventListener('click', e => {
        if (e.target === dom.searchBackdrop) closeSearch();
      });
    }

    if (dom.searchClearBtn) {
      dom.searchClearBtn.addEventListener('click', () => {
        dom.searchInput.value = '';
        dom.searchInput.focus();
        handleSearch('');
      });
    }

    if (dom.searchInput) {
      dom.searchInput.addEventListener('input', e => {
        handleSearch(e.target.value);
      });

      dom.searchInput.addEventListener('keydown', e => {
        const items = dom.searchResults.querySelectorAll('.pk-search-item');
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          state.selectedSearchIndex = (state.selectedSearchIndex + 1) % items.length;
          updateSearchSelection(items);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          state.selectedSearchIndex = (state.selectedSearchIndex - 1 + items.length) % items.length;
          updateSearchSelection(items);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (items[state.selectedSearchIndex]) {
            items[state.selectedSearchIndex].click();
          }
        }
      });
    }

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', e => {
      // ⌘K or Ctrl+K or / to search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        state.isSearchOpen ? closeSearch() : openSearch();
      } else if (e.key === '/' && !isInputActive()) {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape') {
        if (state.isSearchOpen) closeSearch();
        closeMobileSidebar();
      }
    });

    // Sidebar Filter Input
    if (dom.sidebarFilter) {
      dom.sidebarFilter.addEventListener('input', e => {
        const query = e.target.value.toLowerCase().trim();
        const links = dom.navTree.querySelectorAll('.pk-nav-link');
        const groups = dom.navTree.querySelectorAll('.pk-nav-group');

        links.forEach(link => {
          const text = link.innerText.toLowerCase();
          const match = text.includes(query);
          link.parentElement.style.display = match ? 'block' : 'none';
        });

        groups.forEach(group => {
          const visibleLinks = group.querySelectorAll('.pk-nav-subitems li:not([style*="display: none"])');
          if (query && visibleLinks.length > 0) {
            group.classList.remove('collapsed');
            group.style.display = 'block';
          } else if (query && visibleLinks.length === 0) {
            group.style.display = 'none';
          } else {
            group.style.display = 'block';
          }
        });
      });
    }

    // Mobile Sidebar Drawer
    if (dom.mobileToggleBtn) {
      dom.mobileToggleBtn.addEventListener('click', toggleMobileSidebar);
    }
    if (dom.sidebarBackdrop) {
      dom.sidebarBackdrop.addEventListener('click', closeMobileSidebar);
    }
  }

  function updateSearchSelection(items) {
    items.forEach((item, idx) => {
      if (idx === state.selectedSearchIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  function toggleMobileSidebar() {
    if (dom.sidebarLeft) dom.sidebarLeft.classList.toggle('open');
    if (dom.sidebarBackdrop) dom.sidebarBackdrop.classList.toggle('open');
  }

  function closeMobileSidebar() {
    if (dom.sidebarLeft) dom.sidebarLeft.classList.remove('open');
    if (dom.sidebarBackdrop) dom.sidebarBackdrop.classList.remove('open');
  }

  /* -------------------------------------------------------------------------- */
  /* Helper Utilities                                                           */
  /* -------------------------------------------------------------------------- */
  function resolveRelativePath(basePath, relativePath) {
    const baseDir = basePath.includes('/') ? basePath.substring(0, basePath.lastIndexOf('/')) : '';
    const parts = (baseDir ? baseDir + '/' + relativePath : relativePath).split('/');
    const resolved = [];

    for (const part of parts) {
      if (part === '.' || part === '') continue;
      if (part === '..') {
        if (resolved.length > 0) resolved.pop();
      } else {
        resolved.push(part);
      }
    }
    return resolved.join('/');
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function isInputActive() {
    const activeEl = document.activeElement;
    return (
      activeEl &&
      (activeEl.tagName === 'INPUT' ||
        activeEl.tagName === 'TEXTAREA' ||
        activeEl.isContentEditable)
    );
  }

  // Kickoff on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
