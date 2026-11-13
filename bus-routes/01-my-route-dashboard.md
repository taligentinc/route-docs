# My Route Dashboard (`/my-route`)

The **My Route** page (`/my-route` or `/dashboard`) is the central daily cockpit for everyone operating or overseeing a bus route. It provides real-time stop lists, rider rosters, guardian contact info, medical alerts, and navigation.

---

## 👥 How Different Roles Use This Page

| Role | What You See & Do on This Page |
|---|---|
| **Bus Captain & Co-Captain** | Your primary workspace on Sunday morning. View all stops in order, check which kids are riding, tap to call/text parents via Route Phone, and mark attendance as children board. |
| **Bus Driver** | Glance at upcoming stops, check road and parking notes (e.g. *"Dead-end street — turn around at top"*), and tap **🧭 Navigate** to launch GPS directions to the next curb. |
| **Bus Worker / Helper** | Help verify children as they board, look up emergency contact details if a child is upset, and check medical allergy badges. |
| **Bus Director / Church Admin** | Switch between any church bus route using the top route switcher to monitor live route progress, check rider counts, and add emergency stops. |

---

## 📱 What You See on the Screen

### 1. Route Summary Header
- **Route Name & Bus Unit**: e.g., *"Route 3 - Eastside (Bus #12)"*.
- **Active Roster Counts**: Total active stops and total enrolled riders.
- **Assigned Leadership**: Quick links to view or contact the Captain and Driver.
- **Action Buttons**:
  - **+ Add Stop**: Open the household creation modal.
  - **🗺️ Map View**: Toggle between the Stop Card List and the live Map view.
  - **⚡ Quick Check-In**: Enter full-screen Sunday roll call mode.

### 2. Stop Cards in Route Order
Each stop is rendered as a clean card in exact driving sequence:

```
+-----------------------------------------------------------------+
| #1  1428 Elm Street, Springfield                 [Active] [🗺️]   |
|                                                                 |
| 👦 Tommy Smith (5th Grade) - 🚨 Medical: Peanut Allergy         |
| 👧 Sarah Smith (2nd Grade)                                      |
|                                                                 |
| 👤 Guardian: Martha Smith (Mother)   📞 (555) 234-5678          |
| 📝 Driver Note: Park on right side of driveway. Gate is closed. |
|                                                                 |
| [📞 Call]   [💬 SMS]   [🧭 Navigate]   [📋 Attendance]          |
+-----------------------------------------------------------------+
```

---

## 🛠️ Step-by-Step Actions: What to Do

### A. How to Add a New Stop & Family (Captain / Admin)
1. Tap **+ Add Stop** at the top of the page.
2. Start typing the street address (e.g., *1428 Elm St*). RouteApp will auto-complete the city, state, and zip code.
3. Enter the **Parent/Guardian Name** (e.g., *Martha Smith*) and **Mobile Phone Number**.
4. Type any important driver instructions (e.g., *"Honk once, dogs in yard"*).
5. Tap **Save Stop**. The new stop appears in your route sequence immediately.

### B. How to Call or Text a Parent (Captain / Worker)
- **To Text**: Tap the **💬 SMS** button on the stop card. This opens the two-way chat thread (`/chats`). Your text sends from the church's official Route Phone line, keeping your personal mobile number private.
- **To Call**: Tap the **📞 Call** button to connect via the in-app softphone.

### C. How to Navigate to the Stop (Driver)
1. Tap **🧭 Navigate** on the stop card.
2. Your phone or tablet will automatically open your default navigation app (**Apple Maps**, **Google Maps**, or **Waze**) with directions leading directly to the curb coordinates.

### D. How to Mark Attendance on Arrival (Captain / Worker)
1. When Tommy steps onto the bus, tap his name badge once ➔ It turns green 🟢 **Present (Boarded)**.
2. If Sarah is not riding today, tap her badge ➔ It turns gray ⚪ **Absent**.
3. The live bus headcount at the top updates automatically.

---

## 🚨 Safety Badges & Critical Alerts

- **Red Allergy / Medical Badges**: Displayed prominently next to rider names (e.g., `🚨 Asthma - Carries Inhaler`, `🚨 Severe Peanut Allergy`).
- **Custody / Pickup Restrictions**: If an unauthorized individual is prohibited from picking up a child, a bold warning banner appears on the card.
- **Missing Permission Slip Alert**: If a child does not have an active signed waiver, a yellow `⚠️ Waiver Missing` badge appears with a 1-tap button to text an e-signature link to the parent.
