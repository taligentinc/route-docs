# Portable Route Packages (.route)

RouteApp introduces **Portable Route Packages (`.route`)**, an open, standardized JSON bundle format for packaging entire bus routes—including stops, geocodes, rider records, guardian relationships, and territory polygons—into a single portable file.

---

## 📦 What is a `.route` Package?

A `.route` file is an encrypted or structured JSON package containing:
- Route metadata (name, color, vehicle specs)
- Geographic boundary polygons (GeoJSON coordinates)
- Full list of ordered stops with lat/long coordinates
- Enrolled riders, ages, grade levels, and medical tags
- Guardian contact information
- Historical visitation notes (optional)

---

## 📤 Exporting a Route Package

To export a route:
1. Navigate to `/routes` or `/my-route`.
2. Click **Export** > **Download `.route` Package**.
3. Or use the direct URL: `/export/route-package/{type}/{id}`.
4. The `.route` file will download to your local machine or phone.

### Use Cases for Export:
- **Offline Backups**: Store periodic snapshots in secure church archives.
- **Church-to-Church Sharing**: Share territory or route setups with sister churches.
- **Route Splitting / Restructuring**: Back up before major neighborhood re-districting.

---

## 📥 Inspecting & Importing a `.route` Package

To import a package into your workspace:
1. Open `/bulk-import` or `/routes`.
2. Click **Import `.route` File**.
3. Select your `.route` file from your device.
4. **Package Inspector Modal**:
   - RouteApp analyzes the package and renders a visual preview of the incoming route name, stop count, rider count, and map boundaries.
   - It performs **address de-duplication** against your current database to avoid duplicate records.
5. Choose Import Action:
   - **Create New Route**: Instantiates a new independent route.
   - **Merge with Existing Route**: Updates existing stops and appends new riders.
6. Click **Confirm Import**. All data is provisioned instantly.
