# Web Share Target API & Map Sharing

RouteApp supports the W3C **Web Share Target API** (`/share` & `/share-target`), allowing workers using native Apple Maps, Google Maps, WhatsApp, or mobile browsers to share addresses, dropped pins, or business locations directly into RouteApp with a single tap.

---

## 📲 How to Share an Address from Apple/Google Maps

When you are driving through a neighborhood and spot a home or church visitor:
1. Open **Apple Maps** or **Google Maps**.
2. Tap the address or drop a pin on a house.
3. Tap the native **Share** button in Apple/Google Maps.
4. Select **RouteApp** from your phone's list of apps.
5. RouteApp opens directly to the **Share Target Modal (`/share`)** with the address, latitude, longitude, and place title pre-populated.

---

## ⚡ Ingesting Shared Data

Once RouteApp opens the shared data:
1. **Choose Action**:
   - **➕ Create New Bus Stop**: Creates a stop on the nearest bus route.
   - **🎯 Create Soulwinning Prospect**: Saves as an outreach lead for Saturday visitation.
   - **🔍 Run Address Lookup**: Discovers existing riders or notes for that address.
2. Select Route or District.
3. Tap **Confirm & Save**.
4. The record is instantly written to the database without manual address typing.
