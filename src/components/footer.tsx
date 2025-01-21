import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <span className="text-sm text-content1-50 gradient-background p-2 rounded-lg">
      {t('builtBy')}
    </span>
  )
}
