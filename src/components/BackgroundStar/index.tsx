"use client";
import { useEffect } from "react";

export default function BackgroundStar() {
  useEffect(() => {
    //背景に星屑のobjectを生成
    const stars = document.querySelector(".stars");

    if (!stars) return;

    const createStar = () => {
      const starEl = document.createElement("span");
      starEl.className = "star";
      const minSize = 1;
      const maxSize = 3;
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
    for (let i = 0; i <= 100; i++) {
      createStar();
    }
  }, []);

  return(
    <div id="stars" className="stars"></div>
  );
};
