import { Terminal, Code, Award, Users, Database, GraduationCap, Trophy, ScrollText, Search, Wrench, Zap } from 'lucide-react';

export const portfolioData = {
  site: {
    quote:
      "Every person is the right person to act. Every moment is the right moment to begin.",
    quoteAttribution: "Jonathan Schell",
  },

  landing: {
    logoWord: "Yasti",
    heroGreeting: "Hey there, I'm",
    rotatingRoles: [
      "Data Analyst",
      "Web Developer",
      "Full-Stack Builder",
      "Problem Solver",
    ],
    heroTagline:
      "I connect data, people, and products — turning messy problems into clear, usable solutions.",
    careerObjective:
      "To leverage my technical and analytical skills in data analysis and development to build impactful solutions that solve real-world problems and contribute to business and societal growth.",
    signatureQuote:
      "I turn ideas into impact by understanding people and solving the right problems.",
    journeyIntro:
      "A quick map of where I focus — from academics and leadership to shipping full-stack and data-driven builds.",
    processSteps: [
      {
        title: "Listen & frame",
        text: "Start with who it’s for, what “good” looks like, and what data or constraints exist.",
      },
      {
        title: "Explore & model",
        text: "Prototype flows, shape datasets, and test assumptions before locking the solution.",
      },
      {
        title: "Build & validate",
        text: "Ship incremental value, measure outcomes, and refine with feedback and metrics.",
      },
      {
        title: "Communicate",
        text: "Make findings and trade-offs visible so teams can decide with confidence.",
      },
    ],
    gallery: [
      {
        src: "/images/events/host.jpeg",
        caption: "On stage and behind the scenes, guiding the event flow with confidence and clarity.",
      },
      {
        src: "/images/events/hostingccid.jpeg",
        caption: "Coordinating with peers to deliver smooth technical and cultural programs.",
      },
      {
        src: "/images/events/explain.jpeg",
        caption: "Presenting ideas clearly while aligning teams, timelines, and audience engagement.",
      },
      {
        src: "/images/events/award.jpeg",
        caption: "Recognition for focused effort, teamwork, and consistent contribution.",
      },
      {
        src: "/images/events/B_F.jpeg",
        caption: "Celebrating a successful event with the team after strong collaboration.",
      },
      {
        src: "/images/events/WhatsApp Image 2026-04-16 at 10.38.41 PM (2).jpeg",
        caption: "A candid frame from recent activities that reflects leadership and energy.",
      },
      {
        src: "/images/events/win.jpeg",
        caption: "A proud win that reflects discipline, preparation, and team effort.",
      },
      {
        src: "/images/events/core.jpeg",
        caption: "Core team collaboration focused on planning, ownership, and execution.",
      },
      {
        src: "/images/events/emcee.jpeg",
        caption: "Leading as emcee with clear communication and strong stage presence.",
      },
    ],
    skillsVisual: [
      { label: "Data & analytics", hint: "SQL, Python, dashboards, experiments", pct: 88 },
      { label: "Web & APIs", hint: "React, Node, REST, full-stack flows", pct: 90 },
      { label: "ML & automation", hint: "Models, CV pipelines, practical AI", pct: 82 },
      { label: "Leadership", hint: "Events, communication, cross-team delivery", pct: 86 },
    ],
  },

  hero: {
    name: "Yasti Kotak",
    portraitUrl: "/images/Yasti.jpg",
    school: "Dayananda Sagar College of Engineering",
    degreeLine: "B.E. Computer Science and Business Systems · CGPA 9.56",
    intro:
      "Hello, and welcome to my portfolio! I build practical software with clean interfaces, solid backend logic, and applied AI. This site highlights projects, leadership, and how I approach real-world problems.",
    roles: ["Full-Stack Developer", "AI Project Builder", "Events Team Head"],
    tagline: "I build practical software products with clean UI, strong backend logic, and AI-powered features.",
    subheading: "Computer Science and Business Systems student at DSCE (CGPA 9.56) focused on real-world development projects.",
    resumeUrl: "/resume.pdf",
  },

  tabs: [
    { id: "landing", label: "Home" },
    { id: "projects", label: "My Work" },
    { id: "contact", label: "Contact" },
    { id: "about", label: "About Me" },
    { id: "events", label: "Track Record" },
    { id: "resume", label: "Resume" },
  ],

  highlights: {
    approach: [
      { title: "Identify Problems", description: "Pinpoint core challenges before writing any code", icon: Search },
      { title: "Understand People", description: "Empathize with end-users to shape the right experience", icon: Users },
      { title: "Build Solutions", description: "Engineer robust, scalable and clean software", icon: Wrench },
      { title: "Create Impact", description: "Deliver results that matter to businesses and society", icon: Zap }
    ],
    pitch: "I turn ideas into polished products by combining frontend experience, backend architecture, and practical AI integrations.",
    focusAreas: ["Full-Stack Web Development", "Applied AI Projects", "Problem Solving", "Technical Leadership"]
  },

  about: {
    intro: "I am someone who looks beyond problems to understand why they exist. As a CSBS student, I combine technology and business thinking to build solutions that are practical, efficient, and meaningful. I believe that the best solutions come from understanding people first.",
    objective: "To continuously learn and apply my technical and analytical skills in building efficient systems that solve real-world problems and contribute to impactful innovations.",
  },

  skills: {
    title: "Development Skills",
    categories: [
      {
        title: "Programming",
        icon: Terminal,
        items: [
          { name: "Python", level: 90 },
          { name: "Java", level: 85 },
          { name: "C / C++", level: 80 },
          { name: "JavaScript", level: 88 }
        ]
      },
      {
        title: "Web Development",
        icon: Code,
        items: [
          { name: "HTML / CSS", level: 90 },
          { name: "React.js", level: 88 },
          { name: "Node.js / Express.js", level: 84 },
          { name: "Flask / FastAPI", level: 82 }
        ]
      },
      {
        title: "Data & Tools",
        icon: Database,
        items: [
          { name: "MongoDB / MySQL", level: 85 },
          { name: "NumPy / Pandas", level: 80 },
          { name: "GitHub / VS Code", level: 90 },
          { name: "Figma", level: 75 }
        ]
      },
      {
        title: "Core Strengths",
        icon: Award,
        items: [
          { name: "Problem Solving", level: 95 },
          { name: "Decision Making", level: 90 },
          { name: "Communication", level: 95 },
          { name: "Leadership", level: 90 }
        ]
      }
    ]
  },

  projects: {
    title: "Projects",
    items: [
      {
        id: 6,
        title: "Retail Customer Intelligence Dashboard",
        cardBlurb:
          "End-to-end Retail Customer Intelligence Dashboard using PostgreSQL, SQL, and Power BI.",
        problem: "Retail businesses have vast transactional databases but struggle to extract actionable insights about customer behavior, churn risks, product affinity, and regional revenue distribution.",
        solution: "Built a star-schema data model, created analytical SQL views, performed RFM customer segmentation, churn analysis, revenue analytics, product performance analysis, and country-wise sales analysis to generate actionable business insights through five interactive dashboards.",
        outcomes: [
          "Identified high-value customer segments for targeted retention strategies.",
          "Analyzed seasonal revenue trends and top-performing products.",
          "Highlighted customer churn risks using RFM analysis.",
          "Evaluated geographic sales performance to identify market expansion opportunities.",
          "Demonstrated end-to-end Business Intelligence workflow from raw retail data to executive dashboards."
        ],
        techStack: ["Power BI", "PostgreSQL", "SQL", "DAX", "Business Intelligence", "Data Analytics", "RFM Segmentation"],
        uniqueFeature: "Implements automated RFM customer segmentation and churn prediction directly in SQL views.",
        features: [
          "Designed a star-schema data warehouse for retail analytics.",
          "Built reusable SQL views for executive KPIs, revenue trends, customer lifetime value, product analysis, and country analysis.",
          "Implemented RFM segmentation to classify customers into Champions, Loyal Customers, Potential Loyalists, At Risk, and Others.",
          "Developed five interactive Power BI dashboards: Executive Overview, Customer Intelligence, Revenue & Sales Analysis, Customer Churn Analysis, Country Performance.",
          "Added business insights and recommendations to each dashboard for better decision-making."
        ],
        insights: [
          "Champions and Loyal Customers account for over 60% of total revenue; targeted loyalty campaigns can maximize LTV.",
          "Product affinity analysis revealed strong cross-selling potential between top-performing electronics and home accessories.",
          "Seasonal spikes in Q4 require optimized inventory planning and customized promotional campaigns.",
          "Customers in the 'At Risk' segment show a 30% increase in churn probability; proactive outreach offers are recommended."
        ],
        pipeline: "Created custom SQL views inside PostgreSQL to automate ETL tasks, pre-calculate Customer Lifetime Value (CLV), compute moving averages of sales revenue, and dynamically segment customers based on Recency, Frequency, and Monetary parameters.",
        githubUrl: "https://github.com/yastikotak/Retail-Customer-Intelligence-Dashboard",
        liveUrl: "https://github.com/yastikotak/Retail-Customer-Intelligence-Dashboard",
        images: [
          "/images/projects/retail_exec_overview.png",
          "/images/projects/retail_cust_intelligence.png",
          "/images/projects/retail_revenue_sales.png",
          "/images/projects/retail_churn_analysis.png",
          "/images/projects/retail_country_perf.png"
        ]
      },
      {
        id: 4,
        title: "LeadLink CRM",
        cardBlurb:
          "A lead pipeline workspace that keeps sales follow-ups organized and timely.",
        problem: "Early-stage teams struggle to track leads consistently across calls, forms, and campaigns.",
        solution: "Built a CRM flow with lead stages, reminders, and centralized notes to improve follow-through.",
        outcomes: [
          "Improved lead follow-up consistency through structured stage tracking.",
          "Reduced missed outreach using reminder-based workflows.",
          "Created clearer visibility of sales pipeline health."
        ],
        techStack: ["React", "Node.js", "Express.js", "MongoDB"],
        uniqueFeature: "Smart follow-up prioritization based on stage, recency, and interaction history.",
        githubUrl: "#",
        liveUrl: "https://leadlink-app.onrender.com/",
        images: ["/images/projects/traffic_project.png"]
      },
      {
        id: 2,
        title: "AgriCare - AI-Powered Agriculture Monitoring System",
        cardBlurb:
          "Field data, maps, and ML in one place so crop health is visible and actionable.",
        problem: "Farmers and researchers need actionable crop-health insights from complex field data.",
        solution: "Developed an AI-assisted monitoring platform with dashboards, trends, and map-based visualization.",
        outcomes: [
          "Made crop-health signals easier to track through dashboard views.",
          "Improved decision speed with map-based field status visibility.",
          "Increased accessibility through multilingual and voice support."
        ],
        techStack: ["React", "Node.js", "Flask", "Random Forest", "Flutter", "Leaflet.js"],
        uniqueFeature: "Dual dashboards with multilingual support and text-to-speech for accessibility.",
        githubUrl: "#",
        liveUrl: "#",
        images: [
          "/images/projects/agriculture_project.png"
        ]
      },
      {
        id: 3,
        title: "Money Mentor - Personal Finance Manager",
        cardBlurb:
          "A guided finance workspace — tracking, analytics, and help when numbers feel overwhelming.",
        problem: "Students and young professionals struggle with planning budgets, taxes, and savings goals.",
        solution: "Built a full-stack finance app with analytics, calculators, and guided recommendations.",
        outcomes: [
          "Helped users track spending behavior across categories consistently.",
          "Simplified planning with built-in EMI and savings calculators.",
          "Improved confidence in day-to-day money decisions with guided insights."
        ],
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML/CSS"],
        uniqueFeature: "Combines expense tracking, EMI/TVM tools, and an AI chatbot in one workflow.",
        githubUrl: "#",
        liveUrl: "#",
        images: [
          "/images/projects/finance_project.png"
        ]
      },
      {
        id: 1,
        title: "Dynamic Traffic and Safety Management System",
        cardBlurb:
          "Computer vision and routing intelligence for safer roads and smarter traffic flow.",
        problem: "Urban traffic congestion and poor road safety monitoring need a real-time, adaptive solution.",
        solution: "Built a video-intelligence system that dynamically adjusts traffic signal timings and detects violations.",
        outcomes: [
          "Reduced manual traffic monitoring effort with automated detection.",
          "Improved response clarity by surfacing violations in real time.",
          "Enabled safer route suggestions using integrated risk signals."
        ],
        techStack: ["Python", "YOLOv8", "DeepSort", "EasyOCR", "Flask", "FastAPI"],
        uniqueFeature: "Includes women safety route finder using crime data with nearby police station mapping.",
        githubUrl: "#",
        liveUrl: "#",
        images: [
          "/images/projects/traffic_project.png"
        ]
      },
      {
        id: 5,
        title: "Customer Review Analyser",
        cardBlurb:
          "Review intelligence that extracts sentiment and themes for product decisions.",
        problem: "Large volumes of customer reviews are hard to read manually and convert into clear action points.",
        solution: "Created an analyser that classifies sentiment, identifies recurring topics, and summarizes insights.",
        outcomes: [
          "Converted unstructured review text into actionable insight buckets.",
          "Helped teams identify recurring pain points faster.",
          "Supported prioritization with sentiment and theme summaries."
        ],
        techStack: ["Python", "NLP", "Pandas", "Flask"],
        uniqueFeature: "Automatic category-wise recommendations generated from review clusters.",
        githubUrl: "#",
        liveUrl: "#",
        images: ["/images/projects/agriculture_project.png"]
      }
    ]
  },

  educationContent: [
    {
      institution: "Dayananda Sagar College of Engineering",
      year: "2023 - 2027",
      degree: "B.E. Computer Science and Business Systems",
      score: "9.5 CGPA",
    },
    {
      institution: "Sanskartirth Gyanpeeth",
      year: "2023",
      degree: "12th Standard",
      score: "80%",
    },
    {
      institution: "METAS of Seventh-day Adventist School",
      year: "2021",
      degree: "10th Standard",
      score: "94%",
    },
  ],

  events: {
    title: "Track Record",
    skills: [
      { name: "Python", icon: Terminal },
      { name: "React", icon: Code },
      { name: "Node.js", icon: Wrench },
      { name: "SQL", icon: Database },
      { name: "Data Analysis", icon: Search },
      { name: "Business Intelligence", icon: Database },
      { name: "Communication", icon: Users },
      { name: "Leadership", icon: Award }
    ],
    achievements: [
      {
        title: "SDG Innovators",
        icon: Trophy,
        detail: "Recognized for building solution-driven ideas aligned with sustainable development goals."
      },
      {
        title: "Comeback Challenge",
        icon: Zap,
        detail: "Delivered a resilient comeback performance under pressure in a competitive challenge environment."
      },
      {
        title: "Poster Presentation",
        icon: ScrollText,
        detail: "Presented technical work with clear storytelling, structured visuals, and audience interaction."
      }
    ],
    certifications: [
      {
        title: "DBMS",
        issuer: "NPTEL",
        image: "/images/certificates/dbms-nptel.png"
      },
      {
        title: "Python Libraries",
        issuer: "Giga Skills",
        image: "/images/certificates/python-libraries-gigaskills.png"
      },
      {
        title: "DSA",
        issuer: "Apna College",
        image: "/images/certificates/dsa-apna-college.png"
      }
    ],
    teams: [
      {
        title: "Events Head",
        date: "2025 - Present",
        detail: "Leading planning, execution, and team coordination for major events."
      },
      {
        title: "Events Team Member",
        date: "2024 - 2025",
        detail: "Supported event logistics, stage flow, and coordination across teams."
      },
      {
        title: "Emcee Team Member",
        date: "2023 - Present",
        detail: "Hosted events and maintained audience engagement with clear communication."
      }
    ]
  },

  contact: {
    title: "Get In Touch",
    email: "yastikotak11@gmail.com",
    linkedin: "https://www.linkedin.com/in/yasti-kotak-9639152a2/",
    github: "https://github.com/yastikotak"
  }
};
