"use client";
import { forwardRef } from "react";

type Props = {
  openingTextRef: React.RefObject<HTMLDivElement>;
};

const OpeningAnimation = forwardRef<HTMLDivElement, Props>(({ openingTextRef }, ref) => {
  return (
    <div ref={ref} className="opening-animation fixed w-full h-full inset-0 z-50 bg-black grid place-items-center px-6">
      <div ref={openingTextRef} className="animation-initial-hidden text-4xl text-white tracking-widest leading-relaxed">
        A TAKUYA OSHIMA PORTFOLIO
      </div>
    </div>
  );
});

OpeningAnimation.displayName = "OpeningAnimation";

export default OpeningAnimation;
