# Managing Bus Stops & Stop Details

The **Stop Details** screen (`/stops/{stop}`) provides complete control over an individual pickup location, its household structure, registered riders, geocoded map pins, and visitation history.

---

## ➕ Creating a New Stop

Stops can be created from multiple places in RouteApp:
1. **From My Route**: Click **+ Add Stop** button.
2. **From Public Registrations**: Approving a public `/ride` request auto-creates the stop.
3. **From Territory Soulwinning CRM**: Converting a door-to-door prospect into a bus rider.
4. **From Bulk CSV Import**: Batch uploading church rosters.

### Stop Form Fields
- **Address Line 1 & Line 2**: Street address and apartment/unit number.
- **City, State, ZIP**: Auto-completed when using smart address search.
- **Geocoding & Map Coordinates**: Latitude and Longitude auto-derived via Mapbox / Pelias geocoders. You can drag the map pin to pinpoint the exact house or alleyway entrance.
- **Assigned Route**: Select the bus route covering this geographic sector.
- **Stop Type**: `Standard Household`, `Group Pickup Point`, `Apartment Complex Hub`, or `Special Needs`.
- **Driver Instructions**: Specific driving, parking, or safety instructions.

---

## 🏡 Household & Guardian Details

A single stop can contain multiple riders from the same family or apartment:
- **Primary Guardian Name**: Mom, Dad, Grandparent, or Foster Guardian.
- **Primary Phone & Alt Phone**: Phone numbers used for SMS broadcasts and voice calls.
- **Language Preference**: English, Spanish, etc.
- **Emergency Contact**: Secondary contact with phone number and relationship.

---

## 👦 Rider Roster on the Stop

Within the Stop Detail screen, you can manage all individual riders residing at this address:
- **+ Add Rider**: Add a child or passenger.
- **Edit Rider**: Update name, date of birth, grade level, gender, Sunday School class, and medical alerts.
- **Move Rider / Split Stop**: If a rider moves to another household or route, easily transfer them without losing historical attendance records.
- **Archive / Deactivate**: Set an inactive rider without deleting their attendance history.

---

## 📜 Digital Permission Slips on File

Every stop displays whether active digital permission slips are on file:
- **Status Indicator**: `Signed (Active)`, `Expired`, or `Missing`.
- **View Signed Slip**: Click **View Permission Slip** to inspect the signed waiver and digital signature timestamp.
- **Send Signature Request**: If missing, tap **Send E-Sign Link via SMS** to text the parent a direct signing link (`/ride/sign/{id}`).

---

## 🗺️ Geocoding Pin Refinement

If automatic address geocoding places the pin on the wrong side of the street or at a gated entrance:
1. Scroll to the **Interactive Pin Location** section.
2. Click and drag the marker to the exact pickup curb.
3. Click **Save Coordinates**.
4. All future driver navigation directions will lead straight to the refined coordinate marker.
