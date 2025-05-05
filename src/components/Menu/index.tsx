"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import MailAddress from "@/components/MailAddress";
import IconFacebook from "@/components/IconFacebook";
import IconInstagram from "@/components/IconInstagram";
import IconGithub from "@/components/IconGithub";


//型の定義
type Props = {
  isOpen: boolean; //真偽値の型
  setIsOpen: (open: boolean) => void; //boolean型（true/false）の引数を1つ受け取って、何も返さない関数の型
}

export default function Menu({ isOpen, setIsOpen }: Props ){
  const menuRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLUListElement>(null);

  console.log(menuItemsRef);

  useGSAP(() => {
    const menu = menuRef.current;
    const title = titleRef.current;
    const menuItems = menuItemsRef.current?.querySelectorAll(".menu-item");
    const settings = settingsRef.current;
    const message = messageRef.current;
    const contact = contactRef.current;
    const tl = gsap.timeline();

    if (!menu || !menuItems) return;

    const itemArray = Array.from(menuItems);
    const targets = [settings, message, contact].filter(Boolean);

    if (menu) {
      if (isOpen) {
        tl.to(menu, {
          display: 'block',
          opacity: 1,
          duration: 0.3,
          ease: "power3.inOut"
        })
        .to(title, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.inOut"
        })
        .to(itemArray, {
          stagger: 0.15,
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power3.inOut"
        }, "-=0.35")
        .to(targets, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power3.inOut"
        }, "-=0.32")
        ;
      } else {
        gsap.to(menu, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
          onComplete: () => {
            if (menu) menu.style.display = 'none';
          }
        })
        gsap.to(title, {
          x: "-20",
          opacity: 0,
        })
        gsap.to(itemArray, {
          y: "20",
          opacity: 0,
        })
        gsap.to(targets, {
          y: "20",
          opacity: 0,
        })
        ;
      }
    }
  }, [isOpen]); // isOpenが変わるたびに 発火

  return (
    <div ref={menuRef} className="hidden  opacity-0 w-screen fixed -z-10 inset-0 bg-background-light dark:bg-background-dark">
      <div className="fixed z-40 inset-y-0 -left-2.5 md:-left-5 writing-mode-vertical-rl text-6xl md:text-title text-center tracking-wide">
        <div className="inline-block overflow-hidden"><div ref={titleRef}>MENU</div></div>
      </div>
      <div ref={settingsRef} className="fixed z-50 top-7 right-24 md:right-36 flex justify-center items-center gap-x-6">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <div className="fixed z-40 top-0 right-custom md:right-10 bottom-0 grid place-content-center">
        <ul ref={menuItemsRef} className="grid gap-y-10 tracking-wide">
          <li className="inline-block overflow-hidden text-3.5xl leading-none text-right" onClick={() => setIsOpen(false)}><p className="menu-item"><Link href="/">Home</Link></p></li>
          <li className="inline-block overflow-hidden text-3.5xl leading-none text-right" onClick={() => setIsOpen(false)}><p className="menu-item"><Link href="/works">Works</Link></p></li>
          <li className="inline-block overflow-hidden text-3.5xl leading-none text-right" onClick={() => setIsOpen(false)}><p className="menu-item"><Link href="/profile">Profile</Link></p></li>
          <li className="inline-block overflow-hidden text-3.5xl leading-none text-right" onClick={() => setIsOpen(false)}><p className="menu-item"><Link href="/contact">Contact</Link></p></li>
        </ul>
      </div>
      <div className="fixed inset-x-0 bottom-16 md:top-0 md:bottom-0 pr-custom pl-custom grid place-content-center text-base lg:text-2xl leading-loose lg:leading-loose text-center">
        <p ref={messageRef}>Hello world !!<br />
        My name is Takuya Oshima.<br />
        I’m a Web Designer and Frontend Engineer.<br />
        Welcome to my portfolio site.<br />
        This site allows you to view websites I have created.</p>
      </div>
      <ul ref={contactRef} className="fixed z-40 right-custom bottom-4 md:right-10 flex justify-end items-center gap-x-4">
        <li className="text-base">
          <MailAddress />
        </li>
        <li className="w-5 h-5">
          <IconInstagram />
        </li>
        <li className="w-5 h-5">
          <IconFacebook />
        </li>
        <li className="w-5 h-5">
          <IconGithub />
        </li>
      </ul>
    </div>
  )
};

