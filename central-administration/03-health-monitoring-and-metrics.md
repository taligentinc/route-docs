# System Health & Prometheus Metrics Endpoints

RouteApp provides native health check and telemetry scraping endpoints designed for uptime monitoring tools (Uptime Kuma, Pingdom, BetterStack) and metrics collectors (Prometheus, Grafana).

---

## 🩺 Health Check Endpoints

### 1. Simple Health Probe (`/health` & `/api/health`)
- **HTTP Method**: `GET`
- **Authentication**: Public (Rate-limited: 60 req/min)
- **Response Format**: `JSON`

```json
{
  "status": "healthy",
  "database": "connected",
  "redis": "connected",
  "storage": "writable",
  "timestamp": "2026-10-06T19:15:00Z"
}
```

- **HTTP 200 OK**: All subsystems (Database, Cache/Redis, File Storage) are operating normally.
- **HTTP 503 Service Unavailable**: A critical subsystem is degraded.

---

## 📊 Prometheus & Metrics Endpoints

### 2. Prometheus Scrape Target (`/prometheus` & `/metrics`)
- **HTTP Method**: `GET`
- **Output Format**: Standard Prometheus text exposition format

#### Exported Metrics Include:
- `routeapp_active_tenants_total`: Total provisioned church workspaces
- `routeapp_active_routes_total`: Total active bus routes in operation
- `routeapp_riders_total`: Total registered riders across the platform
- `routeapp_active_checkins_total`: Real-time active bus workers logged in
- `routeapp_sms_sent_total`: Volume of SMS messages dispatched
- `routeapp_http_requests_total`: Total inbound HTTP requests categorized by status code
- `routeapp_queue_jobs_pending`: Real-time queue latency and pending background jobs
