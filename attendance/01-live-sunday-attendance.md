# Live Sunday Attendance & Roll Call (`/attendance`)

The **Attendance** page (`/attendance`) provides a lightning-fast, 1-tap digital roll call system for recording bus attendance, tracking live vehicle passenger capacity, registering walk-on visitors, and printing legal manifests.

---

## 👥 How Different Roles Use This Page

| Role | What You See & Do on This Page |
|---|---|
| **Bus Captain & Co-Captain** | Fast-tap each child as they board the bus at their stop, add walk-on visitors, and verify total morning headcount against Sunday School classroom counts. |
| **Bus Worker / Secretary** | Stand at the bus entrance door with a smartphone or tablet to take roll call while the Captain greets parents outside. |
| **Bus Driver** | Glance at the top capacity bar to ensure passenger numbers do not exceed the vehicle's rated seating capacity. |
| **Sunday School Teacher / Church Secretary** | Cross-reference the bus attendance manifest against Sunday School class rosters to ensure no child was misplaced between the bus and classroom. |
| **Senior Pastor / Bus Director** | View live, real-time church-wide bus attendance numbers streaming in on Sunday morning. |

---

## 📱 What You See on the Attendance Screen

```
+-----------------------------------------------------------------+
| 🚌 ROUTE 3 ATTENDANCE — SUNDAY MORNING, OCT 6                   |
| 🟢 Total Boarded: 32 Riders | 💺 Bus Capacity: 44 Seats (12 Open)|
| Breakdown: 14 Boys | 18 Girls | 4 Walk-On Visitors             |
+-----------------------------------------------------------------+
| STOP #1 — 1428 ELM STREET                                       |
|   [ 🟢 PRESENT ] Tommy Smith (5th Grade) - 🚨 Peanut Allergy    |
|   [ ⚪ ABSENT  ] Sarah Smith (2nd Grade)                        |
|                                                                 |
| STOP #2 — 1504 NORTH 12TH STREET                                |
|   [ 🟢 PRESENT ] David Miller (Junior High)                     |
|                                                                 |
| [ + ADD WALK-ON VISITOR ]         [ 📄 DOWNLOAD PDF MANIFEST ]  |
+-----------------------------------------------------------------+
```

---

## 🛠️ Step-by-Step Actions: What to Do

### A. How to Take Roll Call as Children Board (Captain / Worker)
1. Open `/attendance` on your phone or tablet when departing the church depot.
2. At each stop, as children step onto the bus:
   - Tap the rider's badge once ➔ It turns green 🟢 **Present (Boarded)**.
   - If a child is not riding today ➔ Leave as gray ⚪ **Absent**.
   - If a parent tells you the child is out of town or sick ➔ Tap the badge options and select 🟡 **Excused (Sick/Vacation)**.
3. The live capacity gauge updates instantly.

### B. How to Add a Walk-On Visitor (Captain / Worker)
When a child brings a friend, cousin, or neighbor who is not on the roster:
1. Tap the **+ Add Walk-On Visitor** button at the top.
2. Fill in the quick form:
   - Child's First & Last Name
   - Age / Grade
   - Parent/Guardian Name & Mobile Phone Number
3. Tap **Add to Bus**.
4. The visitor is added to the live bus headcount immediately. RouteApp automatically texts the parent a welcome message and an instant link to sign their digital permission slip (`/ride/sign/{id}`).

### C. Afternoon Drop-Off Verification (Check-Out)
1. When children re-board the bus after church at 11:45 AM, toggle into **Afternoon Drop-Off Mode**.
2. As each child is safely dropped off at their doorstep, tap their name to verify drop-off.
3. This guarantees that 100% of children picked up in the morning are accounted for and safely returned home.
