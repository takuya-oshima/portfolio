"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PageTitleSide from "@/components/PageTitleSide";
import WorksList from "@/components/WorksList";
import type { Works } from "@/libs/microcms";
import styles from "./index.module.css";

type Props = {
  works: Works[];
  locale: string;
};

export default function WorksListContent({ works, locale }: Props) {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [bgImage, setBgImage] = useState<string>("/images/img_bg_default_thumbnail.webp");
  const [isHovering, setIsHovering] = useState(false);

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
        delay: 0.6,
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
        delay: 0.6,
        ease: "power3.out",
      });
    };
  }, { dependencies: [] });


  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <div className={`${styles.bg} fixed top-0 left-0 w-full h-full bg-center bg-cover transition-all duration-500 -z-10 ${isHovering ? "scale-105" : ""}`} style={{ backgroundImage: `url(${bgImage})` }} />
      <div ref={titleRef}>
        <PageTitleSide pageTitleSide="WORKS" />
      </div>
      <div ref={contentRef} className={`${styles.animationInitialHidden} relative`}>
        <WorksList works={works} locale={locale} setBgImage={setBgImage} setIsHovering={setIsHovering} />
      </div>
    </section>
  );
}
