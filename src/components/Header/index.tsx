"use client";

import { useState } from 'react';
import MenuButton from "@/components/MenuButton";
import Menu from "@/components/Menu";

export default function Header(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full py-4 px-custom md:px-4 lg:px-10 flex justify-end">
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
};
