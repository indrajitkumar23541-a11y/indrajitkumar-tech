# INDRA OS — System Architecture Document

**Document:** `ARCHITECTURE.md`
**Project:** INDRA OS
**System:** Personal AI Portfolio Operating System
**Owner:** Indrajit Kumar
**Architecture Version:** 1.0.0
**Status:** APPROVED FOR IMPLEMENTATION
**Last Updated:** September 2026

---

# 1. Architecture Overview

## 1.1 System Identity

INDRA OS is not designed as a traditional portfolio website.

It is designed as a:

> **Personal AI-powered developer operating system delivered through a web interface.**

The architecture must therefore support five major layers:

```text
┌─────────────────────────────────────────────────────────────┐
│                      INDRA OS EXPERIENCE                     │
├─────────────────────────────────────────────────────────────┤
│  Visual Experience                                          │
│  HUD / Glass UI / Motion / 3D / Responsive Interface        │
├─────────────────────────────────────────────────────────────┤
│  Experience Logic                                            │
│  Navigation / Modes / Commands / Interactions / State        │
├─────────────────────────────────────────────────────────────┤
│  ARXON Intelligence                                          │
│  AI Router / Portfolio Knowledge / Commands / Voice          │
├─────────────────────────────────────────────────────────────┤
│  Application Services                                       │
│  Contact / Analytics / Resume / External Integrations        │
├─────────────────────────────────────────────────────────────┤
│  Infrastructure                                             │
│  Next.js / Vercel / APIs / Security / Monitoring             │
└─────────────────────────────────────────────────────────────┘
```

The system must remain useful even if the AI, 3D layer, animation layer, or external services are unavailable.

---

# 2. Architectural Principles

INDRA OS follows these principles:

### 2.1 Progressive Enhancement

Core portfolio functionality must work without:

* WebGL
* JavaScript-heavy effects
* AI
* Voice
* Sound
* advanced animations

Advanced capabilities enhance the experience rather than define its usability.

---

### 2.2 Data-Driven Architecture

Portfolio information must not be scattered throughout UI components.

Instead:

```text
Profile Data
     ↓
Structured Data Layer
     ↓
UI / AI / SEO / Commands
```

Example:

```ts
profile.ts
projects.ts
skills.ts
timeline.ts
links.ts
commands.ts
```

The same source of truth should power:

* portfolio cards
* project pages
* AI answers
* command system
* search
* SEO metadata
* recruiter mode

---

### 2.3 Separation of Concerns

UI should not directly contain:

* AI provider logic
* database queries
* secret API keys
* analytics implementation details
* business logic
* large 3D systems

Each responsibility must have a clear boundary.

---

### 2.4 Security First

Priority order:

```text
Security
   ↓
Correctness
   ↓
Accessibility
   ↓
Performance
   ↓
Usability
   ↓
Visual Experience
```

Visual effects must never justify weakening security or usability.

---

### 2.5 Performance by Default

Every feature must have a performance budget.

Avoid:

* unnecessary dependencies
* huge 3D assets
* blocking scripts
* excessive animations
* unnecessary API requests
* large client-side bundles

---

# 3. High-Level System Architecture

```text
                           ┌─────────────────────┐
                           │       Visitor       │
                           └──────────┬──────────┘
                                      │
                                      ▼
                           ┌─────────────────────┐
                           │   Next.js App       │
                           │  App Router         │
                           └──────────┬──────────┘
                                      │
             ┌────────────────────────┼────────────────────────┐
             │                        │                        │
             ▼                        ▼                        ▼
      ┌─────────────┐         ┌─────────────┐          ┌─────────────┐
      │ UI System   │         │ 3D System   │          │ AI System   │
      │ React       │         │ R3F/WebGL   │          │ ARXON Core  │
      └──────┬──────┘         └──────┬──────┘          └──────┬──────┘
             │                       │                        │
             └───────────────────────┼────────────────────────┘
                                     │
                                     ▼
                           ┌─────────────────────┐
                           │ Application Layer   │
                           └──────────┬──────────┘
                                      │
              ┌───────────────────────┼─────────────────────┐
              │                       │                     │
              ▼                       ▼                     ▼
        Contact API             Analytics API          AI API
              │                       │                     │
              └───────────────────────┼─────────────────────┘
                                      │
                                      ▼
                           ┌─────────────────────┐
                           │ External Services   │
                           │ AI / Email / GitHub │
                           │ LinkedIn / Storage  │
                           └─────────────────────┘
```

---

# 4. Technology Architecture

## 4.1 Frontend

Primary:

* Next.js
* React
* TypeScript
* Tailwind CSS

UI:

* Custom design system
* CSS variables
* CSS animations
* Framer Motion where appropriate

3D:

* Three.js
* React Three Fiber
* Drei

Icons:

* lightweight icon library or custom SVG

---

# 5. Rendering Strategy

INDRA OS uses a hybrid rendering strategy.

```text
Server Components
       │
       ├── Static portfolio content
       ├── SEO
       ├── Project data
       ├── Metadata
       └── Initial page structure

Client Components
       │
       ├── ARXON Core
       ├── animations
       ├── interactive HUD
       ├── command interface
       ├── 3D
       └── voice
```

Use Server Components by default.

Use Client Components only when browser interaction is required.

---

# 6. Recommended Project Structure

```text
INDRA-OS/
│
├── app/
│   ├── api/
│   │   ├── ai/
│   │   │   └── route.ts
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── analytics/
│   │       └── route.ts
│   │
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   ├── Tooltip.tsx
│   │   └── Input.tsx
│   │
│   ├── core/
│   │   ├── ArxonCore.tsx
│   │   ├── ArxonStatus.tsx
│   │   ├── CoreGlow.tsx
│   │   └── CoreParticles.tsx
│   │
│   ├── hud/
│   │   ├── HUDShell.tsx
│   │   ├── TopBar.tsx
│   │   ├── SystemStatus.tsx
│   │   ├── MetricsPanel.tsx
│   │   └── Scanline.tsx
│   │
│   ├── navigation/
│   │   ├── Navigation.tsx
│   │   ├── CommandPalette.tsx
│   │   └── SectionNavigator.tsx
│   │
│   ├── ai/
│   │   ├── AIInterface.tsx
│   │   ├── AIMessage.tsx
│   │   ├── AIInput.tsx
│   │   ├── VoiceButton.tsx
│   │   └── AIThinking.tsx
│   │
│   ├── projects/
│   │   ├── ProjectUniverse.tsx
│   │   ├── ProjectNode.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCaseStudy.tsx
│   │   └── ProjectFilters.tsx
│   │
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── EngineeringDNA.tsx
│       ├── DSA.tsx
│       ├── MissionLog.tsx
│       ├── IndraLab.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
│
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── timeline.ts
│   ├── achievements.ts
│   ├── links.ts
│   ├── commands.ts
│   └── system.ts
│
├── lib/
│   ├── ai/
│   │   ├── router.ts
│   │   ├── context.ts
│   │   ├── prompts.ts
│   │   ├── guardrails.ts
│   │   └── providers/
│   │
│   ├── three/
│   │   ├── scene.ts
│   │   ├── materials.ts
│   │   ├── camera.ts
│   │   └── performance.ts
│   │
│   ├── analytics/
│   ├── security/
│   ├── validation/
│   └── utils/
│
├── hooks/
│   ├── useArxon.ts
│   ├── useCommand.ts
│   ├── useVoice.ts
│   ├── useReducedMotion.ts
│   ├── useResponsive.ts
│   └── usePerformance.ts
│
├── types/
│   ├── profile.ts
│   ├── project.ts
│   ├── ai.ts
│   ├── command.ts
│   └── system.ts
│
├── config/
│   ├── site.ts
│   ├── ai.ts
│   ├── performance.ts
│   └── environment.ts
│
├── public/
│   ├── images/
│   ├── models/
│   ├── textures/
│   ├── icons/
│   └── sounds/
│
├── docs/
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT-GUIDE.md
│   └── AI-RULES.md
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.local
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

---

# 7. Component Architecture

The component hierarchy should follow:

```text
App
│
├── SystemBoot
│
├── HUDShell
│   ├── TopBar
│   ├── SystemStatus
│   └── Navigation
│
├── Main
│   │
│   ├── Hero
│   │   ├── ArxonCore
│   │   ├── Identity
│   │   └── PrimaryActions
│   │
│   ├── About
│   │
│   ├── ProjectUniverse
│   │   ├── ProjectNode
│   │   └── ProjectDetails
│   │
│   ├── EngineeringDNA
│   │
│   ├── DSA
│   │
│   ├── MissionLog
│   │
│   ├── IndraLab
│   │
│   └── Contact
│
├── AIInterface
│
└── Footer
```

Components should be:

* reusable
* composable
* independently testable
* accessible
* responsive

Avoid giant components.

---

# 8. ARXON Core Architecture

ARXON Core is the visual and interaction center of the system.

It has two layers:

```text
ARXON CORE
│
├── Presentation Layer
│   ├── Glow
│   ├── Rings
│   ├── Particles
│   ├── HUD
│   └── Animation
│
└── Intelligence State
    ├── idle
    ├── listening
    ├── thinking
    ├── responding
    ├── navigating
    ├── success
    ├── error
    └── offline
```

The visual layer must react to the intelligence state.

Example:

```text
idle
→ subtle breathing animation

listening
→ microphone/listening indicator

thinking
→ processing animation

responding
→ active core pulse

navigating
→ directional transition

error
→ clear error state
```

---

# 9. ARXON AI Architecture

ARXON AI must be provider-agnostic.

The UI must never directly depend on a specific AI vendor.

Architecture:

```text
User
 ↓
AIInterface
 ↓
/api/ai
 ↓
ARXON Router
 ↓
Context Builder
 ↓
Guardrails
 ↓
AI Provider
 ↓
Response Validator
 ↓
ARXON Response
 ↓
UI
```

---

# 10. AI Router

The router determines what the user is asking.

Example intent categories:

```text
PROFILE
PROJECT
SKILL
EDUCATION
CONTACT
LINK
NAVIGATION
COMMAND
GENERAL
UNKNOWN
```

Example:

```text
"Tell me about PraGo"

        ↓

PROJECT intent

        ↓

projects.ts

        ↓

PraGo structured context

        ↓

AI response
```

---

# 11. Portfolio Knowledge System

ARXON must use structured portfolio data.

Example:

```ts
export const profile = {
  name: "Indrajit Kumar",
  role: "Full-Stack Developer & AI Builder",
  location: "India",
  education: "...",
  graduation: "...",
};
```

Projects:

```ts
export const projects = [
  {
    slug: "prago",
    name: "PraGo",
    status: "IN DEVELOPMENT",
    category: ["AI", "Healthcare", "Full Stack"],
    technologies: [],
    description: "",
    links: {},
  },
];
```

The exact project status must always come from the data source.

---

# 12. AI Hallucination Policy

ARXON must never invent:

* employers
* clients
* salaries
* awards
* users
* revenue
* funding
* professional experience
* certifications
* achievements
* project metrics

If information is unavailable:

```text
"I don't have that information in Indrajit's portfolio data."
```

For uncertain project information:

```text
"That detail isn't currently documented in the project profile."
```

---

# 13. AI Command System

Commands should be deterministic whenever possible.

Example:

```text
/show projects
/open prago
/show skills
/show education
/go contact
/open github
/open linkedin
/download resume
/toggle accessibility
/toggle sound
```

Architecture:

```text
Input
 ↓
Command Parser
 ↓
Command Registry
 ↓
Validation
 ↓
Action
```

AI should not be used when a deterministic command can perform the task safely.

---

# 14. Command Registry

Example architecture:

```ts
const commands = {
  "show projects": showProjects,
  "show skills": showSkills,
  "go contact": goContact,
  "download resume": downloadResume,
};
```

Commands must have:

* name
* aliases
* description
* permission
* action
* fallback

---

# 15. Voice Architecture

Voice is an optional enhancement.

```text
Microphone
    ↓
Speech Recognition
    ↓
Transcript
    ↓
Command / AI Router
    ↓
Action
    ↓
Speech Synthesis
```

Voice must never be required for navigation.

Keyboard and touch alternatives must always exist.

---

# 16. Voice Safety

The site should not continuously listen by default.

Rules:

* microphone OFF by default
* explicit user activation
* clear listening indicator
* easy stop control
* no hidden recording
* no unnecessary storage
* explain browser permissions

---

# 17. 3D Architecture

3D is a separate visual subsystem.

```text
Three.js
   │
React Three Fiber
   │
Scene
   ├── Camera
   ├── Lights
   ├── Materials
   ├── Core
   ├── Particles
   └── Project Nodes
```

The 3D system should not contain business logic.

---

# 18. 3D Performance Strategy

The 3D engine must adapt to device capability.

```text
High-end Desktop
→ Full 3D

Mid-range Desktop
→ Reduced 3D

Mobile
→ Lightweight 3D

Low-performance / WebGL unavailable
→ CSS / static fallback
```

Use:

* instancing
* compressed textures
* optimized geometry
* lazy loading
* limited draw calls
* dynamic pixel ratio
* object reuse

Avoid:

* unnecessarily complex models
* huge textures
* excessive particle counts
* multiple expensive post-processing effects

---

# 19. Project Universe Architecture

Project Universe visually represents projects as nodes.

```text
                    Astraview
                       ●
                       |
                       |
Arxon AI ● —— ARXON CORE —— ● PraGo
                       |
                       |
                    KLYRO
                       |
                       ●
                  Velocity X
```

Each node contains:

```ts
{
  id,
  position,
  projectSlug,
  category,
  status
}
```

Clicking a node should open:

```text
Project Preview
      ↓
Case Study
      ↓
Architecture
      ↓
Technology
      ↓
Repository / Demo
```

---

# 20. Project Case Study Architecture

Every project should use the same schema.

```text
Project
│
├── Overview
├── Problem
├── Goal
├── Solution
├── Architecture
├── Technology
├── Engineering Decisions
├── Challenges
├── Solutions
├── Current Status
├── Demo
├── Repository
└── Future Improvements
```

This ensures consistency across projects.

---

# 21. Application State Architecture

Avoid putting all state into one global store.

State should be divided into domains.

```text
UI State
├── activeSection
├── modal
├── commandPalette
└── mobileMenu

ARXON State
├── status
├── messages
├── listening
└── thinking

Preference State
├── theme
├── sound
├── accessibility
└── reducedMotion

3D State
├── quality
├── enabled
└── performance

Navigation State
├── currentSection
└── transition
```

Use React state/context where sufficient.

Introduce a state-management library only when complexity actually requires it.

---

# 22. Design Token Architecture

All visual tokens should live centrally.

Example:

```css
:root {
  --indra-bg-primary: #050608;
  --indra-bg-secondary: #090D12;

  --indra-surface: #0D1218;
  --indra-surface-elevated: #111820;

  --indra-border: #24303A;
  --indra-border-active: #41515F;

  --indra-gold: #FFB000;
  --indra-cyan: #00E5FF;

  --indra-text-primary: #F5F7FA;
  --indra-text-secondary: #A6B0BC;
  --indra-text-muted: #66717D;

  --indra-success: #32D583;
  --indra-warning: #F7B955;
  --indra-error: #FF5C5C;
}
```

Components should consume tokens rather than arbitrary colors.

---

# 23. Layout Architecture

Primary layout:

```text
┌─────────────────────────────────────────────┐
│ Top HUD                                     │
├─────────────────────────────────────────────┤
│                                             │
│                 MAIN CONTENT                │
│                                             │
│                                             │
│                                    ARXON    │
│                                    CONTROL  │
├─────────────────────────────────────────────┤
│ Bottom / Section Navigation                 │
└─────────────────────────────────────────────┘
```

The interface should feel like a system without making the user fight the interface.

---

# 24. Responsive Architecture

## Desktop

Full experience:

* 3D
* HUD
* project universe
* advanced motion
* floating panels

## Tablet

Reduced complexity:

* fewer HUD elements
* simplified 3D
* touch-friendly controls

## Mobile

Purpose-built experience:

* simplified navigation
* reduced 3D
* larger touch targets
* minimal HUD
* fast project browsing
* fixed AI access

Mobile must not simply be a shrunk desktop layout.

---

# 25. Accessibility Architecture

Required:

* semantic HTML
* keyboard navigation
* visible focus
* screen-reader labels
* sufficient contrast
* reduced motion
* accessible forms
* accessible dialogs
* accessible command interface
* no interaction dependent solely on color
* no interaction dependent solely on animation

Keyboard:

```text
Tab
Shift + Tab
Enter
Escape
Arrow Keys
/
```

`/` may open command search.

`Escape` closes overlays.

---

# 26. Reduced Motion

When:

```css
@media (prefers-reduced-motion: reduce)
```

Disable or significantly reduce:

* particle motion
* camera movement
* parallax
* large transitions
* continuous rotation

The system should remain visually coherent without animation.

---

# 27. Performance Architecture

Performance is a system requirement.

Targets:

```text
LCP ≤ 2.5s
INP ≤ 200ms
CLS ≤ 0.1
```

These are target goals, not guarantees across every device/network.

Strategies:

### JavaScript

* code splitting
* lazy loading
* dynamic imports
* minimal client components

### Images

* Next/Image
* WebP/AVIF where appropriate
* responsive sizes
* lazy loading

### 3D

* lazy initialization
* compressed assets
* dynamic quality
* fallback rendering

### Fonts

* optimized loading
* minimal font families
* avoid unnecessary weights

---

# 28. Loading Architecture

The loading experience must represent actual readiness.

Avoid fake:

```text
Loading... 17%
Loading... 43%
Loading... 87%
```

unless those values correspond to real work.

Preferred:

```text
INITIALIZING
      ↓
LOADING CORE
      ↓
LOADING INTERFACE
      ↓
CHECKING CAPABILITIES
      ↓
READY
```

Provide:

```text
[ ENTER SYSTEM ]
[ SKIP INTRO ]
```

---

# 29. Error Architecture

Errors should never expose technical secrets.

Architecture:

```text
Error
 ↓
Error Boundary
 ↓
Logger
 ↓
User-friendly message
```

Example:

```text
ARXON is temporarily unavailable.

You can still explore the portfolio normally.
```

Developer details may be available in diagnostics mode.

---

# 30. Offline / Degraded Mode

The portfolio should degrade gracefully.

Example:

```text
AI unavailable
→ normal portfolio continues

WebGL unavailable
→ 2D visual fallback

Voice unavailable
→ text command system

Analytics unavailable
→ site continues

External GitHub unavailable
→ cached project information remains visible
```

---

# 31. API Architecture

Next.js route handlers:

```text
/api/ai
/api/contact
/api/analytics
```

API responsibilities must remain narrow.

---

# 32. AI API

```text
POST /api/ai
```

Request:

```json
{
  "message": "Tell me about PraGo",
  "sessionId": "optional"
}
```

Response:

```json
{
  "message": "...",
  "intent": "PROJECT",
  "action": null
}
```

Do not expose provider credentials to the browser.

---

# 33. Contact API

```text
POST /api/contact
```

Responsibilities:

* validate input
* sanitize data
* rate limit
* spam protection
* send message
* return safe response

Never trust client-side validation alone.

---

# 34. Security Architecture

Required:

```text
Environment Variables
        ↓
Server-only secrets
        ↓
API validation
        ↓
Rate limiting
        ↓
Input sanitization
        ↓
Safe response
```

Never expose:

* AI API keys
* email provider keys
* database credentials
* private tokens
* internal service credentials

Do not use:

```text
NEXT_PUBLIC_SECRET_KEY
```

for private secrets.

---

# 35. Input Validation

Validate:

* contact forms
* AI input
* commands
* query parameters
* URL parameters

Use schema validation.

Reject:

* malformed input
* oversized input
* unexpected fields
* abusive request rates

---

# 36. Rate Limiting

At minimum protect:

```text
/api/ai
/api/contact
```

Example conceptual policy:

```text
AI:
limited requests / minute / client

Contact:
strictly limited requests / minute / client
```

Exact limits should be tuned after observing real traffic.

---

# 37. Content Security

The application must follow:

* no unsafe HTML injection
* sanitized external content
* safe link handling
* HTTPS
* secure headers where appropriate
* dependency auditing

---

# 38. External Integrations

Potential integrations:

```text
GitHub
LinkedIn
Email
AI Provider
Analytics
Resume Storage
```

Integrations must be isolated.

Example:

```text
lib/integrations/github.ts
lib/integrations/email.ts
lib/integrations/ai.ts
```

Do not scatter external API calls throughout UI components.

---

# 39. Analytics Architecture

Analytics must be privacy-conscious.

Potential events:

```text
page_view
project_open
project_demo_click
github_click
linkedin_click
resume_download
contact_submit
ai_open
ai_query
command_used
voice_used
accessibility_enabled
```

Never collect unnecessary personal data.

---

# 40. SEO Architecture

Each page should have:

* title
* description
* canonical URL
* Open Graph metadata
* Twitter/X metadata where useful
* structured data where appropriate

Technical:

```text
sitemap.xml
robots.txt
semantic HTML
```

Project pages should be indexable when appropriate.

---

# 41. Data Architecture

Initial architecture should remain simple.

Preferred starting point:

```text
TypeScript structured data
```

instead of immediately adding a database.

Example:

```text
data/
├── profile.ts
├── projects.ts
├── skills.ts
├── timeline.ts
└── links.ts
```

A database should only be introduced when dynamic requirements justify it.

---

# 42. Type Architecture

TypeScript types should be centralized.

Example:

```ts
type ProjectStatus =
  | "PLANNED"
  | "PROTOTYPE"
  | "IN DEVELOPMENT"
  | "ACTIVE"
  | "COMPLETED"
  | "EXPERIMENTAL"
  | "ARCHIVED";
```

Never silently use arbitrary status strings throughout the application.

---

# 43. Navigation Architecture

Navigation supports three mechanisms.

### Visual

```text
HUD → section
```

### Command

```text
/ → command
```

### AI

```text
"Show my projects"
```

All three should ultimately call the same navigation actions.

```text
User Input
    ↓
Navigation Intent
    ↓
Navigation Controller
    ↓
Target Section
```

This prevents duplicated navigation logic.

---

# 44. Mode Architecture

INDRA OS supports multiple modes.

## Recruiter Mode

Optimized for:

* quick profile understanding
* skills
* projects
* education
* resume
* contact

## Developer Mode

Optimized for:

* architecture
* technologies
* implementation
* diagnostics
* engineering decisions

## Accessibility Mode

Optimized for:

* keyboard navigation
* reduced motion
* simplified visuals
* high clarity
* standard navigation

Modes should change presentation and shortcuts, not duplicate content.

---

# 45. Diagnostics Architecture

Developer mode may expose a diagnostics panel.

Example:

```text
SYSTEM STATUS

Browser        ONLINE
WebGL          AVAILABLE
AI             READY
Voice          AVAILABLE
Network        ONLINE
Performance    GOOD
Reduced Motion OFF
```

Do not expose sensitive server information.

Never display:

* API keys
* tokens
* private IPs
* server secrets
* internal credentials

---

# 46. State Machine

ARXON system state:

```text
                 ┌──────────────┐
                 │     IDLE     │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │  LISTENING   │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │   THINKING   │
                 └──────┬───────┘
                        │
                 ┌──────┴───────┐
                 ▼              ▼
          ┌────────────┐  ┌────────────┐
          │ RESPONDING │  │   ERROR    │
          └──────┬─────┘  └──────┬─────┘
                 │               │
                 └───────┬───────┘
                         ▼
                       IDLE
```

Navigation can temporarily enter:

```text
NAVIGATING
```

---

# 47. Animation Architecture

Animation categories:

```text
Micro
↓
UI feedback

System
↓
ARXON state

Navigation
↓
section transitions

Cinematic
↓
hero / major moments
```

Animations must have a purpose.

Do not animate everything.

---

# 48. Glassmorphism Architecture

Glass effects should be used selectively.

Recommended:

```text
background
↓
blur layer
↓
transparent surface
↓
border
↓
content
```

Avoid making every element glass.

Primary information must remain readable.

---

# 49. Visual Hierarchy

Priority:

```text
1. Identity
2. Current action
3. Content
4. Navigation
5. Decorative system elements
```

Decorative elements must never compete with important content.

---

# 50. Typography Architecture

Primary:

```text
Geist
Inter
Space Grotesk
```

Technical:

```text
Geist Mono
JetBrains Mono
IBM Plex Mono
```

Use monospace for:

* system labels
* diagnostics
* code
* metadata
* command interface

Avoid using monospace for long reading paragraphs.

---

# 51. Repository Architecture

Git repository:

```text
main
│
├── production
│
└── development
```

Recommended workflow:

```text
feature/*
     ↓
development
     ↓
testing
     ↓
production
```

Commit messages should be descriptive.

Example:

```text
feat: add project universe
fix: improve mobile navigation
perf: lazy load 3d scene
a11y: improve command palette keyboard support
docs: update architecture
```

---

# 52. Testing Architecture

Testing layers:

```text
Unit Tests
    ↓
Component Tests
    ↓
Integration Tests
    ↓
E2E Tests
    ↓
Browser Testing
    ↓
Production Verification
```

Test important flows:

```text
Homepage load
Navigation
Project opening
AI interaction
Command interface
Voice fallback
Contact form
Resume download
Accessibility
Mobile navigation
WebGL fallback
Reduced motion
```

---

# 53. Browser Strategy

Primary:

* Chromium-based browsers
* Firefox
* Safari

Test:

* desktop
* tablet
* mobile

WebGL capability must be detected.

---

# 54. Deployment Architecture

Recommended:

```text
GitHub
   ↓
Vercel
   ↓
Next.js Application
```

Deployment flow:

```text
Push
 ↓
CI
 ↓
Lint
 ↓
Type Check
 ↓
Tests
 ↓
Build
 ↓
Preview
 ↓
Production
```

---

# 55. Environment Architecture

Example:

```text
.env.local
.env.example
```

`.env.example` may contain:

```text
AI_PROVIDER=
AI_API_KEY=
EMAIL_PROVIDER=
EMAIL_API_KEY=
ANALYTICS_ID=
```

Never commit `.env.local`.

---

# 56. Dependency Strategy

Before installing a package ask:

```text
Does this solve a real problem?
Can native browser APIs solve it?
Can existing dependencies solve it?
Does it increase bundle size significantly?
Is it maintained?
```

Avoid dependency duplication.

---

# 57. AI Coding Agent Architecture Rules

Any AI coding agent working on INDRA OS must:

1. Read `PRD.md`.
2. Read `ARCHITECTURE.md`.
3. Understand existing architecture before editing.
4. Reuse existing components.
5. Avoid unnecessary dependencies.
6. Never fabricate portfolio information.
7. Preserve accessibility.
8. Preserve responsive behavior.
9. Preserve performance budgets.
10. Test affected functionality.
11. Avoid unrelated refactors.
12. Explain significant architectural changes.

---

# 58. Change Management

Every major architectural change should answer:

```text
Why?
What changes?
What depends on it?
What are the risks?
How is it tested?
```

Example:

```text
Change:
Move AI provider behind internal router.

Reason:
Provider independence.

Impact:
AI service layer.

Risk:
Response formatting differences.

Mitigation:
Response schema validation.
```

---

# 59. Error and Logging Strategy

Client logs:

* development only
* non-sensitive information

Server logs:

* request failures
* AI failures
* contact failures
* integration failures

Never log:

* API keys
* passwords
* tokens
* private messages unnecessarily
* sensitive personal data

---

# 60. Observability

Monitor:

```text
Performance
Errors
AI failures
API failures
Contact failures
3D failures
Client compatibility
```

Important metrics:

```text
LCP
INP
CLS
JS errors
API latency
AI latency
AI error rate
```

---

# 61. Caching Strategy

Static portfolio data should be aggressively cacheable.

Dynamic:

```text
AI
Contact
Analytics
```

should not be cached incorrectly.

Use framework-level caching intentionally.

Never cache private responses publicly.

---

# 62. SEO + AI Compatibility

Portfolio content should exist as real text in the DOM.

Do not hide the entire portfolio behind:

```text
Canvas
WebGL
AI chat
```

Search engines and accessibility tools should be able to understand:

* name
* role
* projects
* skills
* education
* contact information

---

# 63. Accessibility Fallback Architecture

If advanced UI fails:

```text
INDRA OS
     ↓
Accessible Portfolio Mode
     ↓
Normal sections
     ↓
Keyboard navigation
```

The user should never encounter an unusable blank screen because WebGL failed.

---

# 64. Mobile Performance Architecture

Mobile should prioritize:

```text
Content
 ↓
Navigation
 ↓
Interaction
 ↓
AI
 ↓
Decorative 3D
```

Not:

```text
3D
 ↓
Animation
 ↓
Effects
 ↓
Content
```

---

# 65. Asset Architecture

Recommended:

```text
public/
├── images/
│   ├── projects/
│   ├── profile/
│   └── og/
│
├── models/
│   └── optimized/
│
├── textures/
│
├── icons/
│
└── sounds/
```

All assets should have:

* descriptive names
* optimized size
* appropriate format
* clear ownership/licensing

---

# 66. Originality and Intellectual Property

INDRA OS may take inspiration from:

* aerospace interfaces
* robotics
* futuristic command centers
* sci-fi HUDs
* advanced AI systems

However, it must not copy:

* Marvel branding
* Iron Man artwork
* JARVIS branding
* copyrighted movie UI
* movie sound effects
* logos
* character assets
* exact dialogue
* exact interface designs

The visual identity must remain original.

---

# 67. Performance Fallback Matrix

| Capability               | Experience             |
| ------------------------ | ---------------------- |
| High-end desktop + WebGL | Full INDRA OS          |
| Desktop + limited GPU    | Reduced 3D             |
| Mobile                   | Lightweight experience |
| WebGL unavailable        | 2D fallback            |
| JS limitations           | Semantic content       |
| AI unavailable           | Static portfolio       |
| Voice unavailable        | Text interaction       |
| Reduced motion           | Static/reduced motion  |
| Slow network             | Progressive loading    |

---

# 68. Feature Dependency Map

```text
Portfolio
│
├── Core UI
│
├── Navigation
│
├── Projects
│
├── AI
│   ├── Commands
│   └── Voice
│
├── 3D
│
├── Analytics
│
└── Contact
```

Core portfolio must never depend on:

```text
AI
3D
Voice
Analytics
```

---

# 69. Critical User Journeys

## Journey 1 — Recruiter

```text
Landing
 ↓
Identity
 ↓
Projects
 ↓
Skills
 ↓
Resume
 ↓
Contact
```

Target:

Fast comprehension.

---

## Journey 2 — Developer

```text
Landing
 ↓
Developer Mode
 ↓
Project Universe
 ↓
Case Study
 ↓
Architecture
 ↓
GitHub
```

---

## Journey 3 — AI

```text
Open ARXON
 ↓
Ask question
 ↓
Intent detection
 ↓
Portfolio context
 ↓
Answer
 ↓
Optional navigation
```

---

## Journey 4 — Voice

```text
Activate microphone
 ↓
Speak
 ↓
Transcript
 ↓
Intent
 ↓
Action
 ↓
Feedback
```

---

# 70. Core Navigation Controller

All navigation should ultimately use one controller.

Conceptually:

```ts
navigateTo("projects");
navigateTo("contact");
openProject("prago");
```

AI, commands, buttons, and 3D nodes should all call these actions.

This prevents:

```text
Button navigation ≠ AI navigation ≠ command navigation
```

---

# 71. Project Opening Controller

Project interactions:

```text
Project Node
     ↓
Project ID
     ↓
Project Registry
     ↓
Project Preview
     ↓
Case Study
```

Never duplicate project information inside the 3D scene.

---

# 72. Accessibility Controller

Central preferences:

```ts
{
  reducedMotion,
  accessibilityMode,
  highContrast,
  soundEnabled
}
```

Every visual subsystem should respect these preferences.

---

# 73. Sound Architecture

Sound is:

```text
OFF by default
```

Optional sounds:

* interface activation
* navigation
* AI response
* success
* warning

Do not autoplay audio unexpectedly.

---

# 74. Security Boundaries

```text
Browser
│
├── Public data
├── UI
├── commands
└── temporary interaction state
       │
       ▼
Server
│
├── AI credentials
├── Email credentials
├── private integrations
└── validation
```

The browser is never trusted.

---

# 75. Data Flow Example

Question:

> "What is PraGo?"

```text
User
 ↓
AIInterface
 ↓
POST /api/ai
 ↓
Intent Router
 ↓
PROJECT
 ↓
Project Registry
 ↓
PraGo Data
 ↓
Context Builder
 ↓
AI Provider
 ↓
Response Validator
 ↓
Client
 ↓
ARXON Response
```

---

# 76. Navigation Data Flow

```text
User clicks project
        ↓
Project Node
        ↓
Project ID
        ↓
Navigation Controller
        ↓
Project Route / Modal
        ↓
Case Study
```

---

# 77. Performance Data Flow

```text
Page Load
 ↓
Capability Detection
 ↓
Device Classification
 ↓
Performance Profile
 ↓
Visual Quality Selection
 ↓
Render
```

Possible profiles:

```text
ULTRA
HIGH
MEDIUM
LOW
FALLBACK
```

These profiles should control:

* particle count
* post-processing
* shadow quality
* texture quality
* animation intensity
* 3D complexity

---

# 78. Feature Flags

Experimental functionality may use feature flags.

Example:

```ts
features = {
  projectUniverse: true,
  voice: true,
  advanced3D: true,
  diagnostics: false,
}
```

Feature flags should not become a substitute for proper architecture.

---

# 79. Versioning

Architecture version:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
1.0.0
```

Major:

Breaking architecture change.

Minor:

New architecture capability.

Patch:

Clarification or non-breaking improvement.

---

# 80. Definition of Architectural Success

INDRA OS architecture is successful when:

* portfolio content has a single source of truth
* UI remains modular
* AI is provider-independent
* 3D is isolated from business logic
* navigation is centralized
* accessibility works without advanced effects
* mobile has a dedicated experience
* secrets remain server-side
* AI cannot fabricate portfolio facts
* performance is measurable
* external integrations are isolated
* testing is possible at every important layer
* new projects can be added without rewriting the application

---

# 81. Adding a New Project

Adding a new project should require approximately:

```text
1. Add project data
2. Add project assets
3. Add links
4. Add optional case-study content
```

It should NOT require editing:

```text
AI router
3D engine
navigation system
homepage architecture
```

The system should discover the project from structured data.

---

# 82. Adding a New AI Command

Required:

```text
1. Define command
2. Define aliases
3. Define action
4. Register command
5. Add tests
```

No need to modify unrelated UI components.

---

# 83. Adding a New Section

Required:

```text
1. Create section component
2. Add section metadata
3. Register navigation
4. Add content/data
5. Add responsive behavior
6. Add accessibility
7. Add tests
```

---

# 84. Architecture Quality Gates

Before merging major functionality:

### Code

* TypeScript passes
* lint passes
* no unnecessary dependencies
* no duplicated logic

### UX

* keyboard works
* mobile works
* error states exist
* loading states exist

### Accessibility

* semantic structure
* labels
* focus
* reduced motion

### Performance

* no obvious bundle regression
* images optimized
* 3D lazy loaded
* unnecessary renders avoided

### Security

* secrets protected
* API validated
* input sanitized
* rate limits considered

---

# 85. Final Architecture

The complete INDRA OS architecture can be represented as:

```text
                         INDRA OS
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
       EXPERIENCE        INTELLIGENCE      CONTENT
          │                 │                 │
          │                 │                 │
    ┌─────┼─────┐      ┌────┼────┐       ┌────┼────┐
    │     │     │      │    │    │       │    │    │
   UI    3D   Motion   AI Commands Voice Projects Skills
    │     │     │      │    │    │       │    │    │
    └─────┼─────┘      └────┼────┘       └────┼────┘
          │                 │                 │
          └─────────────────┼─────────────────┘
                            │
                            ▼
                    APPLICATION LAYER
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
           Contact       Analytics       Integrations
              │             │             │
              └─────────────┼─────────────┘
                            │
                            ▼
                      INFRASTRUCTURE
                            │
                ┌───────────┼───────────┐
                │           │           │
              Next.js     Vercel       APIs
```

---

# 86. Master Architectural Rule

> **INDRA OS must feel like a futuristic operating system while remaining architecturally simple, accessible, secure, performant, maintainable, and understandable to another developer.**

The complexity should exist where it creates value:

```text
Experience
AI
3D
Interaction
Storytelling
```

Not in unnecessary:

```text
dependencies
abstractions
services
state
database layers
```

---

# 87. Final Principle

INDRA OS is not built to demonstrate how many technologies can be placed on one website.

It is built to demonstrate:

```text
Engineering
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
Storytelling
```

The architecture must make all of these work together without allowing one subsystem to compromise the others.

The final experience should feel:

**Cinematic on first impression.**

**Clear within seconds.**

**Technically deep when explored.**

**Fast under real conditions.**

**Accessible when needed.**

**Useful without AI.**

**Memorable because of the system—not because of visual noise.**

---

# 88. Architecture Completion Statement

When this architecture is implemented correctly:

```text
INDRA OS
│
├── Thinks through ARXON
├── Navigates through one system
├── Presents projects through one data model
├── Renders 3D independently
├── Scales across devices
├── Degrades gracefully
├── Protects secrets
├── Respects accessibility
├── Measures performance
└── Remains maintainable
```

**Architecture Status:** READY FOR IMPLEMENTATION

**Next Document:** `DEVELOPMENT-GUIDE.md`

**Next Implementation Phase:** Project initialization → design system → application shell → ARXON Core → navigation → project universe → AI → 3D → optimization → testing → deployment.

---

**INDRA OS**

> **Build the system. Tell the story. Let the architecture make the impossible feel organized.**
