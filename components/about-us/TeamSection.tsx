"use client"

import { useTranslations, useLocale } from "next-intl"
import { TeamMemberCard } from "./TeamMemberCard"
import { teamMembers } from "@/data/about-us"

export function TeamSection() {
  const t = useTranslations("aboutUsPage.team")
  const locale = useLocale()
  const isGreek = locale === "el"

  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <h2
            className={`text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl ${isGreek ? "greek-heading" : ""}`}
          >
            {t("title")}
          </h2>
          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg ${isGreek ? "greek-text" : ""}`}
          >
            {t("description")}
          </p>
        </div>

        {/* Team Grid — all members together */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-5">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
