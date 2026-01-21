import { Code, Smartphone, Laptop, Layers } from "@lucide/svelte";

export const services = [
  {
    title: "Web Development",
    icon: Laptop,
    description: "Custom web applications built with modern frameworks and best practices. From landing pages to complex web platforms.",
    features: [
      "Responsive design for all devices",
      "SEO optimization",
      "Progressive Web Apps (PWA)",
      "API integration",
      "Performance optimization"
    ],
    technologies: ["React", "SvelteKit", "TypeScript", "TailwindCSS", "Node.js"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Cross-platform mobile applications with native performance and beautiful user interfaces.",
    features: [
      "iOS & Android development",
      "Offline-first architecture",
      "Real-time synchronization",
      "Push notifications",
      "In-app payments"
    ],
    technologies: ["Flutter", "React Native", "SQLite", "Firebase"]
  },
  {
    title: "Full-Stack Solutions",
    icon: Layers,
    description: "End-to-end development from database design to deployment, with scalable architecture.",
    features: [
      "Database design & optimization",
      "RESTful & GraphQL APIs",
      "Authentication & authorization",
      "Cloud deployment",
      "CI/CD pipeline setup"
    ],
    technologies: ["Vue.js/React.js/Svelte", "Node.js", "PostgreSQL", "Redis", "Docker", "Cloudflare/AWS/GCP"]
  },
  {
    title: "AI Based Applications",
    icon: Code,
    description: "Tailored software solutions to solve your specific business challenges and automate workflows.",
    features: [
      "Requirements analysis",
      "Custom business logic",
      "Third-party integrations",
      "Maintenance & support",
      "Technical documentation"
    ],
    technologies: ["Python", "TypeScript", "Bun", "FastAPI", "gRPC"]
  }
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your needs, goals, and target audience through detailed consultation."
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating a roadmap with clear milestones, timelines, and technical architecture."
  },
  {
    step: "03",
    title: "Development",
    description: "Building your solution iteratively with regular updates and feedback sessions."
  },
  {
    step: "04",
    title: "Testing",
    description: "Comprehensive quality assurance to ensure reliability and performance."
  },
  {
    step: "05",
    title: "Deployment",
    description: "Launching your project with proper monitoring and documentation."
  },
  {
    step: "06",
    title: "Support",
    description: "Ongoing maintenance, updates, and technical support as needed."
  }
];
