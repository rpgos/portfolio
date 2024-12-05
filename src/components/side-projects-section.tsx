import { projects } from "@/constants";
import Section from "./section";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import Project from "./project";

export default function SideProjectsSection() {
  return (
    <Section id="projects" title="Side Projects">
      {
        projects.map(project => (<Project job={project} />))
      }
    </Section>
  )
}
