# ADEVE Creations Website

Official repository for the `adevecreations.com` website and U.S. Embassy vendor readiness documentation.

## Mission

This project supports two outcomes:

- Public website for ADEVE Creations procurement visibility
- Controlled documentation for vendor qualification, compliance, and opportunity tracking

## Repository Layout

- `client/` - React + Vite website source
- `server/` - Express production server
- `website/` - Website strategy and content governance notes
- `docs/vendor-readiness/` - Registration and submission workflow artifacts
- `docs/capabilities/` - Capability statements and service descriptors
- `docs/compliance/` - Compliance declarations and policy notes
- `docs/references/` - Client reference records and case summaries
- `assets/branding/` - Brand assets for website and company profile

## Local Setup

```bash
npm install
npm run dev
```

Build and typecheck:

```bash
npm run check
npm run build
```

## Branch and Review Policy

Use pull requests for all changes to `main`.

Recommended protection rules for `main`:

- Require at least one review
- Require passing CI checks
- Require linear history
- Restrict direct pushes

## Procurement Readiness Notes

The docs in `docs/vendor-readiness/` track the core U.S. Embassy Zimbabwe supplier requirements:

- NCAGE registration
- SAM.gov registration
- UEI assignment
- Legal registration proof
- Experience and references

## License

All rights reserved. © 2026 ADEVE Creations.
