# Documenso & E-Signature Legal Pipeline

RouteApp integrates an enterprise-grade digital signature workflow (`app/Services/DocumensoService.php`) and HTML5 vector signature capture to produce legally binding permission slips, liability waivers, and medical consent records.

---

## 📜 Legal Standards Compliance

RouteApp e-signatures adhere strictly to:
- **US Electronic Signatures in Global and National Commerce Act (ESIGN)** (15 U.S.C. § 7001)
- **Uniform Electronic Transactions Act (UETA)**
- **EU eIDAS Regulations** (Advanced Electronic Signature standards)

---

## 🔐 Cryptographic Signature Metadata

Every signature captured on `/ride/sign/{id}` generates an immutable audit manifest:

```json
{
  "permission_slip_id": "ps_89412aef",
  "signer": {
    "printed_name": "Martha Smith",
    "relationship": "Mother / Legal Guardian",
    "email": "martha.smith@example.com",
    "phone": "+15552345678"
  },
  "audit_trail": {
    "ip_address": "198.51.100.42",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15",
    "signed_at_utc": "2026-10-06T19:24:12Z",
    "document_sha256_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  },
  "signature_vector": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  "terms_version": "2026.1-standard-liability"
}
```

---

## 📄 PDF Flattening & Archival

1. When a slip is signed, RouteApp merges the child details, guardian confirmation, and vector signature onto the official church transportation PDF template.
2. The document is flattened and rendered into a PDF/A archival format.
3. The resulting file is encrypted and written to cloud object storage.
4. Staff can view or download the sealed document at `/permission-slips/{id}/view`.
