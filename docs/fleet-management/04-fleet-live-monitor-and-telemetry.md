# Fleet Live Monitor & Telemetry

The **Fleet Live Monitor** (`/vehicles/monitor`) provides a real-time dispatch map showing the live GPS positions, speeds, heading directions, and stop progression of all active church buses on Sunday morning.

---

## 🗺️ Live Dispatch Map Overview

On the dispatch screen:
- Every bus on an active run is represented by a colored bus icon.
- Clicking any bus marker reveals a live telemetry HUD:
  - **Assigned Route & Driver Name**
  - **Current Speed & Heading**: (e.g. `28 MPH Heading NW`)
  - **Last GPS Ping**: Real-time heartbeat (pings every 5–10 seconds)
  - **Completed Stops vs. Remaining Stops**: (e.g. `Stop 7 of 14 Completed`)
  - **Onboard Passenger Count**: Current live headcount

---

## 📡 GPS Telemetry Sources

RouteApp collects live location telemetry through two supported mechanisms:
1. **Driver App Background GPS**: The RouteApp PWA or mobile app streams high-precision GPS coordinates while the driver has the run sheet or navigation open.
2. **Dedicated OBD-II / Hardware GPS Trackers**: Hardware units plugged into the vehicle's diagnostic port feed live coordinates directly via the Location Tracking API (`/api/tracking/location`).

---

## 🚨 Automated Geofence & Delay Alerts

- **Arrival & Departure Detection**: When a bus enters within 150 feet of a scheduled stop, RouteApp detects arrival and departure timestamps automatically.
- **Route Delay Warnings**: If a bus is running more than 10 minutes behind its historical schedule, the dispatch monitor flags the route in amber to allow captain/driver check-in.
