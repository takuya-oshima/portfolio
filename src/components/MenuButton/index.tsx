"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

//型の定義
type Props = {
  isOpen: boolean; //真偽値の型
  setIsOpen: (open: boolean) => void; //boolean型（true/false）の引数を1つ受け取って、何も返さない関数の型
}

export default function MenuButton({ isOpen, setIsOpen }: Props){
  //メニューの状態を関数で定義
  const menuButtonFunction = () => {
    setIsOpen(!isOpen);
  };

  //トップページをだけアニメーションを設定
  const pathname = usePathname();
  const isTopPage = pathname === "/";
  const menuButtonRef = useRef<HTMLDivElement>(null);

  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);
  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    setIsFirstVisit(!visited);
  }, []);

  useGSAP(() => {
    const menuButton = menuButtonRef.current;
    //トップページかそれ以外のページでアニメーションの挙動を制御
    if (isTopPage) {
      if (isFirstVisit === null) return;
      if (isFirstVisit) {
        //トップページで初回訪問時の場合のアニメーション
        sessionStorage.setItem("visited", "true");
        gsap.fromTo(menuButton, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.85,
          delay: 10.7,
          ease: "power3.out",
        });
      } else {
        //トップページで初回訪問時ではない場合のアニメーション
        gsap.fromTo(menuButton, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.85,
          delay: 3.2,
          ease: "power3.out",
        });
      }
    } else { //トップページ以外のページのアニメーション
      gsap.fromTo(menuButton, {
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
    <div ref={menuButtonRef} className="w-12 h-12 flex items-center opacity-0">
      <button onClick={menuButtonFunction} className={`${ isOpen ? "oepn" : "close" } relative w-12 h-12 m-auto flex justify-center items-center gap-x-2 cursor-pointer border border-[#111] dark:border-white hover:border-[#999] dark:hover:border-[#999] rounded-full origin-center menubtn`}>
        <span className="inline-block shrink-0 w-1 h-1 rounded-full bg-black dark:bg-white"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-black dark:bg-white"></span>
        <span className="inline-block shrink-0 w-1 h-1 rounded-full bg-black dark:bg-white"></span>
      </button>
    </div>
  )
};

