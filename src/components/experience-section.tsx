import { Chip } from "@nextui-org/react";
import Section from "./section";
import { jobs } from "@/constants";
import Link from "next/link";
import Project from "./project";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      {
        jobs.map(job => (<Project job={job} />))
      }
    </Section>
  )
}
