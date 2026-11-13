# Public Bus Ride Registration (`/ride`)

The **Public Ride Registration** portal (`/ride`, e.g. `https://faithbaptist.routeapp.org/ride`) is a clean, mobile-friendly signup form that allows parents and guardians in the community to register their children for free church bus transportation.

---

## 👥 How Different Roles Experience & Use This Feature

| Role | What You See & Do |
|---|---|
| **Parent / Legal Guardian** | Open the signup link on your phone, fill in your contact information and children's details, and sign the digital liability waiver right on your screen. |
| **Soulwinner / Outreach Worker** | Open this form on your phone or hand your phone to a parent at their doorstep on Saturday morning to register them on the spot. |
| **Church Admin / Bus Director** | Copy the public link or QR code to place on church flyers, social media, and website banners; review and approve submissions in `/pending-registrations`. |
| **Bus Captain** | Receive an instant SMS notification when a family on your route territory registers online. |

---

## 📱 What the Parent Sees on Their Phone

```
+-----------------------------------------------------------------+
| ⛪ FAITH BAPTIST CHURCH — FREE BUS TRANSPORTATION SIGNUP        |
+-----------------------------------------------------------------+
| STEP 1: PARENT / GUARDIAN INFORMATION                           |
|   Full Name: [ Martha Smith                               ]     |
|   Relationship: [ Mother ▾ ]                                    |
|   Mobile Phone: [ (555) 234-5678                          ]     |
|   Home Address: [ 1428 Elm Street, Apt 2B                 ]     |
|   City, State, Zip: [ Springfield, IL 62702               ]     |
|   Emergency Contact: [ Robert Smith (Dad) - 555-876-5432  ]     |
+-----------------------------------------------------------------+
| STEP 2: CHILDREN TO REGISTER                                    |
|   Child #1: Tommy Smith (Age 10 - 5th Grade) - Peanut Allergy   |
|   Child #2: Sarah Smith (Age 7 - 2nd Grade)                     |
|   [ + ADD ANOTHER SIBLING ]                                     |
+-----------------------------------------------------------------+
| [ ➡️ CONTINUE TO DIGITAL PERMISSION SLIP ]                      |
+-----------------------------------------------------------------+
```

---

## 🛠️ The Complete Step-by-Step Experience

### 1. Parent Submits Form
- The parent fills in their phone number, home address, and children's info.
- Multiple siblings can be added to a single submission.
- Address geocoding validates the street and finds the latitude/longitude coordinates automatically.

### 2. Immediate Digital E-Signature Handoff (`/ride/sign/{id}`)
- Upon tapping **Continue**, the parent is routed directly to the digital signature pad.
- They review the transportation consent and emergency medical waiver.
- The parent draws their signature using their finger or stylus on their phone screen and taps **Sign & Submit**.

### 3. Automated Notifications & Next Steps
- **For the Parent**: A confirmation screen appears, and RouteApp sends a confirmation text message to their phone with the church bus number and captain's contact info.
- **For Church Leadership**: The registration streams directly into the **Pending Registrations Queue (`/pending-registrations`)** for 1-click bus stop creation.
