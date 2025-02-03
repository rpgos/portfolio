import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ExternalLinks from "@/components/external-links";
import Footer from "@/components/footer";
import LanguageSelect from "@/components/language-select";
import SideProjectsSection from "@/components/side-projects-section";
import ThemeToggle from "@/components/theme-toggle";


export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 items-center justify-items-center min-h-screen p-10 gap-10 sm:p-26 md:p-28">
      <div className="h-full w-full">
        <header className="flex flex-col gap-6 lg:fixed">
          <span className="text-6xl md:text-7xl">
            Rodrigo<br></br>Guerreiro
          </span>
          <span className="text-lg">
            Senior Full Stack Developer
          </span>
          <ExternalLinks />
          <div className="flex gap-2">
            <ThemeToggle />
            <LanguageSelect />
          </div>
        </header>
      </div>
      <div className="h-full">
        <main className="flex flex-col row-start-2 items-center sm:items-start">
          <AboutSection />
          <ExperienceSection />
          <SideProjectsSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
