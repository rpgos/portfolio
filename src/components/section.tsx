interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="flex flex-col gap-5 mb-36 lg:mb-48 w-full">
      <div className="text-xl sticky top-0 py-4 z-10 bg-[#f7f2ce]/90 dark:bg-[#3d1f0b]/90 lg:w-[110%] lg:pl-[15px] lg:ml-[-15px]">
        {title}
      </div>
      {children}
    </section>
  )
}
