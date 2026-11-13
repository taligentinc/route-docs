# Vehicles & Fleet Registry

The **Vehicles Registry** (`/vehicles`) is the central database for all church-owned transportation assets, including full-sized school buses, 15-passenger vans, multi-function school activity buses (MFSAB), shuttle buses, and church trailers.

---

## 🚌 Vehicle Profile & Specifications

To add or manage a vehicle:
1. Navigate to `/vehicles` and click **+ Add Vehicle**.
2. **Core Identification**:
   - **Vehicle Name / Unit Number**: (e.g. *"Bus #14"*, *"Van #3"*, *"Senior Shuttle"*)
   - **Make, Model, Year**: (e.g. *2019 Thomas Saf-T-Liner C2*, *2021 Ford Transit 350-HD*)
   - **VIN (Vehicle Identification Number)**: 17-digit serial identifier
   - **License Plate Number & State**
3. **Operational Specs**:
   - **Passenger Seating Capacity**: Rated maximum passenger count (used for live attendance headroom calculations)
   - **Wheelchair Lift Equipped**: Yes/No (flags vehicle for special needs routing)
   - **Fuel Type**: Diesel, Gasoline, Propane, Electric
   - **Current Odometer Mileage**
4. **Maintenance & Regulatory**:
   - **Annual DOT Inspection Expiration Date**
   - **Registration & Insurance Policy Expiration Dates**
   - **Assigned Route**: Default bus route assigned to this vehicle

---

## 🚦 Vehicle Operational Status

Each vehicle displays a prominent status badge:
- 🟢 **In Service / Ready**: Inspected, clear of critical defects, and approved for transport.
- 🟡 **Maintenance Required**: Non-critical defect logged (e.g. minor dome light out, wiper streak). Vehicle remains safe to operate.
- 🔴 **Out of Service (Lockout)**: Critical safety defect logged during DVIR or by mechanics (e.g. brake air leak, bald tire, stop-arm malfunction). The system prevents assigning this vehicle until signed off by a certified mechanic.
- ⚪ **Decommissioned / Spare**: Inactive or seasonal reserve vehicle.
