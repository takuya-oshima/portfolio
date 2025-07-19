"use client";
import { useEffect, useRef } from "react";

export default function BackgroundStar({ count = 100 }) {
  const backgroundStarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stars = backgroundStarsRef.current;
    //背景に星屑のobjectを生成
    if (!stars) return;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const starEl = document.createElement("span");
      starEl.className = "star";
      const minSize = 1;
      const maxSize = 3;
      const size = Math.random() * (maxSize - minSize) + minSize;
      starEl.style.width = `${size}px`;
      starEl.style.height = `${size}px`;
      starEl.style.left = `${Math.random() * 100}%`;
      starEl.style.top = `${Math.random() * 100}%`;
      starEl.style.animationDelay = `${Math.random() * 10}s`;
      fragment.appendChild(starEl);
    }

    stars.appendChild(fragment); // ← 最後に一括で追加
  }, [count]);

  return(
    <div ref={backgroundStarsRef} id="background-stars" className="background-stars"></div>
  );
};
