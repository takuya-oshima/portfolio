import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import PageTitleSide from "@/components/PageTitleSide";
import MailAddress from "@/components/MailAddress";
import IconFacebook from "@/components/IconFacebook";
import IconInstagram from "@/components/IconInstagram";
import IconGithub from "@/components/IconGithub";

//meta情報の設定
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
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
  const t = useTranslations("ContactPage");
  return(
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <PageTitleSide pageTitleSide="CONTACT" />
      <div className="reletive mt-[11vh]">
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 text-center">
          <p className="mb-10 text-base md:text-xl leading-loose locale">
            {t("contactText").split("\n").map((line, index) => (
              <span key={index} className="inline-block">
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="mb-10 text-[1.75rem] md:text-6xl 2xl:text-8xl leading-loose break-normal">
            <MailAddress />
          </div>
          <div className="mb-[4.5rem] text-3xl leading-loose">Get in touch</div>
          <ul className="flex justify-center items-center gap-x-4 md:gap-x-6">
            <li>
              <IconInstagram />
            </li>
            <li>
              <IconFacebook />
            </li>
            <li>
              <IconGithub />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

