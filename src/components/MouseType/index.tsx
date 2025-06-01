"use client";
import { useRef,useEffect } from "react";

export default function MouseType() {
  const mouseCursorRef = useRef<HTMLDivElement>(null);
  const mouseStalkerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseCursor = mouseCursorRef.current;
    const mouseStalker = mouseStalkerRef.current;

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

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  },[]);

  return (
    <>
      <div ref={mouseCursorRef} id="mouse-cursor"></div>
      <div ref={mouseStalkerRef} id="mouse-stalker"></div>
    </>
  );
};
