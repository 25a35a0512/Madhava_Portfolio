export const profile = {
  name: "Madhava Bobbili",
  role: "Software Engineer Intern (AI Engineer)",
  email: "madhavabobbili@gmail.com",
  phone: "+91 8328309191",
  github: "https://github.com/25a35a0512",
  linkedin: "https://www.linkedin.com/in/madhava-bobbili",
  leetcode: "https://leetcode.com/u/25a35a0512/",
  summary:
    "Computer Science Engineering student with hands-on experience building full-stack web applications and exploring AI-powered tools using Python and the MERN stack. Comfortable working with REST APIs, cloud-based services, and backend systems, with a growing interest in AI/ML and Generative AI application development.",
};

export const roles = [
  "Full Stack Web Apps",
  "MERN Stack Apps",
  "AI-Powered Tools",
  "REST APIs",
  "Clean, Scalable Code",
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "CRUD", "API Integration"],
  },
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "C", "SQL"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL", "Oracle"],
  },
  {
    title: "AI / GenAI",
    skills: ["LLM APIs", "Prompt Engineering", "AI-Assisted Dev", "RAG Basics"],
  },
  {
    title: "Cloud & Tools",
    skills: ["Git", "GitHub", "GitHub Actions", "Cloud Deploy Basics"],
  },
];

export const timeline = [
  {
    tag: "2025 – 2028",
    title: "B.Tech, Computer Science Engineering",
    text: "Pragati Engineering College, Surampalem — building the fundamentals: DSA, OOP, systems, and full-stack development.",
  },
  {
    tag: "2024",
    title: "Full Stack Development Internship",
    text: "Shipped real MERN-stack applications end-to-end — React UIs, Express/Node APIs, MongoDB, Git-based Agile workflow.",
  },
  {
    tag: "2025",
    title: "Going deeper into AI-powered products",
    text: "Built Educare, an AI career-guidance platform using LLM APIs, and picked up prompt engineering and RAG fundamentals along the way.",
  },
  {
    tag: "2022 – 2025",
    title: "Diploma, Communication & Computer Networking",
    text: "Aditya College of Engineering and Technology — graduated with 93%, laying the groundwork for a CS career.",
  },
];

export type Project = {
  id: string;
  glyph: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  dateRange: string;
  overview: string;
  architecture?: string;
  features: string[];
  process?: string;
};

export const projects: Project[] = [
  {
    id: "educare",
    glyph: "EC",
    title: "Educare — AI Career Guidance Platform",
    description:
      "A full-stack app that gives students personalized career guidance through an AI-powered recommendation engine.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "LLM API"],
    githubUrl: "https://github.com/25a35a0512/carrer-ai",
    dateRange: "Jan 2025 – Mar 2025",
    overview:
      "A full-stack web app giving students personalized career guidance through an AI-powered recommendation engine built on an LLM API.",
    architecture:
      "React front end talking to an Express/Node REST API, backed by a MongoDB database with 4 collections for student profiles, resources, and recommendations.",
    features: [
      "12+ REST API endpoints with full CRUD support for profiles, resources, and recommendations",
      "AI-powered recommendation engine using an LLM API",
      "Optimized MongoDB queries that kept response times fast as data scaled",
      "Iterative delivery using Git branches and GitHub Actions in an Agile workflow",
    ],
  },
  {
    id: "vlab",
    glyph: "VL",
    title: "Virtual Lab Simulator",
    description:
      "A browser-based simulator with 15+ interactive experiments across Physics, Chemistry, and Computer Science.",
    tech: ["HTML5", "CSS3", "JavaScript", "AI-Assisted Dev"],
    githubUrl: "https://github.com/25a35a0512/Virtual_Lab_Simulator",
    dateRange: "2024 – 2025",
    overview:
      "A browser-based learning platform simulating hands-on experiments so students can explore Physics, Chemistry, and Computer Science concepts interactively.",
    features: [
      "15+ interactive experiments spanning Physics, Chemistry, and Computer Science",
      "Secure signup/login flows with input validation and controlled access",
      "Built with vanilla HTML5/CSS3/JavaScript for fast, dependency-light loading",
    ],
    process:
      "Used AI tools like GitHub Copilot and ChatGPT to speed up prototyping, testing, and debugging throughout development.",
  },
];

export const githubStats = {
  repoCount: 6,
  stars: 4,
  languages: [
    { name: "Python", color: "#3572A5", pct: 50 },
    { name: "JavaScript", color: "#f1e05a", pct: 33 },
    { name: "HTML", color: "#e34c26", pct: 17 },
  ],
  repos: [
    { name: "carrer-ai", lang: "JavaScript", color: "#f1e05a", url: "https://github.com/25a35a0512/carrer-ai" },
    { name: "Virtual_Lab_Simulator", lang: "JavaScript", color: "#f1e05a", url: "https://github.com/25a35a0512/Virtual_Lab_Simulator" },
    { name: "Blood-Bank-Management-System", lang: "Python", color: "#3572A5", url: "https://github.com/25a35a0512/Blood-Bank-Management-System" },
    { name: "Hostel_management", lang: "Python", color: "#3572A5", url: "https://github.com/25a35a0512/Hostel_management" },
    { name: "Ai_interview_trainer", lang: "Python", color: "#3572A5", url: "https://github.com/25a35a0512/Ai_interview_trainer" },
    { name: "Online_consultation", lang: "HTML", color: "#e34c26", url: "https://github.com/25a35a0512/Online_consultation" },
  ],
};

export const leetcodeStats = {
  solved: 64,
  rank: 2188317,
  badges: 1,
  badgeName: "50 Days Badge 2026",
  note: "63 in Java, plus SQL practice",
  tags: [
    "Array ×27",
    "String ×20",
    "Two Pointers ×13",
    "Hash Table ×16",
    "Math ×16",
    "Binary Search ×7",
    "Dynamic Programming ×5",
    "Divide & Conquer ×4",
    "Trie ×1",
  ],
};

export const education = [
  {
    tag: "2025 – 2028",
    title: "B.Tech, Computer Science Engineering",
    text: "Pragati Engineering College, Surampalem — 86%",
  },
  {
    tag: "Aug 2022 – May 2025",
    title: "Diploma, Communication & Computer Networking",
    text: "Aditya College of Engineering and Technology — 93%",
  },
];

export const certifications = [
  { title: "Full Stack Development Internship", org: "Technical Hub" },
  { title: "Java Programming Internship", org: "Codsoft" },
  { title: "Java 11 Essentials", org: "Infosys Springboard" },
  { title: "Microsoft AI Skills Passport", org: "Microsoft" },
];

export const experience = [
  {
    title: "Full Stack Development Intern — Technical Hub",
    date: "2024",
    points: [
      "Built real applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js) in a hands-on internship.",
      "Developed responsive React UIs connected to REST APIs built with Express.js and Node.js, covering CRUD operations and authentication.",
      "Worked with MongoDB for schema design and data storage, using Git/GitHub for version control in an Agile workflow.",
      "Gained practical exposure to API integration and deployment basics, completing the full app-building lifecycle end to end.",
    ],
  },
];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub & LeetCode" },
  { id: "education", label: "Education & Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
