# Fleet Mechanic Standard Operating Procedure (SOP)

This standard operating procedure guides mechanics and fleet maintenance volunteers through defect intake, repair work orders, parts logging, and safety lockouts in RouteApp.

---

## 🛠️ Defect Intake & Triage Workflow

```mermaid
graph TD
    A[DVIR Submitted by Driver] --> B{Defect Severity}
    B -->|Critical (Red)| C[Vehicle Automatically Locked Out / Red OOS]
    B -->|Minor (Yellow)| D[Vehicle Remains In-Service / Flagged]
    C --> E[Mechanic opens /vehicles/mechanics]
    D --> E
    E --> F[Create Repair Work Order]
    F --> G[Perform Physical Repair & Parts Replacement]
    G --> H[Digital Mechanic Certification & Signature]
    H --> I[Lockout Cleared / Vehicle Returned to Service]
```

---

## 🛑 Out-of-Service (OOS) Criteria

The following conditions are categorized as **Critical Defects** that trigger an automated vehicle lockout:
1. **Braking System**: Air pressure leaks exceeding 3 PSI/minute, drum/rotor cracks, inoperative low-air warning buzzer, or parking brake slippage.
2. **Steering & Suspension**: Excessive steering play (> 2 inches), broken leaf spring leaves, loose tie rods.
3. **Tires & Wheels**: Steer tire tread depth under 4/32 inch, drive tire tread under 2/32 inch, cuts to cords, or loose lug nuts.
4. **Safety Lighting & Signals**: Inoperative school bus stop-arm, crossing control arm, or hazard flasher relay.
5. **Emergency Exits**: Defective emergency door latch or non-functioning emergency buzzer.

---

## 🔧 Work Order Logging & Parts Tracking

When servicing a vehicle in `/vehicles/mechanics`:
1. Open the defect work order.
2. Record **Mileage at Repair**.
3. Record **Work Performed Details** (step-by-step diagnostic and replacement notes).
4. Record **Parts Replaced**:
   - Part Name & Part # (e.g. `Bendix Air Dryer Cartridge #107794`)
   - Vendor & Purchase Cost
5. Record **Labor Hours**.

---

## ✍️ Safety Sign-Off & Legal Certification

Before a vehicle can be assigned to a route driver:
1. The certified mechanic must inspect the repair in person.
2. Complete a short road or functional test.
3. Check the legal certification box:
   > *"I certify that all noted defects have been corrected and this vehicle is in safe operating condition in accordance with state and federal transportation safety standards."*
4. Apply digital signature and date.
5. Tap **Certify & Return to Service**.
