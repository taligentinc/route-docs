# Roles & Access Levels

RouteApp utilizes a role-based access control (RBAC) model with route-scoped granularity to ensure security, privacy of rider data, and focused user workflows.

---

## 👥 Role Hierarchy & Descriptions

### 1. Super Administrator (Central)
- **Scope**: Multi-tenant platform level.
- **Access**: Global server health, tenant provisioning, workspace administration, and billing infrastructure.

### 2. Church Administrator (Admin / Bus Director)
- **Scope**: Entire church tenant.
- **Access**: Full access to all routes, districts, workers, fleet vehicles, telephony number provisioning, bulk data import/export, audit logs, and church-wide settings.

### 3. Route Captain / Co-Captain
- **Scope**: Assigned bus routes and soulwinning districts.
- **Access**: 
  - Manage stops, riders, emergency contacts, and visitation records.
  - Re-order and optimize route sequencing.
  - Mark live Sunday attendance.
  - Access Route Phone 2-way SMS and calls for assigned routes.
  - Review and approve pending ride registrations.

### 4. Bus Driver
- **Scope**: Assigned vehicle and bus route run sheets.
- **Access**: 
  - View turn-by-turn stop sequence and driver run sheets.
  - Complete Pre-Trip and Post-Trip DVIR inspection reports.
  - Quick-dial stop guardians.
  - Telemetry and location check-in.

### 5. Fleet Mechanic
- **Scope**: Vehicle maintenance and fleet safety.
- **Access**: 
  - Vehicle registry and maintenance histories.
  - Mechanics workbench to triage reported defects.
  - Sign off on repair work orders and toggle out-of-service vehicle flags.

### 6. Bus Worker / Visitation Secretary
- **Scope**: Assigned route.
- **Access**: 
  - Roster viewing, attendance check-in assistance, logging soulwinning and visitation attempts.

### 7. Soulwinner / Outreach Volunteer
- **Scope**: Soulwinning maps and canvassing CRM.
- **Access**: 
  - Check out territory blocks/cells on the map.
  - Record doors knocked, contacts, and gospel presentations.
  - Add prospects for bus route follow-up.

---

## 📊 Permission Matrix

| Capability / Section | Admin | Captain | Driver | Mechanic | Worker | Soulwinner |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **My Route Dashboard** | ✅ | ✅ (Assigned) | ✅ (Assigned) | ❌ | ✅ | ❌ |
| **Edit Stops & Rosters** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Optimize Stop Ordering** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Mark Sunday Attendance** | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| **Pre/Post-Trip DVIR** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **Resolve Vehicle Defects** | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Territory Map Checkout** | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| **Route Phone SMS / Calls** | ✅ | ✅ (Assigned) | ❌ | ❌ | ❌ | ❌ |
| **Bulk Import / Export** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Workers & Permissions** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Audit Logs** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
