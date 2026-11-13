# Local Development Setup Guide

This guide walks developers through setting up a complete RouteApp local development environment.

---

## 💻 Prerequisites

Ensure you have the following installed on your development machine:
- **PHP 8.5+** with extensions: `pdo_pgsql`, `pdo_mysql`, `redis`, `gd`, `intl`, `bcmath`, `curl`, `mbstring`
- **Composer 2.7+**
- **Node.js 20+** & **NPM 10+**
- **Docker & Docker Compose** (for local PostgreSQL, Redis, and Elasticsearch)

---

## 🚀 Quick Setup Instructions

### 1. Clone Repository & Install Dependencies
```bash
git clone https://github.com/your-org/routeapp.git
cd routeapp

# Install PHP dependencies
composer install

# Install JavaScript dependencies
npm install
```

### 2. Configure Environment Files
```bash
cp .env.example .env
php artisan key:generate
```

### 3. Spin Up Local Docker Infrastructure
```bash
docker-compose -f docker-compose.app.yml up -d
```

### 4. Run Database Migrations & Seeds
```bash
php artisan migrate --seed
```

### 5. Launch Development Servers
In separate terminal windows:
```bash
# Terminal 1: PHP Web Server
php artisan serve

# Terminal 2: Vite Asset Bundler
npm run dev

# Terminal 3: Queue Worker
php artisan queue:listen
```

Access the local application at `http://localhost:8000` or configured local subdomains (e.g. `http://demo.localhost:8000`).
