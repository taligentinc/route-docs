# PDF Manifest & Legal Bus Roster Generation

In many jurisdictions and church insurance policies, maintaining a printed, physical passenger manifest on board every transport vehicle is a legal and safety requirement. RouteApp generates clean, formatted PDF manifests on demand.

---

## 📄 Generating a PDF Manifest

1. From the Attendance screen (`/attendance`), select the target Sunday or service date.
2. Click the **📄 Download Official PDF Manifest** button.
3. Or use the direct endpoint: `/attendance/{attendanceLog}/pdf`.
4. A high-resolution, print-ready PDF is generated.

---

## 📋 What the PDF Manifest Contains

Each generated PDF manifest includes:

1. **Header Block**:
   - Church Name, Logo, and Workspace ID
   - Route Name, Assigned Bus Number, and VIN
   - Captain Name & Phone Number
   - Driver Name & CDL / License Number
   - Date & Time of Service

2. **Passenger Roster Table**:
   - Passenger Sequence Number
   - Child Full Name, Age, and Grade
   - Sunday School Department
   - Stop Address & Guardian Name
   - Emergency Contact Phone Number
   - Critical Medical Alerts / Allergies (highlighted)
   - Boarding Checkboxes (Morning Pick-Up & Afternoon Drop-Off)

3. **Driver & Captain Verification Section**:
   - Pre-Trip Verification Signature Line
   - Total Morning Passenger Count
   - Total Afternoon Passenger Count
   - Time of Return to Depot & Final Walk-Through Safety Signature (verifying no sleeping children remain on bus)
