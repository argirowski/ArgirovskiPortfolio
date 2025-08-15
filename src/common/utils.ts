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
      ".ASP.NET Core",
      "Entity Framework Core",
      "CQRS + Clean Architecture",
      "Serilog",
      "Authentication & Authorization",
      "Azure + CI/CD Pipelines",
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

export const featuredProjects = projects.filter((project) => project.featured);
