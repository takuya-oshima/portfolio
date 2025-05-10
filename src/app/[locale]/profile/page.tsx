import { getMessages } from "next-intl/server";
import ProfileContent from "@/components/ProfileContent"

type Props = {
  params: Promise<{ locale: string }>;
};

//meta情報の設定
export async function generateMetadata({ params }: Props ) {
  const { locale } = await params;

  const messages = (await getMessages()) as {
    ProfilePage: {
      title: string;
      description: string;
    }
  }
  const title = messages.ProfilePage.title;
  const description = messages.ProfilePage.description;

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
      url: `https://takuya-oshima.com/${locale}/profile`,
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
      canonical: `https://takuya-oshima.com/${locale}/profile`,
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: "/images/ogp-default.jpg",
    },
  };
};


export default function ProfilePage() {
  return (
    <ProfileContent />
  );
}
