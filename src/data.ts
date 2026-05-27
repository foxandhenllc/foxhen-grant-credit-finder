export type ItemStatus = "backlog" | "active" | "blocked" | "ready" | "done";

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  owner: string;
  status: ItemStatus;
  priority: number;
  effort: number;
  friction: number;
  value: number;
  due: string;
  notes: string;
};

export type QualityCheck = {
  id: string;
  label: string;
  passed: boolean;
  weight: number;
};

export const sample: {
  repoName: string;
  title: string;
  subtitle: string;
  serviceLine: string;
  description: string;
  repositoryUrl: string;
  liveDemoUrl: string;
  theme: { accent: string; accent2: string; ink: string; soft: string; warm: string };
  items: WorkItem[];
  checks: QualityCheck[];
  deliverables: string[];
} = {
  "repoName": "foxhen-grant-credit-finder",
  "title": "Grant Credit Finder",
  "subtitle": "credit tracker",
  "serviceLine": "Founder ops research",
  "description": "Rank fictional grants and credit programs by fit, friction, value, deadline, and application readiness.",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-grant-credit-finder",
  "liveDemoUrl": "https://freetoolsforpeople.com/grant-credit-finder",
  "theme": {
    "accent": "#4a3c8f",
    "accent2": "#7ed0ad",
    "ink": "#0b0920",
    "soft": "#f0edff",
    "warm": "#e5fff5"
  },
  "items": [
    {
      "id": "gra-1",
      "title": "AI credits",
      "category": "Intake",
      "owner": "Chris",
      "status": "active",
      "priority": 5,
      "effort": 2,
      "friction": 1,
      "value": 5,
      "due": "Today",
      "notes": "Sample credit tracker work item for founder ops research."
    },
    {
      "id": "gra-2",
      "title": "Cloud program",
      "category": "Build",
      "owner": "Fox & Hen",
      "status": "backlog",
      "priority": 4,
      "effort": 4,
      "friction": 2,
      "value": 4,
      "due": "24h",
      "notes": "Sample credit tracker work item for founder ops research."
    },
    {
      "id": "gra-3",
      "title": "Founder perk",
      "category": "Review",
      "owner": "Buyer",
      "status": "blocked",
      "priority": 3,
      "effort": 3,
      "friction": 4,
      "value": 4,
      "due": "48h",
      "notes": "Sample credit tracker work item for founder ops research."
    },
    {
      "id": "gra-4",
      "title": "Eligibility note",
      "category": "Export",
      "owner": "Automation",
      "status": "ready",
      "priority": 4,
      "effort": 2,
      "friction": 2,
      "value": 3,
      "due": "This week",
      "notes": "Sample credit tracker work item for founder ops research."
    },
    {
      "id": "gra-5",
      "title": "Application gap",
      "category": "Intake",
      "owner": "QA",
      "status": "backlog",
      "priority": 2,
      "effort": 1,
      "friction": 1,
      "value": 3,
      "due": "Waiting",
      "notes": "Sample credit tracker work item for founder ops research."
    },
    {
      "id": "gra-6",
      "title": "Follow-up list",
      "category": "Build",
      "owner": "Chris",
      "status": "done",
      "priority": 5,
      "effort": 5,
      "friction": 3,
      "value": 5,
      "due": "Next pass",
      "notes": "Sample credit tracker work item for founder ops research."
    }
  ],
  "checks": [
    {
      "id": "payer",
      "label": "Payer or owner is clear",
      "passed": true,
      "weight": 18
    },
    {
      "id": "deliverable",
      "label": "Deliverable has acceptance criteria",
      "passed": true,
      "weight": 18
    },
    {
      "id": "friction",
      "label": "Account/access friction is documented",
      "passed": false,
      "weight": 14
    },
    {
      "id": "handoff",
      "label": "Handoff package is generated",
      "passed": false,
      "weight": 16
    },
    {
      "id": "reuse",
      "label": "Repeatable pipeline note exists",
      "passed": true,
      "weight": 12
    }
  ],
  "deliverables": [
    "Ranked board",
    "Editable item inspector",
    "Readiness checklist",
    "Exportable handoff report"
  ]
};
