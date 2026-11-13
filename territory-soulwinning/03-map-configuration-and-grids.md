# Map Configuration & Territory Grid Generation

The **Map Configuration** portal (`/maps/config`) allows administrators and outreach directors to configure map layers, import GIS boundaries, draw custom district polygons, and generate automated neighborhood grid cells.

---

## 📐 Territory Boundary Creation & Editing

### 1. In-App Polygon Drawing Tool
1. Navigate to `/maps/config`.
2. Click **Draw Polygon**.
3. Click on the map to define boundary vertices around a neighborhood, school district, or zip code.
4. Double-click to complete the shape.
5. Assign a Name, District, and Color theme.

### 2. KML & GeoJSON Boundary Import
Churches with existing city zoning files or county GIS maps can import them directly:
1. Click **Import GeoJSON / KML**.
2. Select your `.geojson` or `.kml` file.
3. RouteApp parses all polygons, multi-polygons, and boundary layers, auto-converting them into native territory sectors.

---

## ⚡ Automated Neighborhood Grid Generation

Instead of manually drawing hundreds of individual territory squares:
1. Select a parent District Polygon.
2. Click **Generate Territory Grid**.
3. Choose Cell Dimensions:
   - **Compact Urban**: 0.25 miles (~100–150 homes per cell)
   - **Suburban Standard**: 0.5 miles (~200–300 homes per cell)
   - **Rural / Wide**: 1.0+ miles
4. Click **Generate Cells**.
5. RouteApp overlays a high-precision grid over the polygon, automatically clipping boundary edges and indexing each cell with a unique identifier (`A-1`, `A-2`, etc.).

---

## ⚙️ Exclusions & Restricted Zones

Mark gated communities, no-soliciting complexes, or industrial zones:
- Draw a boundary around the area.
- Tag as **Restricted / Do Not Canvass**.
- The map highlights the zone in red with warnings for field workers.
