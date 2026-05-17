# PRD — Portfolio Redesign v2

## Problem Statement

The current portfolio presents a developer with a diverse background in a way that confuses rather than convinces. Non-dev experience entries appear alongside dev roles without clear framing, skills are spread across 6 categories diluting focus, the accent colour blends in with the majority of developer portfolios, and projects lack visual previews that demonstrate the apps are real and live. The result is a portfolio that is technically complete but fails to make a strong first impression on software/web dev recruiters scanning in under 10 seconds.

## Solution

Redesign and restructure the portfolio with a recruiter-first lens: lead with projects and proof of work, tighten the personal narrative to 2 sentences that foreground the tech stack, swap to a distinctive deep teal palette that stands out in a recruiter's tab stack, and add editorial split-layout project previews (browser frame mockups) so apps are visible at a glance. Non-dev experience entries stay but are reframed around transferable skills so they read as strengths, not distractions.

## User Stories

1. As a recruiter, I want to immediately see the candidate's role positioning, so that I can decide in under 10 seconds if the profile is relevant.
2. As a recruiter, I want to download a resume from the hero section, so that I can share it with a hiring manager without hunting through the site.
3. As a recruiter, I want to see live app previews next to project descriptions, so that I can confirm the projects are real and deployed.
4. As a recruiter, I want to see projects before experience, so that I judge the candidate on their work rather than their job titles.
5. As a recruiter, I want experience bullet points that highlight transferable skills, so that non-dev roles don't raise a red flag.
6. As a recruiter, I want a concise skills section with 4 clear categories, so that I can quickly assess the candidate's technical stack.
7. As a portfolio visitor, I want the hero to clearly communicate the candidate's specialisation, so that I immediately understand what kind of developer they are.
8. As a portfolio visitor, I want the about section to lead with the tech stack, so that the background context lands after the relevant credentials.
9. As a portfolio visitor, I want a real photo in the about section, so that the portfolio feels personal and trustworthy.
10. As a portfolio visitor, I want a visually distinctive colour palette, so that the portfolio feels intentional and memorable rather than generic.
11. As a portfolio visitor, I want project previews shown in browser frame mockups, so that I can immediately see the app UI without clicking away.
12. As a portfolio visitor, I want alternating project layout (text left/image right, image left/text right), so that each project feels distinct and the page has visual rhythm.
13. As a portfolio visitor, I want the Gilguzi.com project listed last and de-emphasised, so that the React-built apps are foregrounded.
14. As a portfolio visitor on mobile, I want the split project layout to stack cleanly, so that previews are still visible without horizontal scrolling.
15. As Laila, I want the non-dev experience entries rewritten with transferable framing, so that they add credibility rather than confusion.
16. As Laila, I want the hero to cycle between exactly 2 typed titles, so that the animation conveys range without repetition.
17. As Laila, I want a "Download Resume" CTA in the hero alongside the existing project link, so that recruiters can get my CV immediately.
18. As Laila, I want my real photo to replace the generated DiceBear avatar, so that the about section feels human and professional.

## Implementation Decisions

### Colour System
- Replace current CSS custom property values throughout `globals.css`
- Dark mode: accent `#2dd4bf`, background `#0a1628`, card background derived from background + slight lightening
- Light mode: accent stays teal family, background `#f0fdfa`
- All components consume colours via CSS custom properties — no component-level changes needed for the palette swap itself

### Hero Section
- Reduce typed titles array from 4 entries to 2: `["Frontend Developer", "Full-Stack Builder"]`
- Add a secondary CTA button "Download Resume" alongside any existing CTA
- Resume PDF to be placed in `/public` and linked directly; no external hosting
- Button styling: outlined/ghost style to contrast with primary CTA

### About Section
- Replace DiceBear `<Image>` `src` with a local image file in `/public`
- Rewrite bio copy to 2 sentences:
  - Sentence 1: leads with tech stack (React, Next.js, TypeScript)
  - Sentence 2: frames diverse background as a developer strength (precision + empathy)
- Headline `"A developer who ships."` — keep as is

### Projects Section — Layout Redesign
- Replace card grid with full-width editorial rows
- Each row: alternating split layout — odd projects text-left/image-right, even projects image-left/text-right
- Image slot: browser frame mockup component wrapping a screenshot `<Image>`
  - Browser chrome: three dots (close/minimise/maximise) + fake address bar showing live URL
  - Screenshot: provided by user after implementation; use a placeholder with the project's accent colour until ready
- Project order: Todo App, Bookkeeping App, Recipe App, Gilguzi.com
- Gilguzi.com: displayed last, smaller visual weight (no browser frame, standard card style), labelled "Web Design" not "App"
- In-progress Recipe App: browser frame shown but with an "In Progress" overlay badge

### Skills Section
- Remove "Professional" category entirely
- Merge "Tools" and "Platforms" into a single "Tools & Platforms" category
- Result: 4 categories — Languages, Frameworks, Design, Tools & Platforms
- Layout unchanged (category headers + icon tag grid)

### Experience Section
- All 6 entries retained
- Non-dev bullet points rewritten to surface transferable skills:
  - Teaching → curriculum design, explaining technical concepts to non-technical audiences
  - Interpreting/multilingual → cross-cultural communication, stakeholder translation
  - Skincare/retail → client-facing work, project ownership, attention to detail
  - Finance/project management → budget management, delivery under constraints
- Dev roles (Ark, web dev) → kept as-is with tech detail foregrounded

### Section Order
- Updated render order in `app/page.tsx`: Hero → About → Projects → Skills → Experience → Contact → Footer
- Navbar links updated to reflect new order

### Out of Scope
- Any backend or API changes
- New projects beyond the existing 4
- Dark/light theme toggle removal (keep as-is)
- Contact form (email link stays as-is)
- SEO metadata changes
- Accessibility audit
- Performance optimisation beyond what Next.js already provides

## Testing Decisions

This is a UI-only redesign with no business logic. Formal automated tests are not warranted for these changes. Manual testing checklist applies:

- Verify palette renders correctly in both dark and light modes
- Verify typed animation cycles between exactly 2 titles with correct timing
- Verify resume PDF link opens/downloads correctly
- Verify alternating split layout renders correctly at desktop (≥1024px), tablet (768px), and mobile (375px)
- Verify browser frame mockup component renders with correct chrome elements
- Verify skills section shows exactly 4 categories with no "Professional" entries
- Verify section scroll order matches Hero → About → Projects → Skills → Experience → Contact
- Verify Gilguzi.com appears last in projects list with reduced visual weight

## Further Notes

- Screenshots for project browser frame mockups must be taken by Laila after the layout is built. Placeholder slots should be clearly marked in the component so they are easy to swap.
- Resume PDF must be updated and ready before the hero CTA is linked — a broken PDF link is worse than no link.
- The prototype at `prototypes/palette-comparison.html` was used to validate the Deep Teal palette selection and can be deleted once the palette is implemented.
- The existing prototypes `direction-1-editorial.html` and `direction-4-studio.html` in `prototypes/` may contain useful layout reference for the editorial split project rows — review before implementing.
