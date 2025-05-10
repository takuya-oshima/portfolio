import { getMessages } from "next-intl/server";
import ContactContent from "@/components/ContactContent";


type Props = {
  params: Promise<{ locale: string }>
};

//meta情報の設定
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  const messages = (await getMessages()) as {
    ContactPage: {
      title: string;
      description: string;
    }
  }
  const title = messages.ContactPage.title;
  const description = messages.ContactPage.description;

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
      url: `https://takuya-oshima.com/${locale}/contact`,
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
      canonical: `https://takuya-oshima.com/${locale}/contact`,
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: "/images/ogp-default.jpg",
    },
  };
};

export default function ContactPage() {
  return(
    <ContactContent />
  );
}

