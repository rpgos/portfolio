import { Job } from "@/constants";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

interface ProjectProps {
  job: Job
}

export default function Project({ job }: ProjectProps) {
  return (
    <Link
      href={job.companyUrl}
      target="_blank"
      key={job.company}
      className="flex gap-3 text-sm p-2 rounded-lg dark:bg-content1-800 bg-content1-200 items-center hover:scale-105 transform transition"
    >
      {
        job.start && job.end &&
        <div className="text-xs flex flex-col items-center">
          <span>{job.start}</span>
          <span className="whitespace-pre-line">{".\n.\n."}</span>
          <span className="mt-1">{job.end}</span>
          {job.endYear && <span className="mt-3">{job.endYear}</span>}
        </div>
      }
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-base text-primary">{job.title}</span>
          {job.company && <span className="sm:ml-2">@ {job.company}</span>}
        </div>
        <p className="">
          {job.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {
            job.stack.map(tech => <Chip key={tech} variant="flat" color="primary" size="sm">{tech}</Chip>)
          }
        </div>
      </div>
    </Link>
  )
}
