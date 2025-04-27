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

  useGSAP(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        });
      } else {
        gsap.to(menuRef.current, {
          y: "100%",
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
        });
      }
    }
  }, [isOpen]); // isOpenが変わるたびに 発火

  return (
    <div ref={menuRef} className="translate-y-full opacity-0 w-screen fixed -z-10 inset-0 bg-background-light dark:bg-background-dark">
      <div className="fixed z-40 inset-y-0 -left-2.5 md:-left-5 writing-mode-vertical-rl text-6xl md:text-title text-center tracking-wide">MENU</div>
      <div className="fixed z-50 top-7 right-24 md:right-36 flex justify-center items-center gap-x-6">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <div className="fixed z-40 top-0 right-custom md:right-10 bottom-0 grid place-content-center">
        <ul className="grid gap-y-10 tracking-wide">
          <li className="box text-3.5xl leading-none text-right" onClick={() => setIsOpen(false)}><Link href="/">Home</Link></li>
          <li className="text-3.5xl leading-none text-right" onClick={() => setIsOpen(false)}><Link href="/works">Works</Link></li>
          <li className="text-3.5xl leading-none text-right" onClick={() => setIsOpen(false)}><Link href="/profile">Profile</Link></li>
          <li className="text-3.5xl leading-none text-right" onClick={() => setIsOpen(false)}><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="fixed inset-x-0 bottom-16 md:top-0 md:bottom-0 pr-custom pl-custom grid place-content-center text-base lg:text-2xl leading-loose lg:leading-loose text-center">
        <p>Hello world !!<br />
        My name is Takuya Oshima.<br />
        I’m a Web Designer and Frontend Engineer.<br />
        Welcome to my portfolio site.<br />
        This site allows you to view websites I have created.</p>
      </div>
      <ul className="fixed z-40 right-custom bottom-4 md:right-10 flex justify-end items-center gap-x-4">
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

