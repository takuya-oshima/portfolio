"use client";
import { forwardRef } from "react";
import styles from "./index.module.css";

type Props = {
  openingTextRef: React.RefObject<HTMLDivElement | null>;
};

const OpeningAnimation = forwardRef<HTMLDivElement, Props>(({ openingTextRef }, ref) => {
  return (
    <div ref={ref} className="opening-animation fixed w-full h-full inset-0 z-50 dark:bg-white bg-black grid place-items-center px-6">
      <div ref={openingTextRef} className={`${styles.animationInitialHidden} text-4xl dark:text-black text-white tracking-widest leading-relaxed`}>
        A TAKUYA OSHIMA PORTFOLIO
      </div>
    </div>
  );
});

OpeningAnimation.displayName = "OpeningAnimation";

export default OpeningAnimation;
