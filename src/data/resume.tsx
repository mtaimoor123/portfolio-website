import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Taimoor Hassan",
  initials: "TH",
  url: "https://dillion.io",
  location: "Lahore, Pakistan.",
  locationLink: "https://maps.app.goo.gl/1KpkXW6qXojpvyha7",
  description:
    "Innovative iOS Developer with a proven track record in delivering high-quality, user-focused apps. Specializing in Swift, API integration, and performance optimization. Passionate about crafting seamless iOS mobile application experiences.",
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
      company: "O3 Interfaces - Odd One Out.",
      badges: [],
      href: "#",
      location: "Islamabad, Pakistan",
      title: "iOS Developer",
      logoUrl: "/o3interfaces.png",
      start: "August 2024 ",
      end: "Present",
      description:
        "As an iOS developer at O3 Interfaces, I contributed to the development of the UBL mobile banking app, focusing on delivering a seamless user experience and ensuring robust app performance. At O3 Interfaces, we blend creative design with cutting-edge technology to build intuitive and innovative mobile solutions, transforming complex user needs into engaging digital products.",
    },
    {
      company: "Torch Solutions",
      badges: [],
      href: "#",
      location: "Lahore, Pakistan",
      title: "Junior iOS Developer",
      logoUrl: "/torch.png",
      start: "August 2023 ",
      end: "May 2024",
      description:
        "Developed and maintained iOS applications from scratch, collaborated with teams to design and implement new features, conducted testing, debugging, performance optimization, and contributed to multiple apps while ensuring smooth app performance in a collaborative team environment.",
    },
    {
      company: "TBox Solutions Limited",
      href: "#",
      badges: [],
      location: "Lahore, Pakistan",
      title: "iOS Developer Intern",
      logoUrl: "/tbox.png",
      start: "March 2023",
      end: "August 2023",
      description:
        "Gained foundational skills through small application development and courses. Worked with Auto Layout, user interface design, and Swift. •	Built small iOS applications as part of Udemy courses. Designed and implemented responsive UI layouts using Auto Layout. Developed UI components to enhance user experience.",
    },
  ],
  education: [
    {
      school: "N C B A & E, Gulberg, Lahore",
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
      logoUrl: "/abics.png",
      start: "Oct 2017",
      end: "Jun 2019",
      description: "Percentage: 74%",
    },
  ],
  skills: [
    "Swift",
    "UIKit",
    "Design Patterns",
    "Rest API Integration",
    "URL Schemes",
    "Swift Package Manager",
    "Figma",
    "GitHub",
    "Trello",
    "SpriteKit",
    "CocoaPods",
    "QR Codes",
    "NFC Tags",
    "iPhone & iPad Apps",
    "Core Data",
    "Realm",
    "Combine Framework",
    "CloudKit",
    "Test-Driven Development (TDD)",
    "SwiftUI",
    "MVVM Design Pattern",
    "Unit Testing & UI Testing",
    "Apple Pay Integration",
    "In-App Purchases",
    "Push Notifications",
    "Core Bluetooth",
    "App Store Submission",
    "Localization",
    "Core Animation",
    "MapKit",
    "Accessibility Features",
    "RESTful APIs",
    "MVC",
    "Git",
    "Firebase",
    "Xcode",
    "Agile Development",
    "Auto Layout",
    "JSON"
  ],
  
  projects: [
    {
      title: "Mehndi App",
      href: "",
      dates: "",
      active: true,
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
