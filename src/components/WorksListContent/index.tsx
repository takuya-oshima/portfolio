"use client";

import PageTitleSide from "@/components/PageTitleSide";
import WorksList from "@/components/WorksList";
import type { Works } from "@/libs/microcms";

type Props = {
  works: Works[];
  locale: string;
};

export default function WorksListContent({ works, locale }: Props) {
  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <div id="bg" className="fixed top-0 left-0 w-full h-full bg-opacity-60 bg-center bg-cover transition-all duration-500 -z-10" />
      <PageTitleSide pageTitleSide="WORKS" />
      <div className="relative">
        <WorksList works={works} locale={locale} />
      </div>
    </section>
  );
}
