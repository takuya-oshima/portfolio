import Image from 'next/image';
import PageTitleSide from "@/components/PageTitleSide";
import PageTitleHead from "@/components/PageTitleHead";
import PageLead from "@/components/PageLead";
import BlockTitle from '@/components/BlockTitle';
import TextBase from '@/components/TextBase';
import LinkButton from '@/components/LinkButton';


export default function Page() {
  return (
    <section className="relative ml-left-custom-sm md:ml-24 lg:ml-0">
      <div className="relative">
        <div className="mb-42 text-center">
          <PageTitleHead pageTitleHead="Takuya Oshima" />
          <PageLead>URL：<a href="" target="_blank">https://www.takuya-oshima.com/</a></PageLead>
          <PageLead>Type：Portfolio</PageLead>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34 md:mb-[12.5rem]">
          <figure className="w-screen mx-[calc((100vw-100%)/-2)]">
            <Image src="/images/img_.jpg" width={1920} height={1000} alt="メインビジュアル" priority />
          </figure>
        </div>
        <div className="lg:w-10/12 2xl:w-full xl:grid xl:grid-cols-2 mx-auto mb-34 md:mb-[12.5rem]">
          <BlockTitle blockTitle="OVERVIEW" />
          <div className="xl:-ml-32 2xl:-ml-24">
            <TextBase>TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</TextBase>
            <LinkButton href="">View Site</LinkButton>
          </div>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34 md:mb-[12.5rem]">
          <figure className="w-screen mx-[calc((100vw-100%)/-2)] mb-34 md:mb-42">
            <Image className="xl:w-[1280px] mx-auto" src="/images/img_screenshot_sample.png" width={1240} height={1699} alt="スクリーンショット" />
          </figure>
          <figure className="w-screen mx-[calc((100vw-100%)/-2)] mb-34 md:mb-42">
            <Image className="xl:w-[1280px] mx-auto" src="/images/img_screenshot_sample.png" width={1240} height={1699} alt="スクリーンショット" />
          </figure>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34 md:mb-[12.5rem]">
          <div className="w-screen mx-[calc((100vw-100%)/-2)] bg-black text-white py-20 2xl:py-32 px-custom">
            <h2 className="mb-8 md:mb-14 2xl:mb-[4.5rem] text-center text-[2.5rem] md:text-5xl 2xl:text-7xl leading-relaxed tracking-wide">ROLE</h2>
            <div className="grid gap-y-4 md:gap-y-6">
              <dl className="grid grid-cols-2 text-base md:text-xl leading-relaxed">
                <dt className="pr-6 md:pr-10 text-[#999999] text-right">Planning</dt>
                <dd>Takuya Oshima</dd>
              </dl>
              <dl className="grid grid-cols-2 text-base md:text-xl leading-relaxed">
                <dt className="pr-6 md:pr-10 text-[#999999] text-right">Desing</dt>
                <dd>Takuya Oshima</dd>
              </dl>
              <dl className="grid grid-cols-2 text-base md:text-xl leading-relaxed">
                <dt className="pr-6 md:pr-10 text-[#999999] text-right">Frontend</dt>
                <dd>Takuya Oshima</dd>
              </dl>
              <dl className="grid grid-cols-2 text-base md:text-xl leading-relaxed">
                <dt className="pr-6 md:pr-10 text-[#999999] text-right">Writing</dt>
                <dd>Takuya Oshima</dd>
              </dl>
              <dl className="grid grid-cols-2 text-base md:text-xl leading-relaxed">
                <dt className="pr-6 md:pr-10 text-[#999999] text-right">Photography</dt>
                <dd>Takuya Oshima</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34 md:mb-[12.5rem]">
          <ul className="flex justify-center items-center gap-x-8 md:gap-x-16 lg:gap-x-32 text-base md:text-xl">
            <li>
              <a href="" className="flex justify-center items-center gap-x-4"><svg width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.82843 7.53568L0.646447 4.3537C0.451184 4.15844 0.451184 3.84185 0.646447 3.64659L3.82843 0.464612C4.02369 0.26935 4.34027 0.26935 4.53553 0.464612C4.7308 0.659874 4.7308 0.976457 4.53553 1.17172L2.20711 3.50015L33 3.50015L33 4.50015L2.20711 4.50015L4.53553 6.82857C4.7308 7.02384 4.7308 7.34042 4.53553 7.53568C4.34027 7.73094 4.02369 7.73094 3.82843 7.53568Z" fill="black"/></svg>Prev</a>
            </li>
            <li>
              <a href="">Works list</a>
            </li>
            <li>
              <a href="" className="flex justify-center items-center gap-x-4">Next<svg width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5H32V3.5H0V4.5Z" fill="black"/></svg></a>
            </li>
          </ul>
        </div>
      </div>
      <PageTitleSide pageTitleSide="Takuya Oshima" />
    </section>
  );
}
