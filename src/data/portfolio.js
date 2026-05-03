import {
  Award,
  BriefcaseBusiness,
  Bug,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Network as NetworkIcon,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
  TrendingUp,
  Workflow,
} from "lucide-react";
import {
  FaNodeJs,
  FaReact,
  FaJava,
  FaJs,
  FaPython,
} from "react-icons/fa";
import {
  SiCodechef,
  SiCodeforces,
  SiCplusplus,
  SiExpress,
  SiHackerrank,
  SiJfrog,
  SiLeetcode,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

export const profile = {
  name: "Saurabh Kumar",
  fullName: "Saurabh Kumar Singh",
  role: "Software Engineer",
  headline: "Full Stack Developer | MERN, APIs, Payments, Spring Boot",
  location: "Pune, India",
  email: "saurabh2196991@gmail.com",
  phone: "+916205809317",
  whatsapp: "6205809317",
  tagline:
    "I build full-stack web apps, APIs, dashboards, and real-life business tools with clean frontend experiences and reliable server-side logic.",
  summary:
    "Full stack developer and software engineer with hands-on knowledge of MongoDB, Node.js, Express, React, JavaScript, Python, Java, Spring Boot, microservices, API testing, SOAP APIs, UPI flows, transactions, payments, and machine learning based search systems. I have worked on multiple real-time projects, including job portals, blogs, expense tracking, and coding problem search.",
  education:
    "Bachelor of Engineering in Information Technology from Army Institute of Technology, Pune with CGPA 8.11.",
};

export const highlights = [
  {
    label: "Current Work",
    value: "Real-life web apps",
    icon: Server,
  },
  {
    label: "Primary Stack",
    value: "MERN + APIs",
    icon: Code2,
  },
  {
    label: "Domain",
    value: "Development + Payments + UPI",
    icon: TrendingUp,
  },
];

export const projects = [
  {
    title: "Coding Problem Search Engine using TF-IDF",
    description:
      "A search engine that ranks coding problems by textual relevance using Term Frequency-Inverse Document Frequency.",
    link: "https://github.com/Saurabh2404/ProblemSearcher",
    tags: ["TF-IDF", "Search", "Ranking", "DSA"],
    accent: "from-orange-500 to-amber-400",
  },
  {
    title: "Job Application Portal",
    description:
      "A full-stack hiring portal with authentication, job posting workflows, applicant management, and admin controls.",
    link: "https://github.com/Saurabh2404/Job-Application-Portal",
    tags: ["Node.js", "Express", "Auth", "Admin"],
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
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-800 dark:text-gray-100" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "REST APIs", icon: NetworkIcon, color: "text-sky-500" },
  { name: "Full Stack Apps", icon: Workflow, color: "text-orange-500" },
  { name: "Python", icon: FaPython, color: "text-blue-400" },
  { name: "Machine Learning", icon: Code2, color: "text-violet-500" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Spring Boot", icon: Server, color: "text-green-600" },
  { name: "Microservices", icon: Workflow, color: "text-sky-500" },
  { name: "Eureka Server", icon: ShieldCheck, color: "text-indigo-500" },
  { name: "SQL", icon: Database, color: "text-emerald-500" },
  { name: "SOAP APIs", icon: NetworkIcon, color: "text-cyan-600" },
  { name: "UPI & Payments", icon: ShieldCheck, color: "text-emerald-500" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "API Testing", icon: Bug, color: "text-rose-500" },
  { name: "JFrog", icon: SiJfrog, color: "text-lime-500" },
  { name: "NetBeans", icon: Code2, color: "text-blue-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "Problem Solving", icon: SiLeetcode, color: "text-yellow-500" },
];

export const experience = [
  {
    title: "Full Stack Development",
    text:
      "Building real-life web applications with React, Node.js, Express, MongoDB, authentication flows, dashboards, CRUD systems, and clean UI experiences.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Real-World Problem Solving",
    text:
      "Turning practical requirements into working products such as job portals, technical blogs, expense trackers, and search tools for programmers.",
    icon: Workflow,
  },
  {
    title: "Backend and Microservices",
    text:
      "Hands-on experience with Java, Spring Boot, microservices, Eureka Server, REST APIs, SOAP APIs, payment flows, transaction systems, and service validation.",
    icon: Server,
  },
  {
    title: "API Validation",
    text:
      "Performing API testing with Postman and supporting automated testing workflows with an internal Java-based automation tool.",
    icon: ShieldCheck,
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
    title: "MERN stack applications",
    description:
      "Building project-ready applications with MongoDB, Express, React, Node.js, authentication, APIs, admin panels, and responsive UI.",
    icon: Workflow,
  },
  {
    title: "Payment and transaction knowledge",
    description:
      "Hands-on understanding of UPI flows, transactions, payment modules, validations, and backend reliability requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Backend services and APIs",
    description:
      "Working with REST APIs, SOAP APIs, Java, Spring Boot, microservices, Eureka Server, SQL, Postman, and service integration.",
    icon: Server,
  },
  {
    title: "ML and search systems",
    description:
      "Built a coding problem search engine using TF-IDF, relevance ranking, and datasets from popular coding platforms.",
    icon: Code2,
  },
];

export const achievements = [
  "Specialist at Codeforces with a maximum rating of 1418.",
  "Global Rank 130 in CodeChef Starters 82 Division 3 among 9342 participants.",
  "Winner of DSA Craft organized by MKSSS's Cummins College of Engineering.",
  "Qualified for the finals of CODEFT Solutions coding competition at AIT Pune.",
  "Shortlisted for ESSA scholarship for AY 2022-23 and 2023-24.",
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
    link: "https://www.hackerrank.com/profile/saurabh2404",
    color: "text-green-500",
  },
];

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
  { value: "10+", label: "Real-time projects" },
  { value: "1418", label: "Codeforces max rating" },
  { value: "3★", label: "CodeChef rating" },
  { value: "1621", label: "LeetCode rating" },
];

export const focusAreas = [
  "MERN stack development",
  "React frontends",
  "Node.js APIs",
  "Express.js",
  "MongoDB",
  "Authentication",
  "Admin dashboards",
  "Real-time project delivery",
  "Payment systems",
  "UPI transactions",
  "Java microservices",
  "Spring Boot",
  "Eureka Server",
  "API design",
  "API validation",
  "SOAP APIs",
  "Postman testing",
  "JFrog",
  "NetBeans",
  "Machine learning",
  "Data structures",
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
