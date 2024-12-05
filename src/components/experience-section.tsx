import { Chip } from "@nextui-org/react";
import Section from "./section";
import { jobs } from "@/constants";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      {
        jobs.map(job => {
          return (
            <div className="flex gap-3 text-sm p-2 rounded-lg dark:bg-content1-800 bg-content1-200 items-center">
              <div className="text-xs flex flex-col items-center">
                <span>{job.start}</span>
                <span className="whitespace-pre-line">{".\n.\n."}</span>
                <span className="mt-1">{job.end}</span>
                {job.endYear && <span className="mt-3">{job.endYear}</span>}
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-base text-primary">
                  {job.title}
                </div>
                <p className="">
                  {job.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {
                    job.stack.map(tech => <Chip variant="flat" color="primary" size="sm">{tech}</Chip>)
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </Section>
  )
}
