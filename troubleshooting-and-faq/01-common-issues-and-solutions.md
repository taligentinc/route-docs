# Common Issues & Troubleshooting Solutions

This guide provides immediate solutions to common operational and technical issues encountered while using RouteApp in the field.

---

## 📍 GPS & Map Location Issues

### Issue: "Location not updating" or "My blue dot is inaccurate"
- **Cause**: Location permissions set to "Never" or device power-saving mode restricting GPS polling.
- **Solution**:
  1. **iOS**: Go to *Settings* > *Privacy & Security* > *Location Services* > *Safari* (or *RouteApp*) ➔ Select **"While Using the App"** and ensure **"Precise Location"** is toggled **ON**.
  2. **Android**: Go to *Settings* > *Apps* > *RouteApp / Chrome* > *Permissions* > *Location* ➔ Select **"Allow only while using the app"** and enable **"Use precise location"**.
  3. Disable "Low Power Mode" or "Battery Saver" which caps GPS polling intervals to 60+ seconds.

---

## 🎙️ Audio & In-App Call Softphone Issues

### Issue: "Cannot hear caller" or "Microphone permission denied"
- **Cause**: Browser blocked audio input or output permissions.
- **Solution**:
  1. Look at your browser address bar: tap the lock or sliders icon next to the URL.
  2. Ensure **Microphone** and **Sound / Audio** permissions are set to **"Allow"**.
  3. Refresh the page.
  4. In `/settings/profile`, test your microphone level in the audio settings preview.

---

## 💬 SMS & Messaging Issues

### Issue: "Parent didn't receive my text"
- **Cause**: Invalid phone number format, carrier 10DLC filtering, or parent previously replied `STOP`.
- **Solution**:
  1. Check the Stop details to ensure the parent phone number is formatted with 10 digits (US/Canada).
  2. Verify if the parent previously replied `STOP`. If so, carrier law prohibits sending messages until the parent texts `START` or `UNSUBSCRIBE` to your route phone number.
  3. Verify in `/settings/system` that your church's 10DLC brand registration is active.

---

## 🔄 Livewire & UI Reactivity Issues

### Issue: "A button click doesn't update the screen or shows a loading spinner indefinitely"
- **Cause**: Transient cellular dropout or expired session token.
- **Solution**:
  1. Swipe down to refresh the page or tap the RouteApp logo in the top bar.
  2. If the issue persists, log out and sign back in to refresh your CSRF authentication token.
