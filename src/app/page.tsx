import AboutSection from "@/components/about-section";
import ThemeSwitch from "@/components/theme-switch";


export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 items-center justify-items-center min-h-screen p-10 gap-10 sm:p-26 md:p-28">
      <div className="h-full w-full">
        <header className="flex flex-col gap-6 lg:fixed">
          <span className="text-6xl md:text-7xl">
            Rodrigo<br></br>Guerreiro
          </span>
          Senior Full Stack Developer
          <ThemeSwitch />
        </header>

      </div>
      <div className="h-full">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-col gap-10">
            <AboutSection />
          </div>
        </main>

      </div>
    </div>
  );
}
