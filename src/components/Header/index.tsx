"use client";

import dynamic from "next/dynamic";
import { useState } from 'react';
import MenuButton from "@/components/MenuButton";
const Menu = dynamic(() => import('@/components/Menu'), { ssr: false });

export default function Header(){
  // メニューの開閉状態を管理するstate
  const [isOpen, setIsOpen] = useState(false);
  // アニメーションの状態を管理するstate
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <header className="relative w-full py-4 px-custom md:px-4 lg:px-10 flex justify-end">
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} isAnimating={isAnimating} setIsAnimating={setIsAnimating} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} setIsAnimating={setIsAnimating} />
    </header>
  )
};
