import { Link } from "@nextui-org/react";
import Section from "./section";
import { jobs } from "@/constants";
import Project from "./project";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      {
        jobs.map(job => (<Project job={job} />))
      }
      <Link target="_blank" href="/cv.pdf" underline="always" className="text-sm">
        View full CV
        <Image
          src="/file.svg"
          width={15}
          height={15}
          alt="Resume"
          className="ml-2"
        />
      </Link>
    </Section>
  )
}
