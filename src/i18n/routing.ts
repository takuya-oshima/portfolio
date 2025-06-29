import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// ロケールリストを一元管理
export const locales = ["ja", "en"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "ja",
  localeDetection: false,
  localePrefix: "as-needed", //jaの場合はリダイレクトしない
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
