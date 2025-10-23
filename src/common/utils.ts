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
    title: "E-Commerce Store",
    description:
      "A full-stack web application built with .NET and React, using C# for backend logic and TypeScript for the frontend. Features Redux for state management, Material UI for styling, Entity Framework for data access, and ASP.NET Core Identity for secure authentication.",
    technologies: [
      "React TypeScript",
      "Entity Framework Core",
      ".NET",
      "Material UI",
      "ASP.NET Core Identity",
      "Redux",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/argirowski/ECommerceStore",
    featured: true,
  },
  {
    id: 2,
    title: "Reactivities Social App",
    description:
      "A full-stack web app built with .NET 9.0 and React (TypeScript), featuring Clean Architecture with CQRS + Mediator, Entity Framework Core, and ASP.NET Core Identity. Includes real-time updates via SignalR and a custom photo upload widget with Dropzone and Cropper. The frontend uses MobX for state management. Designed as a multi-project solution with scalable, production-ready architecture.",
    technologies: [
      "React Typescript",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "CQRS + MediatR",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/argirowski/Reactivities",
    featured: true,
  },
  {
    id: 3,
    title: "Restaurant App",
    description:
      "A backend web application built with ASP.NET Core and C#, following Clean Architecture with CQRS. Features MS SQL with Entity Framework Core, secure API access via authentication and authorization, custom middleware, file handling, and Serilog logging. Includes automated tests and CI/CD pipelines for deployment to Azure.",
    technologies: [
      "CQRS + Clean Architecture",
      ".ASP.NET Core",
      "Authentication & Authorization",
      "Serilog",
      "Azure + CI/CD Pipelines",
      "Entity Framework Core",
    ],
    category: "Backend",
    githubUrl: "https://github.com/argirowski/RestaurantApp",
    featured: true,
  },
  {
    id: 4,
    title: "Dating App",
    description:
      "A full-stack web app built with .NET 8 and Angular 18, featuring JWT-based authentication, Entity Framework Core for data persistence, and real-time communication via SignalR. Includes drag-and-drop photo uploads to the cloud, private messaging, dynamic filtering/sorting/paging, and Angular notifications. Designed with best practices for scalable architecture and clean error handling.",
    technologies: [
      ".NET 8",
      "Angular 18",
      "Entity Framework Core",
      "JWT Authentication",
      "Filtering, sorting, and paging",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/argirowski/DatingApp",
    featured: true,
  },
];

export const technicalSkills = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Tailwind CSS",
    "Responsive Design",
  ],
  backend: [
    "C#",
    ".NET Core",
    "REST APIs",
    "Unit Testing",
    "Entity Framework Core",
  ],
  database: ["SQL", "Microsoft SQL Server"],
  tools: ["Git / GitHub", "Docker", "Microsoft Azure", "Agile Methodology"],
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
    title: "Querying Data with Transact-SQL - Exam 761",
    url: "https://www.credly.com/badges/ab2660b7-4db1-4515-9e0d-56238e6c1e45",
  },
  {
    title: "Programming in Microsoft C# - Exam 70-483",
    url: "https://www.credly.com/badges/49fceafe-9455-40c1-988c-dd6500def154",
  },
  {
    title: "Oracle Certified Associate, Java SE 7 Programmer",
    url: "https://www.credly.com/badges/b9f7aeda-e73b-483c-820e-90fccfa1278f",
  },
];

export const workExperience = [
  {
    position: "Software Developer",
    company: "Damilah",
    period: "Jul 2022 - Feb 2025",
    responsibilities: [
      "Built modern, responsive user interfaces using React with TypeScript, ensuring type safety and maintainable code structure.",
      "Developed scalable backend APIs and business logic using .NET Core, enabling seamless data flow across the stack.",
      "Employed Entity Framework Core for efficient data access and object-relational mapping, following best practices for database interaction.",
      "Designed and implemented sleek, utility-first UI components with Tailwind CSS, focusing on clean, accessible, mobile-first design.",
      "Collaborated in a full-stack environment, contributing to both frontend features and backend architecture, delivering cohesive end-to-end solutions.",
    ],
  },
  {
    position: "Software Developer",
    company: "CodeIT Solution",
    period: "Jan 2021 - Jun 2022",
    responsibilities: [
      "Developed and maintained full-stack applications using .NET Core and C#, ensuring scalable and efficient backend architecture.",
      "Built responsive, user-centric front-end interfaces with React and styled components using Bootstrap for modern, accessible UI design.",
      "Designed and queried SQL-based relational databases, optimizing performance for key operations.",
      "Utilized Entity Framework Core for object-relational mapping, enhancing productivity and consistency in data management.",
      "Collaborated on both frontend and backend solutions, contributing to end-to-end application features and delivery.",
    ],
  },
];

export const education = [
  {
    title: "Web Developer, Semos Javascript Academy",
    institution: "Semos Computer Education Center",
    period: "May 2018 - Jan 2019",
    description:
      "Completed a Web Development program covering modern technologies and tools including HTML5, CSS3, JavaScript, Node.js, MongoDB, React, Redux, TypeScript, Git, HTTP, and REST. Gained hands-on experience building full-stack applications and mastering both frontend and backend development workflows.",
  },
];
