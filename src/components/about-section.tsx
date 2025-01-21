'use client'

import { Link, useDisclosure } from "@nextui-org/react";
import Section from "./section";
import ContactModal from "./contact-modal";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const {isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const t = useTranslations('about')

  return (
    <Section id="about" title={t('title')}>
      <p>
        {t('introduction')}
      </p>
      <p>
        {
          t.rich('copy1', {
            agrimp: (chunks) => <Link target="_blank" href="https://agrimp.com/">{chunks}</Link>,
            realxdata: (chunks) => <Link target="_blank" href="https://www.moodyscre.com/persona/emea/">{chunks}</Link>,
            gigmit: (chunks) => <Link target="_blank" href="https://www.gigmit.com">{chunks}</Link>,
          })
        }
      </p>
      <p>
        {t('copy2')}
      </p>
      <p>
        {
          t.rich('copy3', { message: (chunks) => <Link onClick={onOpen} href="#">{chunks}</Link> })
        }
      </p>
      <p>
        {t('copy4')}
      </p>
      <p>
        {
          t.rich('copy5', {
            spotify: (chunks) => <Link target="_blank" href="https://open.spotify.com/artist/1Zd6VFfOVh04zXMVpK96Xy?si=QOPzPpg3SwCKHvzxw0ubGQ">{chunks}</Link>
          })
        }
      </p>
      <ContactModal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} />
    </Section>
  )
}
