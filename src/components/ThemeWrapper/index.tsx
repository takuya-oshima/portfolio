"use client"

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // クライアントサイドでのみレンダリングする
    setMounted(true);
  }, []);

  // SSR時に`ThemeProvider`が動作する前に、初期状態を設定
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
