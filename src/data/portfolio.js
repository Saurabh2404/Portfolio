import {
  Award,
  BriefcaseBusiness,
  Bug,
  Code2,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Network as NetworkIcon,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import {
  FaGitAlt,
  FaJava,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiApachekafka,
  SiCodechef,
  SiCodeforces,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGeeksforgeeks,
  SiHackerrank,
  SiJfrog,
  SiKubernetes,
  SiLeetcode,
  SiMongodb,
  SiOracle,
  SiPostman,
  SiRedis,
} from "react-icons/si";

export const profile = {
  name: "Saurabh Kumar",
  fullName: "Saurabh Kumar Singh",
  role: "Software Engineer",
  headline: "Full Stack Developer | Java, Spring Boot, MERN, Microservices",
  location: "Pune, India",
  email: "rapidsaurabh3104@gmail.com",
  phone: "+916205809317",
  whatsapp: "6205809317",
  tagline:
    "I build scalable backend systems and full-stack web apps, from distributed microservices and payment workflows to clean, responsive frontend experiences.",
  summary:
    "Software engineer with hands-on experience building scalable microservices and payment systems using Java, Spring Boot, and Oracle DB, alongside a full-stack foundation in MongoDB, Node.js, Express, React, and Python. Comfortable across UPI systems, REST and SOAP APIs, distributed architectures, backend testing, and system design, with additional exposure to Docker, Kubernetes, Kafka, and Redis. I have shipped production backend modules processing tens of thousands of transactions per second, alongside side projects spanning search engines, job portals, and expense tracking tools.",
  education:
    "Bachelor of Engineering in Information Technology from Army Institute of Technology, Pune with CGPA 8.11.",
};

export const highlights = [
  {
    label: "Current Focus",
    value: "Backend & Microservices",
    icon: Server,
  },
  {
    label: "Primary Stack",
    value: "Java, Spring Boot, MERN",
    icon: Code2,
  },
  {
    label: "Domain",
    value: "Payments, UPI, Distributed Systems",
    icon: TrendingUp,
  },
];

export const projects = [
  {
    title: "Coding Problem Search Engine (TF-IDF + BERT)",
    description:
      "A semantic search engine that ranks coding problems using TF-IDF, BERT embeddings, and contextual similarity. Indexes 10K+ problems across LeetCode, Codeforces, CodeChef, and HackerRank, improving search relevancy by 48% over keyword-only ranking.",
    link: "https://github.com/Saurabh2404/ProblemSearcher",
    tags: ["TF-IDF", "BERT", "Semantic Search", "NLP"],
    accent: "from-orange-500 to-amber-400",
  },
  {
    title: "Job Portal Application",
    description:
      "A backend service for a two-role (recruiter and candidate) job portal built with Node.js and Express, following an MVC architecture with 10+ RESTful endpoints for job postings and applications, plus middleware for request validation.",
    link: "https://github.com/Saurabh2404/Job-Application-Portal",
    tags: ["Node.js", "Express", "MVC", "REST APIs"],
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "Tech-Blog",
    description:
      "A publishing platform for technical articles across programming, AI, and cybersecurity with reader and author workflows.",
    link: "https://github.com/Saurabh2404/TechBlog",
    tags: ["Blog", "MERN", "Content", "CRUD"],
    accent: "from-emerald-500 to-teal-400",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "A budget management tool for tracking personal expenses with secure authentication and organized financial records.",
    link: "https://github.com/Saurabh2404/Smart-Expense-Tracker",
    tags: ["Finance", "Auth", "Dashboard", "MongoDB"],
    accent: "from-violet-500 to-fuchsia-400",
  },
];

export const skills = [
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Spring Boot", icon: Server, color: "text-green-600" },
  { name: "Microservices", icon: Workflow, color: "text-sky-500" },
  { name: "Eureka Server", icon: ShieldCheck, color: "text-indigo-500" },
  { name: "System Design", icon: Layers3, color: "text-purple-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-800 dark:text-gray-100" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "REST APIs", icon: NetworkIcon, color: "text-sky-500" },
  { name: "SOAP APIs", icon: NetworkIcon, color: "text-cyan-600" },
  { name: "Python", icon: FaPython, color: "text-blue-400" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "SQL", icon: Database, color: "text-emerald-500" },
  { name: "Oracle DB", icon: SiOracle, color: "text-red-600" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Kafka", icon: SiApachekafka, color: "text-slate-700 dark:text-slate-200" },
  { name: "Docker", icon: SiDocker, color: "text-sky-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
  { name: "UPI & Payments", icon: ShieldCheck, color: "text-emerald-500" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "API Testing", icon: Bug, color: "text-rose-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Linux", icon: FaLinux, color: "text-slate-700 dark:text-slate-200" },
  { name: "AI-native Development", icon: Sparkles, color: "text-fuchsia-500" },
  { name: "JFrog", icon: SiJfrog, color: "text-lime-500" },
  { name: "Problem Solving", icon: SiLeetcode, color: "text-yellow-500" },
];

// Alternating work + education timeline, rendered by <Timeline />
export const timeline = [
  {
    type: "work",
    title: "Software Engineer",
    org: "Oracle Financial Services Software Limited",
    duration: "July 2025 – Present",
    location: "Pune, Maharashtra",
    icon: BriefcaseBusiness,
    points: [
      "Contribute to backend modules across UPI payment workflows on a large-scale banking platform serving millions of daily transactions, improving reliability and reducing production incidents.",
      "Designed and built 5+ backend microservices from scratch using Java and Spring Boot, supporting transaction processing at 20K–30K TPS with Eureka Server for service discovery.",
      "Performed API validation and backend testing across 50+ endpoints using Postman, cutting manual regression testing time by an estimated 30% through an internal automation framework.",
      "Integrated and maintained enterprise technologies including Oracle DB, Flexcube, and WebLogic Server, resolving 20+ production and backend defects across deployment cycles.",
    ],
  },
  {
    type: "education",
    title: "B.E. in Information Technology",
    org: "Army Institute of Technology, Pune",
    duration: "Oct 2021 – July 2025",
    location: "Pune, Maharashtra",
    icon: GraduationCap,
    points: [
      "Graduated with a CGPA of 8.11, with a strong foundation in Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks.",
      "Built a strong competitive programming track record, including a Codeforces Specialist rating and multiple contest wins.",
      "Applied coursework to real projects spanning search systems, job portals, and full-stack web applications.",
    ],
  },
];

export const capabilities = [
  {
    title: "Backend & Microservices at Scale",
    text:
      "Designing and building Java / Spring Boot microservices for high-throughput transaction processing (20K–30K TPS) with Eureka Server for service discovery in distributed architectures.",
    icon: Server,
  },
  {
    title: "Payments & UPI Systems",
    text:
      "Hands-on experience with UPI payment workflows, transaction reliability, and backend modules powering a large-scale banking platform.",
    icon: ShieldCheck,
  },
  {
    title: "API Validation & Testing",
    text:
      "Validating and testing REST/SOAP endpoints with Postman and internal automation frameworks, cutting manual regression effort significantly.",
    icon: Bug,
  },
  {
    title: "Full Stack Development",
    text:
      "Building complete web applications with React, Node.js, Express, MongoDB, authentication flows, dashboards, and clean UI experiences.",
    icon: Workflow,
  },
  {
    title: "Competitive Programming",
    text:
      "Specialist at Codeforces with max rating 1418, Global Rank 130 in CodeChef Starters 82 Division 3, and winner of DSA Craft.",
    icon: Award,
  },
  {
    title: "Engineering Foundation",
    text: profile.education,
    icon: GraduationCap,
  },
];

export const currentWork = [
  {
    title: "Backend microservices at scale",
    description:
      "Building Java and Spring Boot microservices for UPI transaction workflows, handling 20K–30K TPS with Eureka Server-based service discovery.",
    icon: Server,
  },
  {
    title: "Payment & UPI reliability",
    description:
      "Working on backend modules for a large-scale banking platform, reducing production incidents across transaction workflows.",
    icon: ShieldCheck,
  },
  {
    title: "API validation & automation",
    description:
      "Testing and validating 50+ REST/SOAP endpoints with Postman, backed by an internal Java-based automation framework.",
    icon: Bug,
  },
  {
    title: "Full stack & ML side projects",
    description:
      "Shipping React/Node full-stack apps and ML-driven tools, including a BERT-powered semantic search engine.",
    icon: Code2,
  },
];

export const achievements = [
  "Specialist at Codeforces with a maximum rating of 1418.",
  "Achieved Global Rank 130 in CodeChef Starters 82 Division 3 among 9342 participants.",
  "Winner of DSA Craft competition organized by MKSSS's Cummins College of Engineering.",
  "Qualified for the Finals of CODEFT Solutions coding competition at AIT Pune.",
  "Shortlisted for the Education Scholarship Scheme for Army Personnel (ESSA) for AY 2022–23 and 2023–24.",
];

export const codingProfiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/rapidsaurabh2404/",
    color: "text-yellow-500",
  },
  {
    name: "Codeforces",
    icon: SiCodeforces,
    link: "https://codeforces.com/profile/RapidSaurabh",
    color: "text-blue-600",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    link: "https://www.codechef.com/users/saurabh2196991",
    color: "text-purple-600",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    link: "https://www.hackerrank.com/profile/saurabh2196991",
    color: "text-green-500",
  },
  {
    name: "Code360",
    platform: "codestudio",
    icon: Code2,
    link: "https://www.naukri.com/code360/profile/Saurabh2404",
    color: "text-indigo-500",
  },
  {
    name: "GeeksforGeeks",
    platform: "geeksforgeeks",
    icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/profile/saurabh2ock3?tab=activity",
    color: "text-emerald-600",
  },
  {
    name: "Codolio",
    platform: "codolio",
    icon: Award,
    link: "https://codolio.com/profile/RapidSaurabh",
    color: "text-orange-500",
  },
];

export const proofOfWork = {
  source: "snapshot",
  sourceLabel: "Codolio snapshot",
  codolioHandle: "RapidSaurabh",
  updatedFrom: "Codolio profile snapshot",
  headline:
    "A consolidated view of coding practice, contest participation, and verified platform activity.",
  stats: [
    { label: "Questions Solved", value: "1791", note: "Across connected coding platforms" },
    { label: "Active Days", value: "255", note: "Consistency tracked on Codolio" },
    { label: "Contests Attended", value: "61", note: "Competitive programming participation" },
    { label: "C-Score Rank", value: "2039", note: "Global rank based on Codolio C-Score" },
  ],
  distributions: [
    {
      title: "Fundamentals",
      total: "197",
      color: "bg-blue-500",
      items: [
        { label: "GFG Basic", value: 7 },
        { label: "HackerRank", value: 190 },
      ],
    },
    {
      title: "DSA",
      total: "1124",
      color: "bg-emerald-500",
      items: [
        { label: "Easy", value: 437 },
        { label: "Medium", value: 601 },
        { label: "Hard", value: 86 },
      ],
    },
    {
      title: "Competitive Programming",
      total: "470",
      color: "bg-orange-500",
      items: [
        { label: "CodeChef", value: 325 },
        { label: "Codeforces", value: 145 },
      ],
    },
  ],
  rankings: [
    { platform: "LeetCode", value: "1612", note: "max: 1620" },
    { platform: "CodeChef", value: "1690", note: "max: 1690" },
    { platform: "Codeforces", value: "1331", note: "Pupil, max: 1418" },
    { platform: "CodeStudio", value: "1687", note: "Achiever" },
  ],
  topicAnalysis: [
    { label: "Arrays", value: 353 },
    { label: "Algorithms", value: 232 },
    { label: "HashMap and Set", value: 122 },
    { label: "Dynamic Programming", value: 116 },
    { label: "Trees", value: 96 },
    { label: "Sorting", value: 85 },
  ],
};

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Saurabh2404",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saurabhkumar2404/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.whatsapp}`,
    icon: MessageCircle,
  },
  {
    label: "Phone",
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
  {
    label: "Location",
    href: "https://www.google.com/maps/search/Pune,+India",
    icon: MapPin,
  },
];

export const quickStats = [
  { value: "1+ Yrs", label: "Professional experience" },
  { value: "30K", label: "TPS scale delivered" },
  { value: "1418", label: "Codeforces max rating" },
  { value: "10+", label: "Real-time projects" },
];

export const focusAreas = [
  "Backend microservices",
  "Java & Spring Boot",
  "Distributed systems",
  "System design",
  "UPI & payment systems",
  "REST & SOAP APIs",
  "Oracle DB",
  "Kafka",
  "Docker & Kubernetes",
  "Redis",
  "MERN stack development",
  "React frontends",
  "Node.js APIs",
  "MongoDB",
  "Authentication",
  "Admin dashboards",
  "API validation & testing",
  "AI-native development",
  "Data structures & algorithms",
];

export const cta = {
  primary: {
    label: "View Projects",
    href: "/projects",
    icon: Rocket,
  },
  secondary: {
    label: "Contact Me",
    href: "/contact",
    icon: Mail,
  },
};

export const serviceFlow = [
  { label: "React UI", icon: Code2 },
  { label: "REST / SOAP API", icon: NetworkIcon },
  { label: "Java + Spring Boot", icon: Server },
  { label: "Oracle DB / MongoDB", icon: Cpu },
];

export const terminalLines = [
  "role: backend-focused-full-stack-developer",
  "backend: java + spring-boot + microservices",
  "frontend: react + responsive-ui",
  "data: oracle-db + mongodb + redis",
  "domain: payments + upi + distributed-systems",
  "tools: postman + docker + kubernetes + kafka",
];
