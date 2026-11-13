# Workspace Access & Login

RouteApp is a multi-tenant platform where each church or ministry operates within an isolated workspace.

---

## Accessing Your Workspace

### 1. Direct Workspace Subdomain (Recommended)
Every church has a dedicated subdomain:
```
https://<church-slug>.routeapp.org
```
*Example: `https://faithbaptist.routeapp.org`*

Visiting your direct subdomain automatically scopes all authentication, routes, data, and telephony to your church.

### 2. Central Workspace Finder (`/workspace`)
If you do not know your church's subdomain:
1. Open [https://app.routeapp.org/workspace](https://app.routeapp.org/workspace).
2. Enter your **Workspace Slug** or **Church Name / City**.
3. Tap **Find Workspace**.
4. The system will locate your church tenant and redirect you to your dedicated login portal.

---

## The Login Flow

1. **Email & Password**: Enter your registered email address and password.
2. **Remember Me**: Check "Remember this device" to maintain your session for up to 30 days.
3. **Single Sign-On (SSO)**: Tap **Continue with Google**, **Microsoft / Azure**, or **Apple** if your church has enabled social authentication.
4. **Passkey / Biometric**: If you have enrolled Touch ID, Face ID, or Windows Hello, tap **Sign in with Passkey** for instant 1-tap passwordless entry.

---

## First-Time Login & Password Reset

### Mandatory Initial Password Change
When a church administrator creates a new worker account with a temporary password:
1. Upon your first successful authentication, you will automatically be routed to `/change-password`.
2. Enter a new, secure password (minimum 8 characters, containing uppercase, lowercase, numbers, and symbols).
3. Confirm your new password.
4. Once updated, you will immediately land on your assigned **My Route** dashboard.

### Forgot Password Workflow
1. On the login screen, click **Forgot your password?**.
2. Enter your registered email address.
3. A secure, time-limited reset link will be sent to your inbox.
4. Click the link to set your new password.

---

## Session Security & Active Devices

RouteApp tracks active sessions per device. If you log in from a shared church computer or mobile tablet, always click your user profile menu in the top right and select **Log Out** when finished.
