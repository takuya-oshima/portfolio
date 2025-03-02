import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["ja", "en"],
  defaultLocale: "ja",
  localeDetection: false,
  localePrefix: "as-needed", //jaの場合はリダイレクトしない
});


export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
