interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="flex flex-col gap-5 mb-36 lg:mb-48 w-full">
      <div className="text-xl lg:hidden sticky top-0 py-4 z-10 bg-content1/90">
        {title}
      </div>
      {children}
    </section>
  )
}
