import { getRequestConfig } from "next-intl/server";
import { routing, locales } from "./routing";

// 各ロケールメッセージを静的import
import ja from "../../messages/ja.json";
import en from "../../messages/en.json";

export const messagesMap = {
  ja,
  en,
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const localeResult = await requestLocale;

  // 型アサーションなしで安全に絞り込む
  const locale: keyof typeof messagesMap =
    localeResult && locales.includes(localeResult as (typeof locales)[number])
      ? (localeResult as keyof typeof messagesMap)
      : routing.defaultLocale;

  return {
    locale,
    messages: messagesMap[locale],
  };
});
