import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ThemeSwitch from "@/components/theme-switch";


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
          <ThemeSwitch />
        </header>

      </div>
      <div className="h-full">
        <main className="flex flex-col row-start-2 items-center sm:items-start">
          <AboutSection />
          <ExperienceSection />
        </main>
      </div>
    </div>
  );
}
