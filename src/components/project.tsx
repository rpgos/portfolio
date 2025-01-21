import { Job } from "@/constants";
import { Chip } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ProjectProps {
  job: Job
}

export default function Project({ job }: ProjectProps) {
  const t = useTranslations('career')

  return (
    <Link
      href={job.companyUrl}
      target="_blank"
      key={job.company}
      className="flex gap-3 text-sm p-2 rounded-lg text-content1-900 dark:text-content1-50 bg-content1-200 dark:bg-content1-800 items-center hover:scale-105 transform transition"
    >
      {
        job.start && job.end &&
        <div className="text-xs flex flex-col items-center">
          <span>{job.end}</span>
          <span className="whitespace-pre-line">{".\n.\n."}</span>
          <span className="mt-1">{job.start}</span>
          {job.endYear && <span className="mt-3">{job.endYear}</span>}
        </div>
      }
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-base text-content1-600 dark:text-primary">{job.title}</span>
          {job.company && <span className="sm:ml-2">@ {job.company}</span>}
        </div>
        <p className="">
          {t(`descriptions.${job.id}`)}
        </p>
        <div className="flex gap-2 flex-wrap">
          {
            job.stack.map(tech => <Chip key={tech} variant="flat" className="bg-content1-600 text-content1-50" size="sm">{tech}</Chip>)
          }
        </div>
      </div>
    </Link>
  )
}
