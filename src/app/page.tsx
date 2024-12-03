import ThemeSwitch from "@/components/theme-switch";


export default function Home() {
  return (
    <div className="grid grid-cols-2 grid-flow-col items-center justify-items-center min-h-screen p-10 gap-10 sm:p-28">
      <div className="h-full w-full">
        <header className="flex flex-col gap-6 fixed">
          <span className="text-7xl">
            Rodrigo<br></br>Guerreiro
          </span>
          Senior Full Stack Developer
          <ThemeSwitch />
        </header>

      </div>
      <div className="h-full">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-scroll">
          <div className="flex max-h-200">

            With almost a decade of experience, I've designed, developed and
            maintained complex solutions for a wide range of industries, from real
            estate portfolio management to live music booking platforms.
            I've successfully worked with cross-functional teams ranging from 2 to
            20+ engineers, using modern technologies like Ruby on Rails, React and
            Elasticsearch, among others, and using agile methodologies like Scrum
            and Kanban.
            I'm driven by collaboration and open communication in order to solve
            problems and achieve exceptional results.
            With almost a decade of experience, I've designed, developed and
            maintained complex solutions for a wide range of industries, from real
            estate portfolio management to live music booking platforms.
            I've successfully worked with cross-functional teams ranging from 2 to
            20+ engineers, using modern technologies like Ruby on Rails, React and
            Elasticsearch, among others, and using agile methodologies like Scrum
            and Kanban.
          </div>
        </main>

      </div>
    </div>
  );
}
