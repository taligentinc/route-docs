# REST, Tracking & Device Registration APIs

RouteApp exposes REST API endpoints for native mobile client sync, background location tracking, device push tokens, and external share extensions.

---

## 📡 Location Tracking Endpoints

### 1. Update Worker / Vehicle GPS Location
- **Endpoint**: `POST /api/tracking/location`
- **Authentication**: Bearer Token or Session Cookie
- **Payload**:
```json
{
  "latitude": 39.7817,
  "longitude": -89.6501,
  "accuracy": 4.5,
  "speed": 12.3,
  "heading": 180.0,
  "vehicle_id": 4,
  "route_id": 2
}
```
- **Response**: `200 OK` with `{ "success": true }`

---

### 2. Get Active Checked-In Workers
- **Endpoint**: `GET /api/tracking/active`
- **Description**: Returns all currently active workers, their latest coordinates, route assignment, and last ping timestamp.

---

### 3. Worker Check-Out
- **Endpoint**: `POST /api/tracking/checkout`
- **Description**: Ends the active field session for the worker/vehicle.

---

## 📲 Native Device Registration (APNs & FCM Push)

- **Endpoint**: `POST /api/devices/register`
- **Payload**:
```json
{
  "device_token": "fcm_or_apns_token_string",
  "platform": "ios",
  "device_name": "iPhone 15 Pro",
  "app_version": "2.4.0"
}
```
- **Description**: Registers device token for native push alerts (incoming phone calls, emergency broadcasts, new SMS).

---

## 🔗 Share Target & Native Share Sheet APIs

- **`GET /api/share-options`**: Returns route lists, active stops, and current workers for populating native mobile share sheets.
- **`POST /api/execute-share`**: Receives an address, URL, or coordinate payload shared from Apple/Google Maps and creates the target stop or prospect.
