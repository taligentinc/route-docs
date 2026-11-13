# Routing, Geocoding & Optimization APIs

RouteApp includes internal geocoding and route calculation microservices powering autocomplete, reverse coordinate lookups, and Traveling Salesperson Problem (TSP) stop sequencing.

---

## 📍 Geocoding Services

### 1. Autocomplete / Address Suggestions
- **Endpoint**: `GET /geocoding/suggest`
- **Parameters**: `?q=1042+Maple`
- **Description**: Returns fast type-ahead street address suggestions within the church territory bounding box.

---

### 2. Forward Geocoding (Search)
- **Endpoint**: `GET /geocoding/search`
- **Parameters**: `?q=1042+North+Maple+Ave+Springfield+IL`
- **Response**:
```json
{
  "formatted_address": "1042 N Maple Ave, Springfield, IL 62702",
  "latitude": 39.78172,
  "longitude": -89.65014,
  "confidence": 0.98
}
```

---

### 3. Reverse Geocoding
- **Endpoint**: `GET /geocoding/reverse`
- **Parameters**: `?lat=39.78172&lng=-89.65014`
- **Description**: Converts geographic coordinates from a dropped map pin or mobile GPS into a human-readable street address.

---

## 🧭 Routing & Stop Optimization Services

### 4. Turn-by-Turn Directions & Polyline
- **Endpoint**: `POST /routing/directions`
- **Payload**:
```json
{
  "coordinates": [
    [-89.6501, 39.7817],
    [-89.6450, 39.7850],
    [-89.6400, 39.7900]
  ]
}
```
- **Response**: Returns GeoJSON road polyline coordinates, total driving distance in meters, and estimated trip duration in seconds.

---

### 5. TSP Stop Sequence Optimizer
- **Endpoint**: `POST /routing/optimize-stops`
- **Payload**:
```json
{
  "depot": [-89.6500, 39.7800],
  "stops": [
    { "id": 101, "coordinates": [-89.6420, 39.7880] },
    { "id": 102, "coordinates": [-89.6350, 39.7950] },
    { "id": 103, "coordinates": [-89.6480, 39.7820] }
  ],
  "criteria": "duration"
}
```
- **Response**: Returns the mathematically optimal stop sequence ordering (`[103, 101, 102]`), estimated total drive time, and turn-by-turn route path.
