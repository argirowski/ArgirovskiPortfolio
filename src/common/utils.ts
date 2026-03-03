export function handleDownloadCV(RESUME_PDF_URL: string) {
  const link = document.createElement("a");
  link.href = RESUME_PDF_URL;
  link.download = "Gjorgji-Argirovski-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const projects = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "A full-stack application built with .NET 9 and React (TypeScript) using Clean Architecture and CQRS (MediatR). Implements JWT authentication with refresh tokens, repository pattern, Entity Framework Core, and FluentValidation pipeline behaviors. The frontend uses React Bootstrap and Formik with Yup for structured form handling.",
    technologies: [
      "Clean Architecture",
      "CQRS + MediatR",
      "JWT + Refresh Tokens",
      "Entity Framework Core",
      "FluentValidation",
      "React + TypeScript",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/argirowski/TaskManagementApp",
    featured: true,
  },
  {
    id: 2,
    title: "Reactivities Social App",
    description:
      "A full-stack social event platform built with .NET 9 and React (TypeScript) using Clean Architecture and CQRS (MediatR). Users can create and join activities, follow other users, upload profile photos, and receive real-time updates via SignalR. The backend includes JWT authentication, pagination, filtering, and centralized error handling, while the frontend uses React Query and MobX for scalable state management.",
    technologies: [
      "React Typescript",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "CQRS + MediatR",
      "JWT Authentication",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/argirowski/Reactivities",
    featured: true,
  },
  {
    id: 3,
    title: "Restaurant App",
    description:
      "A backend REST API built with ASP.NET Core, structured using Clean Architecture and CQRS (MediatR). Features include JWT authentication, role-based authorization, Entity Framework Core with SQL Server, server-side pagination, custom exception middleware, structured logging with Serilog, automated testing, and CI/CD deployment to Azure.",
    technologies: [
      "ASP.NET Core Web API",
      "Clean Architecture + CQRS",
      "Entity Framework Core",
      "JWT Authentication",
      "Azure CI/CD",
    ],
    category: "Backend",
    githubUrl: "https://github.com/argirowski/RestaurantApp",
    featured: true,
  },
  {
    id: 4,
    title: "E-Commerce Store",
    description:
      "A full-stack e-commerce application implementing product management, authentication, role-based authorization, shopping cart functionality, order processing, and payment integration. Built with ASP.NET Core and React (TypeScript), featuring Redux for state management, server-side pagination and filtering, and secure identity handling with ASP.NET Core Identity.",
    technologies: [
      "ASP.NET Core",
      "React (TypeScript)",
      "Entity Framework Core",
      "Redux",
      "ASP.NET Core Identity",
      "Material UI",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/argirowski/ECommerceStore",
    featured: true,
  },
  {
    id: 5,
    title: "Dating App",
    description:
      "A full-stack application built with .NET 8 and Angular 18, implementing JWT authentication, ASP.NET Identity, and real-time messaging with SignalR. Features include cloud photo uploads, private messaging, dynamic filtering/sorting/pagination, and secure role-based access. Built with Entity Framework Core and Angular reactive forms.",
    technologies: [
      ".NET 8 Web API",
      "Angular 18",
      "Entity Framework Core",
      "JWT + ASP.NET Identity",
      "SignalR",
      "Pagination and Filtering",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/argirowski/DatingApp",
    featured: true,
  },
];

export const technicalSkills = {
  frontend: [
    "Typescript",
    "React",
    "Next.js",
    "Javascript",
    "Tailwind CSS",
    "Responsive Design",
  ],
  backend: [
    "C#",
    "ASP.NET Core",
    "Entity Framework Core",
    "RESTful API Development",
    "Authentication & Authorization",
    "Clean Architecture",
  ],
  database: ["SQL", "Microsoft SQL Server"],
  tools: [
    "Microsoft Azure",
    "Docker",
    "Git / GitHub",
    "Unit Testing",
    "Agile Methodology",
  ],
};

export const languages = [
  {
    name: "Macedonian",
    level: "Native",
  },
  {
    name: "English",
    level: "Fluent",
  },
  {
    name: "German",
    level: "Beginner",
  },
];

export const certifications = [
  {
    title: "Programming in Microsoft C# - Exam 70-483",
    url: "https://www.credly.com/badges/49fceafe-9455-40c1-988c-dd6500def154",
  },
  {
    title: "Querying Data with Transact-SQL - Exam 761",
    url: "https://www.credly.com/badges/ab2660b7-4db1-4515-9e0d-56238e6c1e45",
  },

  {
    title: "Oracle Certified Associate, Java SE 7 Programmer",
    url: "https://www.credly.com/badges/b9f7aeda-e73b-483c-820e-90fccfa1278f",
  },
];

export const workExperience = [
  {
    position: "Software Developer",
    company: "EmuWorks (KB-Synotec)",
    period: "Oct 2025 - Present",
    responsibilities: [
      "Built a full-stack task planning application with Next.js and React (TypeScript), leveraging Server Components and Server Actions to deliver a scalable and maintainable architecture.",
      "Integrated Microsoft Graph API to manage and synchronize Microsoft Planner tasks within the Microsoft 365 ecosystem, implementing secure Entra ID authentication and Microsoft Teams tab embedding.",
      "Designed accessible, responsive user interfaces with Tailwind CSS, implemented client-side state management in React, and applied schema-based form validation using React Hook Form and Zod.",
      "Collaborated with backend engineers and product managers to translate business requirements into scalable solutions, contributing to architectural discussions and code reviews.",
    ],
  },
  {
    position: "Software Developer",
    company: "Damilah",
    period: "Jul 2022 - Feb 2025",
    responsibilities: [
      "Developed modern, responsive user interfaces with React and TypeScript, ensuring type safety and maintainable component architecture.",
      "Designed and implemented scalable REST APIs and business logic using ASP.NET Core, enabling seamless data flow between frontend and backend services.",
      "Utilized Entity Framework Core for efficient data access and object-relational mapping, applying best practices in query optimization and database interaction.",
      "Built clean, accessible, mobile-first UI components with Tailwind CSS to deliver consistent user experiences across devices.",
      "Contributed across the full stack, collaborating on frontend features and backend architecture to deliver cohesive end-to-end solutions.",
    ],
  },
  {
    position: "Software Developer",
    company: "CodeIT Solution",
    period: "Jan 2021 - Jun 2022",
    responsibilities: [
      "Developed and maintained full-stack applications using ASP.NET Core and C#, building scalable and maintainable backend services.",
      "Designed and implemented responsive, user-centric interfaces with React and Bootstrap, delivering accessible and consistent UI experiences.",
      "Designed and optimized SQL Server databases, improving performance of critical queries and core business operations.",
      "Leveraged Entity Framework Core for object-relational mapping, ensuring clean data access patterns and maintainable persistence logic.",
      "Collaborated across frontend and backend teams to deliver end-to-end features within iterative development cycles.",
    ],
  },
];

export const education = [
  {
    title: "Web Developer Bootcamp - Semos Javascript Academy",
    institution: "Semos Computer Education Center",
    period: "May 2018 - Jan 2019",
    description:
      "Completed an intensive full-stack web development program focused on the MERN stack (MongoDB, Express, React, Node.js). Gained hands-on experience building dynamic web applications, with emphasis on RESTful APIs, state management, and modern JavaScript (ES6+), alongside strong foundations in HTML5 and CSS3.",
  },
];
