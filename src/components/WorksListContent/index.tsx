"use client";

import PageTitleSide from "@/components/PageTitleSide";
import WorksList from "@/components/WorksList";
import type { Works } from "@/libs/microcms";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  works: Works[];
  locale: string;
};

export default function WorksListContent({ works, locale }: Props) {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const title = titleRef.current?.children;
    const content = contentRef.current;

    if (title && content) {
      gsap.fromTo(title, {
        opacity: 0,
        x: -80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(content, {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });
    };
  });


  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <div id="bg" className="fixed top-0 left-0 w-full h-full bg-opacity-60 bg-center bg-cover transition-all duration-500 -z-10" />
      <div ref={titleRef}>
        <PageTitleSide pageTitleSide="WORKS" />
      </div>
      <div ref={contentRef} className="animation-initial-hidden relative">
        <WorksList works={works} locale={locale} />
      </div>
    </section>
  );
}
