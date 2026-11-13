# Audit Logs & Security Compliance

The **Audit Logs** portal (`/audit-logs`) provides administrators with an immutable, searchable record of all administrative, security, and operational actions performed within the church workspace.

---

## 🔍 Logged Events & Activity Types

RouteApp automatically records structured audit events across:
- **Authentication**: Successful logins, failed login attempts, password changes, passkey enrollments, and 2FA challenges.
- **Rider & Household Changes**: Creating, editing, archiving, or deleting stops, riders, guardians, and medical tags.
- **Attendance Modifications**: Manual adjustments or retroactive overrides to attendance logs.
- **DVIR & Fleet Events**: DVIR report submissions, defect reporting, and mechanic repair certifications.
- **Role & Permission Changes**: Elevating user permissions, changing assigned routes, or disabling accounts.
- **Bulk Exports**: Downloading `.route` packages, CSV rosters, or customer contact sheets.

---

## 📊 Audit Log Detail & Forensics

Each log entry includes:
- **Timestamp (UTC & Local)**
- **Acting User**: Name, email, and user ID
- **Action Type & Description**: (e.g. *"Updated medical notes on Rider #1042"*)
- **IP Address & Geolocation**: Originating client IP
- **Device & Browser User Agent**: (e.g. *"Safari 17 on iPhone / iOS 17.4"*)
- **Diff / Payload**: Visual side-by-side before and after changes.
