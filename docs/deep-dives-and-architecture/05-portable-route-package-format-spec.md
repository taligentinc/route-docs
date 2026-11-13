# Portable Route Package (.route) Specification

The `.route` file format is an open JSON schema developed by RouteApp for storing, transporting, and backing up bus route geometries, stops, rider rosters, guardian records, and vehicle specifications.

---

## 📄 File Format Schema Specification (v1.0)

```json
{
  "$schema": "https://app.routeapp.org/schemas/v1/route-package.json",
  "format_version": "1.0.0",
  "exported_at": "2026-10-06T19:30:00Z",
  "tenant": {
    "name": "Grace Baptist Church",
    "city": "Springfield",
    "state": "IL"
  },
  "route": {
    "name": "Route 3 - Eastside",
    "code": "R3",
    "color": "#2563EB",
    "vehicle": {
      "name": "Bus #12",
      "capacity": 48,
      "wheelchair_lift": false
    },
    "boundary_polygon": {
      "type": "Polygon",
      "coordinates": [
        [
          [-89.6500, 39.7800],
          [-89.6200, 39.7800],
          [-89.6200, 39.8100],
          [-89.6500, 39.8100],
          [-89.6500, 39.7800]
        ]
      ]
    },
    "stops": [
      {
        "sequence": 1,
        "address": {
          "street": "1428 Elm St",
          "city": "Springfield",
          "state": "IL",
          "zip": "62702",
          "latitude": 39.7842,
          "longitude": -89.6481
        },
        "driver_instructions": "Pick up in front of porch",
        "guardian": {
          "full_name": "Martha Smith",
          "phone": "+15552345678",
          "relationship": "Mother"
        },
        "riders": [
          {
            "first_name": "Tommy",
            "last_name": "Smith",
            "grade": "5th Grade",
            "gender": "Male",
            "medical_notes": "Carries Asthma Inhaler",
            "permission_slip_signed": true
          }
        ]
      }
    ]
  }
}
```

---

## 🔒 Integrity Hashing & Verification

When a `.route` file is exported:
- A SHA-256 checksum is calculated across the canonical payload and embedded into the file header.
- Upon import (`POST /import/route-package/inspect`), `RoutePackageService` verifies the integrity hash to ensure no data corruption or manual tampering occurred during transport.
