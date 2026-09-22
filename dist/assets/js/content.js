/*
 * PORTFOLIO CONTENT
 * Edit this file to update projects, skills, experience, or education.
 * The page layout is generated automatically from this data.
 */
window.portfolioData = {
  expertise: [
    {
      number: "01",
      title: "Web development",
      description: "Responsive interfaces and full-stack applications built with modern web technologies.",
      skills: ["Next.js", "React", "TypeScript", "REST APIs", "SQL"],
    },
    {
      number: "02",
      title: "Systems engineering",
      description: "Networked and low-level software with attention to performance, concurrency, and reliability.",
      skills: ["C++", "C", "TCP/IP", "Socket programming", "Linux"],
    },
    {
      number: "03",
      title: "AI & ML research",
      description: "Researching reliable multi-agent LLM systems through graph optimization and topology design.",
      skills: ["Python", "Multi-agent systems", "LLM systems", "Graph optimization"],
    },
    {
      number: "04",
      title: "Android development",
      description: "Native Android applications delivered end-to-end from requirements to final implementation.",
      skills: ["Java", "Kotlin", "Android Studio"],
    },
  ],

  projects: [
    {
      id: "morfynx",
      title: "Morfynx",
      category: "web",
      categoryLabel: "Web & SaaS",
      date: "September 2026 – Ongoing",
      description: "A web-based SaaS platform where authenticated users upload, transform, and optimize images or videos with Cloudinary’s AI-driven processing.",
      highlights: ["Secure authentication and protected routes with Clerk", "Image and video transformation workflow", "Deployed as a usable web application"],
      technologies: ["Next.js", "TypeScript", "Cloudinary", "Clerk"],
      github: "https://github.com/itsutsaw/AI-powered-saas",
      live: "https://morfynx.vercel.app/",
      featured: true,
    },
    {
      id: "fault-tolerant-llm",
      title: "Fault-Tolerant Multi-Agent LLM Systems",
      category: "ai-ml",
      categoryLabel: "AI/ML & Research",
      date: "August 2026 – Ongoing",
      description: "An M.Tech research project on minimum-cost multi-agent LLM topologies that continue completing tasks even when agents fail.",
      highlights: ["Generalizes the Steiner Network problem", "Models dynamic, history-dependent token costs", "Includes an interactive topology visualizer"],
      technologies: ["Python", "Multi-agent systems", "Graph optimization", "Reliability theory"],
      github: "https://github.com/itsutsaw/Fault-tolerence-topology-visualizer",
      live: null,
      featured: true,
    },
    {
      id: "p2p-chat",
      title: "Decentralized P2P Chat Application",
      category: "systems",
      categoryLabel: "Systems & Networking",
      date: "January 2026 – February 2026",
      description: "A decentralized chat application where every peer acts as both client and server while maintaining multiple TCP connections.",
      highlights: ["Single-threaded non-blocking I/O", "Private and broadcast messaging", "Peer discovery and connection management"],
      technologies: ["C++", "TCP/IP", "Socket programming", "Non-blocking I/O"],
      github: "https://github.com/itsutsaw/P2p-chat",
      live: null,
      featured: true,
    },
    {
      id: "simplescalar-scheduling",
      title: "FIFO and Critical-Path-Aware Scheduling",
      category: "systems",
      categoryLabel: "Computer Architecture",
      date: "August 2025 – September 2025",
      description: "A SimpleScalar scheduler modification implementing FIFO and critical-path-aware instruction scheduling in the sim-outorder module.",
      highlights: ["Redesigned RUU ready-queue handling", "Benchmarked across five SPEC-style workloads", "Measured IPC, latency, and simulation cycles"],
      technologies: ["C", "SimpleScalar", "Computer architecture", "Benchmarking"],
      github: "https://github.com/itsutsaw/FIFO-and-Critical-Path-Aware-schduling",
      live: null,
      featured: false,
    },
  ],

  experience: [
    {
      title: "Freelance Android Developer",
      organization: "Self-employed",
      date: "2023 – 2025",
      description: "Built and delivered more than ten native Android applications based on client requirements, including notification, breathing exercise, and technical calculator applications. Maintained a 5.0/5 client rating.",
    },
    {
      title: "Teaching Assistant — Operating Systems Lab",
      organization: "IIT Bhubaneswar",
      date: "Current",
      description: "Guide students through systems programming exercises and debugging, with feedback on assignments and problem-solving approaches.",
    },
  ],

  education: [
    { title: "M.Tech, Computer Science & Engineering", organization: "Indian Institute of Technology Bhubaneswar", date: "2025 – 2027", detail: "CPI: 8.00/10" },
    { title: "B.Tech, Computer Science & Engineering", organization: "Mahatma Gandhi Central University, Motihari", date: "2021 – 2025", detail: "CPI: 8.88/10" },
    { title: "Senior Secondary (XII)", organization: "M.S. College, Motihari", date: "2021", detail: "85.8%" },
    { title: "Matriculation (X)", organization: "Arya Vidyapith, Motihari", date: "2019", detail: "90.2%" },
  ],

  skillGroups: [
    { title: "Languages", items: ["C++", "C", "Python", "TypeScript", "SQL"] },
    { title: "Web development", items: ["Next.js", "React", "REST APIs"] },
    { title: "Networking & systems", items: ["TCP/IP", "Socket programming", "Non-blocking I/O", "Concurrency", "Linux"] },
    { title: "Core computer science", items: ["Data structures & algorithms", "Operating systems", "DBMS", "Computer networks", "OOP", "Computer architecture"] },
    { title: "Mobile & tools", items: ["Java", "Kotlin", "Android Studio", "Git"] },
    { title: "Problem solving", items: ["350+ DSA problems", "Trees", "Graphs", "Binary search", "Dynamic programming", "Complexity analysis"] },
  ],
};
