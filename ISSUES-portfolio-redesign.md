# Issues — Portfolio Redesign v2

Generated from PRD-portfolio-redesign.md. 9 vertical slices, published in dependency order.

---

## Issue 1 — Swap color palette to Deep Teal

**Type:** AFK
**Blocked by:** None — can start immediately

### What to build

Replace the current purple accent and dark background with the Deep Teal palette across the entire site. All color values are defined as CSS custom properties in `globals.css` — this slice is a targeted value swap, not a component-level change.

Dark mode target values:
- Accent: `#2dd4bf`
- Background: `#0a1628`
- Card background: a slightly lighter navy derived from the background

Light mode target values:
- Accent: teal family consistent with dark mode
- Background: `#f0fdfa`

All components consume color via CSS custom properties, so no component files should need changes beyond the token definitions.

### Acceptance criteria

- [ ] Dark mode shows deep navy background and teal accent throughout
- [ ] Light mode shows `#f0fdfa` background with a consistent teal accent
- [ ] Navbar, hero, cards, badges, tags, and buttons all reflect the new palette
- [ ] No hardcoded hex values remain for the old purple/violet accent
- [ ] Both dark and light modes toggled — no jarring colour mismatch

---

## Issue 2 — Update section render order and navbar links

**Type:** AFK
**Blocked by:** None — can start immediately

### What to build

Reorder the sections rendered in the home page from the current sequence (Hero → About → Experience → Projects → Skills → Contact → Footer) to the new recruiter-optimised sequence: **Hero → About → Projects → Skills → Experience → Contact → Footer**.

Update the navbar link list and any anchor `href` values to match the new order so smooth-scroll navigation stays correct.

### Acceptance criteria

- [ ] Home page renders sections in order: Hero, About, Projects, Skills, Experience, Contact, Footer
- [ ] Navbar links appear in the updated order
- [ ] Clicking each navbar link smooth-scrolls to the correct section
- [ ] No broken anchor references remain from the old order

---

## Issue 3 — Rewrite Hero typed titles and add Resume CTA

**Type:** HITL
**Blocked by:** None (code changes are AFK — but the resume PDF must be provided by Laila before the download link goes live)

### What to build

Two changes to the Hero section:

**Typed titles:** Reduce the typed animation from 4 titles to exactly 2: `["Frontend Developer", "Full-Stack Builder"]`. The animation timing and hook logic stay the same — only the titles array changes.

**Resume CTA:** Add a "Download Resume" button alongside the existing primary CTA. The button links to a PDF placed at `/public/resume.pdf`. Style it as a ghost/outlined button to contrast with the primary CTA. If the PDF is not yet available, render the button as disabled with a tooltip or simply omit it until the asset is ready.

### Acceptance criteria

- [ ] Typed animation cycles between exactly 2 titles: "Frontend Developer" and "Full-Stack Builder"
- [ ] "Download Resume" button is visible in the Hero section
- [ ] Clicking the button opens or downloads the PDF from `/public/resume.pdf`
- [ ] Button is visually distinct from the primary CTA (ghost/outlined style)
- [ ] Hero layout remains clean on mobile — buttons stack or wrap without overflow

---

## Issue 4 — Rewrite About section bio copy

**Type:** AFK
**Blocked by:** None — can start immediately

### What to build

Replace the two existing bio paragraphs in the About component with 2 tighter sentences that lead with the tech stack and frame the diverse background as a strength:

> *"I'm Laila — a frontend-leaning developer who builds full-stack web apps with React, Next.js, and TypeScript. I come from a diverse background in project management and community work, which means I ship with both technical precision and real-world empathy."*

The headline `"A developer who ships."` stays unchanged. The GitHub and LinkedIn link buttons stay unchanged.

### Acceptance criteria

- [ ] Bio is exactly 2 sentences matching the copy above (or approved variation)
- [ ] Bio leads with tech stack in sentence 1
- [ ] Diverse background appears in sentence 2, framed as a developer strength
- [ ] Headline "A developer who ships." is unchanged
- [ ] No references to skincare, four languages, or school budgets remain in the bio

---

## Issue 5 — Replace DiceBear avatar with real photo

**Type:** HITL
**Blocked by:** None (code changes are AFK — but the photo asset must be provided by Laila)

### What to build

Replace the generated DiceBear `<Image>` source with a local photo asset. The photo should be placed in `/public` (e.g. `/public/avatar.jpg`) and referenced via a relative path.

The container is a `w-52 h-52 rounded-2xl` — the image should be cropped close to square before placement so it fills the container without awkward letterboxing.

Remove the `unoptimized` prop and the `dicebear.com` remote pattern from `next.config.ts` once the local asset is in place, if no other remote images remain.

### Acceptance criteria

- [ ] About section displays the real photo, not the DiceBear illustration
- [ ] Photo fills the `w-52 h-52` container without distortion or letterboxing
- [ ] `next.config.ts` remote pattern for `dicebear.com` removed if no longer needed
- [ ] `unoptimized` prop removed from the image (Next.js optimization enabled for local asset)

---

## Issue 6 — Build browser frame mockup component

**Type:** AFK
**Blocked by:** None — can start immediately

### What to build

Create a reusable `BrowserFrame` component that wraps a screenshot image in a realistic browser chrome. This component is a dependency for the Projects section redesign (Issue 7).

The browser chrome should include:
- Three dots (close / minimise / maximise) in the top-left, coloured red/yellow/green
- A fake address bar in the centre showing the project's live URL
- A thin top bar containing both elements, with a subtle bottom border separating it from the content area
- The screenshot `<Image>` fills the content area below the chrome

The component should accept:
- `src` — screenshot image path
- `url` — string to display in the fake address bar
- `alt` — passed through to the underlying `<Image>`

A placeholder state (no `src` provided) should render a solid teal-tinted rectangle so layout is visible before screenshots are ready.

### Acceptance criteria

- [ ] Component renders browser chrome with three dots and address bar
- [ ] Address bar displays the passed `url` prop
- [ ] Screenshot fills the content area below the chrome without overflow
- [ ] Placeholder renders correctly when no `src` is provided
- [ ] Component is responsive — scales correctly at all viewport widths

---

## Issue 7 — Redesign Projects section with editorial split layout

**Type:** AFK
**Blocked by:** Issue 6 (BrowserFrame component)

### What to build

Replace the current card grid in the Projects section with full-width editorial rows. Each row is an alternating split layout:

- Odd-numbered projects (1st, 3rd): text left, BrowserFrame right
- Even-numbered projects (2nd, 4th): BrowserFrame left, text right

Each row contains:
- Project title, status badge (Live / In Progress), description, tech stack tags, and links
- A `BrowserFrame` showing a screenshot of the app (placeholder until screenshots are provided)

**Project order and special handling:**
1. Todo App — full split row, browser frame
2. Bookkeeping App — full split row, browser frame
3. Recipe App — full split row, browser frame with "In Progress" overlay badge
4. Gilguzi.com — reduced visual weight: standard card layout (no browser frame), labelled "Web Design" not "App", appears below the main rows

On mobile, each row stacks vertically: image on top, text below.

Screenshots are not yet available — placeholder slots must be clearly identifiable in the component (e.g. a comment or prop) so they are easy to swap when assets arrive.

### Acceptance criteria

- [ ] Projects render as full-width alternating split rows (text/frame, frame/text)
- [ ] Odd rows: text left, frame right. Even rows: frame left, text right
- [ ] BrowserFrame placeholder renders for all projects until screenshots are provided
- [ ] Recipe App row shows an "In Progress" overlay badge on the frame
- [ ] Gilguzi.com appears below the main rows as a reduced-weight card, labelled "Web Design"
- [ ] On mobile (≤768px), rows stack vertically with image above text
- [ ] Tech stack tags, status badges, and project links all render correctly

---

## Issue 8 — Consolidate Skills section to 4 categories

**Type:** AFK
**Blocked by:** None — can start immediately

### What to build

Restructure the skills data and section to reduce from 6 categories to 4:

- Remove the "Professional" category entirely (entries like communication, problem-solving belong in experience bullet points, not a skills tag grid)
- Merge "Tools" and "Platforms" into a single "Tools & Platforms" category

The resulting 4 categories: **Languages, Frameworks, Design, Tools & Platforms**

Update the `SkillCategory` type in `lib/types.ts` to reflect the removed and merged categories. Update `data/skills.ts` to reassign any "Tools" or "Platforms" entries to "Tools & Platforms" and remove all "Professional" entries.

### Acceptance criteria

- [ ] Skills section renders exactly 4 category headers: Languages, Frameworks, Design, Tools & Platforms
- [ ] No "Professional" skills appear anywhere in the section
- [ ] All former "Tools" and "Platforms" entries appear under "Tools & Platforms"
- [ ] `SkillCategory` type updated — no TypeScript errors
- [ ] Skill count and icons are otherwise unchanged

---

## Issue 9 — Reframe Experience bullet points for non-dev roles

**Type:** AFK
**Blocked by:** None — can start immediately

### What to build

Rewrite the bullet points / descriptions for non-dev experience entries in `data/experience.ts` so they surface transferable skills relevant to a software development recruiter. The roles, titles, dates, and companies stay unchanged — only the descriptive copy changes.

Reframing guidelines per role type:
- **Teaching roles** → curriculum design, explaining technical concepts to non-technical audiences, structured communication
- **Interpreting / multilingual roles** → cross-cultural communication, stakeholder translation, precision under pressure
- **Skincare / retail roles** → client-facing ownership, attention to detail, project delivery
- **Finance / project management roles** → budget management, delivery under constraints, cross-functional coordination

Dev roles (Ark, web dev) stay as-is — ensure tech stack and technical contributions are foregrounded in those entries.

### Acceptance criteria

- [ ] All 6 experience entries render without errors
- [ ] Non-dev role descriptions reference transferable skills (communication, project management, client work, etc.)
- [ ] No entry description reads as irrelevant to a software development context
- [ ] Dev role entries foreground technical stack and contributions
- [ ] Role titles, companies, and dates are unchanged
