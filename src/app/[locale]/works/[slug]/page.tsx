import { getWorksDetail } from "@/libs/microcms";
import WorksDetailContent from "@/components/WorksDetailContent";

type Props = {
  params : {
    locale: string;
    slug: string;
  };
};

//meta情報の設定
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await Promise.resolve(params);
  const data = await getWorksDetail(slug);

  const title = locale === "ja" ? data.title_ja : data.title_en;
  const description = locale === "ja" ? data.overview_ja : data.overview_en;
  const url = `/${locale}/works/${slug}`;
  const image = data.mainImage?.url || "/default-og-image.jpg";

  return {
    title: `${title}｜Works｜Takuya Oshima`,
    description,
    openGraph: {
      title: `${title}｜Works｜Takuya Oshima`,
      description,
      type: "website",
      siteName: `${title}｜Works｜Takuya Oshima`,
      locale,
      url,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    twitter: {
      title: `${title}｜Works｜Takuya Oshima`,
      description,
      card: "summary_large_image",
      images: [image],
    },
  };
}

export default async function WorksDetailPage( props: Props) {
  const { locale, slug } = await Promise.resolve(props.params);
  const data = await getWorksDetail(slug);

  return (
    <WorksDetailContent locale={locale} data={data} />
  );
}
