"use client";

import { useTheme } from "next-themes";
import { useEffect,useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 避けられるフラッシュを防ぐため

  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-6 h-6 cursor-pointer">
      {theme === "dark" ?
        (
          <svg className="fill-primary-light dark:fill-primary-dark ico-link" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_30_150)"><path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="#fff"/><path d="M24 12L18 13.732L18 10.2679L24 12Z" fill="#fff"/><path d="M2.06545e-08 12L6 10.268L6 13.7321L2.06545e-08 12Z" fill="#fff"/><path d="M20.4853 3.51466L17.4674 8.98205L15.0179 6.53256L20.4853 3.51466Z" fill="#fff"/><path d="M3.51473 20.4852L6.53262 15.0178L8.98211 17.4673L3.51473 20.4852Z" fill="#fff"/><path d="M12 0L13.732 6H10.2679L12 0Z" fill="#fff"/><path d="M12.1763 24.0338L10.3385 18.0653L13.8021 18.0041L12.1763 24.0338Z" fill="#fff"/><path d="M3.51607 3.58702L8.98345 6.60492L6.53396 9.05441L3.51607 3.58702Z" fill="#fff"/><path d="M20.6352 20.4568L15.1153 17.536L17.5212 15.0436L20.6352 20.4568Z"/></g><defs><clipPath id="clip0_30_150"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
        ) : (
          <svg className="fill-primary-light dark:fill-primary-dark ico-link " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"><path fillRule="evenodd" clipRule="evenodd" d="M5.00001 20.0001C11.0751 20.0001 16 15.0752 16 9.00005C16 5.28252 14.1559 1.9957 11.3325 0.0045166C17.8062 0.180631 23 5.48377 23 12C23 18.6274 17.6274 24 11 24C7.19484 24 3.80335 22.2289 1.60488 19.4661C2.67418 19.8127 3.81522 20.0001 5.00001 20.0001Z"/><path d="M2.99999 4.99997L3.67353 7.07292H5.85316L4.0898 8.35407L4.76335 10.427L2.99999 9.14587L1.23663 10.427L1.91018 8.35407L0.14682 7.07292H2.32645L2.99999 4.99997Z"/></svg>
        )
      }
    </div>
  );

}
