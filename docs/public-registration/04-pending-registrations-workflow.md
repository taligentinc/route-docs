# Pending Registrations Approval Queue (`/pending-registrations`)

The **Pending Registrations** page (`/pending-registrations`) is the administrative inbox where church directors and route captains review incoming ride requests submitted by parents via the public `/ride` portal.

---

## 👥 How Different Roles Use This Page

| Role | What You See & Do on This Page |
|---|---|
| **Church Admin / Bus Director** | Triage new incoming family registrations, verify home addresses against route boundary maps, and 1-click approve them into active bus stops. |
| **Bus Captain** | Review newly assigned families in your route territory, read guardian driver notes, and plan Saturday morning visits to meet the parents in person. |
| **Parent / Family** | Receives an automated text notification as soon as the administrator approves their registration, giving them their exact pickup time window and driver details. |

---

## 📱 What You See in the Pending Queue

```
+-----------------------------------------------------------------+
| 📥 PENDING BUS RIDE REGISTRATIONS (3 Unprocessed)               |
+-----------------------------------------------------------------+
| REGISTRATION #1042 — MARTHA SMITH (Submitted 2 hours ago)       |
| 📍 Address: 1428 Elm Street, Apt 2B, Springfield                |
| 👦 Children: Tommy Smith (Grade 5), Sarah Smith (Grade 2)       |
| ✍️ E-Signature Status: 🟢 SIGNED & VERIFIED (Oct 6, 10:14 AM)   |
| 🗺️ Suggested Route: Route 3 - Eastside (Within Polygon Boundary)|
| 🚏 Nearest Existing Stop: 0.1 miles away at Elm & 14th          |
|                                                                 |
| [ 🟢 APPROVE & CREATE STOP ]  [ 🔗 MERGE STOP ]  [ ❌ DECLINE ]  |
+-----------------------------------------------------------------+
```

---

## 🛠️ Step-by-Step Actions: What to Do

### Option 1: Approve & Create New Bus Stop (Default)
1. Tap **🟢 APPROVE & CREATE STOP**.
2. RouteApp immediately:
   - Creates a new active stop on the suggested bus route.
   - Enrolls the children into the active route roster with their grade levels and medical flags.
   - Attaches the signed permission slip permanently to the rider profiles.
   - Sends an automated SMS to the parent: *"Welcome to Faith Baptist Bus Ministry! Your child is registered for Route 3. Your Captain John Doe will call you Saturday to confirm your pickup time."*

### Option 2: Merge into an Existing Household / Stop
If the children live in the same apartment building or household as an existing stop:
1. Tap **🔗 MERGE STOP**.
2. Select the existing stop from the dropdown list.
3. The new children are added to that household without creating duplicate stops on the driver run sheet.

### Option 3: Decline Request (Out of Area / Duplicate)
If the family lives outside church transportation territory:
1. Tap **❌ DECLINE**.
2. Select reason: *"Outside Transportation Boundary"*, *"Duplicate Submission"*, or *"Unable to Contact"*.
3. RouteApp can optionally text the family offering carpool assistance or church livestream info.
