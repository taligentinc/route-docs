# Orphaned Visits

The **Orphaned Visits** tool (`/orphaned-visits`) catches and resolves unassigned, unlinked, or historical visitation records that are not currently attached to an active route or worker.

---

## ❓ What is an Orphaned Visit?

An orphaned visit occurs when:
1. A soulwinning partnership records a contact in an unassigned territory boundary.
2. A bus stop was deleted or relocated, leaving past visit history without an active parent stop.
3. A public signup or outreach flyer was logged before a specific bus route was established in that neighborhood.
4. A worker left the church or transferred departments, leaving active follow-up tasks unassigned.

---

## 🛠️ Triage & Claiming Workflow

On `/orphaned-visits`:
1. **Review Orphaned List**: Browse unlinked households with their addresses, prospect names, and visit notes.
2. **Auto-Route Matching**: RouteApp checks the address coordinates and suggests the closest active route:
   > *"Suggested: Route 3 - Eastside (0.4 miles away)"*
3. **Actions**:
   - **Attach to Existing Stop**: Link the record directly into an existing stop's family roster.
   - **Create New Stop on Suggested Route**: Spawns a new active stop and clears the orphan status.
   - **Assign Worker**: Assign a captain or soulwinner for follow-up.
   - **Archive / Dismiss**: Mark as inactive if the family is no longer reachable.
