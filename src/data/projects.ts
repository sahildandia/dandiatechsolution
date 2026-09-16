export type ProjectStatus = "LIVE" | "IN DEVELOPMENT" | "EXPERIMENT" | "COMING SOON";

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  result?: string;
  status: ProjectStatus;
  demoUrl?: string;
  githubUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "ai-business-assistant",
    title: "AI Business Assistant",
    category: "AI",
    status: "IN DEVELOPMENT",
    shortDescription: "An intelligent business assistant capable of automating customer support and internal queries.",
    problem: "Customer support teams were overwhelmed with repetitive queries, leading to slow response times and decreased customer satisfaction.",
    solution: "Developed an AI-powered assistant using LLMs to automatically handle common queries, escalate complex issues to human agents, and summarize interactions.",
    tech: ["Next.js", "Python", "OpenAI API", "TailwindCSS"],
    features: ["Natural Language Processing", "Automated Responses", "Human Handoff", "Analytics Dashboard"],
    result: "Reduced average response time by 80% and handled 60% of tier 1 support tickets automatically.",
    githubUrl: "https://github.com/dandiasahil",
    images: ["/project-placeholder-1.jpg"],
  },
  {
    id: "enterprise-saas-dashboard",
    title: "Enterprise SaaS Dashboard",
    category: "UI/UX & Web Development",
    status: "LIVE",
    shortDescription: "A scalable dashboard for enterprise analytics with real-time data visualization.",
    problem: "The client needed a centralized platform to visualize complex data sets from multiple sources in real-time.",
    solution: "Designed and built a responsive SaaS dashboard with interactive charts, customizable widgets, and secure authentication.",
    tech: ["React", "TypeScript", "Framer Motion", "Node.js"],
    features: ["Real-time Data Visualization", "Customizable Widgets", "Role-based Access Control", "Data Export"],
    demoUrl: "https://dandiatechsolution.vercel.app/",
    images: ["/project-placeholder-2.jpg"],
  },
  {
    id: "automated-workflow-system",
    title: "Automated Workflow System",
    category: "Automation",
    status: "EXPERIMENT",
    shortDescription: "Custom internal automation tool that reduced manual data entry by 80% for a logistics client.",
    problem: "Logistics coordinators spent hours manually transferring data between disparate legacy systems.",
    solution: "Built a customized automation pipeline using webhooks and custom scripts to synchronize data instantly.",
    tech: ["Python", "FastAPI", "Webhooks", "Docker"],
    features: ["Real-time Sync", "Error Logging", "Custom Webhooks", "Dashboard Interface"],
    images: ["/project-placeholder-3.jpg"],
  },
  {
    id: "stealth-ai-agent",
    title: "Stealth AI Agent",
    category: "AI Agents",
    status: "COMING SOON",
    shortDescription: "An autonomous agent designed to research and compile industry reports.",
    problem: "Market research is time-consuming and often outdated by the time it is published.",
    solution: "Developing an autonomous agent that continuously scrapes, analyzes, and synthesizes market data.",
    tech: ["Python", "LangChain", "Vector DB"],
    features: ["Autonomous Research", "Data Synthesis", "Automated Reporting"],
    images: ["/project-placeholder-1.jpg"],
  }
];
