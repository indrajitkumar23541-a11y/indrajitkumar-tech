import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "indra-os",
    name: "INDRA OS",
    codename: "SYSTEM_CORE",
    tagline: "Personal AI Developer Operating System & Spatial Portfolio",
    description:
      "A cinematic, futuristic developer interface and operating system combining Next.js App Router, Tailwind CSS, high-performance UI engineering, and the integrated ARXON Intelligence Core.",
    category: "AI Systems",
    status: "ACTIVE",
    featured: true,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL/Three.js"],
    role: "Lead Architect & Full-Stack Engineer",
    year: "2026",
    links: {
      github: "https://github.com/indrajitkumar/indra-os",
      live: "https://indra-os.dev",
      demo: "#",
    },
    metrics: [
      { label: "Architecture", value: "Next.js App Router" },
      { label: "AI Engine", value: "ARXON Core" },
      { label: "Design System", value: "Aerospace HUD" },
    ],
    caseStudy: {
      overview:
        "Conventional developer portfolios are static marketing pages with identical cards. INDRA OS reconceptualizes the developer showcase as an interactive digital operating system that visitors can operate, explore, and query via AI.",
      problem:
        "Portfolios often disconnect recruiter efficiency from memorable creative storytelling. Visitors either get a dry document or an inaccessible, laggy 3D animation experiment.",
      goal:
        "Deliver an instant-loading, accessible, and responsive system that communicates engineering depth, problem solving (380+ DSA), and AI architecture with zero compromise on usability.",
      solution:
        "Built a layered HUD architecture separating UI tokens, deterministic data layers, and an AI intelligence core (ARXON), with complete fallbacks for accessibility and low-power hardware.",
      architectureLayers: [
        {
          layer: "Presentation Layer",
          components: ["HUD Shell", "TopBar Diagnostics", "Section Panels", "Command Palette"],
        },
        {
          layer: "Intelligence Layer",
          components: ["ARXON Core State Machine", "Context Resolver", "Voice & Text Dispatcher"],
        },
        {
          layer: "Data Matrix",
          components: ["Structured SSoT Data Layer", "Project Matrix", "Mission Log"],
        },
      ],
      engineeringDecisions: [
        "Enforced strict design tokens (INDRA Gold #FFB000, AI Cyan #00E5FF, Deep Obsidian #050608).",
        "Single source of truth in typed TypeScript data modules to eliminate runtime hallucination.",
        "Progressive enhancement ensuring full keyboard navigation and reduced-motion compliance.",
      ],
      challenges: [
        "Balancing futuristic holographic depth with strict 60fps performance and minimal bundle footprint.",
        "Designing an AI assistant interface that is authentically grounded in verified portfolio data.",
      ],
      futureRoadmap: [
        "Interactive 3D Project Universe constellation view.",
        "Web Speech API bi-directional voice interface.",
        "Interactive system diagnostics terminal.",
      ],
    },
    universeCoordinates: {
      orbit: 1,
      angle: 0,
      color: "#FFB000",
    },
  },
  {
    id: "prago",
    name: "PraGo",
    codename: "MED_MATRIX",
    tagline: "Intelligent Healthcare Coordination & Telemedicine Platform",
    description:
      "A comprehensive digital healthcare management platform connecting patients, healthcare practitioners, hospitals, pharmacies, and diagnostic laboratories with streamlined workflows.",
    category: "Full-Stack Platforms",
    status: "ACTIVE",
    featured: true,
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "REST API"],
    role: "Full-Stack Developer",
    year: "2025",
    links: {
      github: "https://github.com/indrajitkumar/prago",
      live: "#",
    },
    metrics: [
      { label: "Domain", value: "Healthcare Tech" },
      { label: "Backend", value: "Node / Express" },
      { label: "Storage", value: "Relational MySQL" },
    ],
    caseStudy: {
      overview:
        "Healthcare accessibility requires frictionless communication across fragmented stakeholders: patients seeking timely consultations, doctors managing schedules, and pharmacies dispensing orders.",
      problem:
        "Fragmented systems cause diagnostic delays, uncoordinated prescription fulfillment, and administrative overhead for clinics.",
      goal:
        "Engineer an integrated healthcare platform with structured role-based access control, real-time appointments, and medical record access.",
      solution:
        "Developed modular service boundaries for Patients, Doctors, Admin, and Delivery, with authenticated REST endpoints and normalized relational database schemas.",
      architectureLayers: [
        {
          layer: "Client Tier",
          components: ["Patient Dashboard", "Doctor Portal", "Admin & Pharmacy Views"],
        },
        {
          layer: "API Gateway & Security",
          components: ["JWT Authentication", "Role-Based Access Control", "Input Sanitization"],
        },
        {
          layer: "Data Storage",
          components: ["Relational MySQL Schema", "Transaction Management", "Prescription Vault"],
        },
      ],
      engineeringDecisions: [
        "Chose normalized relational schemas in MySQL to preserve transactional integrity across consultations.",
        "Implemented strict role-based access control middleware to prevent privilege escalation.",
      ],
      challenges: [
        "Handling complex scheduling conflicts and role-specific data privacy standards.",
        "Optimizing appointment query responses during high simulated concurrent booking loads.",
      ],
      futureRoadmap: [
        "Integration of AI-assisted preliminary triage insights.",
        "Automated medicine dispatch tracking.",
      ],
    },
    universeCoordinates: {
      orbit: 2,
      angle: 65,
      color: "#32D583",
    },
  },
  {
    id: "klyro",
    name: "KLYRO",
    codename: "COMMERCE_FLOW",
    tagline: "High-Performance Modern E-Commerce & Inventory Infrastructure",
    description:
      "Scalable e-commerce web platform engineered for responsive product exploration, secure transactional checkout, dynamic cart synchronization, and inventory tracking.",
    category: "Full-Stack Platforms",
    status: "COMPLETED",
    featured: true,
    technologies: ["React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB/MySQL", "Stripe API"],
    role: "Full-Stack Developer",
    year: "2025",
    links: {
      github: "https://github.com/indrajitkumar/klyro",
      live: "#",
    },
    metrics: [
      { label: "Performance", value: "Sub-second Page Load" },
      { label: "Checkout", value: "Secured Gateway" },
      { label: "Catalog", value: "Dynamic Filtering" },
    ],
    caseStudy: {
      overview:
        "KLYRO was developed to master modern full-stack commerce requirements: product catalogs, optimistic cart state, payment gateway reconciliation, and reliable order histories.",
      problem:
        "High churn in e-commerce occurs when product discovery is sluggish and checkout flows experience state desynchronization.",
      goal:
        "Build a clean, high-performance marketplace platform featuring immediate client-side filtering, instant search, and atomic order creation.",
      solution:
        "Engineered an optimized React client backed by Node.js REST services with client-side caching and resilient cart persistence.",
      architectureLayers: [
        {
          layer: "Storefront UI",
          components: ["Catalog Grid", "Facet Filters", "Optimistic Shopping Bag", "Checkout Modal"],
        },
        {
          layer: "Commerce Engine",
          components: ["Cart Reconciliation", "Pricing Engine", "Order Lifecycle Handler"],
        },
        {
          layer: "Persistence",
          components: ["Product Index", "User Accounts", "Order Ledger"],
        },
      ],
      engineeringDecisions: [
        "Leveraged optimistic UI updates for cart modifications to ensure zero perceivable latency.",
        "Separated public catalog queries from transactional order processing pipelines.",
      ],
      challenges: [
        "Preventing race conditions when cart items are updated across multiple browser tabs.",
        "Ensuring idempotent order creation to prevent duplicate billing.",
      ],
      futureRoadmap: [
        "Real-time stock reservation using Redis Pub/Sub.",
        "Personalized product recommendation algorithms.",
      ],
    },
    universeCoordinates: {
      orbit: 2,
      angle: 190,
      color: "#00E5FF",
    },
  },
  {
    id: "arxon-ai",
    name: "ARXON AI",
    codename: "INTELLIGENCE_CORE",
    tagline: "Autonomous Personal Intelligence Core & Developer Knowledge Retrieval Agent",
    description:
      "A tailored personal AI intelligence architecture designed to process developer documentation, assist system exploration, execute verified workflows, and offer conversational navigation.",
    category: "AI Systems",
    status: "ACTIVE",
    featured: true,
    technologies: ["TypeScript", "Next.js API", "LLM APIs", "Vector Context", "Web Speech API"],
    role: "AI Systems Architect",
    year: "2026",
    links: {
      github: "https://github.com/indrajitkumar/indra-os",
      demo: "#arxon",
    },
    metrics: [
      { label: "Persona", value: "Calm & Technical" },
      { label: "Interaction", value: "Text & Voice" },
      { label: "Truth Grounding", value: "Zero Hallucination SSoT" },
    ],
    caseStudy: {
      overview:
        "ARXON is the integrated personal intelligence core embedded directly into INDRA OS, serving as an interactive interface between the visitor and Indrajit's engineering repertoire.",
      problem:
        "Most portfolio AI chatbots are generic LLM wrappers that hallucinate nonexistent work history, fabricate awards, or break character under conversational drift.",
      goal:
        "Design an AI assistant strictly grounded in authentic verified data with stateful emotional HUD indicators and deterministic command execution.",
      solution:
        "Constructed a multi-stage prompt & verification pipeline with strict grounding rules, fallback responses, and safe UI dispatch actions.",
      architectureLayers: [
        {
          layer: "Interaction Layer",
          components: ["Speech Synthesizer", "Voice Waveform Canvas", "Terminal Chat Interface"],
        },
        {
          layer: "Core Reasoning",
          components: ["Context Injector", "Grounding Validator", "Command Parser"],
        },
        {
          layer: "System Dispatch",
          components: ["Section Router", "Modal Controller", "Theme Adjuster"],
        },
      ],
      engineeringDecisions: [
        "Enforced strict 'I don't have that information' policy rather than probabilistic fabrication.",
        "Visual feedback mapped directly to AI lifecycle states (Idle, Listening, Thinking, Responding).",
      ],
      challenges: [
        "Handling network latency while maintaining continuous HUD animation fluidity.",
        "Designing natural conversational responses that respect the technical aerospace persona.",
      ],
      futureRoadmap: [
        "Voice cloning for personalized speech synthesis.",
        "Local client-side WebLLM fallback for 100% offline intelligence.",
      ],
    },
    universeCoordinates: {
      orbit: 3,
      angle: 120,
      color: "#00E5FF",
    },
  },
  {
    id: "velocity-x",
    name: "Velocity X",
    codename: "PHYSICS_LAB",
    tagline: "Experimental 3D Vehicle Dynamics & Physics Simulation Lab",
    description:
      "A real-time WebGL and Three.js physics sandbox exploring vehicle dynamics, particle tire friction, camera inertia, and procedural lighting on modern web browsers.",
    category: "Spatial & 3D",
    status: "R&D",
    featured: false,
    technologies: ["Three.js", "React Three Fiber", "Cannon-es / Rapier", "TypeScript", "Vite"],
    role: "Graphics & Simulation Developer",
    year: "2025",
    links: {
      github: "https://github.com/indrajitkumar/velocity-x",
      demo: "#",
    },
    metrics: [
      { label: "Engine", value: "Three.js / WebGL" },
      { label: "Physics", value: "Rigid Body Dynamics" },
      { label: "Target FPS", value: "60 FPS on Web" },
    ],
    caseStudy: {
      overview:
        "An exploration into WebGL rendering capabilities and physics simulation without heavy native game engines.",
      problem:
        "Achieving convincing vehicle inertia and drift mechanics inside a lightweight browser environment without frame drops.",
      goal:
        "Demonstrate browser-based 3D simulation with responsive controls and optimized asset pipelines.",
      solution:
        "Built low-poly modular vehicle geometries with custom shader material passes and rigid-body raycast vehicle suspension.",
      architectureLayers: [
        {
          layer: "Graphics Pipeline",
          components: ["Three.js Scene Graph", "Directional Shadow Maps", "Bloom Post-processing"],
        },
        {
          layer: "Physics World",
          components: ["Rigid Body Colliders", "Suspension Springs", "Friction Raycasts"],
        },
      ],
      engineeringDecisions: [
        "Kept geometry counts below 25,000 vertices to ensure high frame rates on integrated GPUs.",
      ],
      challenges: [
        "Tuning wheel friction curves to prevent unrealistic sliding.",
      ],
      futureRoadmap: [
        "Procedural terrain generation.",
        "Multiplayer time-trial synchronization via WebSockets.",
      ],
    },
    universeCoordinates: {
      orbit: 3,
      angle: 280,
      color: "#F7B955",
    },
  },
  {
    id: "astraview",
    name: "Astraview",
    codename: "ORBIT_INTEL",
    tagline: "Interactive Space Telemetry & Celestial Orbit Visualization",
    description:
      "A spatial visualization console tracking celestial bodies, satellite ephemerides, and planetary trajectories using open astronomical data and WebGL coordinate projections.",
    category: "Spatial & 3D",
    status: "EXPERIMENTAL",
    featured: false,
    technologies: ["TypeScript", "Three.js", "WebGL", "NASA Open APIs", "Tailwind CSS"],
    role: "Frontend Engineer",
    year: "2025",
    links: {
      github: "https://github.com/indrajitkumar/astraview",
      demo: "#",
    },
    metrics: [
      { label: "Data Source", value: "Astronomical APIs" },
      { label: "Coordinate Model", value: "Keplerian Orbits" },
      { label: "Mode", value: "3D Planetary HUD" },
    ],
    caseStudy: {
      overview:
        "A technical experiment exploring data visualization for aerospace and orbital mechanics.",
      problem:
        "Astronomical coordinate conversions and astronomical units (AU) are difficult to comprehend in flat 2D representations.",
      goal:
        "Create an interactive orbital sandbox where users can view planetary alignments and satellite paths in 3D.",
      solution:
        "Mapped Keplerian orbital elements to WebGL spline curves with proportional time dilation.",
      architectureLayers: [
        {
          layer: "Visualization",
          components: ["Orbital Spline Renderers", "Celestial Sphere", "HUD Vector Reticle"],
        },
        {
          layer: "Ephemeris Calculator",
          components: ["Keplerian Element Solver", "Time Scaling Engine"],
        },
      ],
      engineeringDecisions: [
        "Implemented logarithmic depth buffer to prevent Z-fighting across massive astronomical scale ratios.",
      ],
      challenges: [
        "Accurately representing vast distance scales without losing visual clarity of inner orbits.",
      ],
      futureRoadmap: [
        "Real-time ISS orbital pass predictions based on visitor geolocation.",
      ],
    },
    universeCoordinates: {
      orbit: 4,
      angle: 330,
      color: "#9E77ED",
    },
  },
];
