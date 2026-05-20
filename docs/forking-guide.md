# Grant Credit Finder Forking Guide

Use this guide to adapt the demo without introducing private data or hidden dependencies.

## Public-Safe Sample Scenario

- Service line: Founder ops research
- Demo promise: Rank fictional grants and credit programs by fit, friction, value, deadline, and application readiness.
- Fictional sample object: credit tracker
- Runtime: static React/Vite, no backend, no auth, no external API calls

## Replace First

1. Edit `src/data.ts` titles, owners, notes, dates, theme colors, repository URL, and live demo URL.
2. Keep owners generic such as `Fox & Hen`, `Buyer`, `QA`, or fictional roles.
3. Keep notes written as sanitized examples; do not paste customer logs, emails, credentials, invoices, or screenshots.
4. Refresh `docs/demo-screenshot.png` after visual changes.

## Buyer Credibility Checklist

- The hero states the service outcome in one sentence.
- The board can be searched, sorted, edited, advanced, simulated, and exported.
- QA gates explain what makes the package handoff-ready.
- The generated report is readable by a non-technical buyer.
- `npm run build --silent` passes before deploy.

## Starter Adaptation Brief

Fork Grant Credit Finder as a public-safe client demo for founder ops research. Keep all records fictional, update `src/data.ts`, preserve the readiness board and export flow, and publish only after the build passes.
