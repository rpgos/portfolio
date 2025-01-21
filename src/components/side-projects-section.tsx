import { projects } from "@/constants";
import Section from "./section";
import Project from "./project";
import { useTranslations } from "next-intl";

export default function SideProjectsSection() {
  const t = useTranslations('sideProjects')

  return (
    <Section id="projects" title={t('title')}>
      {
        projects.map(project => (<Project key={project.id} job={project} translationKey="sideProjects" />))
      }
    </Section>
  )
}
