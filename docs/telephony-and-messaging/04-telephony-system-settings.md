# Telephony System Settings & 10DLC Compliance

The **Telephony Settings** portal (`/settings/system` / `TelephonySettings`) provides administrators with complete control over phone number pools, AWS End User Messaging integration, call routing logic, and carrier 10DLC compliance.

---

## ⚙️ Configuration Panels

### 1. Phone Number Provisioning & Pool
- **Search & Purchase**: Search available local area codes and purchase dedicated phone numbers.
- **Route Number Mapping**: Bind individual phone numbers to specific bus routes, outreach departments, or pastoral lines.
- **Caller ID Display Name**: Configure the alphanumeric CNAM display name (e.g. *"FAITH BAPTIST"*).

### 2. 10DLC Campaign & Carrier Registration
Under US telecommunications regulations (A2P 10DLC), all organizations sending automated or business SMS messages must register:
- **Brand Details**: Legal church entity name, EIN/tax ID, physical address, and contact details.
- **Campaign Use Case**: Standard *Charity / Religious Ministry* use case.
- **Opt-In / Opt-Out Disclosures**: Auto-configured compliance keywords (`STOP`, `UNSUBSCRIBE`, `HELP`) and privacy policy links.

### 3. Call Routing & Ring Stages
Configure what happens when someone calls a route number:
- **Stage 1**: Ring assigned Route Captains (WebRTC / Mobile App) for `X` seconds.
- **Stage 2**: Cascade to Co-Captains / Bus Director.
- **Stage 3**: Forward to Church Office Landline or route to custom Voicemail Box.

### 4. Telephony Webhooks
RouteApp handles real-time carrier webhooks at:
- `POST /webhooks/telephony/sms` (Inbound SMS events)
- `POST /webhooks/telephony/voice/inbound` (Incoming voice call routing)
- `POST /webhooks/telephony/voice/status` (Call duration, disconnect, and recording callbacks)
