"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Prefetcher from "@/components/Prefetcher";
import { Link } from "@/i18n/routing";
import BackgroundStar from "@/components/BackgroundStar";
import BackgroundParticle from "@/components/BackgroundParticle";
import BackgroundTopVisual from "@/components/BackgroundTopVisual";
import OpeningAnimation from "@/components/OpeningAnimation";
import { useFirstVisit } from "@/components/FirstVisitProvider";


export default function TopContent() {

  const { isFirstVisit, isTopPage  } = useFirstVisit();

  const containerRef = useRef<HTMLDivElement>(null);
  const OpeningAnimationRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (isFirstVisit === null) return;

    const tl = gsap.timeline();
    const OpeningContainer = OpeningAnimationRef.current;
    const OpeningText = OpeningContainer?.querySelector(".js-opening-text");
    const background = backgroundRef.current;
    const title = titleRef.current;
    const menu = menuRef.current;

    if(!OpeningContainer || !OpeningText || !background || !title || !menu) return;

    if (isTopPage && isFirstVisit) {
      tl.fromTo(OpeningText, {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: .5,
        ease: "power3.out",
      })
      .to(OpeningText, {
        opacity: 0,
        duration: 2,
        delay: 2.5,
        ease: "power3.out",
      })
      .fromTo(OpeningContainer, {
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
      tl.to(OpeningContainer, {
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
    <div ref={containerRef} className="h-fit">
      <OpeningAnimation ref={OpeningAnimationRef} />
      <div className="">
        <div ref={backgroundRef} className="background-container animation-initial-hidden">
          <BackgroundStar />
          <BackgroundParticle />
          <BackgroundTopVisual />
        </div>
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
    </div>
  );
};
