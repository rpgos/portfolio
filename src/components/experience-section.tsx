import { Chip } from "@nextui-org/react";
import Section from "./section";
import { jobs } from "@/constants";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      {
        jobs.map(job => {
          return (
            <div className="flex gap-3 text-sm p-2 rounded-lg dark:bg-content1-800 bg-content1-200">
              <div className="text-xs">2020 - 2024</div>
              <div className="flex flex-col gap-2">
                <div className="text-base">
                  {job.title}
                </div>
                <p className="">
                  {job.description}
                </p>
                <div className="flex gap-2">
                  {
                    job.stack.map(tech => <Chip variant="bordered" color="primary" size="sm">{tech}</Chip>)
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
