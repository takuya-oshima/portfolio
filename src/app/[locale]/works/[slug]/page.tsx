import { Link } from "@/i18n/routing";
import React from "react";
import Image from "next/image";
import PageTitleSide from "@/components/PageTitleSide";
import PageTitleHead from "@/components/PageTitleHead";
import PageLead from "@/components/PageLead";
import BlockTitle from "@/components/BlockTitle";
import LinkButton from "@/components/LinkButton";
import CreditItem from "@/components/CreditItem";
import { getWorksDetail } from "@/libs/microcms";
import { formatDate } from "@/libs/utils";

type Props = {
  params : {
    locale: string;
    slug: string;
  };
};

export default async function WorksDetailPage({ params }: Props) {
  const { locale, slug } = params;
  const data = await getWorksDetail(slug);

  return (
    <section className="relative ml-left-custom-sm md:ml-24 lg:ml-0">
      <PageTitleSide pageTitleSide={data.titleAbbreviation} />
      <div className="relative">
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-42 text-center">
          {locale === "ja" && (
            <div className="mb-2 md:mb-4 lg:mb-8 font-ja text-base lg:text-lg">{data.title_ja}</div>
          )}
          <PageTitleHead pageTitleHead={data.title_en} />
          <PageLead>URL： <a href={data.url} target="_blank" rel="noopener" className="text-link">{data.url}</a></PageLead>
          <PageLead>Type： {data.category.name}</PageLead>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34 md:mb-[12.5rem]">
          <figure className="w-screen mx-[calc((100vw-100%)/-2)]">
            <Image className="w-full" src={data.mainImage.url} width={data.mainImage.width} height={data.mainImage.height} alt={locale === "ja" ? data.title_ja : data.title_en + "TopImage"} priority />
          </figure>
        </div>
        <div className="lg:w-10/12 2xl:w-full xl:grid xl:grid-cols-2 mx-auto mb-34 md:mb-[12.5rem]">
          <BlockTitle blockTitle="OVERVIEW" />
          <div className="xl:-ml-32 2xl:-ml-24">
            {locale === "ja" ? (
                <p className="font-ja text-base leading-loose mb-8 md:mb-14">
                  {data.overview_ja}
                </p>
              ) : locale === "en" ? (
                <p className="text-base leading-loose mb-8 md:mb-14">
                  {data.overview_en}
                </p>
              ) : null}
            <LinkButton href={data.url}>View Site</LinkButton>
          </div>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34 md:mb-[12.5rem]">
          {data.pageImages?.map((pageImage, index) => (
            <figure key={index} className="w-screen mx-[calc((100vw-100%)/-2)] mb-34 md:mb-42">
              <Image className="xl:w-[1280px] mx-auto" src={pageImage.url} width={pageImage.width} height={pageImage.height} alt={locale === "ja" ? data.title_ja : data.title_en + `UnderImage ${index + 1}`} />
            </figure>
          ))}
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34 md:mb-[12.5rem] black">
          <div className="w-screen mx-[calc((100vw-100%)/-2)] bg-black text-white py-20 2xl:py-32 px-custom">
            <h2 className="mb-8 md:mb-14 2xl:mb-[4.5rem] text-center text-[2.5rem] md:text-5xl 2xl:text-7xl leading-relaxed tracking-wide">DETAILS</h2>
            <div className="grid gap-y-4 md:gap-y-6 mb-[5.5rem]">
              <h3 className="text-2xl md:text-3.5xl text-center">INFO</h3>
              <CreditItem creditTitle="URL" creditData={<a href={data.url} target="_blank" rel="noopener" className="text-link">{data.url}</a>} />
              <CreditItem creditTitle="Release Date" creditData={formatDate(data.releaseDate)} />
              <CreditItem creditTitle="Type" creditData={data.category.name} />
              <CreditItem creditTitle="Technologies & Tools" creditData={data.technologiesTools} />
            </div>
            <div className="grid gap-y-4 md:gap-y-6">
              <h3 className="text-2xl md:text-3.5xl text-center">ROLE</h3>
              {data.role.map((item, index)=> (
                <CreditItem key={index} creditTitle={item.fieldId} creditData={item[item.fieldId]} />
              ))}
            </div>
          </div>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34 md:mb-[12.5rem]">
          <ul className="flex justify-center items-center gap-x-8 md:gap-x-16 lg:gap-x-32 text-base md:text-xl">
            <li><Link href="/works/" className="text-[2.5rem] md:text-5xl 2xl:text-7xl">Works list</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
