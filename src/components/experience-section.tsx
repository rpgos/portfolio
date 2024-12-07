import { Link } from "@nextui-org/react";
import Section from "./section";
import { jobs } from "@/constants";
import Project from "./project";

export default function ExperienceSection() {
  return (
    <Section id="career" title="Career">
      {
        jobs.map(job => (<Project key={job.company} job={job} />))
      }
      <Link target="_blank" href="/cv.pdf" underline="always" className="text-sm">
        View full CV
        <svg className="bg-transparent text-primary fill-current ml-2" viewBox="0 0 15 15" width={13} height={20}>
          <path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clipRule="evenodd" fillRule="evenodd"/>
        </svg>
      </Link>
    </Section>
  )
}
