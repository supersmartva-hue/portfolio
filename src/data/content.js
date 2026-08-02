// ─────────────────────────────────────────────────────────────
// EDIT ME: All portfolio content lives here. Swap placeholders
// for your real information — nothing else needs to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Nadia Mahak",
  firstName: "Nadia",
  lastName: "Mahak",
  role: "Full Stack Developer | AI-Powered Web Developer",
  tagline:
    "Building modern web applications with clean UI, smooth animations, and AI-powered experiences.",
  location: "Sheikhupura, Pakistan",
  email: "supersmartva@gmail.com",
  whatsapp: "+92 324 6626424",
  availability: "Available for Freelance & Internship Opportunities",
  avatar: "/avatar.jpg",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/supersmartva-hue/", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nadia-mahak-51a61537a", icon: "linkedin" },
  { name: "WhatsApp", url: "https://wa.me/923246626424", icon: "whatsapp" },
];

export const nav = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Journey" },
  { id: "certificates", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export const aboutHeadline = {
  text: "Building Intelligent Web Experiences with Modern Technologies and AI.",
  highlight: "Intelligent Web Experiences", // this part is rendered in the gradient accent color
};

export const aboutStats = [
  { label: "Projects completed", value: 7, suffix: "+" },
  { label: "Technologies used", value: 25, suffix: "+" },
  { label: "Certificates earned", value: 5, suffix: "+" }, // matches the 5 verified certificates shown below; bump this back up once more are added
  { label: "Courses completed", value: 25, suffix: "+" }, // derived from these 5 verified certificate PDFs (4+3+10+4+4 courses)
];

export const aboutCards = [
  {
    title: "Who I am",
    body: "I am a passionate Full Stack Developer who enjoys building modern, responsive, and interactive web applications. I also leverage AI tools to design and develop intelligent applications more efficiently while maintaining clean, scalable, and user-friendly solutions.",
  },
  {
    title: "How I work",
    body: "I focus on writing clean, maintainable code, designing responsive interfaces, and creating smooth user experiences. I combine traditional development skills with AI-assisted workflows to build high-quality applications faster.",
  },
  {
    title: "What I value",
    body: "I value continuous learning, creativity, problem-solving, teamwork, and delivering meaningful digital experiences that solve real-world problems.",
  },
];

// Skills shown orbiting the constellation core.
// `ring` groups items into concentric orbits (0 = innermost, 3 = outermost).
export const skills = [
  // Core languages (ring 0)
  { name: "HTML5", ring: 0, color: "#E34F26" },
  { name: "CSS3", ring: 0, color: "#1572B6" },
  { name: "JavaScript", ring: 0, color: "#F7DF1E" },
  { name: "React.js", ring: 0, color: "#61DAFB" },
  // Frontend + core backend (ring 1)
  { name: "Tailwind CSS", ring: 1, color: "#38BDF8" },
  { name: "Bootstrap", ring: 1, color: "#7952B3" },
  { name: "Node.js", ring: 1, color: "#3C873A" },
  { name: "Express.js", ring: 1, color: "#ffffff" },
  { name: "MongoDB", ring: 1, color: "#47A248" },
  { name: "Redux Toolkit", ring: 1, color: "#764ABC" },
  // Database + tools (ring 2)
  { name: "Firebase", ring: 2, color: "#FFCA28" },
  { name: "MySQL", ring: 2, color: "#4479A1" },
  { name: "Git", ring: 2, color: "#F05032" },
  { name: "GitHub", ring: 2, color: "#ffffff" },
  { name: "VS Code", ring: 2, color: "#007ACC" },
  { name: "Postman", ring: 2, color: "#FF6C37" },
  { name: "Vite", ring: 2, color: "#646CFF" },
  // Design + AI tools (ring 3)
  { name: "Figma", ring: 3, color: "#A259FF" },
  { name: "Prompt Engineering", ring: 3, color: "#A855F7" },
  { name: "OpenAI API", ring: 3, color: "#10A37F" },
  { name: "Gemini API", ring: 3, color: "#4285F4" },
  { name: "Claude AI", ring: 3, color: "#D97757" },
  { name: "GitHub Copilot", ring: 3, color: "#8957E5" },
  { name: "AI-assisted Dev", ring: 3, color: "#8B5CF6" },
  { name: "AI Agents", ring: 3, color: "#22D3EE" },
];

// NOTE: `year` and `link` are left blank (TODO) — send real dates/URLs and I'll fill them in.
export const projects = [
  {
    title: "Study Scheduler App + Browser Extension",
    subtitle: "AI-powered productivity app for students",
    description:
      "An AI-powered productivity application that helps students organize their study schedule, manage tasks, receive timely notifications, summarize notes, upload PDFs, and use a browser extension to quickly save tasks while browsing educational websites.",
    tags: ["React", "JavaScript", "Firebase", "AI APIs"],
    year: "",
    color: "from-violet-500 to-blue-500",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&h=825&q=80",
    link: "#",
  },
  {
    title: "PassVault — Password Manager",
    subtitle: "Secure password manager (web + browser extension)",
    description:
      "A secure password management application with a companion browser extension, letting users store, generate, and autofill credentials safely across the web.",
    tags: ["React", "JavaScript", "Chrome Extension API"],
    year: "",
    color: "from-slate-500 to-violet-500",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=825&q=80",
    link: "#",
  },
  {
    title: "AI Agent Web Application",
    subtitle: "Conversational AI assistant & task automation",
    description:
      "A smart AI-powered web application inspired by Nolo AI that assists users through intelligent conversations and task automation.",
    tags: ["React", "Node.js", "AI APIs"],
    year: "",
    color: "from-cyan-500 to-violet-500",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=825&q=80",
    link: "#",
  },
  {
    title: "EventHub",
    subtitle: "Event creation & management platform",
    description:
      "A web application for creating, organizing, and managing events with an intuitive user interface.",
    tags: ["React", "Node.js", "MongoDB"],
    year: "",
    color: "from-blue-500 to-cyan-400",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&h=825&q=80",
    link: "#",
  },
  {
    title: "Salaat + Task Reminder Web App",
    subtitle: "Prayer times & daily task reminders",
    description:
      "A web application that provides prayer time reminders along with daily task management and notification features.",
    tags: ["React", "JavaScript", "Firebase"],
    year: "",
    color: "from-emerald-500 to-teal-400",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&h=825&q=80",
    link: "#",
  },
  {
    title: "Expense Tracker",
    subtitle: "Personal finance & expense management",
    description:
      "A modern expense management application that allows users to track income, expenses, and financial activities with detailed insights.",
    tags: ["React", "Node.js", "MongoDB"],
    year: "",
    color: "from-amber-500 to-orange-500",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=825&q=80",
    link: "#",
  },
  {
    title: "E-commerce Website",
    subtitle: "Modern online shopping platform",
    description:
      "A responsive e-commerce platform featuring product listings, shopping cart functionality, and a modern user interface inspired by leading online marketplaces.",
    tags: ["React", "JavaScript", "Firebase"],
    year: "",
    color: "from-fuchsia-500 to-pink-500",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=825&q=80",
    link: "#",
  },
];

// Reframed as an education/learning journey (no formal work history yet) —
// built from your CV's education entry plus your most substantial completed
// specializations. The full certificate list still lives in `certificates` below.
export const experience = [
  {
    role: "BS Computer Science (In Progress)",
    company: "Virtual University of Pakistan",
    period: "Present",
    description:
      "Currently pursuing my Bachelor's in Computer Science, building a strong foundation in programming, data structures, and modern software development alongside real-world projects.",
  },
  {
    role: "Meta Full-Stack Developer Specialization",
    company: "Coursera (Meta)",
    period: "Mar 2026",
    description:
      "Completed a 10-course specialization spanning the full web stack — HTML, CSS, JavaScript, and React on the frontend, plus Python, databases, and Django on the backend.",
  },
  {
    role: "Mastering Claude AI: Prompting, APIs, RAG & MCP",
    company: "Coursera (Edureka)",
    period: "Mar 2026",
    description:
      "Learned to build production-ready AI applications with Claude — prompt design, the Claude API, multi-turn conversational systems, and Retrieval-Augmented Generation (RAG).",
  },
  {
    role: "Programming in C++: A Hands-on Introduction",
    company: "Coursera (Codio)",
    period: "Sep 2025",
    description:
      "Built a strong computer science foundation covering C++ fundamentals, object-oriented programming, and core data structures.",
  },
];

// Verified directly from your certificate PDFs (image + issuer + date + verify link).
// You also have IBM Full Stack Software Developer, Google AI Professional
// Certificate, Real-World AI for Everyone, and Complete Modern C++
// (C++11/14/17) per your CV — send those PDFs and I'll add them here too.
export const certificates = [
  {
    title: "Meta Full Stack Developer: Front-End & Back-End from Scratch",
    issuer: "Meta (via Coursera)",
    date: "Mar 2026",
    color: "from-blue-500 to-indigo-500",
    link: "https://coursera.org/verify/specialization/8VR0GRRKS30Q",
    image: "/certs/meta-fullstack-developer.svg",
  },
  {
    title: "Mastering Claude AI: Prompting, APIs, RAG, and MCP",
    issuer: "Edureka (via Coursera)",
    date: "Mar 2026",
    color: "from-orange-400 to-rose-500",
    link: "https://coursera.org/verify/specialization/JYZK36BPBGN3",
    image: "/certs/mastering-claude-ai.svg",
  },
  {
    title: "Adapting: Career Development",
    issuer: "Macquarie University (via Coursera)",
    date: "Mar 2026",
    color: "from-violet-400 to-fuchsia-500",
    link: "https://coursera.org/verify/specialization/XK0GHTCDR09W",
    image: "/certs/adapting-career-development.svg",
  },
  {
    title: "Professional Skills for the Workplace",
    issuer: "Coursera",
    date: "Mar 2026",
    color: "from-teal-400 to-emerald-500",
    link: "https://coursera.org/verify/specialization/F3BM4QA588U2",
    image: "/certs/professional-skills-workplace.svg",
  },
  {
    title: "Programming in C++: A Hands-on Introduction",
    issuer: "Codio (via Coursera)",
    date: "Sep 2025",
    color: "from-slate-400 to-blue-500",
    link: "https://coursera.org/verify/specialization/8OYVLUYX880P",
    image: "/certs/programming-cpp.svg",
  },
];
