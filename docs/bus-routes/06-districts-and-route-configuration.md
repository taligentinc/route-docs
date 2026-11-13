# Districts & Route Configuration

The **Districts & Routes** directory (`/districts` or `/routes`) allows church administrators to organize geographic territories into manageable bus routes and soulwinning districts.

---

## 🗺️ Districts vs. Bus Routes

| Entity | Definition & Purpose | Example |
|---|---|---|
| **District (Sector)** | A high-level geographic zone of the city or metropolitan area. Used to group multiple neighborhood bus routes and soulwinning teams. | *"Northwest County"*, *"Downtown Metro"*, *"South Suburbs"* |
| **Bus Route** | A specific operational bus run with assigned vehicle, captain, driver, and stop sequence. | *"Route 1 - Oak Park"*, *"Route 2 - College Hill"* |

---

## ⚙️ Configuring a Bus Route

Navigate to `/districts` and click **+ New Route**:

1. **Route Name & Code**: e.g., *"Route 4 (Westside)"*, Code: `R4`.
2. **Color Code**: Choose a vibrant hex color (e.g., `#3B82F6` Royal Blue). This color applies to map polygons, bus pins, and badge icons throughout the app.
3. **Assigned District**: Link to the parent geographic sector.
4. **Assigned Vehicle**: Select the default bus or van from your **Fleet Registry** (`/vehicles`).
5. **Assigned Leadership**:
   - **Primary Captain**: Responsible for overall route operations and family relationships.
   - **Co-Captains / Workers**: Assistants, soulwinners, and visitation workers.
   - **Primary Driver**: Licensed driver for Sunday and mid-week services.
6. **Dedicated Phone Number**: Assign a virtual Route Phone line for 2-way SMS and inbound calls.
7. **Geographic Geofence / Polygon**: Draw or import the geographic boundary covering this route's territory.

---

## 🎨 Map Polygon & Geofence Boundaries

Defining route boundary polygons ensures:
- Incoming public ride registrations (`/ride`) are automatically assigned to the correct route based on home address.
- Territory canvassing checkouts are scoped cleanly.
- Visual clarity when viewing the master church map.
