import { getMessages } from "next-intl/server";
import PageTitleSide from "@/components/PageTitleSide";
import WorksList from "@/components/WorksList";
import { getWorksList } from "@/libs/microcms";
//import { WORKSLIST_LIMIT } from "@/constants"

//meta情報の設定
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const messages = (await getMessages()) as {
    WorksPage: {
      title: string;
      description: string;
    }
  }
  const title = messages.WorksPage.title;
  const description = messages.WorksPage.description;

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
      url: `https://takuya-oshima.com/${locale}/works`,
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
      canonical: `https://takuya-oshima.com/${locale}/works`,
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: "/images/ogp-default.jpg",
    },
  };
};

export default async function WorksListPage(props: { params: { locale: string } }) {

  const { locale } = await Promise.resolve(props.params); // ★ awaitを追加
  const { contents: works } = await getWorksList();

  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <div id="bg" className="fixed top-0 left-0 w-full h-full bg-opacity-60 bg-center bg-cover transition-all duration-500 -z-10" />
      <div className="background" id="bg"></div>
      <PageTitleSide pageTitleSide="WORKS" />
      <div className="relative">
        <WorksList works={works} locale={locale} />
      </div>
    </section>
  );
}
