# Digital Permission Slips & E-Signatures

RouteApp includes an integrated, legally binding digital signature workflow (`/ride/sign/{registration}`) to collect parental consent, medical authorization, and liability waivers without requiring paper printing.

---

## ✍️ The Embedded E-Sign Signing Experience

When a parent completes the registration form or opens an SMS signing link:
1. They land on `/ride/sign/{registration}`.
2. The legal authorization terms are displayed clearly:
   - Transportation consent to and from church services and activities
   - Emergency medical treatment authorization in the event of an accident
   - Photo/media release permissions (if enabled)
3. **HTML5 Digital Canvas Pad**:
   - The parent draws their signature smoothly using their finger, stylus, or mouse.
   - Includes a **Clear** button to re-draw if needed.
4. **Printed Name & Date**: The parent types their full legal name, confirming their signature.
5. Tap **I Agree & Sign Slip**.

---

## 🛡️ Legal Compliance & Cryptographic Timestamps

When a signature is completed:
- The base64 vector signature image is saved directly into the database.
- A cryptographic metadata record is appended containing:
  - Signer IP Address
  - Signer User Agent (Device, Browser, OS)
  - UTC Timestamp of submission
  - Full text of the waiver version agreed to
- The registration transitions to `Signed` status and unlocks immediate route assignment.

---

## 📲 Direct SMS Re-Signing Links

If a child has been riding without an updated annual permission slip:
1. Open the Stop or Rider detail screen.
2. Click **Request E-Signature**.
3. RouteApp sends a personalized SMS containing a secure 1-click URL directly to the parent's phone.
4. Once the parent signs, the badge on the bus captain's dashboard turns green automatically.
