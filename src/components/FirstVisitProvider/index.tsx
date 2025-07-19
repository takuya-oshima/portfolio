"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type FirstVisitContextType = {
  isTopPage: boolean;
  isFirstVisit: boolean | null;
};

const FirstVisitContext = createContext<FirstVisitContextType>({
  isTopPage: false,
  isFirstVisit: null,
});

export const useFirstVisit = () => useContext(FirstVisitContext);

export const FirstVisitProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isTopPage = /^\/(ja|en)?\/?$/.test(pathname);
  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);
  const hasInitialized = useRef(false); // ← 初回実行フラグ

  useEffect(() => {
    if (hasInitialized.current) return; // ← 2回目以降はスキップ
    hasInitialized.current = true;

    console.log("FirstVisit useEffect RUNNING", pathname);
    const visited = sessionStorage.getItem("visited");
    if (visited) {
      console.log("2回目以降の訪問", visited);
      setIsFirstVisit(false);
    } else {
      console.log("初回訪問", visited);
      sessionStorage.setItem("visited", "true");
      setIsFirstVisit(true);
    }
  }, []);

  return (
    <FirstVisitContext.Provider value={{ isTopPage, isFirstVisit }}>
      {children}
    </FirstVisitContext.Provider>
  );
};
