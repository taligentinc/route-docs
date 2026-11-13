# VoIP & WebRTC Softphone Infrastructure

RouteApp provides real-time in-app voice calling powered by **WebRTC**, **LiveKit**, and **Apple PushKit (APNs VoIP Push)**, allowing seamless call answering even when a mobile phone is locked in the driver's pocket.

---

## 🎙️ WebRTC Voice Pipeline

```mermaid
graph LR
    A[Inbound PSTN Call from Parent] --> B[AWS Amazon Chime / Twilio Voice SIP]
    B --> C[LiveKit WebRTC Media Server]
    C -->|Opus Audio RTP Streams| D[Browser / Mobile App Softphone Client]
    D -->|DTMF & Audio Packets| C
```

---

## 📱 Background Wakeup: Apple VoIP PushKit & Android High-Priority FCM

Web applications in mobile browsers often sleep when the screen locks. To ensure phone calls ring reliably:

### iOS PushKit Flow:
1. When a user logs into RouteApp on an iPhone, the app registers a **VoIP PushKit Token** (`POST /api/devices/register`).
2. Upon an incoming voice call, `VoipPushService` (`app/Services/VoipPushService.php`) dispatches an APNs VoIP Push payload directly to Apple's push servers.
3. iOS wakes the app in the background and presents the native full-screen incoming call interface (**CallKit**).
4. When the user slides to answer, the WebRTC audio room connects immediately.

---

## 🔒 Security & Codec Optimization

- **End-to-End Encryption**: All browser-to-server voice traffic is encrypted using **SRTP (Secure Real-time Transport Protocol)** and DTLS.
- **Opus Codec**: Dynamic bitrates from 16 kbps to 64 kbps ensure clear audio even over weak 3G/LTE mobile connections in rural bus routes.
- **Echo Cancellation & Noise Suppression**: Browser Web Audio API filters out engine rumble and background cabin noise.
