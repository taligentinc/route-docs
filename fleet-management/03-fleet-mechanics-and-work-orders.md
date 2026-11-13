# Fleet Mechanics & Work Orders (`/vehicles/mechanics`)

The **Fleet Mechanics** portal (`/vehicles/mechanics`) is designed for church mechanics, fleet maintenance volunteers, and transportation directors to manage vehicle repairs, triage driver DVIR defects, track parts/labor costs, and clear Out-of-Service safety lockouts.

---

## 👥 How Different Roles Use This Page

| Role | What You See & Do on This Page |
|---|---|
| **Church Fleet Mechanic** | View the incoming defect triage queue, start work orders, log diagnostic notes and replacement parts, and sign legal certifications to unlock vehicles for service. |
| **Transportation Director / Admin** | Monitor total open defects across the entire bus fleet, track maintenance expenses, and schedule routine oil changes and DOT annual inspections. |
| **Bus Driver** | Check the status of a defect you reported earlier to see if the mechanic has completed repairs and cleared the bus for your upcoming Sunday run. |

---

## 📱 What You See on the Mechanics Workbench

```
+-----------------------------------------------------------------+
| 🔧 ACTIVE DEFECT TRIAGE & WORK ORDERS                           |
| Total Open Defects: 3 (1 Critical Lockout | 2 Minor Maintenance)|
+-----------------------------------------------------------------+
| [🔴 CRITICAL LOCKOUT] — BUS #14                                  |
| Component: Air Brakes / Pressure Leak                           |
| Reported By: John Driver on Sunday 7:15 AM                      |
| Driver Note: "Air pressure drops 5 PSI/min when brake pressed." |
| Attached Photo: [ 📷 air_chamber_leak.jpg ]                     |
|                                                                 |
| [ 🛠️ START REPAIR WORK ORDER ]       [ 👁️ VIEW VEHICLE SPECS ]  |
+-----------------------------------------------------------------+
| [🟡 MINOR DEFECT] — BUS #12                                     |
| Component: Clearance Lights / Right Rear Upper Bulb Out         |
| Reported By: Dave Miller on Sunday 7:25 AM                      |
|                                                                 |
| [ 🛠️ START REPAIR WORK ORDER ]       [ 👁️ VIEW VEHICLE SPECS ]  |
+-----------------------------------------------------------------+
```

---

## 🛠️ Step-by-Step Actions: What to Do

### A. How to Start a Repair Work Order (Mechanic)
1. Open `/vehicles/mechanics` on your phone, tablet, or shop computer.
2. Tap **🛠️ Start Repair Work Order** on the defect card.
3. Review the driver's notes and open the photo to inspect the failed part.
4. Perform the physical repair on the bus.

### B. How to Log Parts & Labor Costs (Mechanic / Admin)
1. In the open work order modal:
2. Type your diagnostic and repair notes (e.g. *"Replaced ruptured rear brake chamber diaphragm and adjusted slack adjuster rod travel to 1.5 inches"*).
3. **Log Parts Used**:
   - Part Name: *Type 30 Air Brake Chamber*
   - Part Number: *#Bendix-107794*
   - Vendor & Cost: *NAPA Commercial Truck Parts — $84.50*
4. **Log Labor**: Enter hours spent (e.g. *1.5 hours*).

### C. How to Sign Off & Clear an Out-of-Service Lockout (Mechanic)
1. Perform a functional test and road test of the repaired system.
2. Check the mandatory legal compliance declaration:
   > *"I certify that the defect listed above has been inspected, repaired, and road-tested to safe operating standards according to FMCSA/DOT guidelines."*
3. Sign your name on the digital signature pad.
4. Tap **🟢 Certify & Return Vehicle to Service**.
5. The red lockout banner is immediately cleared across the entire church app, and the bus turns green **Ready for Service**.
