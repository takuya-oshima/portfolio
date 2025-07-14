import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// ロケールリストを一元管理
export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];  // "ja" | "en"

export const routing = defineRouting({
  locales,
  defaultLocale: "ja",
  localeDetection: false,
  localePrefix: "always", //jaの場合はリダイレクトしない
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
