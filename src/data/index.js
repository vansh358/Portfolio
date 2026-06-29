export const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

export const SKILLS = [
  {
    title: "Frontend Development",
    icon: "🖥️",
    desc: "Crafting performant, scalable, and accessible user interfaces with modern animations.",
    tags: ["React.js", "Tailwind CSS", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Backend & API Development",
    icon: "⚙️",
    desc: "Designing secure, scalable backend systems and APIs with clean architecture.",
    tags: ["Node.js", "REST APIs", "Authentication", "Postman"],
  },
  {
    title: "Databases & Data Modeling",
    icon: "🗄️",
    desc: "Structuring reliable, scalable data models to support complex application requirements.",
    tags: ["MySQL", "MongoDB"],
  },
  {
     title: "DSA & Problem Solving",
     icon: "🧩",
     desc: "Solved 300+ LeetCode problems in Java covering arrays, strings, trees, graphs, dynamic programming, and recursion.",
     tags: ["Java", "LeetCode 300+", "Data Structures", "Algorithms"],
  },
  {
     title: "Soft Skills",
     icon: "🤝",
     desc: "Strong communicator and team player with ability to work in agile environments, meet deadlines, and adapt quickly to new technologies.",
     tags: ["Communication", "Team Work", "Problem Solving", "Adaptability", "Time Management"],
  },
];

export const PROJECTS = [
  {
    num: "01",
    title: "Real Time Chat App (Web Sockets)",
    desc: "Built a real-time chat application using WebSockets (Socket.io) with features like instant messaging, online user status, typing indicators, and private rooms. Implemented JWT-based authentication and MongoDB for message persistence.",
    impact: [
      { value: "Real-Time", label: "Instant Messaging" },
      { value: "Socket.io", label: "WebSocket Protocol" },
      { value: "JWT", label: "Secure Auth" },
    ],
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js"],
  },
  {
    num: "02",
    title: "Task Tracker Web Application",
    desc: "Developed a full-stack task management app with complete CRUD operations, task filtering by status and priority, due date tracking, and real-time UI updates without page refresh. Built with MERN stack and REST APIs.",
    impact: [
      { value: "CRUD", label: "Full Operations" },
      { value: "REST", label: "API Driven" },
      { value: "Live", label: "Dynamic Updates" },
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Axios"],
  },
  {
    num: "03",
    title: "Job Portal Web Application",
    desc: "Built a robust REST API backend for a job portal with role-based access control for admin, employer, and candidate roles. Features include job posting, application management, JWT authentication, and profile endpoints.",
    impact: [
      { value: "RBAC", label: "Role Based Access" },
      { value: "REST", label: "API Backend" },
      { value: "JWT", label: "Secure Auth" },
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    num: "04",
    title: "Personal Portfolio Website",
    desc: "Designed and developed a modern personal portfolio website with smooth animations, typing effects, dark theme, responsive layout, and sections for skills, projects, and contact. Built with React and Vite for fast performance.",
    impact: [
      { value: "100%", label: "Responsive Design" },
      { value: "Vite", label: "Fast Performance" },
      { value: "Live", label: "Production Ready" },
    ],
    tags: ["React.js", "Vite", "CSS3", "JavaScript"],
  },
];
