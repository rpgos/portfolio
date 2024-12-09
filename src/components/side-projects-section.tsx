import { projects } from "@/constants";
import Section from "./section";
import Project from "./project";

export default function SideProjectsSection() {
  return (
    <Section id="projects" title="Side Projects">
      {
        projects.map(project => (<Project key={project.company} job={project} />))
      }
    </Section>
  )
}
