'use client'

import { Link, locales } from "@/i18n/routing"
import { Avatar } from "@heroui/react"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react"
import { useLocale } from "next-intl"

const FLAGS: Record<string, { src: string; alt: string }> = {
  en: { src: "https://flagcdn.com/gb.svg", alt: "English" },
  pt: { src: "https://flagcdn.com/pt.svg", alt: "Portuguese" }
}

export default function LanguageSelect() {
  const currentLocale = useLocale()

  return (
    <Dropdown classNames={{
      content: "bg-content1-800 text-content1-50"
    }}>
      <DropdownTrigger>
        <Button
          isIconOnly
          radius="full"
          
          variant="light"
          aria-label="Change language"
          className="p-2 border border-2 dark:border-content1-800  border-primary justify-center relative w-min flex cursor-pointer"
        >
          <Avatar 
            alt={FLAGS[currentLocale].alt} 
            className="w-5 h-5" 
            src={FLAGS[currentLocale].src} 
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        selectedKeys={[currentLocale]}
        selectionMode="single"
        variant="bordered"
        className="z-10 inline-flex flex-col items-center justify-center subpixel-antialiased outline-none rounded-large shadow-medium p-1 bg-content1-800 text-content1-50"
      >
        {
          locales.map(locale =>
            <DropdownItem key={locale}>
              <Link className="flex gap-2 uppercase items-center p-2" href="/" locale={locale}>
                <Avatar 
                  alt={FLAGS[locale].alt} 
                  className="w-5 h-5" 
                  src={FLAGS[locale].src} 
                />
                {locale}
              </Link>
            </DropdownItem>
          )
        }
      </DropdownMenu>
    </Dropdown>
  )
}
