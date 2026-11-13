# Address Lookup & Route Finder

The **Address Lookup** tool (`/address-lookup`) is a rapid search utility that allows church office staff, receptionists, and bus leaders to look up any residential address and instantly identify:
- Which bus route covers the address
- Which soulwinning district/sector it falls within
- The closest existing bus stop (with distance in miles/feet)
- Any existing riders, prospects, or family records associated with that address

---

## 🔍 How to Use Address Lookup

1. Open `/address-lookup`.
2. Begin typing a street address (e.g. *"1042 North Maple Ave"*).
3. The type-ahead autocomplete suggests verified addresses powered by the built-in geocoding service.
4. Select the matching address.

---

## 📊 Lookup Results & Actions

Upon selection, RouteApp displays a rich contextual summary:

```
+-------------------------------------------------------------+
| 📍 1042 N Maple Ave, Springfield, IL 62702                  |
|                                                             |
| 🚌 Assigned Route: Route 2 - North Park (Captain: John Doe) |
| 🗺️ Sector / District: Sector B - Northwest                  |
| 🚏 Nearest Stop: Stop #4 (0.1 miles away at Maple & 11th)   |
|                                                             |
| 👨‍👩‍👧‍👦 Existing Household Records:                             |
|    - Sarah Johnson (Registered Rider - Grade 4)             |
|                                                             |
| [➕ Add New Rider Here]   [🚏 Add as New Stop]   [🗺️ View on Map] |
+-------------------------------------------------------------+
```

### Direct Actions:
- **Add New Rider Here**: Instantly append a new child to this household without creating duplicate address entries.
- **Add as New Stop**: Creates a brand new stop on Route 2.
- **View on Map**: Highlights the address pin within the route's boundary polygon.
