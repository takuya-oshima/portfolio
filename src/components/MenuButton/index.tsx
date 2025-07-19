"use client";

import { useFirstVisit } from "@/components/FirstVisitProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

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

  const menuButtonRef = useRef<HTMLDivElement>(null);

  const { isTopPage, isFirstVisit } = useFirstVisit();


  useGSAP(() => {
    const menuButton = menuButtonRef.current;

    if (isFirstVisit === null) return;

    if(isTopPage) {
      if (isFirstVisit) {
        //トップページでかつ初回訪問時のみ実行
        gsap.fromTo(menuButton, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.85,
          delay: 10.7,
          ease: "power3.out",
        });
      } else {
        //トップページで初回訪問時ではない場合に実行
        gsap.fromTo(menuButton, {
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
    <div ref={menuButtonRef} className="animation-initial-hidden w-12 h-12 flex items-center opacity-0">
      <button onClick={menuButtonFunction} className={`${ isOpen ? "open" : "close" } relative w-12 h-12 m-auto flex justify-center items-center gap-x-2 cursor-pointer border border-[#111] dark:border-white hover:border-[#999] dark:hover:border-[#999] rounded-full origin-center menubtn`}>
        <span className="inline-block shrink-0 w-1 h-1 rounded-full bg-black dark:bg-white"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-black dark:bg-white"></span>
        <span className="inline-block shrink-0 w-1 h-1 rounded-full bg-black dark:bg-white"></span>
      </button>
    </div>
  )
};

