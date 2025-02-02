'use client'

import { useDisclosure } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "./contact-modal";

export default function ExternalLinks() {
  const {isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  return (
    <div className="flex gap-3 p-2 w-fit bg-content1-800 rounded-full">
      <Link target="_blank" href="https://github.com/rpgos" aria-label="Github">
        <Image
          src="/github.svg"
          width={30}
          height={30}
          alt=""
        />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/rodrigopguerreiro/" aria-label="LinkedIn">
        <Image
          src="/linkedin.svg"
          width={30}
          height={30}
          alt=""
        />
      </Link>
      <Link href="#" onClick={onOpen} aria-label="Open email modal">
        <Image
          src="/mail.svg"
          width={30}
          height={30}
          alt=""
        />
      </Link>
      <Link target="_blank" href="https://open.spotify.com/artist/1Zd6VFfOVh04zXMVpK96Xy?si=0t9lT5kaRVSqArFxAg4YPg" aria-label="Spotify">
        <Image
          src="/spotify.svg"
          width={30}
          height={30}
          alt=""
        />
      </Link>
      <ContactModal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} />
    </div>
  )
}
