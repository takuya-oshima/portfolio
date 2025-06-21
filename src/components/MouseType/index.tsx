"use client";
import { useRef,useEffect } from "react";

export default function MouseType() {
  const mouseCursorRef = useRef<HTMLDivElement>(null);
  const mouseStalkerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseCursor = mouseCursorRef.current;
    const mouseStalker = mouseStalkerRef.current;

    const timeoutId = setTimeout(() => {

      if (!mouseCursor || !mouseStalker) return;

      let mouseX = 0, mouseY = 0;
      let stalkerX = 0, stalkerY = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      };

      const animate = () => {
        stalkerX += (mouseX - stalkerX) * 0.1;
        stalkerY += (mouseY - stalkerY) * 0.1;
        mouseStalker.style.transform = `translate(${stalkerX}px, ${stalkerY}px)`;
        requestAnimationFrame(animate);
      };

      const handleMouseEnter = () => {
        mouseCursor.classList.add('cursor--active');
        mouseStalker.classList.add('stalker--active');
      };

      const handleMouseLeave = () => {
        mouseCursor.classList.remove('cursor--active');
        mouseStalker.classList.remove('stalker--active');
      };

      const links = document.querySelectorAll("a");
      links.forEach(link => {
        link.addEventListener("mouseenter", handleMouseEnter);
        link.addEventListener("mouseleave", handleMouseLeave);
      });

      window.addEventListener("mousemove", onMouseMove);
      animate();

      return () => {
        links.forEach(link => {
          link.removeEventListener("mouseenter", handleMouseEnter);
          link.removeEventListener("mouseleave", handleMouseLeave);
        });
        window.removeEventListener("mousemove", onMouseMove);
      };
    }, 0);

    return () => clearTimeout(timeoutId);

  }, []);

  return (
    <>
      <div ref={mouseCursorRef} className="mouse-cursor"></div>
      <div ref={mouseStalkerRef} className="mouse-stalker"></div>
    </>
  );
};
