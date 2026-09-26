import { SkillGroup, DsaProfile } from "@/types";

export const dsaProfile: DsaProfile = {
  totalSolved: 380,
  platform: "LeetCode & Competitive Platforms",
  primaryLanguage: "C++ (Modern C++17/20)",
  profileUrl: "https://leetcode.com",
  topics: [
    {
      name: "Arrays & Two Pointers",
      description: "Sliding window, prefix sums, binary search patterns, and two-pointer traversals.",
    },
    {
      name: "Trees & Binary Search Trees",
      description: "Depth-first search, breadth-first search, tree construction, LCA, and balance properties.",
    },
    {
      name: "Graphs & Topological Sort",
      description: "BFS/DFS traversals, Dijkstra, Bellman-Ford, Union-Find (DSU), and cycle detection.",
    },
    {
      name: "Dynamic Programming",
      description: "Subproblem memoization, bottom-up tabulations, knapsack variants, and grid DP.",
    },
    {
      name: "Recursion & Backtracking",
      description: "Combinatorial generation, constraint satisfaction, and state tree search.",
    },
    {
      name: "Hashing & Heaps",
      description: "Hash map collisions, priority queues, rolling hash, and top-K frequent elements.",
    },
  ],
};

export const skillsData: SkillGroup[] = [
  {
    category: "Languages",
    description: "Core programming languages utilized for systems, algorithmic reasoning, and web applications.",
    skills: [
      {
        name: "C++",
        category: "Languages",
        level: "Advanced",
        projects: ["380+ DSA Solutions", "Algorithmic Systems"],
        description: "Primary language for Data Structures & Algorithms and competitive problem solving.",
      },
      {
        name: "JavaScript / TypeScript",
        category: "Languages",
        level: "Advanced",
        projects: ["INDRA OS", "PraGo", "KLYRO", "ARXON AI"],
        description: "Primary language for production web engineering, asynchronous concurrency, and type systems.",
      },
      {
        name: "Java",
        category: "Languages",
        level: "Proficient",
        projects: ["Object-Oriented Software", "Academic Engineering"],
        description: "Robust OOP paradigms, concurrency, and enterprise design patterns.",
      },
      {
        name: "Python",
        category: "Languages",
        level: "Proficient",
        projects: ["AI Scripting", "Data Processing", "Backend Micro-tasks"],
        description: "Rapid prototyping, AI integration pipelines, and automation scripting.",
      },
      {
        name: "C",
        category: "Languages",
        level: "Proficient",
        projects: ["Systems Foundations", "Memory Management"],
        description: "Pointers, direct memory allocation, and operating system principles.",
      },
    ],
  },
  {
    category: "Frontend",
    description: "Modern component-driven web frameworks with responsive HUD aesthetics and zero-layout-shift UI.",
    skills: [
      {
        name: "Next.js (App Router)",
        category: "Frontend",
        level: "Advanced",
        projects: ["INDRA OS", "KLYRO"],
        description: "Server components, streaming SSR, route handlers, and performance optimization.",
      },
      {
        name: "React",
        category: "Frontend",
        level: "Advanced",
        projects: ["INDRA OS", "PraGo", "KLYRO"],
        description: "Custom hooks, state management, memoization, and component composition.",
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        level: "Advanced",
        projects: ["INDRA OS", "PraGo", "KLYRO"],
        description: "Design systems, arbitrary variants, fluid typography, and dark-mode tokens.",
      },
      {
        name: "HTML5 & Semantic DOM",
        category: "Frontend",
        level: "Advanced",
        projects: ["All Web Projects"],
        description: "Accessible ARIA architecture, microdata, and SEO-optimized heading hierarchy.",
      },
      {
        name: "CSS3 & Modern Animations",
        category: "Frontend",
        level: "Advanced",
        projects: ["INDRA OS", "Velocity X"],
        description: "CSS Grid, Flexbox, glassmorphism, hardware-accelerated transforms, and keyframes.",
      },
    ],
  },
  {
    category: "Backend",
    description: "High-throughput server runtimes, RESTful interfaces, and asynchronous service handlers.",
    skills: [
      {
        name: "Node.js",
        category: "Backend",
        level: "Advanced",
        projects: ["PraGo", "KLYRO", "ARXON Backend"],
        description: "Event-loop concurrency, streaming I/O, and modular microservices.",
      },
      {
        name: "Express.js",
        category: "Backend",
        level: "Advanced",
        projects: ["PraGo", "KLYRO"],
        description: "Middleware pipelines, RESTful routing, CORS configuration, and error barriers.",
      },
      {
        name: "REST API Architecture",
        category: "Backend",
        level: "Advanced",
        projects: ["PraGo", "KLYRO", "ARXON AI"],
        description: "Standard HTTP methods, idempotent endpoints, pagination, and status codes.",
      },
    ],
  },
  {
    category: "Databases",
    description: "Relational persistence and high-velocity memory caching engines.",
    skills: [
      {
        name: "MySQL",
        category: "Databases",
        level: "Proficient",
        projects: ["PraGo", "KLYRO"],
        description: "Schema normalization, indexing strategies, foreign keys, and ACID transactions.",
      },
      {
        name: "Redis",
        category: "Databases",
        level: "Familiar",
        projects: ["Session Storage", "Caching Experiments"],
        description: "In-memory key-value caching, Pub/Sub channels, and TTL session invalidation.",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Cloud virtualization, container isolation, and distributed source control.",
    skills: [
      {
        name: "Docker",
        category: "Cloud & DevOps",
        level: "Proficient",
        projects: ["Containerized Deployments"],
        description: "Multi-stage Dockerfiles, image optimization, and local container orchestration.",
      },
      {
        name: "Git & GitHub",
        category: "Cloud & DevOps",
        level: "Advanced",
        projects: ["All Projects"],
        description: "Branching strategies, semantic commits, rebase workflows, and CI/CD actions.",
      },
      {
        name: "AWS & Google Cloud",
        category: "Cloud & DevOps",
        level: "Familiar",
        projects: ["Cloud Hosting & Services"],
        description: "Compute hosting, object storage, serverless functions, and IAM policies.",
      },
    ],
  },
  {
    category: "Engineering & Architecture",
    description: "Foundational software engineering principles ensuring maintainability, resilience, and security.",
    skills: [
      {
        name: "Data Structures & Algorithms",
        category: "Engineering & Architecture",
        level: "Advanced",
        projects: ["380+ DSA Problems"],
        description: "Time & space complexity analysis (Big-O), memory limits, and algorithmic efficiency.",
      },
      {
        name: "Authentication & Security",
        category: "Engineering & Architecture",
        level: "Proficient",
        projects: ["PraGo", "KLYRO"],
        description: "JWT tokens, bcrypt hashing, HTTP-only cookies, and XSS/CSRF mitigation.",
      },
      {
        name: "WebSockets & Real-Time",
        category: "Engineering & Architecture",
        level: "Proficient",
        projects: ["ARXON Live Sync", "Chat Engines"],
        description: "Full-duplex bi-directional communications and connection heartbeat handling.",
      },
      {
        name: "Caching & System Scaling",
        category: "Engineering & Architecture",
        level: "Proficient",
        projects: ["Backend Architectures"],
        description: "Cache invalidation strategies, CDN edge caching, and database read replicas.",
      },
    ],
  },
];
