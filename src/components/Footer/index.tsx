"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  const pathname = usePathname();
  const isTopPage = pathname === "/";
  const footerRef = useRef<HTMLElement>(null);

  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);
  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    setIsFirstVisit(!visited);
  }, []);

  useGSAP(() => {
    const footer = footerRef.current;
    //トップページかそれ以外のページでアニメーションの挙動を制御
    if (isTopPage) {
      if (isFirstVisit === null) return;
      if (isFirstVisit) {
        //トップページで初回訪問時の場合のアニメーション
        sessionStorage.setItem("visited", "true");
        gsap.fromTo(footer, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.85,
          delay: 10.7,
          ease: "power3.out",
        });
      } else {
        //トップページで初回訪問時ではない場合のアニメーション
        gsap.fromTo(footer, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.85,
          delay: 3.2,
          ease: "power3.out",
        });
      }
    } else { //トップページ以外のページのアニメーション
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
    <footer ref={footerRef} className="w-full mt-auto py-4 px-custom md:px-4 lg:px-10 opacity-0">
      <div className="text-center tracking-wide text-sm">&copy;{year} Takuya Oshima All rights reserved</div>
    </footer>
  );
};
