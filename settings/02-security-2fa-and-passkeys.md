# Security Settings, 2FA & Passkey Management

The **Security Settings** page (`/settings/security`) is the personal security control center for managing passwords, enrolling biometric Passkeys, configuring 2FA, and terminating remote active sessions.

---

## 🔐 Password Management
- **Current Password Confirmation**: For safety, sensitive actions require verifying your current password.
- **Update Password**: Set a new, strong password adhering to church complexity policies.

---

## 🔑 Registered Passkeys & Biometrics

Manage all FIDO2 / WebAuthn devices enrolled to your account:
- **Device List**: Shows device name (e.g., *"John's iPhone 14 Pro"*, *"Church Laptop"*), enrollment date, and last used timestamp.
- **+ Register New Passkey**: Enroll a new phone, laptop, or YubiKey hardware token.
- **Revoke Passkey**: Delete lost or retired devices with one click.

---

## 🛡️ Two-Factor Authentication (TOTP)
- **Status Indicator**: Enabled / Disabled
- **Regenerate Recovery Codes**: Generate a fresh set of emergency one-time recovery codes if previous codes were used or misplaced.

---

## 📱 Active Login Sessions & Devices

Review all active browser sessions currently signed into your account:
- **Device & Browser**: Chrome on Mac, Safari on iOS, etc.
- **IP Address & Location**: Approximate city/region of the connection.
- **Last Active**: Timestamp of most recent request.
- **Log Out Other Browser Sessions**: Immediately invalidate all sessions on other devices if you suspect an unauthorized login.
