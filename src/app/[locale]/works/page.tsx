import { getMessages } from "next-intl/server";
import { getWorksList } from "@/libs/microcms";
import WorksListContent from "@/components/WorksListContent";
//import { WORKSLIST_LIMIT } from "@/constants"

type Props = {
  params: Promise<{ locale: string }>;
};

//meta情報の設定
export async function generateMetadata({ params }: Props ) {
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

export default async function WorksListPage({ params }: Props) {
  const { locale } = await params;
  const { contents: works } = await getWorksList();

  return (
    <WorksListContent works={works} locale={locale} />
  );
}
