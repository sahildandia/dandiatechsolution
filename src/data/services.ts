export interface Service {
  id: string;
  title: string;
  icon: string; // just a string identifier for mapping to lucide icons
  whatItIs: string;
  whatICanBuild: string[];
  features: string[];
  technologies: string[];
  workflow: string[];
  relevantProjects: string[]; // project ids
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "Monitor",
    whatItIs: "High-performance, responsive, and SEO-optimized websites and web applications tailored to your business needs.",
    whatICanBuild: [
      "Business websites",
      "Landing pages",
      "Web applications",
      "SaaS interfaces",
      "Dashboards"
    ],
    features: ["Responsive Design", "SEO Optimization", "Fast Load Times", "Secure Architecture"],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    workflow: ["Discovery", "Design", "Development", "Testing", "Deployment"],
    relevantProjects: ["enterprise-saas-dashboard"]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    icon: "Cpu",
    whatItIs: "Custom artificial intelligence solutions to automate processes, generate content, and analyze data.",
    whatICanBuild: [
      "LLM Applications",
      "Chatbots",
      "Content Generators",
      "Data Analysis Tools"
    ],
    features: ["Custom Prompts", "API Integration", "Scalable Processing", "Data Privacy"],
    technologies: ["Python", "OpenAI API", "LangChain", "Vector Databases"],
    workflow: ["Data Audit", "Model Selection", "Integration", "Tuning", "Launch"],
    relevantProjects: ["ai-business-assistant"]
  },
  {
    id: "automation",
    title: "Automation",
    icon: "Zap",
    whatItIs: "Streamline your business operations by connecting apps and automating repetitive tasks.",
    whatICanBuild: [
      "Custom Zapier/Make Integrations",
      "Data Sync Scripts",
      "Automated Reporting",
      "Internal Tools"
    ],
    features: ["Reduced Manual Work", "Error Reduction", "Time Savings", "Custom Logic"],
    technologies: ["Python", "Webhooks", "REST APIs", "Node.js"],
    workflow: ["Process Analysis", "Architecture Design", "Scripting", "Testing", "Monitoring"],
    relevantProjects: ["automated-workflow-system"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: "Layout",
    whatItIs: "User-centric design that looks beautiful and converts visitors into customers.",
    whatICanBuild: [
      "Wireframes",
      "High-Fidelity Mockups",
      "Interactive Prototypes",
      "Design Systems"
    ],
    features: ["User Research", "Intuitive Navigation", "Modern Aesthetics", "Accessibility"],
    technologies: ["Figma", "Framer", "CSS/Tailwind"],
    workflow: ["Research", "Wireframing", "Visual Design", "Prototyping", "Handoff"],
    relevantProjects: ["enterprise-saas-dashboard"]
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    icon: "Bot",
    whatItIs: "Autonomous AI agents capable of reasoning, planning, and executing complex tasks on your behalf.",
    whatICanBuild: [
      "Research Agents",
      "Customer Support Agents",
      "Data Entry Agents",
      "Sales Assistants"
    ],
    features: ["Autonomous Execution", "Multi-step Reasoning", "Tool Usage", "Continuous Learning"],
    technologies: ["Python", "LangChain", "OpenAI", "Custom APIs"],
    workflow: ["Task Definition", "Agent Architecture", "Tool Integration", "Testing", "Deployment"],
    relevantProjects: ["stealth-ai-agent"]
  },
  {
    id: "after-launch",
    title: "After-Launch Support",
    icon: "LifeBuoy",
    whatItIs: "Ongoing technical support to keep your digital assets running smoothly and efficiently.",
    whatICanBuild: [
      "Bug Fixes",
      "Website Updates",
      "Performance Optimization",
      "Feature Improvements",
      "Technical Maintenance",
      "AI/API Maintenance"
    ],
    features: ["Timely Updates", "Proactive Monitoring", "Security Patches", "Performance Audits"],
    technologies: ["Various"],
    workflow: ["Monitoring", "Issue Identification", "Resolution", "Reporting"],
    relevantProjects: []
  }
];
