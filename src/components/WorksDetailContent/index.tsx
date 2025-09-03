"use client";

import dynamic from "next/dynamic";
import { Link } from "@/i18n/routing";
import React from "react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTitleSide from "@/components/PageTitleSide";
import PageTitleHead from "@/components/PageTitleHead";
import DetailCircle from "@/components/DetailCircle";
import Prefetcher from "@/components/Prefetcher";
import BlockTitle from "@/components/BlockTitle";
import PageLead from "@/components/PageLead";
import LinkButton from "@/components/LinkButton";
import CreditItem from "@/components/CreditItem";
import { getWorksDetail } from "@/libs/microcms";
import { formatDate } from "@/libs/utils";
import styles from "./index.module.css"

const MarqueeText = dynamic(() => import('@/components/MarqueeText'), { ssr: false });


gsap.registerPlugin(ScrollTrigger);

type Props = {
  locale: string;
  data: Awaited<ReturnType<typeof getWorksDetail>>;
};

export default function WorksDetailContent( { locale, data }: Props) {

  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const detailCircleRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const title = titleRef.current?.children;
    const content = contentRef.current;
    const detailCircle = detailCircleRef.current?.children;
    const mainImage = mainImageRef.current?.querySelector("img");
    const overview = overviewRef.current;
    const imgContainers = imagesRef.current?.querySelectorAll("figure") || [];
    const details = detailsRef.current?.children;

    if (title && content && detailCircle) {
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
      gsap.fromTo(detailCircle, {
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

    if (mainImage) {
      gsap.to(mainImage, {
        scale: 0.8,
        ease: "none",
        //opacity: 0,
        scrollTrigger: {
          trigger: mainImage,
          start: "80% center",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play none none reverse",
        }
      });
    }

    if (overview && imgContainers && details) {
      gsap.fromTo(overview, {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: overview,
          start: "-50% center",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      imgContainers.forEach((figure) => {
        gsap.fromTo(figure, {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: figure,
            start: "top center",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.fromTo(details, {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: details,
          start: "center center",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

    }
  }, { dependencies: [] });

  const [scrolled, setScrolled] = useState(false);
  const workslistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!workslistRef.current) return;
      setScrolled(window.scrollY > 2000); // 2000px以上スクロールでtrue
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section className="relative">
      <div ref={titleRef} className="page-title">
        <PageTitleSide pageTitleSide={data.titleAbbreviation} />
      </div>
      <div ref={contentRef} className={`${styles.animationInitialHidden} relative`}>
        <div className="mb-32 md:mb-42 text-center">
          {locale === "ja" && (
            <div className="mb-2 md:mb-4 lg:mb-8 font-ja text-base lg:text-lg">{data.title_ja}</div>
          )}
          <PageTitleHead pageTitleHead={data.title_en} />
          <PageLead>URL： <a href={data.url} target="_blank" rel="noopener" className={styles.textLink}>{data.url}</a></PageLead>
          <PageLead>Type： {data.category.name}</PageLead>
        </div>
        <div ref={mainImageRef} className="sticky z-10 top-0">
          <figure className="w-screen mx-[calc((100vw-100%)/-2)] overflow-hidden">
            <Image className="w-full" src={`${data.mainImage.url}?fm=webp`} width={data.mainImage.width} height={data.mainImage.height} alt={locale === "ja" ? data.title_ja : data.title_en + "TopImage"} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px" />
          </figure>
        </div>
        <div className="relative z-20 w-screen mx-[calc((100vw-100%)/-2)] pt-34 md:pt-[12.5rem] px-custom md:px-4 lg:px-0 bg-background-light dark:bg-background-dark">
          <div className="ml-left-custom-sm md:ml-24 lg:ml-0">
            <div ref={overviewRef} className="lg:w-10/12 xl:grid xl:grid-cols-2 mx-auto mb-34 md:mb-[12.5rem]">
              <BlockTitle blockTitle="OVERVIEW" />
              <div className="xl:-ml-32 2xl:-ml-24 overflow-hidden">
                {locale === "ja" ? (
                    <p className="font-ja text-base leading-loose mb-8 md:mb-14">
                      {data.overview_ja}
                    </p>
                  ) : locale === "en" ? (
                    <p className="text-base leading-loose mb-8 md:mb-14">
                      {data.overview_en}
                    </p>
                  ) : null}
                <LinkButton href={data.url}>View Site</LinkButton>
              </div>
            </div>
          </div>
          <MarqueeText text={data.titleAbbreviation} className="text-4xl md:text-6xl" />
          <MarqueeText text={data.titleAbbreviation} className="text-4xl md:text-6xl" direction="right" fontClassName="font-angel" />
          <MarqueeText text={data.titleKana} className="text-[2rem] md:text-[3.25rem] mb-40" fontClassName="font-ja" />
          <div ref={imagesRef} className="images">
            <div className="mb-34 md:mb-[12.5rem]">
            {data.pageImagesPC?.map((pageImagePC, index) => (
              <figure key={index} className="w-screen mx-[calc((100vw-100%)/-2)] mb-34 md:mb-42">
                <Image className="xl:w-[1120px] mx-auto drop-shadow-[1px_1px_15px_rgba(0,0,0,0.15)]" src={`${pageImagePC.url}?fm=webp`} width={pageImagePC.width} height={pageImagePC.height} alt={locale === "ja" ? data.title_ja : data.title_en + `UnderImage ${index + 1}`} loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1120px" />
              </figure>
            ))}
            </div>
            <div className="mb-34 md:mb-[12.5rem]">
              <div className="xl:w-[1120px] mx-auto grid gap-6 md:gap-10 lg:gap-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.pageImagesSP?.map((pageImageSP, index) => (
                  <figure key={index} className="flex justify-center">
                    <Image className="w-full h-fit drop-shadow-[1px_1px_15px_rgba(0,0,0,0.15)]" src={`${pageImageSP.url}?fm=webp`} width={pageImageSP.width} height={pageImageSP.height} alt={locale === "ja" ? data.title_ja : data.title_en + `UnderImage ${index + 1}`} loading="lazy" sizes="(max-width: 768px) 100vw" />
                  </figure>
                ))}
              </div>
            </div>
          </div>
          <MarqueeText text={data.titleAbbreviation} className="text-4xl md:text-6xl" />
          <MarqueeText text={data.titleAbbreviation} className="text-4xl md:text-6xl" direction="right" fontClassName="font-angel" />
          <MarqueeText text={data.titleKana} className="text-[2rem] md:text-[3.25rem] mb-20" fontClassName="font-ja" />
          <div ref={detailsRef} id="details" className="font-notoJP w-screen mx-[calc((100vw-100%)/-2)] bg-black text-white py-20 2xl:py-32 px-custom md:px-10 lg:px-16">
            <div className={styles.animationInitialHidden}>
              <h2 className="mb-8 md:mb-14 2xl:mb-[4.5rem] text-center text-[2.5rem] md:text-5xl 2xl:text-7xl leading-relaxed tracking-wide">DETAILS</h2>
              <div className="grid gap-y-4 md:gap-y-6 mb-[5.5rem]">
                <h3 className="text-2xl md:text-3.5xl text-center">INFO</h3>
                <CreditItem creditTitle="URL" creditData={<a href={data.url} target="_blank" rel="noopener" className={styles.textLink}>{data.url}</a>} />
                <CreditItem creditTitle="Release Date" creditData={formatDate(data.releaseDate)} />
                <CreditItem creditTitle="Type" creditData={data.category.name} />
                <CreditItem creditTitle="Technologies & Tools" creditData={data.technologiesTools} />
              </div>
              <div className="grid gap-y-4 md:gap-y-6">
                <h3 className="text-2xl md:text-3.5xl text-center">ROLE</h3>
                {data.role.map((item, index)=> (
                  <CreditItem key={index} creditTitle={item.fieldId} creditData={item[item.fieldId]} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div ref={workslistRef} className={"sticky z-10 w-screen mx-[calc((100vw-100%)/-2)] pt-34 md:pt-[12.5rem] pb-34 md:pb-[12.5rem] bg-background-light dark:bg-background-dark " + (scrolled ? "bottom-0" : "")}>
          <ul className="flex justify-center items-center gap-x-8 md:gap-x-16 lg:gap-x-32 text-base md:text-xl">
            <li>
              <Prefetcher href="/works/" />
              <Link href="/works/" className={`text-[2.5rem] md:text-5xl 2xl:text-7xl ${styles.textLink}`}>Works list</Link>
              </li>
          </ul>
        </div>
      </div>
      <div ref={detailCircleRef} className="detail-circle">
        <DetailCircle/>
      </div>
    </section>
  );
}
