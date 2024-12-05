export type Job = {
  start?: string | number
  end?: string | number
  endYear?: number
  title: string
  description: string
  stack: string[]
  company?: string
  companyUrl: string
}

export const jobs: Job[] = [
  {
    start: 2021,
    end: 2024,
    title: "Senior Full Stack Developer",
    description: "Full-Stack developer on an artist booking platform with in-app messaging,\
      embedded media, ElasticSearch for quick artist search and filtering and A/B testing with Google Optimize. \
      Also responsible for improving team/company processes, bringing Agile methodologies and best practices. \
      Responsible for an API integration to consume gigmit data and perform authentication with JWT for a mobile app, \
      in a project with 3 european partners",
    stack: ["Ruby on Rails", "Backbone.js", "Postgres", "Docker", "SCRUM", "Elasticsearch", "Figma", "Kanban", "JWT"],
    company: "gigmit",
    companyUrl: "https://www.gigmit.com"
  },
  {
    start: 2019,
    end: 2021,
    title: "Full Stack Developer",
    description: "Ruby on Rails and React developer on a real estate analytics platform, responsible for migrating \
      the front-end to React, refactor and re-structure the backend and implement best practices, useful design patterns \
      and impove test coverage, writing meaningful and reliable unit and integration tests.",
    stack: ["Ruby on Rails", "React", "Postgres", "Docker", "SCRUM", "AWS"],
    company: "realxdata (now a Moody's company)",
    companyUrl: "https://www.moodyscre.com/persona/emea/"
  },
  {
    start: 2017,
    end: 2019,
    title: "Full Stack Developer",
    description: "Full-Stack developer, working mostly with Ruby on Rails and React and in a short project with \
      Django and Android native development. The main projects I worked on were an e-commerce platform for agriculture \
      goods and a fintech platform for alternative investments.",
    stack: ["Ruby on Rails", "React", "Postgres", "SQLite", "Django", "Android"],
    company: "Runtime Revolution",
    companyUrl: "https://www.runtime-revolution.com/"
  },
  {
    start: 2016,
    end: 2017,
    title: "Android Developer",
    description: "Freelance project developing an Android app that receives data from multiple sensors in a truck \
      to provide drivers with real time monitorization of core aspects of their load and route.",
    stack: ["Java", "REST", "Android"],
    company: "Apibeton",
    companyUrl: "https://apibeton.com/"
  },
  {
    start: 2015,
    end: 2016,
    title: "Junior Programmer",
    description: "Part of the maintenance team on a project for a major insurance company in Portugal, working \
      on their AS400 system (COBOL), reporting and fixing bugs. In a different internal project for Deloitte, I was \
      responsible for the initial development of a website for HR management, designing the data model and developing \
      the frontend layout.",
    stack: ["HTML", "CSS", "Javascript", "COBOL"],
    company: "Deloitte",
    companyUrl: "https://www.deloitte.com/pt/pt.html"
  },
  {
    start: "Feb",
    end: "Jul",
    endYear: 2015,
    title: "Android Developer",
    description: "Internship as part of the final semester of my degree, where I was responsible \
      for the Android development of a prototype for a shipping app, where a user sending a package is \
      connected with a user who can transport it. Also responsible for a market study on similar apps and the product design.",
    stack: ["Java", "Android", "REST", "SCRUM", "XML"],
    company: "Youship",
    companyUrl: "https://www.you-ship.com/"
  }
]

export const projects: Job[] = [
  {
    title: "King Gizzard's Last Release",
    description: "Designed and developed a Next.js app with TailwindCSS that uses Spotify's API for data consumption \
      and gives music recommendations. Used Vercel for deployment, test environments and DB hosting. Developed a payment solution \
      with Paypal but removed the payment feature for the time being.",
    stack: ["Next.js", "React", "Spotify API", "Paypal", "Prisma", "Typescript", "TailwindCSS"],
    companyUrl: "https://kinggizzardlastrelease.vercel.app/"
  },
  {
    title: "Al-Mudawwar",
    description: "Designed, developed and deployed an SPA for my musical project using React, Vite, Typescript and Bulma to \
    help on the design side. Used Vercel for deployment, test environments and file hosting.",
    stack: ["React", "Bulma", "Vite", "Typescript"],
    companyUrl: "https://almudawwar.vercel.app/"
  }
]
