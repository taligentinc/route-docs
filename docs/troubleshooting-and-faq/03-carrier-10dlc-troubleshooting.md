# Carrier 10DLC Registration & SMS Delivery Troubleshooting

This guide explains carrier compliance rules (A2P 10DLC) and provides troubleshooting steps if SMS text messages sent to parents are blocked or delayed by wireless carriers (AT&T, Verizon, T-Mobile).

---

## 🏛️ What is A2P 10DLC?

**Application-to-Person 10-Digit Long Code (A2P 10DLC)** is the regulatory system established by US cellular carriers to prevent spam, phishing, and unwanted automated messages.

Churches sending bus reminders or broadcast texts must register their church legal entity (Brand) and messaging purpose (Campaign) via RouteApp.

---

## 🛑 Common Carrier Error Codes & Solutions

### 1. `Error 30007: Message Filtered by Carrier`
- **Why**: The wireless carrier's spam algorithm flagged words in your text (e.g. ALL CAPS words, shortened generic URLs like `bit.ly`, or mentions of financial donations).
- **Fix**:
  - Always use your full church domain for links (e.g. `https://faithbaptist.routeapp.org/ride`).
  - Avoid spam trigger words ("FREE PRIZE", "ACT NOW").
  - Keep messages friendly and conversational.

---

### 2. `Error 30004: Destination Unreachable / Blocked`
- **Why**: The recipient's carrier blocked delivery because the parent previously texted `STOP` or requested to be removed from texts.
- **Fix**:
  - The parent must text `START` or `UNSTOP` back to your Route Phone number to re-authorize text message delivery.

---

### 3. `Error 30034: US A2P 10DLC Campaign Not Approved`
- **Why**: Your church tenant has not yet completed the 10DLC brand registration form in `/settings/system`.
- **Fix**:
  - Open `/settings/system` and complete the **10DLC Brand Registration** form with your church's legal entity name, Tax ID (EIN), and physical church address.
  - Carrier vetting typically completes in 24–48 hours.
