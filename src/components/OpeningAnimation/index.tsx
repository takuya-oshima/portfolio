"use client";
import { forwardRef } from "react";

const OpeningAnimation = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="opening-animation fixed w-full h-full inset-0 z-50 bg-black grid place-items-center px-6">
      <div className="js-opening-text animation-initial-hidden text-4xl text-white tracking-widest leading-relaxed">
        A TAKUYA OSHIMA PORTFOLIO
      </div>
    </div>
  );
});

OpeningAnimation.displayName = "OpeningAnimation";

export default OpeningAnimation;
