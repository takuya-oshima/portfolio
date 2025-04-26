"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { usePathname } from "next/navigation";


import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import MailAddress from "@/components/MailAddress";
import IconFacebook from "@/components/IconFacebook";
import IconInstagram from "@/components/IconInstagram";
import IconGithub from "@/components/IconGithub";

gsap.registerPlugin(useGSAP);

export default function Menu(){
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathname = usePathname();

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]); // URLが変わるたびにメニューを閉じる




  return (
    <nav>
      <div onClick={menuFunction} className="relative w-12 h-12 flex justify-center items-center gap-x-2 cursor-pointer border border-[#111] dark:border-white hover:border-[#999] dark:hover:border-[#999] rounded-full menubtn">
        <span className={`${ openMenu ? "hidden" : "inline-block"} inline-block w-1 h-1 rounded-full bg-black dark:bg-white`}></span>
        <span className="inline-block w-1 h-1 rounded-full bg-black dark:bg-white"></span>
        <span className={`${ openMenu ? "hidden" : "inline-block"} inline-block w-1 h-1 rounded-full bg-black dark:bg-white`}></span>
      </div>

      <div className={`${ openMenu ? "block" : "hidden"}`}>
        <div className="w-screen fixed -z-10 inset-0 bg-background-light dark:bg-background-dark">
          <div className="fixed z-40 inset-y-0 -left-2.5 md:-left-5 writing-mode-vertical-rl text-6xl md:text-title text-center tracking-wide">MENU</div>
          <div className="fixed z-50 top-7 right-24 md:right-36 flex justify-center items-center gap-x-6">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <div className="fixed z-40 top-0 right-custom md:right-10 bottom-0 grid place-content-center">
            <ul className="grid gap-y-10 tracking-wide">
              <li className="box text-3.5xl leading-none text-right" onClick={() => setOpenMenu(false)}><Link href="/">Home</Link></li>
              <li className="text-3.5xl leading-none text-right" onClick={() => setOpenMenu(false)}><Link href="/works">Works</Link></li>
              <li className="text-3.5xl leading-none text-right" onClick={() => setOpenMenu(false)}><Link href="/profile">Profile</Link></li>
              <li className="text-3.5xl leading-none text-right" onClick={() => setOpenMenu(false)}><Link href="/contact">Contact</Link></li>
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
      </div>
    </nav>
  )
};

