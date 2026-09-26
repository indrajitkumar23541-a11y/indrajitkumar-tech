# INDRA OS — DESIGN SYSTEM

**File:** `DESIGN-SYSTEM.md`
**System:** INDRA OS
**Version:** 1.0
**Status:** Foundational Design Specification
**Purpose:** Define the complete visual, interaction, component, motion, typography, color, spacing, responsive, accessibility, and 3D design language of INDRA OS.

---

# 1. DESIGN SYSTEM MISSION

INDRA OS is not a conventional developer portfolio.

It is a **personal AI operating system interface** designed around:

* engineering
* artificial intelligence
* futuristic interfaces
* aerospace systems
* robotics
* digital command centers
* spatial computing
* technical storytelling

The visual system must communicate:

> **Precision + Intelligence + Engineering + Personality**

The interface should feel futuristic without becoming difficult to use.

---

# 2. CORE DESIGN PRINCIPLES

Every design decision should follow these principles:

### 01 — Clarity First

Visual sophistication must never reduce usability.

### 02 — Precision

Spacing, typography, alignment and interaction should feel deliberate.

### 03 — Depth

Use layers, elevation, transparency and spatial relationships to create depth.

### 04 — Restraint

Futuristic does not mean everything glows.

### 05 — Motion With Purpose

Animation should communicate state, hierarchy or transition.

### 06 — Progressive Enhancement

3D and cinematic effects enhance the experience but never become requirements.

### 07 — Accessibility

The interface must remain usable without:

* sound
* WebGL
* mouse
* animation
* AI

### 08 — Originality

The system may draw inspiration from futuristic interfaces but must maintain its own identity.

---

# 3. DESIGN PERSONALITY

INDRA OS should feel:

```text
Futuristic
Technical
Premium
Calm
Intelligent
Precise
Cinematic
Minimal
Confident
Human
```

It should NOT feel:

```text
Noisy
Gimmicky
Over-neon
Cartoonish
Generic SaaS
Gaming-only
Corporate-template
Overly robotic
Cluttered
```

---

# 4. VISUAL LANGUAGE

The visual language combines:

```text
Dark aerospace systems
        +
AI command interfaces
        +
Modern product design
        +
Developer tooling
        +
Subtle holographic depth
        +
Premium editorial typography
```

---

# 5. COLOR SYSTEM

## 5.1 Core Palette

```text
Background Primary
#050608

Background Secondary
#090D12

Surface
#0D1218

Surface Elevated
#111820

Border
#24303A

Border Active
#41515F
```

---

# 6. BRAND ACCENTS

## INDRA GOLD

```text
#FFB000
```

Primary identity accent.

Use for:

* INDRA OS branding
* active system indicators
* selected navigation
* important highlights
* primary visual anchors
* premium accents

Do not use gold everywhere.

Gold should feel intentional.

---

# 7. AI CYAN

```text
#00E5FF
```

Represents:

* AI
* intelligence
* active processing
* digital systems
* voice interaction
* ARXON Core activity

Cyan should primarily represent AI-related states.

---

# 8. TEXT COLORS

```text
Primary Text
#F5F7FA

Secondary Text
#A6B0BC

Muted Text
#66717D
```

Hierarchy:

```text
Primary
  ↓
Secondary
  ↓
Muted
```

Do not use muted text for critical information.

---

# 9. SEMANTIC COLORS

## Success

```text
#32D583
```

## Warning

```text
#F7B955
```

## Error

```text
#FF5C5C
```

Semantic colors should communicate meaning consistently.

---

# 10. COLOR USAGE RULE

Recommended visual balance:

```text
Dark neutrals
████████████████████████████████

Gold
████

Cyan
███

Semantic colors
█
```

The interface should remain predominantly dark.

Accent colors are signals, not backgrounds.

---

# 11. GRADIENT POLICY

Gradients are allowed but should remain subtle.

Preferred:

```text
Dark → Dark
Gold → Transparent
Cyan → Transparent
Surface → Transparent
```

Avoid:

* rainbow gradients
* excessive neon gradients
* large saturated backgrounds
* gradients behind every card

---

# 12. GLOW SYSTEM

Glow should represent importance.

### Soft Glow

Used for:

* active indicators
* AI Core
* selected nodes

### Medium Glow

Used for:

* important interaction states
* hero focus

### Strong Glow

Reserved for:

* system boot
* major AI state transitions
* special moments

Never apply strong glow to normal body text.

---

# 13. GLOW TOKENS

Conceptual tokens:

```css
--glow-gold-soft
--glow-gold-medium
--glow-cyan-soft
--glow-cyan-medium
```

The implementation should use CSS variables or design tokens rather than repeated raw shadow definitions.

---

# 14. TYPOGRAPHY

Primary typography:

```text
Geist
Inter
Space Grotesk
```

Technical typography:

```text
Geist Mono
JetBrains Mono
IBM Plex Mono
```

---

# 15. TYPOGRAPHIC PERSONALITY

Headings:

* confident
* clean
* geometric
* restrained

Body:

* readable
* neutral
* comfortable

Technical text:

* monospaced
* compact
* structured

---

# 16. TYPE SCALE

Recommended starting scale:

```text
Display XL    72px
Display L     64px
Display M     56px

H1            48px
H2            40px
H3            32px
H4            24px

Body XL       20px
Body L        18px
Body M        16px
Body S        14px

Caption       12px
Micro         11px
```

These are starting values and should adapt responsively.

---

# 17. RESPONSIVE TYPOGRAPHY

Desktop:

```text
Large display
Strong hierarchy
Generous whitespace
```

Mobile:

```text
Smaller display
Shorter line lengths
Reduced visual density
```

Do not simply scale every desktop font proportionally.

---

# 18. LINE HEIGHT

Recommended:

```text
Display:
0.95 – 1.10

Heading:
1.05 – 1.20

Body:
1.45 – 1.70

Technical:
1.40 – 1.60
```

Readable body copy should never become cramped.

---

# 19. LETTER SPACING

Display:

```text
-0.03em → 0
```

Body:

```text
0 → 0.01em
```

Technical labels:

```text
0.04em → 0.10em
```

Uppercase HUD labels may use slightly increased tracking.

---

# 20. MONOSPACE USAGE

Monospace should be used for:

* system labels
* commands
* coordinates
* technical metadata
* project IDs
* diagnostics
* code
* status indicators

Do not use monospace for every piece of content.

---

# 21. TEXT HIERARCHY

Example:

```text
INDRA OS
48px / Display

PERSONAL AI PORTFOLIO
14px / HUD Label

Build. Explore. Understand.
20px / Body

SYSTEM STATUS: ONLINE
12px / Mono
```

---

# 22. SPACING SYSTEM

Use a consistent base spacing unit.

Recommended:

```text
4px
```

Scale:

```text
4
8
12
16
20
24
32
40
48
64
80
96
128
160
```

---

# 23. SPACING TOKENS

Example:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

---

# 24. LAYOUT GRID

Desktop content should generally use:

```text
12-column grid
```

with responsive adaptation.

Typical structure:

```text
┌──────────────────────────────────────────┐
│              12 COLUMN GRID              │
│                                          │
│   content        content        content  │
│                                          │
└──────────────────────────────────────────┘
```

---

# 25. MAXIMUM CONTENT WIDTH

Recommended primary content width:

```text
1200px – 1440px
```

depending on section.

Full-screen experiences such as:

* Hero
* Project Universe
* AI Core

may intentionally use the entire viewport.

---

# 26. PAGE GUTTERS

Desktop:

```text
32px – 64px
```

Tablet:

```text
24px – 40px
```

Mobile:

```text
16px – 20px
```

Adjust according to viewport width.

---

# 27. VERTICAL RHYTHM

Major sections should generally have:

```text
96px
128px
160px
```

of vertical separation on large screens.

Mobile should reduce this appropriately.

---

# 28. BORDER SYSTEM

Default border:

```text
1px solid rgba(...)
```

Primary border color:

```text
#24303A
```

Active border:

```text
#41515F
```

Borders should be subtle.

---

# 29. BORDER RADIUS

Recommended:

```text
Small:
8px

Medium:
12px

Large:
16px

Panel:
20px

Hero / special:
24px
```

Avoid excessive pill-shaped UI.

---

# 30. PILL COMPONENTS

Pills should be reserved for:

* tags
* status
* categories
* filters
* technology labels

Not every button needs to be a pill.

---

# 31. ELEVATION SYSTEM

Use subtle layered surfaces.

```text
Level 0
Background

Level 1
Surface

Level 2
Elevated Surface

Level 3
Overlay / Modal

Level 4
System Focus
```

Elevation may combine:

* background difference
* border
* shadow
* blur

Do not rely only on shadow.

---

# 32. SHADOW SYSTEM

Shadows should be:

* soft
* dark
* low opacity
* large radius

Avoid harsh black outlines.

---

# 33. GLASS PANEL

Core glass panel characteristics:

```text
Semi-transparent background
Subtle backdrop blur
1px border
Soft shadow
Optional accent glow
```

Example conceptual token:

```css
--glass-bg: rgba(13, 18, 24, 0.72);
--glass-border: rgba(65, 81, 95, 0.45);
```

---

# 34. GLASS RULE

Do not stack too many translucent layers.

Maximum visual hierarchy should remain understandable.

---

# 35. HUD SYSTEM

HUD elements are a core part of the INDRA OS identity.

HUD components may include:

* status labels
* system indicators
* coordinates
* section identifiers
* command hints
* technical metadata
* tiny separators
* signal indicators

---

# 36. HUD TYPOGRAPHY

HUD text:

```text
Mono
10–13px
Uppercase where appropriate
Moderate letter spacing
Muted or accent color
```

Example:

```text
SYSTEM / ARXON / CORE
STATUS: ONLINE
NODE: 01
```

---

# 37. HUD DENSITY

HUD information should remain secondary.

The visitor should immediately understand the primary content before noticing technical decoration.

---

# 38. HUD CORNERS

Optional decorative corner brackets may be used around important system panels.

Rules:

* subtle
* thin
* aligned
* non-interactive
* never obstruct content

---

# 39. SYSTEM STATUS INDICATOR

Standard format:

```text
● SYSTEM ONLINE
```

or:

```text
[ ONLINE ]
```

Status must represent actual state.

---

# 40. STATUS COLORS

```text
ONLINE / READY
Success

PROCESSING
AI Cyan

WARNING
Warning

ERROR
Error

OFFLINE
Muted / Error
```

---

# 41. BUTTON SYSTEM

Primary button:

```text
High contrast
Clear label
Medium radius
Strong focus state
```

Secondary button:

```text
Transparent / subtle surface
Border
```

Ghost button:

```text
Minimal background
Text-first
```

---

# 42. PRIMARY BUTTON

Use for:

* Explore Projects
* Contact
* Resume
* primary actions

Avoid multiple competing primary buttons in one visual group.

---

# 43. SECONDARY BUTTON

Use for:

* GitHub
* Case Study
* Architecture
* More Details

---

# 44. ICON BUTTON

Icon-only controls require:

* accessible label
* tooltip where useful
* visible focus state

Examples:

* sound
* accessibility
* close
* settings
* microphone

---

# 45. BUTTON STATES

Every button should support:

```text
Default
Hover
Focus
Active
Disabled
Loading
Success
Error
```

where applicable.

---

# 46. BUTTON MOTION

Use subtle:

```text
opacity
translate
scale
glow
```

Avoid large movement.

---

# 47. INPUT SYSTEM

Inputs should use:

```text
Dark surface
Subtle border
Readable text
Clear placeholder
Visible focus
Error state
```

---

# 48. INPUT FOCUS

Focused inputs should receive a clear visual signal.

Possible:

```text
border-color
gold/cyan accent
soft glow
```

Never rely on glow alone.

---

# 49. INPUT ERROR

Error state must include:

* border change
* error message
* accessible association
* actionable guidance

---

# 50. COMMAND PALETTE

Command palette is a primary interaction component.

Activation:

```text
/
```

Visual structure:

```text
┌────────────────────────────────────────┐
│ > Search ARXON...                      │
├────────────────────────────────────────┤
│ Projects                              │
│ Skills                                │
│ About                                 │
│ Contact                               │
└────────────────────────────────────────┘
```

---

# 51. COMMAND PALETTE DESIGN

Characteristics:

* centered or top-centered
* glass surface
* subtle backdrop
* strong typography
* keyboard-friendly
* fast
* searchable

---

# 52. COMMAND PALETTE STATES

```text
Closed
Opening
Searching
Results
No Results
Executing
Success
```

---

# 53. AI CHAT INTERFACE

ARXON chat should not look like a generic messaging application.

It should feel integrated into the operating system.

Possible layout:

```text
┌─────────────────────────────────────┐
│ ARXON CORE                          │
│ ● LISTENING                         │
├─────────────────────────────────────┤
│                                     │
│ ARXON response                      │
│                                     │
├─────────────────────────────────────┤
│ Ask ARXON...                  🎙    │
└─────────────────────────────────────┘
```

---

# 54. AI MESSAGE STYLE

Keep AI responses:

* concise
* structured
* readable

Use:

* short paragraphs
* bullets
* action buttons
* project references

when appropriate.

---

# 55. ARXON CORE

ARXON Core is the visual heart of the system.

It represents:

```text
Intelligence
Identity
System state
Interaction
```

It should not simply be a glowing circle.

---

# 56. AI CORE STATES

```text
IDLE
LISTENING
THINKING
RESPONDING
NAVIGATING
SUCCESS
ERROR
OFFLINE
```

Each state should have a distinct but restrained visual behavior.

---

# 57. AI CORE — IDLE

Visual:

* low-intensity glow
* subtle breathing
* stable geometry
* calm movement

The interface should not appear inactive.

---

# 58. AI CORE — LISTENING

Visual:

* stronger cyan
* waveform or radial response
* microphone indicator
* subtle responsive motion

The user must clearly understand that the microphone is active.

---

# 59. AI CORE — THINKING

Visual:

* internal rotation
* processing rings
* subtle particles
* controlled animation

Avoid fake long delays.

---

# 60. AI CORE — RESPONDING

Visual:

* controlled energy
* light pulse
* active ring
* response synchronization where practical

---

# 61. AI CORE — SUCCESS

Use a short confirmation animation.

Do not leave the success state permanently animated.

---

# 62. AI CORE — ERROR

Use:

* restrained red
* reduced intensity
* clear error message

Avoid dramatic alarm effects.

---

# 63. AI CORE — OFFLINE

Use:

* muted appearance
* clear offline indicator
* functional fallback controls

---

# 64. PROJECT CARD

Project cards should communicate:

```text
Project Name
Tagline
Status
Technology
Short Description
Primary Action
```

---

# 65. PROJECT CARD HIERARCHY

Recommended:

```text
01
Project name

02
One-line value proposition

03
Status / technologies

04
Short description

05
Action
```

---

# 66. PROJECT CARD VISUAL

Possible elements:

* subtle grid
* project identifier
* status chip
* technology tags
* accent line
* hover depth
* preview image
* mini architecture diagram

Do not overload the card.

---

# 67. PROJECT UNIVERSE

The Project Universe is the spatial representation of the project portfolio.

Concept:

```text
                    PROJECT
                       ○

          PROJECT ○    ◉ ARXON    ○ PROJECT

                       ○
                    PROJECT
```

ARXON Core acts as the central system.

---

# 68. PROJECT NODE

Each project node should communicate:

* identity
* status
* category
* connection to ARXON

Hover:

```text
Node expands
Label appears
Connection intensifies
```

Click:

```text
Open project case study
```

---

# 69. PROJECT UNIVERSE PERFORMANCE

Do not render unnecessary complexity.

Use:

* instancing where appropriate
* lightweight geometry
* optimized textures
* adaptive quality
* lazy loading

---

# 70. PROJECT CASE STUDY

Case studies should feel like technical mission reports.

Recommended structure:

```text
Project
↓
Mission
↓
Problem
↓
Solution
↓
Architecture
↓
Engineering
↓
Challenges
↓
Current Status
↓
Demo / Repository
↓
Future
```

---

# 71. CASE STUDY HERO

Include:

* project name
* status
* short description
* primary technology
* hero visual
* main CTA

---

# 72. ARCHITECTURE VISUALIZATION

Architecture diagrams should follow the design system.

Use:

* dark surfaces
* subtle borders
* gold for primary flow
* cyan for AI flow
* semantic colors for warnings/errors
* monospace labels

---

# 73. TECH STACK TAGS

Technology tags should be compact.

Example:

```text
React
Next.js
Node.js
MySQL
Docker
Redis
```

Avoid turning the page into a wall of badges.

---

# 74. TIMELINE SYSTEM

Mission Log / timeline should use a vertical system.

```text
●──────── Mission
│
●──────── Project
│
●──────── Milestone
│
●──────── Learning
```

---

# 75. TIMELINE NODE

Each node may include:

```text
Date
Event
Description
Category
```

---

# 76. ENGINEERING DNA

Engineering principles should be represented through:

* categories
* cards
* diagrams
* short explanations

Potential categories:

```text
System Design
Performance
Security
AI
Backend
Frontend
Problem Solving
Developer Experience
```

---

# 77. DSA VISUALIZATION

DSA section should avoid fake percentage meters.

Prefer:

```text
Problems Solved
Languages
Topics
Patterns
Practice History
```

If actual metrics are available, show them accurately.

---

# 78. SKILL REPRESENTATION

Do not use:

```text
React — 97%
Java — 89%
```

unless there is a legitimate measurement.

Prefer:

```text
Frontend
Backend
AI
Cloud
DevOps
Problem Solving
```

with associated technologies.

---

# 79. RESUME UI

Resume access should be obvious.

Primary action:

```text
VIEW RESUME
```

Secondary:

```text
DOWNLOAD PDF
```

Do not hide resume access inside an easter egg.

---

# 80. NAVIGATION

Primary navigation should remain simple.

Possible:

```text
Home
About
Projects
Engineering
AI Lab
Contact
```

The command system provides advanced navigation.

---

# 81. NAVIGATION INDICATOR

Active navigation should be clear through:

* accent
* underline
* border
* glow
* indicator dot

Do not rely on color alone.

---

# 82. MOBILE NAVIGATION

Mobile may use:

```text
Menu
```

or:

```text
Bottom navigation
```

depending on final UX testing.

The AI command interface remains optional.

---

# 83. FOOTER

Footer should be minimal.

Include:

* name
* copyright
* GitHub
* LinkedIn
* contact
* system version if desired

Do not turn the footer into another giant HUD.

---

# 84. ICONOGRAPHY

Icons should share a consistent visual language.

Preferred:

* simple
* geometric
* thin-to-medium stroke
* technically precise

Avoid mixing many icon styles.

---

# 85. ICON SIZES

Common:

```text
12px
16px
20px
24px
32px
```

Large decorative icons may exceed this intentionally.

---

# 86. IMAGE STYLE

Portfolio imagery should feel:

* cinematic
* realistic
* technical
* dark
* high quality

Avoid random stock images that have no relationship to the project.

---

# 87. IMAGE OVERLAYS

If text overlays an image:

* ensure sufficient contrast
* use gradient overlay where needed
* preserve readability

---

# 88. 3D VISUAL LANGUAGE

3D elements should feel like:

```text
Aerospace
Robotics
Scientific visualization
Advanced computing
Digital instrumentation
```

Avoid:

```text
Fantasy game UI
Toy-like geometry
Excessive sci-fi clichés
```

---

# 89. 3D MATERIALS

Preferred materials:

* dark matte
* brushed metal
* glass
* subtle emissive accents
* technical surfaces

Avoid overly reflective chrome everywhere.

---

# 90. 3D LIGHTING

Lighting should create:

* depth
* silhouette
* hierarchy

Do not use excessive lights.

---

# 91. PARTICLES

Particles should be:

* sparse
* purposeful
* low-cost

Use particles for atmosphere, not as the primary content.

---

# 92. BACKGROUND GRID

A subtle technical grid may be used.

Grid characteristics:

* low contrast
* large spacing
* optional fade
* no distracting animation

---

# 93. SCANLINES

Scanlines may be used as a subtle accent.

Never apply aggressive scanlines across the entire interface.

---

# 94. NOISE / GRAIN

Very subtle grain may improve cinematic depth.

It must not:

* reduce text clarity
* increase GPU cost significantly
* create visual noise

---

# 95. BACKDROP EFFECTS

Use:

* blur
* gradient glow
* vignette
* noise

sparingly.

---

# 96. VIGNETTE

A subtle vignette can focus attention toward the center of major cinematic scenes.

Do not make the entire website look like a dark tunnel.

---

# 97. MOTION SYSTEM

Motion should have hierarchy.

### Micro Motion

```text
100–180ms
```

For:

* hover
* button state
* small UI changes

### Standard Motion

```text
180–350ms
```

For:

* panels
* navigation
* dropdowns

### Cinematic Motion

```text
350–900ms
```

For:

* section transitions
* hero transitions
* major system events

Longer animations require strong justification.

---

# 98. EASING

Preferred:

```text
ease-out
ease-in-out
custom cubic-bezier
spring
```

Avoid excessive linear motion for UI transitions.

---

# 99. SPRING MOTION

Spring motion may be used for:

* cards
* menus
* AI Core
* project nodes

Keep spring behavior controlled and premium.

---

# 100. SCROLL BEHAVIOR

Avoid hijacking normal browser scrolling.

Users should retain natural:

* wheel
* touch
* keyboard
* scrollbar

behavior.

---

# 101. PARALLAX

Parallax may be used sparingly.

It must:

* not interfere with reading
* respect reduced motion
* remain performant

---

# 102. PAGE TRANSITIONS

Page transitions should be:

* fast
* smooth
* non-blocking

Never make visitors wait for decorative transitions.

---

# 103. LOADING SCREEN

Boot screen may contain:

```text
INDRA OS
INITIALIZING
CORE
INTERFACE
READY
```

But displayed progress must correspond to actual readiness if presented as progress.

---

# 104. BOOT SKIP

Always provide a way to bypass lengthy introductory animation.

---

# 105. SKELETON LOADING

Skeletons should be used only when content genuinely loads asynchronously.

They should resemble the final layout.

---

# 106. EMPTY STATES

Empty states should be:

* concise
* informative
* actionable

Example:

```text
NO PROJECTS FOUND

Try another category.
```

---

# 107. ERROR STATES

Error states should include:

```text
What happened
What the user can do
Optional retry
```

---

# 108. TOASTS

Toasts should be used for:

* temporary confirmation
* small errors
* non-blocking feedback

Do not use toasts for critical information that must remain visible.

---

# 109. MODALS

Use modals sparingly.

A modal should be:

* focused
* dismissible
* keyboard accessible
* responsive

---

# 110. DRAWERS

Drawers are useful for:

* mobile navigation
* AI interface
* project metadata
* command systems

---

# 111. TOOLTIP SYSTEM

Tooltips should provide context for unfamiliar icon-only controls.

Do not use tooltips for essential information that should already be visible.

---

# 112. ACCESSIBILITY MODE

Accessibility Mode may automatically:

```text
Reduce motion
Increase contrast
Reduce visual effects
Increase text readability
Simplify 3D
```

---

# 113. CONTRAST

Important text must maintain sufficient contrast against its background.

Do not sacrifice readability for subtle styling.

---

# 114. TOUCH TARGETS

Interactive mobile targets should generally be around:

```text
44 × 44px
```

or larger where practical.

---

# 115. FOCUS RING

Focus indicators should be clearly visible.

Potential styling:

```text
outline
accent border
soft glow
```

Never remove focus without replacement.

---

# 116. SCREEN READER STRATEGY

Important visual states must have accessible text equivalents.

Example:

Visual:

```text
cyan pulsing ARXON Core
```

Accessible:

```text
ARXON is processing your request.
```

---

# 117. MOTION ACCESSIBILITY

No essential information should depend on motion.

---

# 118. COLOR BLINDNESS

Do not rely solely on:

```text
red vs green
cyan vs gold
```

for status communication.

Use labels/icons as well.

---

# 119. DARK MODE

INDRA OS is fundamentally dark-first.

A light theme is not required for v1.

If introduced later, it must be a complete design system rather than simply inverted colors.

---

# 120. DENSITY MODES

Potential future modes:

```text
Cinematic
Balanced
Compact
Accessibility
```

Default:

```text
Cinematic / Balanced
```

---

# 121. RECRUITER MODE VISUAL

Recruiter Mode should reduce unnecessary visual complexity.

Prioritize:

```text
Profile
Skills
Projects
DSA
Resume
Contact
```

---

# 122. DEVELOPER MODE VISUAL

Developer Mode may expose:

* architecture
* diagnostics
* technical metadata
* system diagrams
* command shortcuts

while retaining the same core visual language.

---

# 123. ACCESSIBILITY MODE VISUAL

Accessibility Mode should prioritize:

* readability
* contrast
* reduced motion
* simpler layouts
* less visual noise

---

# 124. DESIGN TOKENS

The implementation should centralize tokens.

Example:

```css
:root {
  --color-bg-primary: #050608;
  --color-bg-secondary: #090D12;

  --color-surface: #0D1218;
  --color-surface-elevated: #111820;

  --color-border: #24303A;
  --color-border-active: #41515F;

  --color-indra-gold: #FFB000;
  --color-ai-cyan: #00E5FF;

  --color-text-primary: #F5F7FA;
  --color-text-secondary: #A6B0BC;
  --color-text-muted: #66717D;

  --color-success: #32D583;
  --color-warning: #F7B955;
  --color-error: #FF5C5C;
}
```

---

# 125. COMPONENT TOKENIZATION

Components should consume semantic tokens.

Example:

```text
Button
↓
--color-indra-gold
```

rather than:

```text
Button
↓
#FFB000
```

everywhere.

This makes future redesign easier.

---

# 126. Z-INDEX SYSTEM

Use a documented layering system.

Example:

```text
Base
10

HUD
20

Navigation
30

Floating Controls
40

AI Interface
50

Command Palette
60

Modal
70

Critical Overlay
80

Boot Screen
90
```

Avoid random values like:

```text
999999
```

unless genuinely required.

---

# 127. OVERLAY RULE

Overlays should not trap users unintentionally.

Provide:

* close
* escape
* focus management
* mobile support

---

# 128. DESIGN SYSTEM COMPONENT HIERARCHY

Recommended:

```text
Primitives
│
├── Text
├── Icon
├── Button
├── Badge
├── Divider
└── Surface

Components
│
├── Card
├── Input
├── Modal
├── Tooltip
├── Toast
└── CommandItem

Systems
│
├── Navigation
├── ARXON Core
├── Command Palette
├── AI Interface
└── Project Universe

Sections
│
├── Hero
├── About
├── Projects
├── Engineering
├── DSA
├── Lab
├── Contact
└── Footer
```

---

# 129. COMPONENT API PRINCIPLE

Reusable components should expose meaningful props.

Avoid excessive boolean props.

Bad:

```tsx
<Card
  isBig
  isSmall
  isDark
  isGlow
  isSpecial
  isPremium
/>
```

Prefer semantic variants:

```tsx
<Card variant="featured" />
```

---

# 130. VARIANT SYSTEM

Preferred:

```text
default
subtle
elevated
featured
interactive
danger
```

depending on component.

---

# 131. DESIGN SYSTEM DOCUMENTATION

Each major reusable component should eventually document:

* purpose
* variants
* states
* accessibility
* responsive behavior
* usage example

---

# 132. COMPONENT STATES

Interactive components should define states before implementation.

Example:

```text
Button
├── Default
├── Hover
├── Focus
├── Active
├── Disabled
└── Loading
```

---

# 133. VISUAL CONSISTENCY

If two components perform similar functions, they should look related.

Avoid:

```text
Five different button styles
Four different card styles
Three different border systems
```

without a deliberate hierarchy.

---

# 134. DESIGN DEBT

When intentionally breaking the design system:

Document why.

Example:

```text
This component intentionally uses a full-screen layout because
Project Universe requires spatial interaction.
```

---

# 135. DESIGN SYSTEM EVOLUTION

Changes should be deliberate.

Before changing a global token, assess:

* all affected components
* mobile effects
* accessibility
* contrast
* 3D integration
* screenshots/visual tests

---

# 136. VISUAL REGRESSION

Important design-system changes should be visually checked across:

```text
Desktop
Tablet
Mobile
Reduced Motion
Accessibility Mode
```

---

# 137. PERFORMANCE RULE FOR VISUAL EFFECTS

Before adding an effect ask:

```text
Does it improve UX?

What does it cost?

Can it be CSS instead of JavaScript?

Can it be static?

Can it be disabled on low-end devices?

Can it respect reduced motion?
```

---

# 138. CSS FIRST

Prefer CSS for simple:

* transitions
* gradients
* borders
* shadows
* hover effects
* simple transforms

Do not use JavaScript for effects CSS can handle efficiently.

---

# 139. CANVAS / WEBGL ONLY WHEN JUSTIFIED

Use WebGL when it provides meaningful spatial or visual value.

Do not use WebGL to render:

* simple text
* basic buttons
* standard cards
* essential navigation

---

# 140. IMAGE VS 3D

Choose based on purpose.

Use image when:

```text
Static visual is sufficient.
```

Use 3D when:

```text
Spatial interaction adds meaningful value.
```

---

# 141. RESPONSIVE 3D

Desktop:

```text
Full experience
```

Tablet:

```text
Reduced complexity
```

Mobile:

```text
Selective 3D
```

Low capability:

```text
2D fallback
```

---

# 142. DESIGN SYSTEM QUALITY BAR

A design-system component is production-ready when:

* [ ] Visual hierarchy is clear
* [ ] Typography is consistent
* [ ] Tokens are used
* [ ] States are defined
* [ ] Keyboard works
* [ ] Focus works
* [ ] Mobile works
* [ ] Reduced motion works
* [ ] Contrast is acceptable
* [ ] No unnecessary animation
* [ ] No unnecessary dependencies
* [ ] No duplicate styling system

---

# 143. FINAL VISUAL RULE

INDRA OS should never look like:

> "A normal portfolio with some neon effects."

It should feel like:

> **A carefully engineered digital environment built around one developer, his work, and his AI system.**

---

# 144. DESIGN NORTH STAR

Every major visual decision should pass this test:

```text
Does this make INDRA OS more:

Precise?
Useful?
Memorable?
Readable?
Technical?
Human?
Fast?
Accessible?
Original?
```

If the answer is no, reconsider the feature.

---

# 145. FINAL DESIGN PHILOSOPHY

The interface should create the feeling:

> **"I am not browsing a resume. I am exploring a developer's digital world."**

But beneath the cinematic surface:

```text
Typography remains readable.
Navigation remains obvious.
Content remains factual.
AI remains grounded.
3D remains optional.
Motion remains controlled.
Accessibility remains intact.
Performance remains important.
```

---

# 146. DESIGN SYSTEM CONSTITUTION

```text
Dark, not dull.
Futuristic, not chaotic.
Premium, not excessive.
Technical, not intimidating.
Cinematic, not slow.
Interactive, not confusing.
AI-powered, not AI-dependent.
3D-enhanced, not 3D-dependent.
Minimal, not empty.
Original, not derivative.
```

---

# 147. DOCUMENT STATUS

```text
PRD.md                 ✓ COMPLETE
ARCHITECTURE.md        ✓ COMPLETE
DEVELOPMENT-GUIDE.md   ✓ COMPLETE
AI-SYSTEM.md           ✓ COMPLETE
AI-RULES.md            ✓ COMPLETE
DESIGN-SYSTEM.md       ✓ COMPLETE
```

**DESIGN-SYSTEM.md — COMPLETE**

**INDRA OS Visual Language — DEFINED**
