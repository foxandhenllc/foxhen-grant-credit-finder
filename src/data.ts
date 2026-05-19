export const sample = {
  "repoName": "foxhen-grant-credit-finder",
  "title": "Grant Credit Finder",
  "subtitle": "Startup and AI credit tracker",
  "serviceLine": "Founder ops research",
  "heroTitle": "Track credible grants, credits, and discount paths.",
  "heroCopy": "A sample research tracker for startup programs, AI credits, cloud credits, eligibility, deadlines, application effort, and follow-up status.",
  "primaryAction": "Rank programs",
  "secondaryAction": "Check eligibility",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-grant-credit-finder",
  "liveDemoUrl": "https://foxhen-grant-credit-finder.vercel.app",
  "theme": {
    "accent": "#4a3c8f",
    "accent2": "#7ed0ad",
    "ink": "#0b0920",
    "soft": "#f0edff",
    "warm": "#e5fff5",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Programs tracked",
      "value": "26",
      "note": "sample list"
    },
    {
      "label": "Low-friction fits",
      "value": "8",
      "note": "high priority"
    },
    {
      "label": "Credit potential",
      "value": "$7.5k",
      "note": "fictional estimate"
    }
  ],
  "stages": [
    {
      "label": "Discover",
      "detail": "Collect official program links, value, deadline, and eligibility language.",
      "status": "ready",
      "owner": "Research",
      "index": 1
    },
    {
      "label": "Qualify",
      "detail": "Rank by fit, friction, payout speed, and business usefulness.",
      "status": "active",
      "owner": "Studio",
      "index": 2
    },
    {
      "label": "Prepare",
      "detail": "List exact info needed before any application is submitted.",
      "status": "waiting",
      "owner": "Chris",
      "index": 3
    },
    {
      "label": "Track",
      "detail": "Maintain status, reminders, and reuse notes for future applications.",
      "status": "queued",
      "owner": "Ops",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "AI credits",
      "detail": "Rank provider credit paths by friction",
      "status": "ready"
    },
    {
      "title": "Cloud programs",
      "detail": "Compare eligibility wording",
      "status": "active"
    },
    {
      "title": "Accelerator perk",
      "detail": "Waiting on business profile detail",
      "status": "waiting"
    },
    {
      "title": "Follow-up list",
      "detail": "Queued for tracking export",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Opportunity board",
      "detail": "Ranked programs with value, deadline, and application effort."
    },
    {
      "title": "Eligibility memo",
      "detail": "Clear gaps to resolve before applying."
    },
    {
      "title": "Tracking system",
      "detail": "Status and reminder fields for repeatable research."
    }
  ],
  "timeline": [
    {
      "time": "0-2 hrs",
      "detail": "Gather official links and terms"
    },
    {
      "time": "2-6 hrs",
      "detail": "Rank and document top fits"
    },
    {
      "time": "6-10 hrs",
      "detail": "Package application-readiness notes"
    }
  ],
  "proof": [
    "Supports the request for credits and grants that offset AI work.",
    "Separates research from applications requiring human approval.",
    "Contains sample program data only, not live scraped claims."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
