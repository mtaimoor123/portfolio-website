import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Taimoor Hassan",
  initials: "TH",
  url: "https://dillion.io",
  location: "Lahore, Pakistan.",
  locationLink: "https://maps.app.goo.gl/1KpkXW6qXojpvyha7",
  description:
    "Innovative iOS Developer with a proven track record in delivering high-quality, user-focused apps. Specializing in Swift, API integration, and performance optimization. Passionate about crafting seamless mobile experiences",
  summary:
    "Detail-oriented iOS Developer with over 1 year of hands-on experience in designing, developing, and deploying feature-rich iOS applications using Swift and UIKit. Proficient in RESTful API integration, third-party library implementation, and version control with Git. Demonstrated expertise in collaborating with cross-functional teams in Agile environments to deliver intuitive, high-performance applications. Strong knowledge of design patterns, including MVC and MVVM, and extensive experience with core iOS frameworks. Adept at troubleshooting, performance optimization, and overseeing the complete app development lifecycle from concept through deployment.",
  avatarUrl: "/me.png",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  
  ],
  contact: {
    email: "imtaimoor218@gmail.com",
    tel: "+92 306 6354284",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mtaimoor123",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://www.linkedin.com/in/m-t-h",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:imtaimoor218@gmail.com",
        icon: Icons.email,
        navbar: true,
       },
      whatsapp: {
        name: "WhatsApp",
        url: "https://wa.me/+923066354284", 
       icon: Icons.whatsApp,
       navbar: true,
      },
    },
  },
  work: [
    {
      company: "Avicenna Enterprise Solutions",
      href: "#",
      badges: [],
      location: "Lahore, Pakistan",
      title: "iOS Developer",
      logoUrl: "/avicenna.png",
      start: "Dec 2023",
      end: "May 2024",
      description:
        "Implemented new features and resolved technical challenges in various apps using Swift. Worked in a professional team environment to enhance app functionality and performance.",
    },
    {
      company: "Torch Solutions",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Junior iOS Developer",
      logoUrl: "/torch.png",
      start: "July 2023",
      end: "Nov 2023",
      description:
        "Contributed to multiple apps from scratch while working in a collaborative team environment. Responsible for implementing key features and ensuring smooth app performance.",
    },
    {
      company: "TBox Solutions Limited",
      href: "#",
      badges: [],
      location: "Lahore, Pakistan",
      title: "iOS Developer Intern",
      logoUrl: "/tbox.png",
      start: "Mar 2023",
      end: "Jun 2023",
      description:
        "Gained foundational skills through small application development and courses. Worked with Auto Layout, user interface design, and Swift.",
    },
  ],
  education: [
    {
      school: "National Collage of Business Administration & Economics, Gulberg, Lahore",
      href: "#",
      degree: "Bachelor's Degree in Computer Science - CGPA: 3.2 ",
      logoUrl: "/ncbae.png",
      start: "Oct 2020",
      end: "Jun 2024",
      description: "CGPA: 3.2 ",
    },
    {
      school: "Air Base Inter College, Sargodha",
      href: "#",
      degree: "Intermediate in Computer Science - Percentage: 74%",
      logoUrl: "/abic.png",
      start: "Oct 2017",
      end: "Jun 2019",
      description: "Percentage: 74%",
    },
  ],
  skills: [
    "Swift",
    "UIKit",
    "Core Data",
    "RESTful APIs",
    "MVC",
    "Git",
    "CocoaPods",
    "Firebase",
    "SpriteKit",
    "Xcode",
    "GitHub",
    "Figma",
    "Agile Development",
    "Trello",
    "NFC Tags",
    "QR Codes",
    "Auto Layout",
    "JSON"
  ],
  
  projects: [
    {
      title: "PicIt",
      href: "",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A SaaS platform enabling users to collect email addresses from their GPT users, leveraging the OpenAI GPT Store to help build audiences and monetize GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
        },
      ],
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed, and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mtaimoor123",
        },
      ],
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "An open-source logging and analytics platform for OpenAI: Track ChatGPT API requests, analyze costs, and optimize prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
        },
      ],
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "AI-powered customer support chatbot that automatically handles support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
        },
      ],
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Mehndi App",
      href: "",
      dates: "",
      active: false,
      description:
        "Creative application for designing and sharing Mehndi patterns using Swift and Firebase.",
      technologies: ["Swift", "Firebase", "Firebase Storage"],
    },
    {
      title: "Connex Card",
      href: "",
      dates: "",
      active: false,
      description:
        "Digital business contact card app with QR code integration for seamless contact sharing.",
      technologies: ["Swift", "QR Code", "APIs"],
    },
    {
      title: "Netag",
      href: "",
      dates: "",
      active: false,
      description:
        "App for digital business tags and sharing profiles with QR code integration.",
      technologies: ["Swift", "QR Code", "APIs"],
    },
    {
      title: "Social Tap",
      href: "",
      dates: "",
      active: false,
      description:
        "Social media platform for sharing multimedia content, using AV Foundation for video sharing.",
      technologies: ["Swift", "AV Foundation"],
    },
    {
      title: "Barber Shop",
      href: "",
      dates: "",
      active: false,
      description:
        "Appointment booking app for barbershops, featuring scheduling, notifications, and customer reviews.",
      technologies: ["Swift", "Local Notifications"],
    },
    {
      title: "SDTM",
      href: "",
      dates: "",
      active: false,
      description:
        "Task management app for tracking deadlines with real-time Firebase integration.",
      technologies: ["Swift", "Firebase", "Firebase Storage"],
    },
    {
      title: "Sense Minder",
      href: "",
      dates: "",
      active: false,
      description:
        "App for tracking and managing sensor data with Swift and UIKit.",
      technologies: ["Swift", "UIKit"],
    },
    {
      title: "Paint App",
      href: "",
      dates: "",
      active: false,
      description:
        "A simple painting and drawing app with drawing tools and color palettes.",
      technologies: ["Swift", "UIKit"],
    },
    {
      title: "Erroxr iOS",
      href: "",
      dates: "",
      active: false,
      description:
        "Chat and social sharing app with UI built using Swift, UIKit, and Storyboard.",
      technologies: ["Swift", "UIKit", "Storyboard"],
    },
    {
      title: "Freelancing",
      href: "",
      dates: "",
      active: false,
      description:
        "Worked on various freelance projects involving bug fixing, feature additions, and task management.",
      technologies: ["Swift"],
    },
  ],
  
} as const;
