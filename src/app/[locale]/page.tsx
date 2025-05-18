"use client";
import {Link} from "@/i18n/routing";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const stars = document.querySelector(".stars");

    if (!stars) return;

    const createStar = () => {
      const starEl = document.createElement("span");
      starEl.className = "star";
      const minSize = 1;
      const maxSize = 2;
      const size = Math.random() * (maxSize - minSize) + minSize;
      starEl.style.width = `${size}px`;
      starEl.style.height = `${size}px`;
      starEl.style.left = `${Math.random() * 100}%`;
      starEl.style.top = `${Math.random() * 100}%`;
      starEl.style.position = "absolute";
      starEl.style.background = "white";
      starEl.style.borderRadius = "50%";
      starEl.style.animation = "twinkle 1.5s infinite";
      starEl.style.animationDelay = `${Math.random() * 10}s`;
      stars.appendChild(starEl);
    };

    for (let i = 0; i <= 50; i++) {
      createStar();
    }
  }, []);

  return (
    <div className="h-fit">
      <div className="stars"></div>
      <div className="mt-[18vh] md:mt-24 lg:mt-8 mb-[15vh] lg:mb-32 text-center tracking-wide">
        <h1 className="mb-8 md:mb-14 text-5xl md:text-8xl lg:text-index-title font-normal whitespace-nowrap">Takuya Oshima</h1>
        <h2 className="text-lg md:text-xl lg:text-3.5xl font-normal">Web Designer / Frontend Developer</h2>
      </div>
      <ul className="mb-24 text-center tracking-wide">
        <li className="mb-10 text-xl md:text-2xl"><Link href="/works">Works</Link></li>
        <li className="mb-10 text-xl md:text-2xl"><Link href="/profile">Profile</Link></li>
        <li className="text-xl md:text-2xl"><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};
