//外部libraryのimport
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { messagesMap } from "@/i18n/request";
import { GoogleTagManager } from '@next/third-parties/google'

//componentのimport
import { FirstVisitProvider } from "@/components/FirstVisitProvider";
import AdobeFontLoader from "@/components/AdobeFontLoader";
import ThemeWrapper from "@/components/ThemeWrapper";
import LenisWrapper from "@/components/LenisWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//font-familyのimport
import { Noto_Sans_JP, Roboto } from "next/font/google";
import localFont from 'next/font/local'; // localFontをインポート

//GlobalCSSのimport
import "@/styles/globals.css";

//SpeedInsights
import { SpeedInsights } from '@vercel/speed-insights/next';


//font family noto sans JPの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});
//font family robotoの設定
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})
//font family angelFontの設定
const angel = localFont({
  src: "../../fonts/angel.woff",
  variable: "--font-angel",
  display: "swap",
});

//meta情報の設定
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = messagesMap[locale as keyof typeof messagesMap] ?? messagesMap.ja;

  const title = messages.Meta.title;
  const description = messages.Meta.description;

  return {
    metadataBase: new URL("https://takuya-oshima.com/"),
    title,
    description,
    other: {
      "google-site-verification": "sdEq7CBUnPc2Gs_23NGC68YCq7-Qi-25g3RP_PU1yjc",
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: title,
      locale,
      url: `https://takuya-oshima.com/${locale}`,
      images: [
        {
          url: "/images/ogp-default.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: `https://takuya-oshima.com/${locale}`,
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: "/images/ogp-default.jpg",
    },
  };
};

//共通レイアウトの出力
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  // 静的にインポートした辞書を直接利用（同期的）
  const messages = messagesMap[locale as keyof typeof messagesMap] ?? messagesMap.ja;

  //クラス名を定義
  const layoutClassNames = `${roboto.variable} ${notoSansJP.variable} ${angel.variable}`;

  return (
    <html lang={locale} className={layoutClassNames}>
      <head>
        <AdobeFontLoader />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" sizes="16x16" />
        <link rel="icon" href="/images/favicon-32_32" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      </head>
      <body>
        <FirstVisitProvider>
          <ThemeWrapper> {/* クライアントコンポーネントでラップ */}
            <LenisWrapper>
              <NextIntlClientProvider messages={messages}>
                <div className="flex flex-col min-h-screen relative break-words">
                  <Header />
                  <div className="relative container mx-auto mt-34 px-custom md:px-4 lg:px-0">{children}</div>
                  <Footer />
                </div>
              </NextIntlClientProvider>
            </LenisWrapper>
          </ThemeWrapper>
        </FirstVisitProvider>
        <GoogleTagManager gtmId="GTM-WGVV3GJ" />
        <SpeedInsights />
      </body>
    </html>
  );
}

