import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";
import PageTitleSide from "@/components/PageTitleSide";
import PageTitleHead from "@/components/PageTitleHead";
import PageLead from "@/components/PageLead";
import BlockTitle from "@/components/BlockTitle";
import TextBase from "@/components/TextBase";
import TextLarge from "@/components/TextLarge";
import MailAddress from "@/components/MailAddress";
import IconFacebook from "@/components/IconFacebook";
import IconInstagram from "@/components/IconInstagram";
import IconGithub from "@/components/IconGithub";

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
  const t = useTranslations("ProfilePage");
  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <PageTitleSide pageTitleSide="PROFILE" />
      <div className="relative">
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-42 text-center">
          <div className="mb-4">{t("name")}</div>
          <PageTitleHead pageTitleHead="Takuya Oshima" />
          <PageLead>Web Designer / Frontend Engineer</PageLead>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-10">
          <figure className="w-screen mx-[calc((100vw-100%)/-2)]">
            <Image className="md:w-[45rem] mx-auto" src="/images/img_mv_sample.png" width={1920} height={1000} alt="メインビジュアル" priority />
          </figure>
        </div>
        <div className="md:w-[45rem] mx-auto mb-34 md:mb-[12.5rem] locale">
          <TextBase>
            {t("profileText").split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </TextBase>
        </div>
        <div className="lg:w-10/12 2xl:w-full xl:grid xl:grid-cols-2 mx-auto mb-34 md:mb-[12.5rem]">
          <BlockTitle blockTitle="FIELD" />
          <div className="xl:-ml-32 2xl:-ml-24 locale">
            <TextBase>
            {t("serviceText").split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
            </TextBase>
          </div>
        </div>
        <div className="lg:w-10/12 2xl:w-full xl:grid xl:grid-cols-2 mx-auto mb-34 md:mb-[12.5rem]">
          <BlockTitle blockTitle="SKILL" />
          <div className="md:flex justify-start items-start gap-x-32 xl:gap-x-40 2xl:gap-x-48 xl:-ml-32 2xl:-ml-24">
            <dl className="mb-8">
              <dt>
                <TextLarge>Development</TextLarge>
              </dt>
              <dd>
                <p className="text-base leading-loose mb-8 md:mb-14 ml-1 locale">
                  HTML<br/>
                  CSS<br/>
                  SCSS<br/>
                  javaScript<br/>
                  TypeScript<br/>
                  Next.js<br/>
                  jQuery<br/>
                  WordPress<br/>
                  MicroCMS<br/>
                  Bootstrap<br/>
                  TailWind CSS<br/>
                  Git/GitHub<br/>
                  webpack<br/>
                  gulp<br/>
                  Vite
                </p>
              </dd>
            </dl>
            <dl className="mb-8">
              <dt>
                <TextLarge>Design</TextLarge>
              </dt>
              <dd>
                <p className="text-base leading-loose mb-8 md:mb-14 ml-1 locale">
                  Web Design<br/>
                  UI Design<br/>
                  Illustrator<br/>
                  Photoshop<br/>
                  Lightroom<br/>
                  Adobe XD<br/>
                  Figma
                </p>
              </dd>
            </dl>
            <dl className="mb-8">
              <dt>
                <TextLarge>Other</TextLarge>
              </dt>
              <dd>
                <p className="text-base leading-loose mb-8 md:mb-14 ml-1 locale">
                  Planning<br/>
                  Direction<br/>
                  Sales<br/>
                  Web Marketing<br/>
                  SEO<br/>
                  Search Ads
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34 md:mb-[12.5rem] black">
          <div className="w-screen mx-[calc((100vw-100%)/-2)] bg-black text-white py-20 2xl:py-32 px-custom">
            <h2 className="mb-8 md:mb-14 2xl:mb-[4.5rem] text-center text-[2.5rem] md:text-5xl 2xl:text-7xl leading-relaxed tracking-wide">CONTACT</h2>
            <div className="text-center">
              <p className="mb-10 text-base md:text-xl leading-loose locale">
                {t("contactText").split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                  </span>
                ))}
              </p>
              <div className="mb-10 text-3xl md:text-6xl 2xl:text-8xl leading-loose">
                <MailAddress />
              </div>
              <div className="mb-[4.5rem] text-3xl leading-loose">Get in touch</div>
              <ul className="flex justify-center items-center gap-x-4 md:gap-x-6">
                <li className="fill-white">
                  <IconFacebook className="fill-white " />
                </li>
                <li>
                  <IconInstagram className="fill-white" />
                </li>
                <li>
                  <IconGithub className="fill-white" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
