"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTitleSide from "@/components/PageTitleSide";
import PageTitleHead from "@/components/PageTitleHead";
import PageLead from "@/components/PageLead";
import TextBase from "@/components/TextBase";
import styles from "./index.module.css"

// SSRを無効にしてクライアント側でのみ読み込む
const MarqueeText = dynamic(() => import('@/components/MarqueeText'), { ssr: false });
const BlockTitle = dynamic(() => import('@/components/BlockTitle'), { ssr: false });
const TextLarge = dynamic(() => import('@/components/TextLarge'), { ssr: false });
const MailAddress = dynamic(() => import('@/components/MailAddress'), { ssr: false });
const IconFacebook = dynamic(() => import('@/components/IconFacebook'), { ssr: false });
const IconInstagram = dynamic(() => import('@/components/IconInstagram'), { ssr: false });
const IconGithub = dynamic(() => import('@/components/IconGithub'), { ssr: false });


gsap.registerPlugin(ScrollTrigger);

export default function ProfileContent() {
  const t = useTranslations("ProfilePage");

  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger")
    ]).then(([gsapModule, scrollTriggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // ここにアニメーション処理を入れる
    });
  }, []);

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


    const field = fieldRef.current;
    const skill = skillRef.current;

    gsap.fromTo(field, {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: field,
        start: "top 80%",
        end: "bottom bottom",
      },
    });
    gsap.fromTo(skill, {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: skill,
        start: "top 80%",
        end: "bottom bottom",
      },
    });
  }, { dependencies: [] });

  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <div ref={titleRef}>
        <PageTitleSide pageTitleSide="PROFILE" />
      </div>
      <div ref={contentRef} className={`${styles.animationInitialHidden} relative`}>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-42 text-center">
          <div className="mb-4">{t("name")}</div>
          <PageTitleHead pageTitleHead="Takuya Oshima" />
          <PageLead>Web Designer / Frontend Engineer</PageLead>
        </div>
        {/*
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-10">
          <figure className="w-screen mx-[calc((100vw-100%)/-2)]">
            <Image className="md:w-[45rem] mx-auto" src="/images/img_mv_sample.png" width={1920} height={1000} alt="メインビジュアル" priority />
          </figure>
        </div>
        */}
        <div className="md:w-[45rem] mx-auto mb-34 md:mb-[12.5rem] locale">
          <TextBase>
            {t("profileText").split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </TextBase>
        </div>
        <MarqueeText text="Takuya Oshima" className="text-4xl md:text-6xl" />
        <MarqueeText text="Takuya Oshima" className="text-4xl md:text-6xl" direction="right" fontClassName="font-angel" />
        <MarqueeText text="オオシマ タクヤ" className="text-[2rem] md:text-[3.25rem] mb-40" />
        <div ref={fieldRef} className="lg:w-10/12 2xl:w-full xl:grid xl:grid-cols-2 mx-auto mb-34 md:mb-[12.5rem]">
          <BlockTitle blockTitle="FIELD" />
          <div className="xl:-ml-32 2xl:-ml-24 locale">
            <TextBase>
            {t("serviceText").split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
            </TextBase>
          </div>
        </div>
        <div ref={skillRef} className="lg:w-10/12 2xl:w-full xl:grid xl:grid-cols-2 mx-auto mb-34 md:mb-[12.5rem]">
          <BlockTitle blockTitle="SKILL" />
          <div className="md:flex justify-start items-start gap-x-32 xl:gap-x-40 2xl:gap-x-48 xl:-ml-32 2xl:-ml-24">
            <dl className="mb-8">
              <dt>
                <TextLarge>Development</TextLarge>
              </dt>
              <dd>
                <p className="text-base leading-loose mb-8 md:mb-14 ml-1 locale">
                  HTML<br/>
                  CSS<br/>
                  SCSS<br/>
                  CSS Module<br/>
                  JavaScript<br/>
                  TypeScript<br/>
                  Next.js<br/>
                  jQuery<br/>
                  WordPress<br/>
                  Movable Type<br/>
                  MicroCMS<br/>
                  Bootstrap<br/>
                  TailWind CSS<br/>
                  Git/GitHub<br/>
                  webpack<br/>
                  Gulp<br/>
                  Vite
                </p>
              </dd>
            </dl>
            <dl className="mb-8">
              <dt>
                <TextLarge>Design</TextLarge>
              </dt>
              <dd>
                <p className="text-base leading-loose mb-8 md:mb-14 ml-1 locale">
                  Web Design<br/>
                  UI Design<br/>
                  Illustrator<br/>
                  Photoshop<br/>
                  Lightroom<br/>
                  Adobe XD<br/>
                  Figma
                </p>
              </dd>
            </dl>
            <dl className="mb-8">
              <dt>
                <TextLarge>Other</TextLarge>
              </dt>
              <dd>
                <p className="text-base leading-loose mb-8 md:mb-14 ml-1 locale">
                  Planning<br/>
                  Direction<br/>
                  Sales<br/>
                  Web Marketing<br/>
                  SEO<br/>
                  Search Ads
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34 md:mb-[12.5rem] black">
          <div className="w-screen mx-[calc((100vw-100%)/-2)] bg-black text-white py-20 2xl:py-32 px-custom">
            <h2 className="mb-8 md:mb-14 2xl:mb-[4.5rem] text-center text-[2.5rem] md:text-5xl 2xl:text-7xl leading-relaxed tracking-wide">CONTACT</h2>
            <div className="text-center">
              <p className="mx-10 mb-10 text-base md:text-xl leading-loose locale">
                {t("contactText").split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className="mb-10 text-2xl md:text-6xl 2xl:text-8xl leading-loose">
                <MailAddress />
              </div>
              <div className="mb-[4.5rem] text-3xl leading-loose">Get in touch</div>
              <ul className="flex justify-center items-center gap-x-4 md:gap-x-6">
                <li className="fill-white">
                  <IconFacebook className="fill-white " />
                </li>
                <li>
                  <IconInstagram className="fill-white" />
                </li>
                <li>
                  <IconGithub className="fill-white" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
