"use client";

import { createContext, useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    if (visited) {
      console.log("2回目以降の訪問");
      setIsFirstVisit(false);
    } else {
      console.log("初回訪問");
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
