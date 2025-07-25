"use client"

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PageTitleSide from "@/components/PageTitleSide";
import MailAddress from "@/components/MailAddress";
import IconFacebook from "@/components/IconFacebook";
import IconInstagram from "@/components/IconInstagram";
import IconGithub from "@/components/IconGithub";

export default function ContactContent() {
  const t = useTranslations("ContactPage");

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
        delay: 0.6,
        ease: "power3.out",
      })
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

  return(
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <div ref={titleRef}>
        <PageTitleSide pageTitleSide="CONTACT" />
      </div>
      <div ref={contentRef} className="animation-initial-hidden relative mt-[11vh]">
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 text-center">
          <p className="mx-10 mb-10 text-base md:text-xl leading-loose locale">
            {t("contactText").split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="mb-10 text-2xl md:text-6xl 2xl:text-8xl leading-loose break-normal">
            <MailAddress />
          </div>
          <div className="mb-[4.5rem] text-3xl leading-loose">Get in touch</div>
          <ul className="flex justify-center items-center gap-x-4 md:gap-x-6">
            <li>
              <IconInstagram />
            </li>
            <li>
              <IconFacebook />
            </li>
            <li>
              <IconGithub />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

