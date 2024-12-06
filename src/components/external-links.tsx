import Image from "next/image";
import Link from "next/link";

export default function ExternalLinks() {
  return (
    <div className="flex gap-3 p-2 w-fit bg-content1-400 rounded-full">
      <Link target="_blank" href="https://github.com/rpgos">
        <Image
          src="/github.svg"
          width={30}
          height={30}
          alt="Github"
        />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/rodrigopguerreiro/">
        <Image
          src="/linkedin.svg"
          width={30}
          height={30}
          alt="LinkedIn"
        />
      </Link>
      <Link target="_blank" href="https://open.spotify.com/artist/1Zd6VFfOVh04zXMVpK96Xy?si=0t9lT5kaRVSqArFxAg4YPg">
        <Image
          src="/spotify.svg"
          width={30}
          height={30}
          alt="Spotify"
        />
      </Link>
    </div>
  )
}
