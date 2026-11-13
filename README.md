# ROUTE Docs Engine

A lightweight, high-performance static documentation service engine hosted on GitHub Pages. Modeled after the **Cue Central** and **ProKeeper Docs Engine** and inspired by the aesthetics of **Authentik** and **Home Assistant** documentation hubs.

---

## 🌟 Key Features

* **Zero-Build Markdown Engine**: Serves raw `.md` files directly on GitHub Pages with instant client-side rendering via Marked.js.
* **Dynamic Folder Hierarchy**: Create any nested folder or `.md` file, and the sidebar automatically reflects your structure via `structure.json`.
* **Instant Keyboard Search (`⌘K` / `Ctrl+K`)**: Tokenized client-side full-text search across all documents with matched snippet highlights.
* **Route Sky Blue & Deep Navy Styling**: Modern dark & light modes with signature RouteApp Sky Blue (`#7BAFD4`) and Deep Navy (`#13294B`) palette.
* **Rich Callouts (Admonitions)**: Support for GitHub-style `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!IMPORTANT]`, `> [!CAUTION]`, and `:::note` blocks.
* **Syntax Highlighting & 1-Click Copy**: Powered by Prism.js with language badges and copy-to-clipboard functionality.
* **Mermaid.js Diagram Support**: Real-time rendering of architecture, entity relationships, and bus route operational workflows.
* **On This Page (Scroll-Spy)**: Dynamic right-side Table of Contents tracking heading visibility as you scroll.
* **Smart Link Interceptor**: Relative markdown links navigate within the SPA without full-page reloads.

---

## 📁 How It Discovers Your Markdown Files

The engine reads `structure.json` to render the sidebar navigation hierarchy.

### Adding New Documentation:
1. Create a new folder or drop `.md` files into any existing folder.
2. Run the generator script:
   ```bash
   node generate-structure.js
   ```
   *(Or let the included GitHub Action automatically update it on every `git push`)*.

---

## 🚀 Local Development

To run and preview the docs locally:

```bash
# Start a local static web server
npm start
# Opens http://localhost:8080
```
