# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | ✅ Active support  |
| < 1.0   | ❌ Not supported   |

## Reporting a Vulnerability

If you discover a security vulnerability within Es Tu Mundo AI, please send an email to **security@estumundoai.com**.

**Please do NOT create a public GitHub issue for security vulnerabilities.**

### What to include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### Response Timeline
- **24 hours** — Initial acknowledgment
- **72 hours** — Assessment and action plan
- **7 days** — Fix deployment for critical issues

## Security Practices

- All API keys stored as environment variables
- JWT-based authentication with token rotation
- Rate limiting on all API endpoints
- Input sanitization and validation
- CORS properly configured
- HTTPS enforced in production
- Regular dependency audits via `npm audit`

---

**Es Tu Mundo AI Security Team**
