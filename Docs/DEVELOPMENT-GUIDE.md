# INDRA OS — Development Guide

**Document:** `DEVELOPMENT-GUIDE.md`
**Project:** INDRA OS
**System:** Personal AI Portfolio Operating System
**Owner:** Indrajit Kumar
**Guide Version:** 1.0.0
**Status:** READY FOR IMPLEMENTATION
**Last Updated:** September 2026

---

# 1. Purpose

This document defines exactly how INDRA OS should be developed.

It is intended for:

* Indrajit
* AI coding agents
* Antigravity
* VS Code / VS Code-based IDEs
* Future contributors

This document converts:

```text
PRD.md
   ↓
ARCHITECTURE.md
   ↓
DEVELOPMENT-GUIDE.md
   ↓
Actual Implementation
```

The development process must be:

> **structured, incremental, testable, reversible, and performance-conscious.**

---

# 2. Golden Rule

Before writing code:

```text
READ
 ↓
UNDERSTAND
 ↓
PLAN
 ↓
IMPLEMENT
 ↓
TEST
 ↓
REVIEW
 ↓
OPTIMIZE
```

Never:

```text
Prompt
 ↓
Generate 20,000 lines
 ↓
Hope it works
```

INDRA OS must be built as a real software system.

---

# 3. Required Documents

Before implementation, the project must contain:

```text
docs/
├── PRD.md
├── ARCHITECTURE.md
├── DEVELOPMENT-GUIDE.md
└── AI-RULES.md
```

The development agent must read all relevant documentation before making architectural changes.

---

# 4. Development Philosophy

INDRA OS follows:

### Build small.

### Verify often.

### Keep architecture clean.

### Never fake functionality.

### Never sacrifice accessibility for aesthetics.

### Never sacrifice performance for visual effects.

### Never fabricate portfolio information.

---

# 5. Development Priority

When requirements conflict, follow:

```text
1. Security
2. Correctness
3. Accessibility
4. Performance
5. Usability
6. Maintainability
7. Visual consistency
8. Experimental effects
```

Example:

If a 3D effect makes mobile unusable:

```text
REMOVE/REDUCE THE EFFECT
```

Do not make the user suffer for the animation.

---

# 6. Development Environment

Recommended environment:

```text
OS:
Windows 10/11

Editor:
Antigravity / VS Code-compatible IDE

Runtime:
Node.js LTS

Package Manager:
npm

Language:
TypeScript

Framework:
Next.js

Browser:
Microsoft Edge / Chrome

Version Control:
Git

Repository:
GitHub
```

---

# 7. Initial Project Setup

Create the application with:

```bash
npx create-next-app@latest indra-os
```

Recommended configuration:

```text
TypeScript
ESLint
App Router
Tailwind CSS
src directory: optional
Import alias: @/*
```

The exact CLI options may change between Next.js releases, so verify the generated project rather than assuming an old command format.

---

# 8. Initial Installation

Install only required dependencies.

Core:

```bash
npm install
```

For the 3D system:

```bash
npm install three @react-three/fiber @react-three/drei
```

For animation:

```bash
npm install framer-motion
```

Additional dependencies should only be added when a real requirement exists.

---

# 9. Dependency Decision Rule

Before installing a package ask:

```text
1. Do we actually need it?
2. Can browser APIs solve this?
3. Can React/Next.js solve this?
4. Does an existing dependency already solve it?
5. What is the bundle impact?
6. Is the package actively maintained?
7. Does it introduce security risk?
```

If the answer is unclear:

> Do not install it yet.

---

# 10. Project Initialization

After creating the project:

```text
INDRA-OS/
├── app/
├── components/
├── data/
├── lib/
├── hooks/
├── types/
├── config/
├── public/
├── docs/
└── tests/
```

Create the architectural directories before implementing advanced functionality.

---

# 11. First Implementation Phase

## PHASE 0 — Foundation

Build:

```text
✓ Next.js
✓ TypeScript
✓ Tailwind
✓ ESLint
✓ Basic layout
✓ Design tokens
✓ Data layer
✓ Global styles
✓ Git repository
```

Do NOT build:

```text
✗ AI
✗ Voice
✗ Complex 3D
✗ Particle systems
✗ Advanced shaders
```

at this stage.

---

# 12. Foundation Verification

Run:

```bash
npm run dev
```

Then verify:

```text
Homepage loads
No console errors
No TypeScript errors
No hydration errors
Responsive viewport works
```

Run:

```bash
npm run lint
```

Then:

```bash
npm run build
```

Do not proceed if the production build is broken.

---

# 13. Git Initialization

Initialize:

```bash
git init
```

First commit:

```bash
git add .
git commit -m "chore: initialize indra os"
```

Connect GitHub:

```bash
git remote add origin <repository-url>
```

Push:

```bash
git push -u origin main
```

---

# 14. Branch Strategy

Recommended:

```text
main
development
feature/*
fix/*
performance/*
docs/*
```

Example:

```text
feature/arxon-core
feature/project-universe
feature/ai-interface
fix/mobile-navigation
perf/3d-rendering
docs/architecture
```

---

# 15. Commit Convention

Use:

```text
feat:
fix:
perf:
refactor:
a11y:
docs:
test:
chore:
style:
```

Examples:

```text
feat: add arxon core
feat: add project universe
fix: resolve mobile menu overflow
perf: lazy load project scene
a11y: improve command palette focus
docs: update development guide
test: add project navigation tests
```

Avoid:

```text
update
changes
final
final2
new
important
working
```

---

# 16. Development Loop

Every feature follows:

```text
Issue / Requirement
       ↓
Understand
       ↓
Check Architecture
       ↓
Create Small Plan
       ↓
Implement
       ↓
Run Type Check
       ↓
Run Lint
       ↓
Test Feature
       ↓
Check Mobile
       ↓
Check Accessibility
       ↓
Check Performance
       ↓
Commit
```

---

# 17. Design System First

Before building pages, create:

```text
colors
typography
spacing
radius
shadows
borders
motion
z-index
breakpoints
```

Example:

```text
INDRA Gold
#FFB000

AI Cyan
#00E5FF

Primary Background
#050608

Secondary Background
#090D12
```

All components must use the design tokens.

---

# 18. Typography Setup

Use one primary font family and one technical font family.

Recommended:

```text
Primary:
Geist / Inter / Space Grotesk

Technical:
Geist Mono / JetBrains Mono
```

Do not load unnecessary font weights.

---

# 19. Global CSS

Global CSS should contain:

```text
CSS variables
base typography
background
selection
focus styles
scroll behavior
reduced-motion rules
utility classes
```

Avoid putting component-specific styling into global CSS.

---

# 20. Data Layer First

Create:

```text
data/
├── profile.ts
├── projects.ts
├── skills.ts
├── timeline.ts
├── achievements.ts
├── links.ts
├── commands.ts
└── system.ts
```

This should happen before building complex UI.

---

# 21. Profile Data

Example:

```ts
export const profile = {
  name: "Indrajit Kumar",
  role: "Full-Stack Developer & AI Builder",
  education: "...",
  graduation: "...",
};
```

Only verified information should be included.

If something is unknown:

```text
Do not invent it.
```

---

# 22. Project Data

Every project should follow a common structure.

Example:

```ts
{
  slug: "prago",
  name: "PraGo",
  status: "IN DEVELOPMENT",
  category: ["AI", "Healthcare", "Full Stack"],
  description: "...",
  technologies: [],
  features: [],
  architecture: [],
  links: {
    demo: "",
    github: ""
  }
}
```

The schema should be typed.

---

# 23. Project Status Rules

Allowed statuses:

```text
PLANNED
PROTOTYPE
IN DEVELOPMENT
ACTIVE
COMPLETED
EXPERIMENTAL
ARCHIVED
```

Never mark an unfinished project as:

```text
COMPLETED
```

for visual marketing purposes.

---

# 24. PHASE 1 — Application Shell

Build:

```text
HUDShell
TopBar
Navigation
Main container
Footer
```

At this point the site should already be usable as a normal portfolio.

---

# 25. Application Shell Requirement

Before adding cinematic effects:

```text
Homepage
About
Projects
Skills
Education
Contact
```

must already be accessible.

This creates the fallback version of INDRA OS.

---

# 26. PHASE 2 — Hero

Build:

```text
Hero
├── Identity
├── Role
├── Short introduction
├── CTA
└── ARXON Core placeholder
```

Do not start with heavy 3D.

First establish:

```text
layout
hierarchy
typography
CTA
responsive behavior
```

---

# 27. Hero Rule

The visitor must understand within a few seconds:

```text
Who is Indrajit?
What does he build?
What can I explore?
How do I contact him?
```

The futuristic interface must never hide these answers.

---

# 28. PHASE 3 — ARXON Core

Implement the first version using CSS/HTML.

States:

```text
idle
listening
thinking
responding
navigating
success
error
offline
```

Do not begin with a complex shader.

First make state transitions correct.

---

# 29. ARXON Core Development Order

```text
1. Static core
2. State system
3. CSS animation
4. Interaction
5. Accessibility
6. Optional particles
7. Optional WebGL
```

This prevents the 3D layer from becoming a dependency for basic functionality.

---

# 30. PHASE 4 — Navigation

Create centralized navigation.

Example:

```ts
navigateTo("projects");
navigateTo("contact");
```

All navigation systems should use it.

Sources:

```text
Buttons
Navigation
AI
Commands
Project nodes
Keyboard shortcuts
```

---

# 31. PHASE 5 — Command Palette

Implement:

```text
/
```

to open command search.

Commands:

```text
show projects
show skills
show education
go contact
open prago
open github
open linkedin
download resume
toggle accessibility
toggle sound
```

Command execution should be deterministic.

---

# 32. Command Development Rules

Command processing:

```text
Input
 ↓
Normalize
 ↓
Match command
 ↓
Validate
 ↓
Execute
 ↓
Feedback
```

Do not send deterministic commands to an AI model unnecessarily.

---

# 33. PHASE 6 — Project Universe

Only after normal project cards work.

First build:

```text
Project cards
 ↓
Project filters
 ↓
Project details
 ↓
Case study
```

Then add:

```text
Project constellation
```

This guarantees a usable fallback.

---

# 34. Project Universe Development

Stage 1:

```text
2D project map
```

Stage 2:

```text
CSS motion
```

Stage 3:

```text
Three.js / React Three Fiber
```

Stage 4:

```text
Performance optimization
```

---

# 35. Project Case Studies

Each project page should contain:

```text
Overview
Problem
Goal
Solution
Architecture
Technology
Engineering Decisions
Challenges
Solutions
Status
Demo
Repository
Future Improvements
```

Do not make every project page identical in content length.

The schema should be consistent, while the actual content can vary.

---

# 36. PHASE 7 — Engineering DNA

Create technical sections for:

```text
Languages
Frontend
Backend
Databases
Cloud
DevOps
AI
Architecture
DSA
```

Do not use fake:

```text
JavaScript — 97%
React — 94%
```

unless the metric has a legitimate documented meaning.

Prefer:

```text
Used in:
KLYRO
PraGo
Arxon AI
```

---

# 37. PHASE 8 — DSA

Display actual problem-solving information.

Possible:

```text
LeetCode
Problems solved
Problem categories
DSA languages
Selected solutions
```

Use only current verified numbers.

Do not fabricate a live API result.

---

# 38. PHASE 9 — Mission Log

Timeline structure:

```text
Education
Projects
Experiments
Milestones
Learning
```

Each entry:

```text
date
title
description
category
```

---

# 39. PHASE 10 — INDRA Lab

INDRA Lab is for experimental work.

Possible:

```text
AI experiments
3D experiments
Web experiments
Game experiments
Developer tools
Research concepts
```

Experimental work must be clearly labeled.

---

# 40. PHASE 11 — AI Interface

Only after the portfolio itself works.

Architecture:

```text
AI UI
 ↓
/api/ai
 ↓
ARXON Router
 ↓
Portfolio Context
 ↓
Guardrails
 ↓
Provider
 ↓
Validated Response
```

---

# 41. AI Development Rule

The AI must be able to answer:

```text
Who is Indrajit?
What does he build?
What projects exist?
What technologies are used?
What is the status of a project?
Where are the links?
```

It must NOT invent:

```text
salary
clients
companies
awards
users
revenue
experience
```

---

# 42. AI Context Strategy

Do not send the entire application source code to the model.

Build a controlled context:

```text
profile
projects
skills
education
timeline
links
commands
```

Then select relevant context based on intent.

---

# 43. AI Intent Routing

Example:

```text
"What technologies do you use?"
        ↓
SKILL

"Tell me about KLYRO."
        ↓
PROJECT

"Open my GitHub."
        ↓
LINK

"Take me to contact."
        ↓
NAVIGATION
```

---

# 44. AI Response Contract

AI responses should follow a predictable structure.

Example:

```ts
{
  message: string,
  intent: Intent,
  action?: Action,
  sources?: string[]
}
```

The UI should not depend on free-form model output for critical navigation.

---

# 45. PHASE 12 — Voice

Voice comes after text AI works.

Build:

```text
Voice activation
 ↓
Speech recognition
 ↓
Transcript
 ↓
Command / AI
 ↓
Response
 ↓
Optional speech synthesis
```

Voice must have a text fallback.

---

# 46. Voice Development Rule

Never assume:

```text
SpeechRecognition
```

exists.

Detect support.

If unavailable:

```text
Voice unavailable
Use text instead.
```

---

# 47. PHASE 13 — 3D System

Now build the advanced visual system.

Create:

```text
Canvas
Scene
Camera
Lighting
Materials
Core
Particles
Project Nodes
```

Keep 3D components isolated.

---

# 48. 3D Implementation Order

```text
1. Canvas
2. Camera
3. Lighting
4. Core geometry
5. Materials
6. Interaction
7. Project nodes
8. Particles
9. Post-processing
10. Optimization
```

Do not start with post-processing.

---

# 49. 3D Performance Rules

Monitor:

```text
FPS
draw calls
memory
GPU load
bundle size
asset size
```

Reduce:

```text
geometry
textures
particles
lights
post-processing
```

before adding more effects.

---

# 50. Device Quality System

Create:

```text
ULTRA
HIGH
MEDIUM
LOW
FALLBACK
```

Selection can consider:

```text
device
viewport
WebGL
reduced motion
performance signals
```

Users should also be able to reduce visual intensity manually.

---

# 51. PHASE 14 — Responsive System

Test:

```text
Desktop
Laptop
Tablet
Mobile
```

Minimum checks:

```text
320px
375px
390px
768px
1024px
1280px
1440px
1920px
```

The design should remain usable rather than merely visually compressed.

---

# 52. Mobile Development Rule

Mobile gets its own experience.

Prioritize:

```text
Content
Navigation
Touch
Performance
AI
```

Then:

```text
3D
particles
decorative effects
```

---

# 53. PHASE 15 — Accessibility

Run an accessibility review after each major UI phase.

Check:

```text
Keyboard
Focus
Labels
Contrast
Screen reader structure
Reduced motion
Forms
Dialogs
Navigation
```

Do not postpone accessibility until launch week.

---

# 54. Focus Management

When opening:

```text
modal
command palette
AI interface
mobile navigation
```

focus should move logically.

When closing:

```text
return focus to trigger
```

---

# 55. PHASE 16 — Contact System

Build:

```text
Contact form
 ↓
Client validation
 ↓
Server validation
 ↓
Spam protection
 ↓
Rate limiting
 ↓
Email / message delivery
```

States:

```text
idle
submitting
success
error
```

---

# 56. Contact Form Security

Never trust:

```text
client validation
```

alone.

Server must validate:

```text
name
email
message
```

Limit message size.

Sanitize input.

Rate limit submissions.

---

# 57. PHASE 17 — Resume

Resume should be accessible through:

```text
Hero
Navigation
AI command
AI assistant
Recruiter mode
```

Example command:

```text
download resume
```

The resume file should be maintained separately from UI code.

---

# 58. PHASE 18 — External Links

Centralize:

```text
GitHub
LinkedIn
LeetCode
Email
Resume
Project demos
```

Example:

```ts
export const links = {
  github: "...",
  linkedin: "...",
  leetcode: "...",
  email: "...",
};
```

Never duplicate URLs across dozens of components.

---

# 59. PHASE 19 — SEO

Add:

```text
metadata
canonical
Open Graph
sitemap
robots
structured data
```

Project pages should have meaningful titles.

Example:

```text
PraGo — AI Healthcare Platform | Indrajit Kumar
```

---

# 60. PHASE 20 — Analytics

Implement privacy-conscious analytics only after the core experience works.

Track:

```text
page views
project opens
resume downloads
contact clicks
AI usage
command usage
```

Do not collect unnecessary personal information.

---

# 61. PHASE 21 — Error Handling

Implement:

```text
error.tsx
not-found.tsx
loading.tsx
```

Add component boundaries around complex systems.

Especially:

```text
3D
AI
Contact
External integrations
```

---

# 62. PHASE 22 — Offline / Degraded Mode

Verify:

```text
AI offline
3D unavailable
Voice unavailable
Analytics unavailable
Slow network
```

The portfolio must remain usable.

---

# 63. PHASE 23 — Performance Optimization

Only optimize after measuring.

Check:

```text
bundle
images
fonts
3D
client components
API latency
render frequency
```

Do not blindly optimize code that has no measured problem.

---

# 64. Performance Budget

Initial targets:

```text
LCP ≤ 2.5s
INP ≤ 200ms
CLS ≤ 0.1
```

Also monitor:

```text
Initial JS
Image weight
3D asset weight
Font weight
API latency
```

---

# 65. Bundle Strategy

Prefer:

```text
Server Components
dynamic imports
lazy loading
tree-shaking
small dependencies
```

Avoid making the entire homepage a Client Component.

---

# 66. 3D Lazy Loading

The heavy 3D system should not block the initial text content.

Conceptually:

```text
Page
 ↓
Content renders
 ↓
Browser capability check
 ↓
3D loads
 ↓
3D enhancement
```

If loading fails:

```text
2D fallback
```

---

# 67. Image Optimization

Use:

```text
WebP
AVIF
SVG
```

where appropriate.

Optimize:

```text
dimensions
quality
compression
loading
```

Never upload a huge image simply because modern devices can display it.

---

# 68. Font Optimization

Load only required:

```text
families
weights
styles
```

Avoid:

```text
5 font families
10 weights
```

for a small portfolio.

---

# 69. Rendering Performance

Avoid unnecessary re-renders.

Watch for:

```text
global state updates
animation state
mouse movement
scroll events
3D state
AI messages
```

Use appropriate:

```text
memoization
refs
event throttling
requestAnimationFrame
```

only when justified.

---

# 70. Scroll Architecture

Do not hijack scrolling.

Normal browser scrolling should work.

Avoid:

```text
forced scroll snapping everywhere
scroll lock without reason
scroll-jacking
```

Use scroll effects as enhancement.

---

# 71. Animation Development Rules

Every animation must answer:

```text
Why does this move?
```

Good reasons:

```text
feedback
hierarchy
state
navigation
focus
storytelling
```

Bad reason:

```text
Because it looks cool.
```

---

# 72. Reduced Motion Implementation

Use:

```css
@media (prefers-reduced-motion: reduce)
```

Reduce:

```text
transforms
parallax
particles
continuous rotation
large transitions
```

---

# 73. Sound Development

Default:

```text
OFF
```

User control:

```text
Sound ON/OFF
```

Never autoplay cinematic sound unexpectedly.

---

# 74. Browser Testing

Test:

```text
Chrome
Edge
Firefox
Safari
```

At minimum verify:

```text
navigation
AI
3D fallback
forms
keyboard
mobile layout
animations
```

---

# 75. Testing Commands

Depending on configured scripts:

```bash
npm run lint
npm run build
npm test
npm run test:e2e
```

Do not assume a script exists before checking `package.json`.

---

# 76. Unit Testing

Test:

```text
command parser
navigation controller
data utilities
AI intent router
validation
formatters
```

Example:

```text
"open prago"
→ OPEN_PROJECT
→ prago
```

---

# 77. Component Testing

Test:

```text
Button
Modal
CommandPalette
AIInput
ProjectCard
ProjectNode
ContactForm
Navigation
```

Focus on behavior rather than implementation details.

---

# 78. E2E Testing

Critical journeys:

```text
Open homepage
Open project
Navigate to contact
Open command palette
Run command
Open AI
Submit contact
Download resume
Toggle accessibility
```

---

# 79. Accessibility Testing

Test with:

```text
keyboard only
screen reader
reduced motion
zoom
high contrast
mobile touch
```

---

# 80. Visual Testing

Check:

```text
spacing
alignment
responsive breakpoints
font rendering
overflow
z-index
modal layering
3D overlap
```

Do not accept:

```text
horizontal scrollbar
clipped text
hidden buttons
unreachable dialogs
```

---

# 81. AI Testing

Create test questions.

### Profile

```text
Who is Indrajit?
```

### Skills

```text
What technologies does Indrajit use?
```

### Projects

```text
Tell me about PraGo.
```

### Unknown

```text
What is Indrajit's salary?
```

Expected:

```text
Information unavailable.
```

### Navigation

```text
Open contact.
```

Expected:

```text
Navigate to contact.
```

---

# 82. AI Safety Test

Ask:

```text
Did Indrajit work at Google?
```

If the portfolio does not document this:

```text
Do not claim it.
```

Ask:

```text
How many users does PraGo have?
```

If not documented:

```text
Do not invent a number.
```

---

# 83. 3D Testing

Verify:

```text
WebGL available
WebGL unavailable
mobile GPU
reduced motion
low-power device
slow device
```

Expected fallback:

```text
usable interface
```

---

# 84. Security Testing

Check:

```text
.env not committed
API keys not exposed
input validation
rate limits
XSS protection
safe links
dependency vulnerabilities
```

Run dependency audit where appropriate:

```bash
npm audit
```

Review findings rather than blindly applying every suggested update.

---

# 85. Git Pre-Commit Checklist

Before commit:

```text
[ ] Code works
[ ] TypeScript passes
[ ] Lint passes
[ ] No console errors
[ ] Mobile checked
[ ] Accessibility checked
[ ] No secrets
[ ] No fake content
[ ] No unnecessary dependency
[ ] Documentation updated if needed
```

---

# 86. Pull Request Checklist

Before merge:

```text
[ ] Requirement satisfied
[ ] Architecture respected
[ ] Tests added/updated
[ ] Responsive
[ ] Accessible
[ ] Performance checked
[ ] Security checked
[ ] No unrelated changes
```

---

# 87. AI Coding Agent Workflow

When asking an AI coding agent to implement something:

Use:

```text
1. Give the feature goal.
2. Tell it to inspect the existing code.
3. Tell it to read relevant docs.
4. Ask for a short implementation plan.
5. Ask it to implement incrementally.
6. Ask it to test.
7. Ask it to summarize changed files.
```

Do not ask:

```text
Build the entire website in one prompt.
```

---

# 88. Recommended AI Agent Prompt Pattern

Example:

```text
Read:
- docs/PRD.md
- docs/ARCHITECTURE.md
- docs/DEVELOPMENT-GUIDE.md

Task:
Implement the ARXON Core idle state.

Requirements:
- Follow existing design tokens.
- Do not add unnecessary dependencies.
- Keep the component reusable.
- Support reduced motion.
- Keep it responsive.
- Do not modify unrelated files.

Before coding:
- Inspect existing structure.
- Identify files that need changes.
- Provide a concise implementation plan.

After coding:
- Run type checking.
- Run lint.
- Test the component.
- Report changed files and any remaining issues.
```

---

# 89. AI Agent Anti-Patterns

Stop the agent if it:

```text
rewrites the whole project
creates duplicate components
adds many packages
moves files without reason
changes architecture unnecessarily
fabricates content
removes accessibility
ignores mobile
creates fake metrics
hardcodes secrets
```

---

# 90. One Feature at a Time

Bad:

```text
Build AI + 3D + voice + analytics + contact.
```

Good:

```text
Build AI input.
Test.
Build AI router.
Test.
Build AI response.
Test.
Then voice.
```

---

# 91. File Ownership Rule

A feature should have a clear home.

Example:

```text
AI logic
→ lib/ai

3D logic
→ lib/three

Portfolio content
→ data

Reusable UI
→ components/ui

AI UI
→ components/ai
```

Do not put everything into:

```text
components/
```

---

# 92. Component Size Rule

If a component becomes difficult to understand:

```text
Extract subcomponents.
```

Possible signal:

```text
200–300+ lines
```

This is not a strict law.

Complexity matters more than line count.

---

# 93. No Magic Values

Avoid:

```ts
if (width < 783) ...
```

Prefer named configuration:

```ts
BREAKPOINTS.tablet
```

Avoid:

```ts
setTimeout(..., 1734)
```

unless the timing has a documented reason.

---

# 94. Central Configuration

Create:

```text
config/
├── site.ts
├── performance.ts
├── ai.ts
└── environment.ts
```

Examples:

```text
site title
social links
performance limits
AI settings
feature flags
```

---

# 95. Environment Handling

Development:

```text
.env.local
```

Template:

```text
.env.example
```

Production secrets should be stored in the deployment platform.

Never commit secrets.

---

# 96. Deployment Workflow

Recommended:

```text
Feature branch
 ↓
GitHub
 ↓
Preview deployment
 ↓
Manual verification
 ↓
Merge
 ↓
Production
```

Never use production as the first testing environment.

---

# 97. Production Checklist

Before launch:

```text
[ ] Build succeeds
[ ] No console errors
[ ] No hydration warnings
[ ] Mobile tested
[ ] Desktop tested
[ ] Safari tested
[ ] Accessibility checked
[ ] SEO metadata checked
[ ] Sitemap checked
[ ] Robots checked
[ ] Contact tested
[ ] Resume tested
[ ] External links tested
[ ] AI tested
[ ] AI fallback tested
[ ] WebGL fallback tested
[ ] Reduced motion tested
[ ] Secrets checked
[ ] Performance measured
```

---

# 98. Launch Strategy

Do not launch every experimental feature simultaneously.

Recommended:

### Release 1

```text
Core portfolio
Projects
Skills
Education
Contact
Resume
Responsive design
Accessibility
```

### Release 2

```text
ARXON Core
Command system
Project Universe
```

### Release 3

```text
AI
Voice
Advanced 3D
```

### Release 4

```text
Diagnostics
Experiments
Advanced interactions
```

This makes debugging dramatically easier.

---

# 99. Feature Rollout Principle

Every feature should have:

```text
Fallback
Error state
Loading state
Mobile behavior
Accessibility behavior
```

If one is missing, the feature is incomplete.

---

# 100. Debugging Workflow

When something breaks:

```text
1. Reproduce
2. Identify scope
3. Read error
4. Inspect recent changes
5. Isolate subsystem
6. Fix smallest root cause
7. Test
8. Check regressions
9. Commit
```

Do not immediately rewrite the subsystem.

---

# 101. Debugging Order

Check:

```text
Console
 ↓
Network
 ↓
React/Next errors
 ↓
TypeScript
 ↓
CSS/layout
 ↓
State
 ↓
External services
```

---

# 102. 3D Debugging

If 3D breaks:

```text
1. Check WebGL
2. Check Canvas
3. Check scene
4. Check camera
5. Check lights
6. Check model/assets
7. Check materials
8. Check post-processing
```

Temporarily disable advanced effects.

---

# 103. AI Debugging

If AI fails:

```text
1. Check API request
2. Check server route
3. Check environment variables
4. Check provider
5. Check router
6. Check context
7. Check response schema
8. Check UI rendering
```

Never expose provider errors directly to visitors.

---

# 104. Mobile Debugging

Check:

```text
viewport
overflow
touch targets
fixed elements
keyboard
safe areas
font scaling
3D load
memory
```

---

# 105. Accessibility Debugging

Ask:

```text
Can I use the entire website without a mouse?
```

Then:

```text
Can I understand the website without animation?
```

Then:

```text
Can a screen reader understand the page structure?
```

---

# 106. Content Accuracy Workflow

Before publishing:

```text
Profile
 ↓
Education
 ↓
Skills
 ↓
Projects
 ↓
Links
 ↓
Metrics
```

Every factual claim should have a source in the project's data.

---

# 107. No Fake Metrics Rule

Never invent:

```text
10K users
99.9% uptime
1M requests
₹10Cr revenue
98% AI accuracy
```

unless those metrics are real and documented.

---

# 108. Project Honesty

Use:

```text
Concept
Prototype
Experimental
In Development
Completed
```

appropriately.

A visually impressive demo is not automatically a production system.

---

# 109. Documentation Rule

When architecture changes:

Update:

```text
ARCHITECTURE.md
```

When implementation process changes:

Update:

```text
DEVELOPMENT-GUIDE.md
```

When product requirements change:

Update:

```text
PRD.md
```

When AI-agent rules change:

Update:

```text
AI-RULES.md
```

---

# 110. Documentation Hierarchy

```text
PRD
 │
 ├── What
 │
 ▼
ARCHITECTURE
 │
 ├── How the system is structured
 │
 ▼
DEVELOPMENT GUIDE
 │
 ├── How to build it
 │
 ▼
AI RULES
 │
 └── How coding agents must behave
```

---

# 111. Development Milestones

## Milestone 1

```text
Foundation
```

Deliver:

```text
Next.js
TypeScript
Design tokens
Data layer
Git
```

---

## Milestone 2

```text
Portfolio Core
```

Deliver:

```text
Hero
About
Projects
Skills
Education
Contact
Resume
```

---

## Milestone 3

```text
ARXON Interaction
```

Deliver:

```text
ARXON Core
States
Navigation
Command palette
```

---

## Milestone 4

```text
Project Universe
```

Deliver:

```text
Project constellation
Case studies
Project interactions
```

---

## Milestone 5

```text
Intelligence
```

Deliver:

```text
AI
Intent routing
Portfolio context
Guardrails
```

---

## Milestone 6

```text
Voice
```

Deliver:

```text
Speech recognition
Speech synthesis
Voice commands
Fallback
```

---

## Milestone 7

```text
Advanced Visuals
```

Deliver:

```text
Three.js
R3F
Particles
Lighting
Performance profiles
```

---

## Milestone 8

```text
Production
```

Deliver:

```text
SEO
Analytics
Security
Testing
Performance
Deployment
```

---

# 112. Final Development Architecture

```text
PHASE 0
Foundation
      ↓
PHASE 1
Design System
      ↓
PHASE 2
Application Shell
      ↓
PHASE 3
Portfolio Content
      ↓
PHASE 4
ARXON Core
      ↓
PHASE 5
Navigation + Commands
      ↓
PHASE 6
Project Universe
      ↓
PHASE 7
AI
      ↓
PHASE 8
Voice
      ↓
PHASE 9
3D
      ↓
PHASE 10
Accessibility
      ↓
PHASE 11
Performance
      ↓
PHASE 12
Testing
      ↓
PHASE 13
SEO + Analytics
      ↓
PHASE 14
Production
```

---

# 113. Definition of Done

A feature is DONE only when:

```text
[✓] Implemented
[✓] Type-safe
[✓] Linted
[✓] Tested
[✓] Responsive
[✓] Accessible
[✓] Error handled
[✓] Loading handled
[✓] Performance considered
[✓] Security considered
[✓] Documentation updated if required
```

“Works on my laptop” is not Definition of Done.

---

# 114. Final Quality Bar

INDRA OS should be evaluated in five dimensions:

```text
ENGINEERING
Is the architecture clean?

EXPERIENCE
Is the interface memorable and understandable?

PERFORMANCE
Does it remain fast?

ACCESSIBILITY
Can different users operate it?

AUTHENTICITY
Does it accurately represent Indrajit?
```

A feature that succeeds visually but fails engineering or accessibility is not finished.

---

# 115. Master Rule for Antigravity

Whenever Antigravity is asked to modify INDRA OS:

```text
READ THE DOCS
      ↓
INSPECT THE CODE
      ↓
UNDERSTAND THE EXISTING SYSTEM
      ↓
MAKE THE SMALLEST CORRECT CHANGE
      ↓
TEST
      ↓
VERIFY
      ↓
REPORT
```

Never allow the agent to:

```text
rewrite everything
```

unless explicitly instructed.

---

# 116. Master Prompt

The following prompt may be given to the coding agent at the beginning of implementation:

```text
You are working on INDRA OS, a production-quality personal AI portfolio operating system.

Before making any change:

1. Read docs/PRD.md.
2. Read docs/ARCHITECTURE.md.
3. Read docs/DEVELOPMENT-GUIDE.md.
4. Inspect the existing implementation.
5. Understand the current architecture.
6. Do not invent portfolio information.
7. Do not add unnecessary dependencies.
8. Preserve responsive behavior.
9. Preserve accessibility.
10. Preserve performance.
11. Keep AI provider logic isolated.
12. Keep 3D logic isolated from business logic.
13. Reuse existing components and design tokens.
14. Do not rewrite unrelated code.
15. Implement incrementally.
16. Test every affected feature.
17. Run lint/type checks/build when appropriate.
18. Report changed files and remaining issues.

Priority:

Security
→ Correctness
→ Accessibility
→ Performance
→ Usability
→ Maintainability
→ Visual effects

INDRA OS must remain usable without AI, voice, WebGL, sound, or advanced animation.

Never fake functionality.
Never fabricate data.
Never expose secrets.
Never sacrifice usability for visual effects.
```

---

# 117. Final Development Principle

INDRA OS should not be developed as:

> “Let's make a cool website.”

It should be developed as:

> **“Let's engineer a digital environment that happens to be a portfolio.”**

Every layer should reinforce that idea:

```text
Code
 +
Architecture
 +
Design
 +
AI
 +
3D
 +
Performance
 +
Accessibility
 +
Story
```

The final result should feel complex to the visitor while remaining organized underneath.

---

# 118. Development Status

```text
PRD.md                 ✓ COMPLETE
ARCHITECTURE.md        ✓ COMPLETE
DEVELOPMENT-GUIDE.md   ✓ COMPLETE
AI-RULES.md             → NEXT
PROJECT INITIALIZATION  → AFTER DOCUMENTATION
```

---

# 119. Next Step

The next document is:

```text
AI-RULES.md
```

It will define the permanent rules for Antigravity and every future AI coding agent working on INDRA OS, including:

* coding behavior
* architecture protection
* UI rules
* accessibility rules
* security rules
* performance rules
* content accuracy
* dependency rules
* Git behavior
* testing requirements
* forbidden behaviors
* self-review checklist
* how the agent should handle uncertainty
* how the agent should ask for clarification
* how the agent should modify existing code
* how the agent should build new features

After `AI-RULES.md`, the documentation layer will be complete and we can move into **actual project initialization and implementation**.

---

**INDRA OS**

> **Don't build everything at once. Build the foundation so everything can be built correctly.**
