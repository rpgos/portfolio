import { Link } from "@nextui-org/react";

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-5">
      <div className="text-xl lg:hidden sticky top-0">
        About
      </div>
      <p>
        {"I'm a developer focused on usability, design and performance."}
      </p>
      <p>
        With almost a decade of experience, I&apos;ve designed, developed and
        maintained complex solutions for a wide range of industries, from 
        <Link target="_blank" href="https://agrimp.com/">agricultural fair-trade platforms</Link> and&nbsp;
        <Link target="_blank" href="https://www.moodyscre.com/persona/emea/">real
        estate portfolio management</Link> to <Link target="_blank" href="https://www.gigmit.com">
        live music booking platforms</Link>
      </p>
      <p>
        I&apos;ve successfully worked with cross-functional teams ranging from 2 to
        20+ engineers, using modern technologies like Ruby on Rails, React, Next.js and
        Elasticsearch, among others, and using agile methodologies like Scrum
        and Kanban.
      </p>
      <p>
        Currently I am looking for a new challenge and company with a product and values
        I can identify myself with and with a clear roadmap of the future we can build together
        as a team. If you&apos;re looking for a team player, <Link>send me a message!</Link>
      </p>
      <p>
        I&apos;m driven by collaboration and open communication in order to build great team spirit,
        solve problems and achieve exceptional results together.
      </p>
      <p>
        On my free time, I like to &nbsp;
        <Link target="_blank" href="https://open.spotify.com/artist/1Zd6VFfOVh04zXMVpK96Xy?si=QOPzPpg3SwCKHvzxw0ubGQ">make music</Link>,
        play tennis, bake my own pizza and hangout with friends.
      </p>
    </section>
  )
}
