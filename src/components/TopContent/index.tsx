"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Prefetcher from "@/components/Prefetcher";
import { Link } from "@/i18n/routing";

// SSRを無効にしてクライアント側でのみ読み込む
const BackgroundStar = dynamic(() => import("@/components/BackgroundStar"), { ssr: false });
const BackgroundParticle = dynamic(() => import("@/components/BackgroundParticle"), { ssr: false });
const BackgroundTopVisual = dynamic(() => import("@/components/BackgroundTopVisual"), { ssr: false });

import OpeningAnimation from "@/components/OpeningAnimation";
import { useFirstVisit } from "@/components/FirstVisitProvider";
import MouseType from "@/components/MouseType";


export default function TopContent() {

  const { isFirstVisit, isTopPage  } = useFirstVisit();

  const containerRef = useRef<HTMLDivElement>(null);
  const openingAnimationRef = useRef<HTMLDivElement>(null);
  const openingTextRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (isFirstVisit === null) return;

    const tl = gsap.timeline();
    const openingContainer = openingAnimationRef.current;
    const openingText = openingTextRef.current;
    const background = backgroundRef.current;
    const title = titleRef.current;
    const menu = menuRef.current;

    if(!openingContainer || !openingText || !background || !title || !menu) return;

    if (isTopPage && isFirstVisit) {
      tl.fromTo(openingText, {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: .5,
        ease: "power3.out",
      })
      .to(openingText, {
        opacity: 0,
        duration: 2,
        delay: 2.5,
        ease: "power3.out",
      })
      .fromTo(openingContainer, {
        y: 0,
      },
      {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      }, "-=0.5")
      .fromTo(background, {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
      })
      .fromTo(title, {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.Out",
      })
      .fromTo(menu, {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    } else {
      tl.to(openingContainer, {
        display: "none"
      }, "-=0.5")
      .fromTo(background, {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
      })
      .fromTo(title, {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.Out",
      })
      .fromTo(menu, {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, {
    dependencies: [isFirstVisit],
    scope: containerRef,
    revertOnUpdate: true,
  });

  return (
    <div ref={containerRef} className="top h-fit">
      <OpeningAnimation ref={openingAnimationRef} openingTextRef={openingTextRef} />
      <div className="top-contents relative z-10">
        <div ref={titleRef} className="animation-initial-hidden mt-[18vh] md:mt-24 lg:mt-8 mb-[15vh] lg:mb-32 text-center tracking-wide top-text-shadow">
          <h1 className="mb-8 md:mb-14 text-5xl md:text-8xl lg:text-index-title font-normal whitespace-nowrap">Takuya Oshima</h1>
          <h2 className="text-lg md:text-xl lg:text-3.5xl font-normal">Web Designer / Frontend Developer</h2>
        </div>
        <ul ref={menuRef} className="animation-initial-hidden mb-24 text-center tracking-wide top-text-shadow">
          <li className="mb-10 text-xl md:text-2xl"><Prefetcher href="/works/" /><Link className="text-link" href="/works">Works</Link></li>
          <li className="mb-10 text-xl md:text-2xl"><Prefetcher href="/profile/" /><Link className="text-link" href="/profile">Profile</Link></li>
          <li className="text-xl md:text-2xl"><Prefetcher href="/contact/" /><Link className="text-link" href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div ref={backgroundRef} className="background-container animation-initial-hidden">
        <BackgroundStar />
        <BackgroundParticle />
        <BackgroundTopVisual />
      </div>
      <MouseType />
    </div>
  );
};
