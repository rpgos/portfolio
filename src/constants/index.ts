type Job = {
  startMonth: string
  endMonth: string
  startYear: number
  endYear: number
  title: string
  description: string
  stack: string[]
  company: string
  companyUrl: string
}
export const jobs: Job[] = [
  {
    startMonth: "Feb",
    endMonth: "Jul",
    startYear: 2015,
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
