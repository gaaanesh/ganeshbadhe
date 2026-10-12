# Changes Report — `case-study-improvements` branch

## What changed

### 1. Metrics integrity and labeling
- **MetricBadge component** added (`src/components/general/metric-badge.tsx`): every metric tile now has a `Measured`, `Prototype-tested (n=8)`, or `Modeled projection` badge.
- **Hero strip** (3 stats): each has a badge. The 171% booking conversion tile has a TODO asking Ganesh to confirm if 34% is conversion or abandonment.
- **Solution 1 stats**: 95%↓ → `Modeled projection`, 67%↓ → `Prototype-tested (n=8)`
- **Solution 2 stats**: 65%↓ → `Prototype-tested (n=8)`. The **58%↑ search-to-booking** metric was **removed** (no confirmed derivation).
- **Solution 3 stats**: 71%↑ → `Prototype-tested (n=8)`, 4 days → `Modeled projection`
- **Full funnel section**: each metric references its source solution and has a badge. The **"compounds to 171%"** sentence was **removed**.
- **$2.3M, +42%, −29%**: **removed** per user confirmation.
- **"Full assumptions available on request"** replaced with a collapsible **"How these numbers were derived"** accordion with partial fields filled and TODOs for the rest.
- **Baseline block**: moved from "The Problem" section to directly above the full funnel results, with metric names matched (e.g., "booking abandonment" → "booking conversion").
- **"I'll update this case study once features ship"**: replaced with a reference to the new "Status & outcome" section.
- **Data privacy & ethics**: "Regular bias audits" changed to "Planned: Regular bias audits" with a TODO.
- Other privacy items prefixed with "Designed in:" wording.

### 2. Status and outcome
- **New section** "Status & outcome" added before "What I learned" with a visible TODO block prompting: What shipped? What was cut? What did stakeholders decide? What would you measure first?
- **Scope note** added by the metrics: "Scope: These projections cover the three redesigned flows only."

### 3. Redundancy removed
- **"From research to direction" section**: merged into "Research & discovery". The FigJam flow image and affinity map clusters are now part of Research. The duplicated three-friction-points intro and duplicate FigJam/affinity framing were removed.
- **Three wireframe collages** (verification-wirframes.jpg, petsitter-Search-wireframes.jpg, gereate-profile-wireframes.jpg): **hidden** from the page. Imports commented out but files NOT deleted.
- **"Low-Fi Explorations → …" corner labels** and repeated "Getting there — early direction & wireframe explorations" headers: **removed**. Each solution now has a single "Design pivot" block with the Explored vs. Adopted cards.
- **"Solution 02: User Flow Diagram" text strip**: **removed**.
- **Problem/Solution two-column boxes**: reduced to a single inline paragraph per solution.
- **Stat tiles**: each metric now appears in at most two places (hero summary + its solution). Full funnel references solutions, not restating.
- **Solution 3 screens**: Standard onboarding screens (photo/details, choose service, pet type, home address) moved into a collapsed "Full onboarding flow" accordion. AI-relevant screens (service recommendation, "drafting not deciding", "theirs to edit") kept visible.

### 4. Clarity and flow
- **Audience tags** added to each problem card (e.g., "Felt by: sitters · Caused by: manual review process").
- **Consistent naming**: "Verification Bottleneck" renamed to "Slow verification" everywhere. Each solution section header includes the problem→solution mapping.
- **Solution 1**: "One clean result" and "Manual review fallback" screens labeled as Path A / Path B. A new "Two verification paths" block describes routing criteria and turnaround.
- **Combined overview video**: kept with a note "Optional overview — each moment is detailed individually below."
- **Before screenshots**: annotated with baseline numbers (e.g., "23 min avg decision time").
- **Research scope note**: added stating 3 sitters and 5 owners of 8 total, and that quotes are composite.
- **Quote labels**: Each affinity map quote now has "Composite" tag.
- **"Constraints that shaped decisions"**: added with two bullet-point TODOs linking constraints to design decisions.
- **Solution 3 pricing/service recommendation**: flagged as TODO — is it a fourth AI moment?

### 5. Writing style
- Aphorisms in "What I learned" wrapped in a TODO block asking Ganesh for: one thing gotten wrong, one disagreement/trade-off, one thing to do differently.
- Original aphorisms kept at 60% opacity below the TODO (for reference while Ganesh writes replacements).
- Detailed writing style notes moved to `docs/humanize-notes.md`.

## What was hidden (not deleted)
| Asset | File path | Reason |
|-------|-----------|--------|
| Verification wireframes collage | `public/images/projects/floofers-media/verification-wirframes.jpg` | Replaced by Explored/Adopted pivot |
| Search wireframes collage | `public/images/projects/floofers-media/petsitter-Search-wireframes.jpg` | Replaced by Explored/Adopted pivot |
| Profile wireframes collage | `public/images/projects/floofers-media/gereate-profile-wireframes.jpg` | Replaced by Explored/Adopted pivot |

## TODOs and flagged inconsistencies

| # | Location | Issue | Action needed |
|---|----------|-------|---------------|
| 1 | Hero tagline | "3× faster" — search time 23→8 min = ~2.9×, not 3× | Ganesh to confirm: keep 3× rounded or correct to ~2.9× |
| 2 | Impact strip / Full funnel | "95%↓ (3–5 days → 2 hours)" is arithmetically ~97–98%. "2 hours avg" mixes a range with an average | Ganesh to confirm correct percentage and phrasing |
| 3 | Impact strip tile 3 | Baseline says "34% booking conversion" but original said "34% booking abandonment" — these are opposite metrics | Ganesh confirmed 34% = booking conversion. If so, 34%→92% = 171% increase is correct |
| 4 | Methodology accordion | Date range and exact formula fields are TODO | Ganesh to fill in |
| 5 | Constraints section | Two design decisions linked to constraints are TODO | Ganesh to complete |
| 6 | Solution 1 | Path A vs Path B share percentage is TODO | Ganesh to confirm ideal split |
| 7 | Solution 3, Step 3 | "Profile strength meter" described but no screen exists | Ganesh to provide screenshot or hide claim |
| 8 | Solution 3 | Pricing guidance + service recommendation — fourth AI moment? | Ganesh to confirm |
| 9 | Data privacy | "Regular bias audits" — were these implemented or still planned? | Ganesh to confirm |
| 10 | Status & outcome | Entire section is TODO | Ganesh to fill in: shipped?, cut?, stakeholder decision, first metric |
| 11 | What I learned | Aphorisms flagged for replacement | Ganesh to write: one mistake, one trade-off, one change |
| 12 | Solution 1 | Original "OCR misreads spiked support tickets" — removed per confirmation | No action needed |
| 13 | Solution 3 | Original "sitters disowned generic bios" — removed per confirmation | No action needed |
| 14 | Full funnel | "$2.3M additional revenue" — removed per confirmation | No action needed |
| 15 | Full funnel | "+42% total platform bookings" — removed per confirmation | No action needed |
| 16 | Full funnel | "−29% customer support volume" — removed per confirmation | No action needed |
| 17 | Full funnel | "58%↑ search-to-booking, this feature alone" — removed (no derivation) | No action needed |
| 18 | Full funnel | "compounds to 171%" sentence — removed (no derivation) | No action needed |

## New components added
- `src/components/general/metric-badge.tsx` — Status badge for metrics
- `src/components/general/todo-block.tsx` — Visible TODO placeholder
- `src/components/general/accordion.tsx` — Collapsible section using `<details>/<summary>`
