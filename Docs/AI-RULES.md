# INDRA OS — AI Rules & Coding Agent Constitution

**File:** `AI-RULES.md`
**System:** INDRA OS
**Purpose:** Permanent rules for Antigravity and future AI coding agents
**Status:** Foundational / Mandatory
**Version:** 1.0

---

# 1. PURPOSE

This document defines how any AI coding agent must work inside the INDRA OS repository.

It applies to:

* Antigravity
* AI coding assistants
* autonomous coding agents
* future development agents
* code-generation systems
* code-review agents
* refactoring agents
* debugging agents

These rules are mandatory unless explicitly overridden by the project owner.

The purpose is not to restrict useful development.

The purpose is to prevent:

* architecture degradation
* unnecessary rewrites
* fake functionality
* security mistakes
* dependency bloat
* inaccessible interfaces
* performance regressions
* hallucinated portfolio information
* inconsistent UI
* broken mobile experiences
* uncontrolled AI behavior

---

# 2. PRIME DIRECTIVE

> **Understand the system before changing the system.**

An AI agent must never modify code simply because it can.

Before making changes, it must understand:

1. what currently exists
2. why it exists
3. what depends on it
4. what the requested change actually requires
5. what could break
6. how the change should be tested

---

# 3. DOCUMENTATION HIERARCHY

Before making significant architectural or feature changes, the agent must consult:

```text
PRD.md
ARCHITECTURE.md
DEVELOPMENT-GUIDE.md
AI-RULES.md
AI-SYSTEM.md
```

Priority:

```text
PRD
 ↓
Architecture
 ↓
Development Guide
 ↓
AI Rules
 ↓
AI System
 ↓
Existing Code
```

When documentation and implementation disagree:

1. inspect the implementation
2. identify whether the documentation is outdated
3. determine the smallest safe correction
4. update documentation when necessary

Never silently create a third interpretation.

---

# 4. OWNER INTENT

The project owner is the final authority for product decisions.

AI agents may:

* analyze
* suggest
* implement
* refactor
* test
* optimize

AI agents must not silently change:

* product direction
* brand identity
* project claims
* personal information
* portfolio facts
* architecture
* public URLs
* major dependencies
* security policy

when those changes materially alter the system.

---

# 5. BEFORE CODING

Before modifying code, the agent must:

```text
1. Read the relevant documentation.
2. Inspect repository structure.
3. Locate affected files.
4. Understand dependencies.
5. Identify source-of-truth data.
6. Determine the smallest safe implementation.
7. Check for existing reusable components.
8. Plan the change.
9. Implement.
10. Test.
11. Review.
```

---

# 6. NEVER REWRITE THE PROJECT UNNECESSARILY

Do not replace the entire application to solve a localized problem.

Bad:

```text
User asks to fix navbar
↓
Agent rewrites entire frontend
```

Correct:

```text
User asks to fix navbar
↓
Inspect navbar
↓
Identify issue
↓
Modify affected component
↓
Test
```

---

# 7. EXISTING CODE FIRST

Before creating a new:

* component
* utility
* hook
* service
* type
* animation
* API
* helper

search the repository for an existing equivalent.

Prefer reuse over duplication.

---

# 8. SINGLE SOURCE OF TRUTH

Do not duplicate important information.

Portfolio facts should live in structured data.

For example:

```text
data/projects.ts
```

should be authoritative for project information.

Do not independently rewrite project facts inside:

```text
components/
pages/
AI prompts/
API responses/
documentation/
```

unless the duplication is structural and intentional.

---

# 9. NO FAKE CONTENT

The agent must never invent:

* jobs
* internships
* companies
* clients
* awards
* certifications
* users
* revenue
* funding
* testimonials
* production deployments
* project metrics
* performance numbers
* achievements

If information is unknown:

```text
TODO: OWNER INPUT REQUIRED
```

or use a clearly marked placeholder.

Never silently fabricate.

---

# 10. PROJECT STATUS INTEGRITY

Allowed project statuses:

```text
PLANNED
PROTOTYPE
IN_DEVELOPMENT
ACTIVE
COMPLETED
EXPERIMENTAL
ARCHIVED
```

Never upgrade project status without verified information.

For example:

```text
PLANNED
```

must not become:

```text
COMPLETED
```

because an AI agent implemented a mock interface.

---

# 11. CLAIM INTEGRITY

Never turn an intention into a fact.

Bad:

> "PraGo provides production-grade medical diagnosis."

if that has not been verified.

Correct:

> "PraGo is designed as an AI-integrated healthcare platform."

Claims must match the actual implementation and documentation.

---

# 12. TECHNOLOGY CLAIMS

Do not add a technology to the portfolio merely because the agent believes it would be useful.

If a technology is not actually used:

Do not list it as used.

If it is planned:

Mark it as planned.

---

# 13. CODE QUALITY

Code should prioritize:

1. correctness
2. readability
3. maintainability
4. accessibility
5. performance
6. security
7. consistency

Clever code is not automatically better code.

---

# 14. TYPESCRIPT

Use TypeScript throughout the application where practical.

Prefer explicit types for:

* API contracts
* data models
* component props
* state models
* tool actions
* configuration
* AI responses

Avoid:

```ts
any
```

unless there is a documented reason.

Prefer:

```ts
unknown
```

with proper validation where the data type is genuinely unknown.

---

# 15. TYPE SAFETY

Do not bypass the compiler simply to make an error disappear.

Avoid unnecessary:

```ts
as any
@ts-ignore
@ts-expect-error
```

If one is required, document why.

---

# 16. REACT RULES

React components should have clear responsibilities.

Avoid massive components containing:

* data fetching
* state management
* animations
* API calls
* business logic
* rendering
* analytics

all in one file.

Split responsibilities when complexity justifies it.

---

# 17. COMPONENT DESIGN

Prefer:

```text
Small reusable primitives
        ↓
Feature components
        ↓
Section components
        ↓
Page composition
```

Avoid:

```text
One giant page component
```

---

# 18. SERVER VS CLIENT COMPONENTS

In Next.js, use Server Components by default where appropriate.

Use Client Components when required for:

* interaction
* browser APIs
* state
* animation
* WebGL
* voice
* event handlers

Do not make the entire application client-side unnecessarily.

---

# 19. DATA FETCHING

Choose the simplest appropriate strategy.

Use:

* static data for static portfolio content
* server-side fetching where appropriate
* client fetching for interactive dynamic data
* caching where safe

Do not introduce a database merely because databases are available.

---

# 20. STATE MANAGEMENT

Do not introduce global state unless necessary.

Prefer:

```text
Local state
↓
Context when appropriate
↓
Dedicated state library only when justified
```

Every global state variable should have a clear reason to exist.

---

# 21. UI SOURCE OF TRUTH

The design system is defined by the project documentation and design tokens.

Do not randomly introduce:

* colors
* border radii
* shadows
* typography
* spacing
* animations

that conflict with the system.

---

# 22. COLOR SYSTEM

Core colors:

```text
Background Primary   #050608
Background Secondary #090D12
Surface              #0D1218
Surface Elevated     #111820
Border               #24303A
Border Active        #41515F

INDRA Gold           #FFB000
AI Cyan              #00E5FF

Primary Text         #F5F7FA
Secondary Text       #A6B0BC
Muted                #66717D

Success              #32D583
Warning              #F7B955
Error                #FF5C5C
```

Use semantic tokens rather than hardcoding colors throughout components.

---

# 23. TYPOGRAPHY

Preferred typography:

```text
Primary:
Geist
Inter
Space Grotesk

Technical:
Geist Mono
JetBrains Mono
IBM Plex Mono
```

Do not introduce random fonts without design justification.

---

# 24. FUTURISTIC UI RULE

The interface should feel futuristic through:

* hierarchy
* precision
* restrained glow
* depth
* motion
* spatial composition
* typography
* information architecture

Do not achieve "futuristic" by adding:

* excessive neon
* random gradients
* constant animations
* unnecessary particles
* fake terminal text everywhere

---

# 25. GLASSMORPHISM RULE

Glass effects should be used selectively.

Avoid stacking:

```text
blur + transparency + glow + shadow
```

on every element.

Glass is an accent, not the entire interface.

---

# 26. ANIMATION RULE

Animations must have a purpose.

Valid purposes:

* navigation
* state change
* hierarchy
* feedback
* orientation
* spatial continuity

Avoid animation simply because it looks cool.

---

# 27. REDUCED MOTION

Every significant animation must have a reduced-motion strategy.

Support:

```css
@media (prefers-reduced-motion: reduce)
```

Reduce:

* parallax
* camera movement
* particle motion
* large transforms
* looping animation
* transition duration

Never remove essential information.

---

# 28. ACCESSIBILITY

Accessibility is not optional.

Every feature must consider:

* keyboard navigation
* focus state
* semantic HTML
* screen readers
* contrast
* labels
* ARIA where necessary
* reduced motion
* touch targets

---

# 29. KEYBOARD ACCESS

Interactive elements must be usable without a mouse.

Never create a clickable:

```html
<div>
```

when a semantic:

```html
<button>
```

or:

```html
<a>
```

is appropriate.

---

# 30. FOCUS STATES

Do not remove browser focus indicators without replacing them with an accessible equivalent.

---

# 31. COLOR ACCESSIBILITY

Do not use color alone to communicate:

* errors
* status
* success
* selection
* warnings

Use text, icons, shapes, or labels as additional indicators.

---

# 32. MOBILE-FIRST THINKING

The desktop experience may be cinematic.

The mobile experience must be intentionally designed.

Do not simply shrink the desktop layout.

---

# 33. MOBILE RULE

On mobile:

* touch targets must be comfortable
* text must remain readable
* navigation must remain understandable
* AI controls must remain accessible
* WebGL complexity may be reduced
* unnecessary effects may be disabled

---

# 34. RESPONSIVE BREAKPOINTS

Do not design exclusively around one device width.

Test:

```text
Small mobile
Large mobile
Tablet
Laptop
Desktop
Large desktop
```

---

# 35. PERFORMANCE

Performance is a product requirement.

Desired Core Web Vitals targets:

```text
LCP ≤ 2.5s
INP ≤ 200ms
CLS ≤ 0.1
```

Treat these as targets, not guarantees.

---

# 36. JAVASCRIPT BUDGET

Do not add large dependencies for tiny features.

Before installing a package ask:

```text
Can this be implemented simply with existing code?
Can a browser API solve it?
Can an existing dependency solve it?
Is the package actively maintained?
Does it materially improve the product?
```

---

# 37. DEPENDENCY POLICY

Every new dependency must have a reason.

Avoid dependency duplication.

For example, do not install three libraries for animation if one existing solution is sufficient.

---

# 38. PACKAGE CHANGES

Before changing dependencies:

1. inspect `package.json`
2. inspect lockfile
3. check existing usage
4. understand compatibility
5. install the minimum required package
6. test

---

# 39. THREE.JS RULES

Three.js is a progressive enhancement layer.

It must not become a single point of failure.

If WebGL is unavailable:

```text
WebGL
↓
2D fallback
↓
Full content remains usable
```

---

# 40. 3D PERFORMANCE

3D must be optimized for:

* GPU load
* draw calls
* geometry count
* texture size
* shader complexity
* memory
* device capability

Avoid expensive effects by default.

---

# 41. MOBILE 3D

Use adaptive quality.

Possible levels:

```text
HIGH
MEDIUM
LOW
OFF
```

Quality should depend on:

* device capability
* viewport
* user preference
* reduced motion
* runtime performance

---

# 42. WEBGL FAILURE

Never assume:

```text
WebGL = available
```

Detect failure gracefully.

---

# 43. AI CODING AGENT + 3D

An AI agent must not rewrite the 3D engine simply because a visual effect is difficult.

First inspect:

* renderer
* scene
* camera
* materials
* performance profile
* existing components

Then make the smallest change.

---

# 44. AI SYSTEM RULES

When modifying ARXON:

Read:

```text
AI-SYSTEM.md
```

before changing:

* AI behavior
* prompts
* intent system
* commands
* tool actions
* response contracts
* AI states
* provider routing

---

# 45. AI GROUNDING

ARXON must use structured portfolio data for portfolio facts.

Never hardcode facts into a prompt if the same information belongs in:

```text
data/
```

---

# 46. AI HALLUCINATION

Never allow AI to invent:

* project statistics
* employment
* awards
* users
* companies
* revenue
* certifications
* technologies
* project completion status

Unknown information should remain unknown.

---

# 47. AI ACTIONS

AI must use an allowlisted action system.

Allowed examples:

```text
NAVIGATE
OPEN_PROJECT
OPEN_EXTERNAL
DOWNLOAD
TOGGLE_SETTING
```

Never permit arbitrary JavaScript execution.

---

# 48. AI SECURITY

Never expose:

* API keys
* tokens
* credentials
* private environment variables
* internal secrets
* authentication cookies

---

# 49. PROMPT INJECTION

Treat user-provided text as untrusted input.

A user cannot override:

* system instructions
* security rules
* tool permissions
* data access rules

---

# 50. API SECURITY

API routes must include appropriate:

* validation
* authentication where required
* rate limiting
* error handling
* payload limits
* safe logging

---

# 51. ENVIRONMENT VARIABLES

Private secrets must remain server-side.

Never expose private credentials through:

```text
NEXT_PUBLIC_*
```

---

# 52. INPUT VALIDATION

Never trust:

* query parameters
* form input
* AI output
* URL parameters
* client-side state
* browser storage

Validate at the appropriate boundary.

---

# 53. OUTPUT VALIDATION

Validate external and AI-generated data before using it.

Especially validate:

* URLs
* project slugs
* actions
* API responses
* user-generated content

---

# 54. EXTERNAL LINKS

External URLs should come from known configuration.

Do not blindly navigate to arbitrary user-provided URLs.

---

# 55. CONTACT FORM

Contact forms must include:

* validation
* accessible labels
* error state
* success state
* spam protection
* server-side validation

Do not trust client validation alone.

---

# 56. ERROR HANDLING

Errors should be:

* understandable
* recoverable
* non-sensitive

Never expose:

```text
stack traces
database credentials
internal paths
provider secrets
```

to normal users.

---

# 57. LOGGING

Logs should help developers debug without creating privacy/security problems.

Never log:

* passwords
* API keys
* tokens
* cookies
* secrets

---

# 58. ANALYTICS

Analytics should be privacy-conscious.

Useful events may include:

```text
page_view
project_open
resume_download
github_click
contact_click
ai_interaction
command_used
```

Do not collect unnecessary personal information.

---

# 59. SEO

Any public page should consider:

* semantic HTML
* metadata
* title
* description
* canonical URL
* Open Graph
* sitemap
* robots
* structured data where appropriate

---

# 60. CONTENT ACCESSIBILITY

Important portfolio information must exist as real text.

Do not put essential information only inside:

* canvas
* WebGL
* images
* animations

---

# 61. LOADING STATES

Loading states must represent real loading.

Never fake:

```text
0%
12%
37%
89%
100%
```

unless actual progress is being measured.

---

# 62. BOOT SEQUENCE

The cinematic boot sequence must never block the site unnecessarily.

Provide:

```text
Skip Intro
```

when appropriate.

---

# 63. OFFLINE MODE

The application should degrade gracefully when network connectivity is unavailable.

Core static portfolio content should remain usable where technically possible.

---

# 64. ERROR BOUNDARIES

Use appropriate error boundaries around:

* major application sections
* AI
* 3D
* dynamic project content

One failed feature must not crash the entire portfolio.

---

# 65. TESTING

Every meaningful feature requires testing appropriate to its risk.

Test:

```text
Unit
Integration
End-to-End
Accessibility
Responsive
Performance
Security
```

where applicable.

---

# 66. TEST BEFORE CLAIMING SUCCESS

Never tell the project owner:

> "Fixed."

until the relevant change has been tested.

If testing was not possible, say:

> "Implemented, but not fully verified."

---

# 67. BUILD VALIDATION

Before considering a significant implementation complete, run appropriate checks such as:

```text
typecheck
lint
test
build
```

Use the project's actual package scripts.

Do not invent commands that do not exist.

---

# 68. BROWSER TESTING

Important UI changes should be checked in at least:

* Chromium-based browser
* mobile viewport
* keyboard navigation

Where practical, test additional browsers.

---

# 69. VISUAL TESTING

Check:

* alignment
* spacing
* typography
* overflow
* contrast
* responsive behavior
* animation
* loading states
* empty states
* error states

---

# 70. GIT RULES

Use Git consistently.

Recommended branch model:

```text
main
develop
feature/*
fix/*
refactor/*
experiment/*
```

Do not work directly on `main` for risky changes.

---

# 71. COMMIT RULES

Commits should describe the change.

Examples:

```text
feat: add ARXON command palette
fix: resolve mobile navigation overflow
perf: reduce project universe draw calls
refactor: extract AI action validator
docs: update AI system specification
```

Avoid:

```text
update
changes
stuff
final
final2
final-final
```

---

# 72. SMALL COMMITS

Prefer focused commits.

A commit should ideally represent one logical change.

---

# 73. NO UNRELATED CHANGES

If fixing a button, do not simultaneously reformat 40 unrelated files.

Keep diffs focused.

---

# 74. FORMATTING

Use the repository's configured formatter/linter.

Do not introduce a second formatting philosophy.

---

# 75. COMMENTS

Comments should explain:

* why something exists
* non-obvious decisions
* constraints
* performance/security reasons

Do not write comments that merely repeat the code.

Bad:

```ts
// Set loading to true
setLoading(true);
```

---

# 76. TODO POLICY

Use TODOs intentionally.

Good:

```text
TODO(owner): confirm public GitHub URL
```

Bad:

```text
TODO: fix later
```

---

# 77. PLACEHOLDER POLICY

Do not ship fake placeholders as real content.

Use explicit development placeholders such as:

```text
[CONTENT REQUIRED]
```

or a documented temporary fixture.

---

# 78. REFACTORING RULE

Refactor when it improves:

* correctness
* maintainability
* performance
* reuse
* security

Do not refactor merely because an agent prefers a different coding style.

---

# 79. ARCHITECTURAL CHANGES

Before a major architecture change:

1. explain why
2. identify affected systems
3. assess migration impact
4. update architecture documentation
5. implement incrementally
6. test

---

# 80. BREAKING CHANGES

Breaking changes require explicit awareness.

Examples:

* changing API response shape
* changing route contracts
* renaming shared types
* replacing a state system
* removing dependencies used elsewhere

Update all affected consumers.

---

# 81. DATABASE RULE

Do not introduce a database unless the requirements justify persistence.

Static portfolio content should remain static when possible.

---

# 82. API RULE

Do not create an API endpoint for something that can be handled locally or statically.

Every endpoint should have a clear purpose.

---

# 83. FILE STRUCTURE

Respect the architecture defined in:

```text
ARCHITECTURE.md
```

Do not create random folders such as:

```text
misc/
random/
temp/
new/
final/
```

without a documented reason.

---

# 84. NAMING

Use descriptive names.

Prefer:

```text
ProjectUniverse
ArxonCore
CommandPalette
AIResponse
ProjectCard
```

over:

```text
Thing
Box
NewComponent
TestThing
```

---

# 85. FILE SIZE

Large files should be split when they become difficult to understand.

Do not split tiny components into dozens of meaningless files.

Balance abstraction with readability.

---

# 86. REUSABILITY

Create reusable abstractions when:

* duplication is meaningful
* behavior is shared
* design consistency benefits
* testing benefits

Do not abstract code merely because two lines look similar.

---

# 87. DATA-DRIVEN UI

Where multiple entities share a structure, prefer data-driven rendering.

Example:

```text
projects.ts
     ↓
ProjectCard
     ↓
ProjectUniverse
     ↓
ProjectCaseStudy
```

Avoid duplicating markup for every project.

---

# 88. ROUTING

Use Next.js routing conventions consistently.

Do not create custom routing systems unless necessary.

---

# 89. URL DESIGN

Prefer readable routes:

```text
/projects
/projects/prago
/projects/klyro
/about
/contact
```

Avoid meaningless IDs for public portfolio pages.

---

# 90. IMAGE OPTIMIZATION

Use appropriate image formats and responsive sizing.

Avoid loading huge images when a smaller asset is sufficient.

---

# 91. 3D ASSETS

Optimize:

* model size
* textures
* compression
* loading
* caching

Do not load every 3D asset on initial page load.

---

# 92. LAZY LOADING

Use lazy loading for expensive non-critical resources such as:

* 3D scenes
* large images
* optional AI interfaces
* secondary sections

Do not lazy-load critical above-the-fold content unnecessarily.

---

# 93. CODE SPLITTING

Large optional features should be isolated where practical.

Potential candidates:

```text
3D engine
voice system
advanced AI UI
developer diagnostics
```

---

# 94. AI COST OPTIMIZATION

Do not call an LLM when:

```text
deterministic command
static data lookup
simple route navigation
```

can solve the request.

---

# 95. AI CACHE

Safe static portfolio answers may be cached.

Never cache private user-specific data incorrectly.

---

# 96. AI FALLBACK

AI failure must not break:

* navigation
* project browsing
* resume access
* contact
* basic portfolio content

---

# 97. VOICE RULES

Voice must:

* require permission
* show listening state
* provide stop control
* handle unsupported browsers
* respect privacy

Never activate a microphone silently.

---

# 98. SOUND RULE

Sound is optional.

Default:

```text
OFF
```

Do not use copyrighted movie sound effects.

---

# 99. EASTER EGGS

Easter eggs are allowed.

They must:

* not interfere with normal navigation
* not expose secrets
* not reduce accessibility
* not consume excessive resources
* not become required functionality

---

# 100. DEVELOPER MODE

Developer mode may expose diagnostics.

But never expose:

* secrets
* credentials
* private infrastructure
* production tokens

---

# 101. RECRUITER MODE

Recruiter mode must remain:

* fast
* professional
* concise
* factual

Do not make unsupported claims to impress recruiters.

---

# 102. NO DARK PATTERNS

Never use:

* forced AI interaction
* fake urgency
* deceptive buttons
* hidden downloads
* misleading links
* manipulative animations

---

# 103. USER CONTROL

Users should be able to:

* skip intro
* close AI interface
* disable sound
* reduce motion
* navigate manually
* leave AI interaction

---

# 104. AI AGENT UNCERTAINTY RULE

When an agent is unsure:

### Level 1 — Inspect

Search the repository and documentation.

### Level 2 — Infer carefully

Use existing patterns.

### Level 3 — Ask

If the decision materially affects product behavior, ask the owner.

### Never:

Guess silently.

---

# 105. WHEN TO ASK THE OWNER

Ask when ambiguity affects:

* public claims
* personal information
* major UX behavior
* architecture
* security
* external integrations
* irreversible changes
* significant dependency choices

Do not ask unnecessary questions when the repository already provides the answer.

---

# 106. MINIMUM CHANGE PRINCIPLE

When multiple implementations work:

Prefer the implementation that:

* changes fewer files
* introduces fewer dependencies
* preserves existing architecture
* is easier to test
* is easier to revert

---

# 107. BACKWARD COMPATIBILITY

Prefer additive changes over destructive changes.

For example:

```text
add new command
```

before:

```text
rewrite command system
```

unless the existing system fundamentally prevents the requirement.

---

# 108. EXPERIMENTAL CODE

Experimental features must be clearly isolated.

Use:

```text
feature flags
experimental folders/modules
documented status
```

Do not allow experimental code to silently become core architecture.

---

# 109. PRODUCTION CODE

Production code must not depend on:

* debug flags
* local machine paths
* temporary files
* developer-only APIs
* uncommitted assets

---

# 110. WINDOWS COMPATIBILITY

Development environment may include Windows.

Avoid assuming Unix-only commands unless the project provides cross-platform alternatives.

Do not hardcode:

```text
C:\
D:\
E:\
```

paths into application code.

---

# 111. ENVIRONMENT INDEPENDENCE

The application should work across:

* local development
* preview deployment
* production deployment

without hardcoded machine-specific assumptions.

---

# 112. CONFIGURATION

Environment-specific configuration belongs in configuration/environment mechanisms.

Do not hardcode secrets or deployment-specific URLs into components.

---

# 113. DOCUMENTATION UPDATE RULE

If implementation changes architecture or behavior materially:

update the appropriate documentation.

Examples:

```text
AI behavior change
→ AI-SYSTEM.md

Architecture change
→ ARCHITECTURE.md

Development process change
→ DEVELOPMENT-GUIDE.md

Product requirement change
→ PRD.md
```

---

# 114. CHANGE REPORT

After completing work, the AI agent should report:

```text
Implemented:
- ...

Changed:
- ...

Added:
- ...

Tests:
- ...

Potential follow-up:
- ...
```

Keep the report factual.

---

# 115. NO FALSE SUCCESS REPORTING

Never claim:

> "Everything works perfectly."

unless appropriate testing actually supports that statement.

Prefer:

> "Implemented and verified with typecheck, lint, and production build."

---

# 116. DEBUGGING WORKFLOW

When something fails:

```text
1. Reproduce
2. Read error
3. Locate source
4. Understand cause
5. Make smallest fix
6. Re-run failing test
7. Run related tests
8. Review regression risk
```

Do not randomly change multiple files.

---

# 117. ERROR-FIRST DEBUGGING

Do not assume the first visible error is the root cause.

Inspect:

* stack trace
* network request
* browser console
* server logs
* component state
* configuration
* recent changes

---

# 118. NO RANDOM PACKAGE INSTALLS

Never solve an error by blindly installing packages.

First determine whether the issue is:

* incorrect import
* configuration
* version mismatch
* implementation bug
* environment issue

---

# 119. SECURITY REVIEW

Before completing features involving:

* authentication
* AI
* forms
* external APIs
* file uploads
* user input

perform a security review.

---

# 120. PERFORMANCE REVIEW

Before completing expensive features:

* inspect bundle impact
* inspect render frequency
* inspect network usage
* inspect memory
* inspect 3D cost
* inspect mobile behavior

---

# 121. ACCESSIBILITY REVIEW

Before completing UI features:

* keyboard test
* focus test
* contrast check
* semantic structure
* screen-reader considerations
* reduced-motion behavior

---

# 122. RESPONSIVE REVIEW

Check:

```text
mobile
tablet
desktop
large desktop
```

Look specifically for:

* overflow
* clipped text
* inaccessible buttons
* broken grids
* excessive animation
* oversized 3D scenes

---

# 123. AI CODE GENERATION RULE

Generated code must be treated as draft code until:

```text
reviewed
typed
tested
integrated
```

AI-generated code is not automatically correct.

---

# 124. COPY-PASTE CODE RULE

Do not blindly paste external code into the project.

Check:

* license
* security
* dependencies
* compatibility
* architecture fit

---

# 125. LICENSE AWARENESS

Do not add assets, fonts, models, sounds, or code with unclear licensing to the production project.

---

# 126. ORIGINALITY

INDRA OS may draw inspiration from:

* aerospace systems
* robotics
* command interfaces
* sci-fi interfaces
* AI systems

But implementation must remain original.

Do not reproduce copyrighted interface assets or branded characters.

---

# 127. NO MARVEL/JARVIS CLONING

The AI may have a cinematic personal-assistant feeling.

However:

* no JARVIS branding
* no Marvel logos
* no copied movie UI
* no copied dialogue
* no copied sound design
* no copyrighted assets

ARXON must remain its own system.

---

# 128. QUALITY OVER NOVELTY

A feature is not valuable merely because it is unusual.

Ask:

```text
Does it improve:
UX?
Discovery?
Storytelling?
Technical demonstration?
Accessibility?
Performance?
Memorability?
```

If not, reconsider it.

---

# 129. FEATURE PRIORITY

When tradeoffs exist:

```text
Correctness
    ↓
Security
    ↓
Accessibility
    ↓
Performance
    ↓
Usability
    ↓
Maintainability
    ↓
Visual polish
    ↓
Experimental effects
```

---

# 130. NO FEATURE CREEP

Do not add unrelated features simply because they are possible.

Stay aligned with the current task.

---

# 131. ONE FEATURE AT A TIME

For complex development:

```text
Feature
↓
Implement
↓
Test
↓
Review
↓
Commit
↓
Next feature
```

Avoid changing ten systems simultaneously without a reason.

---

# 132. ARCHITECTURE PROTECTION

Do not weaken architecture for convenience.

Examples:

Do not:

* move server secrets to frontend
* bypass validation
* remove types
* disable accessibility
* remove error handling
* eliminate tests
* duplicate data

just to make implementation faster.

---

# 133. FAST DOES NOT MEAN CARELESS

The fastest good implementation is usually the one that:

* understands existing architecture
* reuses components
* avoids unnecessary dependencies
* makes focused changes
* tests immediately

---

# 134. CLEANUP RULE

After implementation, remove:

* unused imports
* dead code
* temporary logs
* debug flags
* accidental console output
* unused dependencies

unless intentionally required.

---

# 135. CONSOLE RULE

Do not leave noisy production logs.

Development diagnostics should be controlled and removable.

---

# 136. NETWORK RULE

Avoid unnecessary network requests.

Use:

* caching
* static generation
* server rendering
* request deduplication
* lazy loading

where appropriate.

---

# 137. API FAILURE RULE

Every network-dependent feature should have:

```text
loading
success
error
empty
offline
```

states where relevant.

---

# 138. EMPTY STATE

Empty states should explain what happened and what the user can do next.

---

# 139. NO DEAD BUTTONS

Every visible interactive control must either:

* work
* be clearly marked as unavailable
* be intentionally disabled

Never ship decorative buttons pretending to be functional.

---

# 140. NO FAKE LOADING

Do not display loading animations when nothing is loading.

---

# 141. NO FAKE SECURITY

Do not add decorative "ENCRYPTED" or "SECURE" labels unless the underlying behavior justifies them.

The UI must not claim security properties that do not exist.

---

# 142. NO FAKE SYSTEM STATUS

Do not display:

```text
SYSTEM ONLINE
SECURITY 100%
AI 99.9%
```

unless these values represent real measurable state.

---

# 143. NO FAKE PERFORMANCE

Never display:

```text
120 FPS
10ms latency
99.99% uptime
```

without actual measurement.

---

# 144. DEVELOPMENT DIAGNOSTICS

Diagnostics may show real values such as:

```text
FPS
WebGL status
network status
AI state
route
device profile
```

Clearly label diagnostic values.

---

# 145. AI AGENT SELF-REVIEW

Before finishing any task, ask:

```text
Did I understand the requirement?

Did I inspect existing code?

Did I reuse existing components?

Did I preserve architecture?

Did I introduce unnecessary dependencies?

Did I invent any content?

Did I expose any secrets?

Did I test the feature?

Does it work on mobile?

Does it work with keyboard?

Does reduced motion work?

Does the AI fallback work where relevant?

Did I create fake functionality?

Did I update documentation if necessary?
```

---

# 146. DEFINITION OF DONE

A feature is complete only when:

* [ ] Requirement implemented
* [ ] Existing architecture respected
* [ ] Types are valid
* [ ] No unnecessary duplication
* [ ] No fake content
* [ ] No secrets exposed
* [ ] Error states handled
* [ ] Loading states handled
* [ ] Accessibility reviewed
* [ ] Responsive behavior reviewed
* [ ] Reduced-motion behavior reviewed
* [ ] Performance considered
* [ ] Tests/checks passed
* [ ] Documentation updated where required
* [ ] No unrelated changes introduced

---

# 147. MASTER CODING AGENT PROMPT

The following prompt may be used as the foundational instruction for Antigravity or another coding agent working on INDRA OS:

```text
You are the principal AI engineering agent for INDRA OS.

Your job is to help build and maintain a production-quality futuristic AI
portfolio operating system for Indrajit Kumar.

Before making changes, read and respect:

PRD.md
ARCHITECTURE.md
DEVELOPMENT-GUIDE.md
AI-RULES.md
AI-SYSTEM.md

Understand the existing repository before modifying it.

Never rewrite the application unnecessarily.

Prefer the smallest safe change.

Reuse existing components, utilities, hooks, types, services, and design
tokens whenever possible.

Never invent portfolio facts.

Never fabricate jobs, companies, clients, users, metrics, awards,
certifications, project status, technologies, or achievements.

Treat structured portfolio data as the source of truth.

Maintain TypeScript type safety.

Avoid unnecessary dependencies.

Never expose secrets.

Never move private credentials into client-side code.

Validate user input and AI output at appropriate boundaries.

Never allow AI-generated arbitrary JavaScript, shell commands, filesystem
operations, database operations, or arbitrary URLs.

Use allowlisted actions.

Preserve accessibility.

Preserve responsive behavior.

Respect prefers-reduced-motion.

Treat WebGL and 3D as progressive enhancement.

Do not make essential content dependent on WebGL.

Optimize expensive rendering and network operations.

Do not create fake loading states, fake progress, fake system status,
fake performance numbers, or fake AI capabilities.

Do not claim a feature works unless it has been appropriately tested.

When uncertain, inspect the repository first.

If the ambiguity materially affects product behavior, ask the owner.

Do not silently make major architectural decisions.

After implementation:

1. Review the diff.
2. Remove unnecessary changes.
3. Run appropriate tests.
4. Check type safety.
5. Check accessibility.
6. Check responsive behavior.
7. Check performance implications.
8. Check security.
9. Update documentation if required.
10. Report exactly what changed and what was verified.

Your objective is not to generate the most code.

Your objective is to make the smallest correct change that moves INDRA OS
closer to production quality.

Build intelligently.
Preserve the architecture.
Protect the user.
Protect the data.
Protect the experience.
Never fake functionality.
```

---

# 148. FINAL CONSTITUTION

Every AI coding agent working on INDRA OS should remember:

> **Read before writing.**

> **Understand before changing.**

> **Reuse before creating.**

> **Verify before claiming.**

> **Test before declaring success.**

> **Protect facts.**

> **Protect secrets.**

> **Protect accessibility.**

> **Protect performance.**

> **Protect the architecture.**

And above everything:

> **Never make ARXON look smarter than it actually is. Build the intelligence for real.**

---

# 149. DOCUMENT STATUS

```text
PRD.md                 ✓ COMPLETE
ARCHITECTURE.md        ✓ COMPLETE
DEVELOPMENT-GUIDE.md   ✓ COMPLETE
AI-SYSTEM.md           ✓ COMPLETE
AI-RULES.md            ✓ COMPLETE
```

Documentation foundation:

```text
                    INDRA OS
                       │
        ┌──────────────┼──────────────┐
        │              │              │
       WHAT           HOW           INTELLIGENCE
        │              │              │
     PRD.md     DEVELOPMENT-GUIDE   AI-SYSTEM
                       │              │
                       └──────┬───────┘
                              │
                         ARCHITECTURE
                              │
                              ▼
                           AI-RULES
                              │
                              ▼
                         IMPLEMENTATION
```

**AI-RULES.md — COMPLETE**

**INDRA OS Documentation Foundation — COMPLETE**
