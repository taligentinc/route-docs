# CLI Commands, Cron Jobs & Background Tasks

RouteApp includes built-in Artisan CLI commands and scheduled tasks (`app/Console/Commands`) that automate geocoding, search indexing, log pruning, and Saturday visitation reminders.

---

## 🛠️ Built-in Artisan Commands

### 1. `php artisan geocode:stops`
- **Class**: `App\Console\Commands\GeocodeStopsCommand`
- **Purpose**: Scans the database for newly added stops or addresses lacking geographic coordinates and resolves them in batch using the geocoding service.
- **Usage**:
  ```bash
  php artisan geocode:stops
  php artisan geocode:stops --force # Re-geocodes existing coordinates
  ```

---

### 2. `php artisan visits:send-unmarked-reminders`
- **Class**: `App\Console\Commands\SendUnmarkedVisitsRemindersCommand`
- **Purpose**: Executed on Saturday afternoons. Scans for bus captains who have assigned households that have not yet been marked with a visit outcome, sending an SMS/Email reminder to complete their visitation log before Sunday.
- **Usage**:
  ```bash
  php artisan visits:send-unmarked-reminders
  ```

---

### 3. `php artisan telephony:link-route-phone`
- **Class**: `App\Console\Commands\LinkRoutePhoneCommand`
- **Purpose**: Binds purchased phone numbers from AWS End User Messaging or Twilio pools to designated route IDs.
- **Usage**:
  ```bash
  php artisan telephony:link-route-phone --number="+15552345678" --route=3
  ```

---

### 4. `php artisan audit-logs:prune`
- **Class**: `App\Console\Commands\PruneAuditLogs`
- **Purpose**: Cleanses expired security audit logs past the church's configured retention window (default: 365 days).
- **Usage**:
  ```bash
  php artisan audit-logs:prune --days=365
  ```

---

### 5. `php artisan elasticsearch:status`
- **Class**: `App\Console\Commands\ElasticsearchStatusCommand`
- **Purpose**: Verifies Elasticsearch cluster health, index mappings, and document sync counts for church directories.
- **Usage**:
  ```bash
  php artisan elasticsearch:status
  ```

---

## ⏰ Production Cron Schedule (`routes/console.php`)

In production environments, the standard Laravel scheduler runs every minute:
```
* * * * * cd /path-to-app && php artisan schedule:run >> /dev/null 2>&1
```

### Scheduled Frequency:
- **Every 5 Minutes**: `geocode:stops` (auto-geocodes incoming public signups)
- **Every Saturday at 2:00 PM**: `visits:send-unmarked-reminders`
- **Every Sunday at 6:00 AM**: Pre-service cache warming and manifest compilation
- **Daily at Midnight**: `audit-logs:prune`
