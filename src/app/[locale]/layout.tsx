//外部libraryのimport
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { messagesMap } from "@/i18n/request";

//componentのimport
import { FirstVisitProvider } from "@/components/FirstVisitProvider";
import ThemeWrapper from "@/components/ThemeWrapper";
import LenisWrapper from "@/components/LenisWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//font-familyのimport
import { Noto_Sans_JP, Roboto } from "next/font/google";

//GlobalCSSのimport
import "@/styles/globals.css";

//VercelのPage Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/next"

//font family noto sans JPの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});
//font family robotoの設定
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

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
  const layoutClassNames = `${roboto.variable} ${notoSansJP.variable}`;

  return (
    <html lang={locale} className={layoutClassNames}>
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" sizes="16x16" />
        <link rel="icon" href="/images/favicon-32×32" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/vus0aaz.css" />
      </head>
      <body>
        <FirstVisitProvider>
          <ThemeWrapper> {/* クライアントコンポーネントでラップ */}
            <LenisWrapper>
              <NextIntlClientProvider messages={messages}>
                <div className="flex flex-col min-h-screen relative break-words">
                  <Header />
                  <div className="relative container mx-auto mt-34 md:mt-42 px-custom md:px-4 lg:px-0">{children}</div>
                  <Footer />
                </div>
              </NextIntlClientProvider>
            </LenisWrapper>
          </ThemeWrapper>
        </FirstVisitProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

