"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useFirstVisit } from "@/components/FirstVisitProvider";


export default function Footer() {
  const year = new Date().getFullYear();

  const footerRef = useRef<HTMLElement>(null);

  const { isTopPage, isFirstVisit } = useFirstVisit();

  useGSAP(() => {
    const footer = footerRef.current;

    if (isFirstVisit === null) return;

    if(isTopPage) {
      if (isFirstVisit) {
        //トップページでかつ初回訪問時のみ実行
        gsap.fromTo(footer, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.85,
          delay: 10.7,
          ease: "power3.out",
        });
      } else {
        //トップページで初回訪問時ではない場合に実行
        gsap.fromTo(footer, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.85,
          delay: 3,
          ease: "power3.out",
        });
      }
    } else {
      //トップページ以外で実行
      gsap.fromTo(footer, {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });
    }

  }, { dependencies: [isTopPage, isFirstVisit] });

  return (
    <footer ref={footerRef} className="animation-initial-hidden w-full mt-auto py-4 px-custom md:px-4 lg:px-10">
      <div className="text-center tracking-wide text-sm">&copy;{year} Takuya Oshima All rights reserved</div>
    </footer>
  );
};
