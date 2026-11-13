# Active Route Switcher

In RouteApp, workers and leaders often oversee or assist on multiple bus routes, soulwinning sectors, or campus districts. The **Active Route Switcher** provides instant contextual filtering across the entire application with a single tap.

---

## 🧭 How the Active Route Switcher Works

The Active Route Switcher lives directly in the persistent top navigation bar:

```
[ 🚌 Route 3 - Eastside ] ▾
```

### Contextual Scoping
When an active route is selected:
- **My Route (`/my-route`)**: Automatically filters to display only stops, riders, and maps for that selected route.
- **Attendance (`/attendance`)**: Opens the roster and live manifest for the chosen route.
- **Route Ordering (`/ordering`)**: Loads the stop sequence of the active route for TSP optimization.
- **Driver Run Sheet (`/drivers-list`)**: Formats the run sheet specifically for that route.
- **Chats & Telephony (`/chats`, `/route-phone`)**: Activates the virtual SMS phone number and message history assigned to that route.

---

## 🔄 Switching Between Routes

1. Click on the Route badge in the top navigation header.
2. A dropdown modal/list displays all routes you have permission to view:
   - **My Assigned Routes**: Routes where you are primary Captain, Co-Captain, Driver, or Worker.
   - **All Church Routes** *(Admins only)*: Full list of all church bus routes and districts.
   - **"All Routes" Overview**: Aggregated view for overall church attendance and master fleet tracking.
3. Tap the desired route name.
4. The page instantly updates its state reactively via Livewire without requiring a full browser reload.

---

## ⚙️ Setting a Default Route

If you primarily work on one route every week:
1. Navigate to **Settings** > **Profile** (`/settings/profile`).
2. Set your **Default Bus Route**.
3. Every time you log in, RouteApp will automatically initialize with your default route selected.
