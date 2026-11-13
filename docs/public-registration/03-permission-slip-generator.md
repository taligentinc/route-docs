# Standalone Permission Slip Generator & Document Vault

For physical events, summer camps, VBS, or when paper forms are preferred, RouteApp provides a standalone **Permission Slip Generator** (`/permission-slip`) and a secure scanned attachment vault.

---

## 🖨️ Standalone Printable Permission Slip Generator (`/permission-slip`)

Accessible directly at `/permission-slip`:
1. Church workers or parents can generate a customized, pre-filled printable permission slip form.
2. Select church name, bus route, emergency contact info, and activity date.
3. Tap **Generate Printable PDF**.
4. Print physical copies for Saturday door-to-door distribution.

---

## 📎 Uploading Scanned Physical Permission Slips

When parents sign a physical paper slip at the door:
1. Open the Stop Detail (`/stops/{id}`) or Rider record.
2. Click **+ Attach Scanned Document**.
3. Snap a photo of the signed paper form using your phone's camera, or upload a PDF.
4. RouteApp attaches the file directly to the rider record.

---

## 🔒 Viewing & Downloading Stored Permission Slips

Authorized staff can inspect signed documents at any time:
- **View in Browser**: `/permission-slips/{permissionSlip}/view`
- **Download Original**: `/permission-slips/{permissionSlip}/download`

All permission slip files are secured behind strict tenant authorization middleware and cannot be accessed by unauthorized external parties.
