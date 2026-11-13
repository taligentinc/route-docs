# System Telephony & Tenant Settings

The **System Settings** page (`/settings/system`) contains church-wide operational preferences, messaging defaults, AWS cloud credentials, and feature flags.

---

## ⚙️ Tenant Configuration Preferences

### 1. General Church Profile
- **Church Legal Name & Logo**: Displayed on public registration pages and PDF manifests.
- **Church Timezone**: Ensures attendance logs and scheduled messages fire accurately.
- **Physical Address & Coordinates**: Used as the default depot origin and return point for TSP route optimization.

### 2. Public Registration Settings
- **Enable Public Signup Portal (`/ride`)**: Toggle on or off.
- **Require Digital E-Signature**: Enforce mandatory waiver signing before approval.
- **Custom Waiver Terms**: Edit the legal agreement text, liability waiver terms, and medical consent wording.
- **Auto-Routing Strategy**: Enable automatic stop suggestion based on territory polygons.

### 3. Messaging Defaults & Quiet Hours
- **Default SMS Greeting**: Custom welcome text sent to newly registered families.
- **Automated Quiet Hours**: Prevent bulk outreach SMS from sending late at night (e.g. restrict sending between 9:00 PM and 8:00 AM).
- **Opt-Out Handling**: Custom response text sent when a parent replies `STOP`.
