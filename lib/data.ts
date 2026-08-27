import type { LucideIcon } from "lucide-react";
import {
  Lightbulb,
  Layers,
  Languages,
  Zap,
  Code2,
  PenTool,
  Database,
  MonitorSmartphone,
  ServerCog,
  Wrench,
  BookOpen,
  Fingerprint,
  GitBranch,
  Gamepad2,
  ClipboardCheck,
  Globe,
} from "lucide-react";

export const SITE = {
  name: "Joshua Bermas",
  firstName: "Joshua",
  lastName: "Bermas",
  role: "Full-Stack Developer",
  location: "Albay, Philippines",
  email: "joshuabermasworks@gmail.com",
  phoneDisplay: "0995 892 4067",
  phoneHref: "tel:+639958924067",
  github: "https://github.com/josh-brms",
  githubHandle: "@josh-brms",
  resume: "/my_resume.pdf",
  resumeTagline: "Full-Stack Developer Resume",
};

export type AccentToken =
  | "accent"
  | "accent2"
  | "gold"
  | "teal"
  | "coral"
  | "green"
  | "orchid";

export const PILL_STYLES: Record<AccentToken, string> = {
  accent: "border-accent/30 bg-accent/10 text-accent3",
  accent2: "border-accent/30 bg-accent/10 text-accent3",
  gold: "border-gold/30 bg-gold/10 text-gold",
  teal: "border-teal/30 bg-teal/10 text-teal",
  coral: "border-coral/25 bg-coral/10 text-coral",
  green: "border-green/25 bg-green/10 text-green",
  orchid: "border-orchid/25 bg-orchid/10 text-orchid",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

export const TYPING_PHRASES = [
  "Web Developer",
  "Full-Stack Builder",
  "TypeScript Enthusiast",
  "UI Craftsman",
  "Problem Solver",
];

export const HERO_STATS = [
  { value: 7, suffix: "", label: "Projects Shipped" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Commitment" },
] as const;

export const HERO_SKILLS = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "React",
  "Tailwind",
  "Vercel",
  "PostgreSQL",
  "Vite",
  "Three.js",
  "Expo",
  "React Native",
  "C++",
  "Git",
  "HTML/CSS",
  "JavaScript",
];

export const HERO_SKILL_TOKENS: AccentToken[] = [
  "accent",
  "teal",
  "gold",
  "coral",
  "orchid",
  "green",
  "accent2",
  "accent",
  "teal",
  "coral",
  "gold",
  "orchid",
  "green",
  "accent2",
  "teal",
];

export interface AboutItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  token: AccentToken;
}

export const ABOUT_ITEMS: AboutItem[] = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "I love breaking down complex systems into clean, maintainable solutions — from hotel booking flows to full-stack architectures.",
    token: "accent",
  },
  {
    icon: Layers,
    title: "Full-Stack Vision",
    desc: "Comfortable across the stack — from React UI to Supabase back-end to cloud deployment on Vercel.",
    token: "teal",
  },
  {
    icon: Languages,
    title: "Clear Communicator",
    desc: "Fluent in English and Filipino — I translate technical ideas into language everyone understands.",
    token: "orchid",
  },
  {
    icon: Zap,
    title: "Performance-Minded",
    desc: "Fast loads, smooth interactions, green Lighthouse scores — performance is a feature, not an afterthought.",
    token: "gold",
  },
];

export const QUOTE = {
  text: "The best systems I've built weren't just technically correct — they made the person using them feel capable and in control. That's what I'm always building toward.",
  author: "Joshua Bermas",
};

export const EDUCATION = {
  school: "Divine Word College of Legazpi",
  degree: "BS Computer Science",
  tags: ["Legazpi City, Albay", "Philippines", "2022 – 2026"],
};

export interface ProjectMetrics {
  value: string;
  label: string;
}

export const FEATURED_PROJECT = {
  badge: "Featured Project",
  title: "HotelRex — Hotel Management System",
  desc: "A full-stack hotel management platform built to replace manual check-in/out processes, reduce double-bookings, and give hotel staff a unified dashboard for rooms, guests, reservations, and revenue reporting.",
  url: "https://hotelrexmanagement.vercel.app",
  repo: "https://github.com/josh-brms/hotelrexmanagement",
  mockUrl: "hotelrexmanagement.vercel.app/dashboard",
  metrics: [
    { value: "<1.8s", label: "LCP Load" },
    { value: "100%", label: "TypeScript" },
    { value: "95+", label: "Lighthouse" },
  ] as ProjectMetrics[],
  tech: [
    "Next.js 15",
    "TypeScript",
    "Supabase",
    "Tailwind CSS",
    "React 19",
    "PostgreSQL",
    "Recharts",
  ],
  techTokens: ["accent", "teal", "gold", "coral", "orchid", "green", "accent"],
};

export interface SmallProject {
  icon: LucideIcon;
  title: string;
  desc: string;
  tech: string[];
  techTokens: AccentToken[];
  links: { label: string; href: string }[];
}

export const SMALL_PROJECTS: SmallProject[] = [
  {
    icon: BookOpen,
    title: "STMS — Student Task Management",
    desc: "Full-stack academic task manager with JWT auth, role-based access for students & admins, real-time status updates, and PostgreSQL RLS policies. Built for CSPC 321 – Software Engineering.",
    tech: ["React 18", "TypeScript", "Supabase", "Vite", "PostgreSQL"],
    techTokens: ["coral", "teal", "gold", "accent", "green"],
    links: [
      {
        label: "Live Demo",
        href: "https://student-management-system-1-ten.vercel.app",
      },
      {
        label: "GitHub",
        href: "https://github.com/josh-brms/Student_Management_System-1",
      },
    ],
  },
  {
    icon: Fingerprint,
    title: "Personal Portfolio Website",
    desc: "You're looking at it — rebuilt with Next.js 15, an interactive WebGL hero, a ⌘K command palette, and physics-based motion. Theme-aware down to the particles.",
    tech: ["Next.js 15", "Three.js", "Motion", "Tailwind v4"],
    techTokens: ["accent", "teal", "orchid", "green"],
    links: [
      { label: "Live Site", href: "https://myportfolio-orpin-theta-scrdgolhpn.vercel.app" },
      { label: "GitHub", href: "https://github.com/josh-brms/Portfolio" },
    ],
  },
  {
    icon: GitBranch,
    title: "ACO Mission Control",
    desc: "Interactive WebGL simulation of Ant Colony Optimization algorithms for thesis research. Real-time visualization of pheromone dynamics, entropy, and convergence across multiple algorithm variants.",
    tech: ["TypeScript", "Three.js", "Vite", "Web Workers", "Vitest"],
    techTokens: ["teal", "accent", "gold", "orchid", "coral"],
    links: [
      { label: "Live Demo", href: "https://aco-mission-control.vercel.app" },
      { label: "GitHub", href: "https://github.com/josh-brms/aco-mission-control" },
    ],
  },
  {
    icon: Gamepad2,
    title: "Fish Inventory",
    desc: "Cross-platform fish inventory management app built with Expo and React Native. Features local-first data, offline sync, and intuitive species tracking for aquarists.",
    tech: ["Expo", "React Native", "TypeScript", "SQLite", "EAS"],
    techTokens: ["accent", "teal", "green", "coral", "orchid"],
    links: [
      { label: "GitHub", href: "https://github.com/josh-brms/fish-inventory" },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Docent — Document Reviewer Quiz",
    desc: "Interactive quiz application for document reviewers with RPM packaging for Fedora. Features timed assessments, scoring, and result tracking for certification workflows.",
    tech: ["HTML5", "CSS3", "JavaScript", "Vite", "RPM"],
    techTokens: ["gold", "teal", "accent", "coral"],
    links: [
      { label: "GitHub", href: "https://github.com/josh-brms/docent" },
    ],
  },
  {
    icon: Globe,
    title: "Cyrene Portfolio",
    desc: "Single-page portfolio website showcasing creative work with modern HTML/CSS design. Clean, responsive layout for personal branding.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    techTokens: ["coral", "orchid", "gold"],
    links: [
      { label: "GitHub", href: "https://github.com/josh-brms/cy_portfolio" },
    ],
  },
  {
    icon: Gamepad2,
    title: "Super Mario C++ Clone",
    desc: "Faithful Super Mario Bros recreation in C++ with original assets, physics, and level design. Features complete worlds 1-8 with authentic gameplay mechanics.",
    tech: ["C++", "SDL2", "CMake", "Git"],
    techTokens: ["gold", "teal", "accent", "coral"],
    links: [
      { label: "GitHub", href: "https://github.com/josh-brms/supermario" },
    ],
  },
];

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  items: { name: string; level: number; token: AccentToken }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: MonitorSmartphone,
    title: "Frontend",
    items: [
      { name: "React / Next.js", level: 85, token: "accent" },
      { name: "TypeScript", level: 80, token: "accent2" },
      { name: "Tailwind CSS", level: 90, token: "teal" },
      { name: "HTML / CSS", level: 95, token: "orchid" },
    ],
  },
  {
    icon: ServerCog,
    title: "Backend & Database",
    items: [
      { name: "Supabase / PostgreSQL", level: 78, token: "teal" },
      { name: "Node.js / REST APIs", level: 72, token: "green" },
      { name: "SQL", level: 80, token: "gold" },
      { name: "JWT Auth / Row-Level Security", level: 75, token: "coral" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Deployment",
    items: [
      { name: "Git / GitHub", level: 85, token: "coral" },
      { name: "Vercel / CI Deploys", level: 88, token: "accent" },
      { name: "Postman / API Testing", level: 75, token: "gold" },
      { name: "Figma → Code", level: 80, token: "orchid" },
    ],
  },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Full-stack web apps built with Next.js, React, TypeScript, and Supabase. From database schema to live deployment — clean code, responsive design, and real performance.",
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    desc: "Intuitive interfaces with Tailwind CSS and thoughtful component architecture. I design for clarity and usability — reducing friction and delighting users.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "PostgreSQL schema design with Row Level Security, data modeling, and Supabase integration. Structured for scale, security, and maintainability from day one.",
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
  sub: string;
  desc: string;
  token: AccentToken;
}

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2022",
    title: "Started BS Computer Science",
    sub: "Divine Word College of Legazpi",
    desc: "Began formal education in Computer Science, learning the fundamentals of programming, algorithms, and software engineering.",
    token: "accent",
  },
  {
    year: "2023",
    title: "Discovered Full-Stack Development",
    sub: "React, TypeScript & beyond",
    desc: "Dove deep into modern web development — learning React, TypeScript, and back-end concepts that became the foundation of my projects.",
    token: "teal",
  },
  {
    year: "2024",
    title: "Built STMS — First Group Project",
    sub: "CSPC 321 Software Engineering",
    desc: "Led the development of a full-stack student task management system with JWT auth and role-based access — my first real-world-scale project.",
    token: "orchid",
  },
  {
    year: "2025",
    title: "Launched HotelRex",
    sub: "Personal Full-Stack Project",
    desc: "Designed and shipped a complete hotel management platform — from database schema to live Vercel deployment — solving a real operational problem.",
    token: "gold",
  },
  {
    year: "2026",
    title: "Thesis Research — ACO Optimization",
    sub: "Ant Colony Optimization WebGL Simulation",
    desc: "Built an interactive WebGL simulation to visualize and benchmark ACO algorithm variants. Real-time pheromone dynamics, entropy tracking, and convergence analysis for academic research.",
    token: "orchid",
  },
  {
    year: "2026",
    title: "Graduating & Open to Work",
    sub: "Ready for what's next",
    desc: "Completing my BS Computer Science degree and actively seeking entry-level web developer roles. The journey continues.",
    token: "green",
  },
];

export const CONTACT_METHODS = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: "mail",
  },
  {
    label: "Phone",
    value: SITE.phoneDisplay,
    href: SITE.phoneHref,
    icon: "phone",
  },
  {
    label: "GitHub",
    value: `github.com/${SITE.github.replace("https://github.com/", "")}`,
    href: SITE.github,
    icon: "github",
  },
  {
    label: "Location",
    value: "Albay, Bicol Region, Philippines",
    href: null,
    icon: "map-pin",
  },
] as const;

export const MARQUEE_ITEMS = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Three.js",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "Vercel",
  "Git",
  "Recharts",
  "Vite",
];
