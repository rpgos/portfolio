'use client'

import { Link, locales } from "@/i18n/routing"
import { Avatar } from "@heroui/react"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react"
import { useLocale } from "next-intl"
import { ReactElement } from "react"

const FLAGS: Record<string, ReactElement> = {
  en: <Avatar alt="English" className="w-6 h-6" src="https://flagcdn.com/gb.svg" />,
  pt: <Avatar alt="Portuguese" className="w-6 h-6" src="https://flagcdn.com/pt.svg" />
}

export default function LanguageSelect() {
  const currentLocale = useLocale()

  return (
    <Dropdown classNames={{
      content: "bg-content1-800 text-content1-50"
    }}>
      <DropdownTrigger>
        <Button className="w-min uppercase" variant="light">
          {FLAGS[currentLocale]}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        selectedKeys={[currentLocale]}
        selectionMode="single"
        variant="bordered"
      >
        {
          locales.map(locale => 
            <DropdownItem key={locale} >
              <Link className="flex gap-2 uppercase" href="/" locale={locale}>
                {FLAGS[locale]}
                {locale}
              </Link>
            </DropdownItem>
          )
        }
      </DropdownMenu>
    </Dropdown>
  )
}
