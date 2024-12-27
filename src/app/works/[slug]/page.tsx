import Image from 'next/image';
import PageTitle from "../../components/PageTitle";


export default function WorksDetail() {
  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <PageTitle pageTitle="Takuya Oshima" />
      <div className="relative">
        <div className="mb-42 text-center">
          <h1 className="mb-8 text-4.55xl tracking-wide">Takuya Oshima</h1>
          <div className="mb-2 text-base leading-relaxed">URL：<a href="" target="_blank">https://www.takuya-oshima.com/</a></div>
          <div className="text-base leading-relaxed">Type：Portfolio</div>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34">
          <figure className="w-screen mx-[calc((100vw-100%)/-2)]">
            <Image src="/img_mv_sample.png" width={1920} height={1000} alt="メインビジュアル" />
          </figure>
        </div>
        <div className="mb-34">
          <h2 className="mb-8 text-[2.5rem] leading-relaxed tracking-wide">OVERVIEW</h2>
          <div>
            <p className="text-base leading-loose mb-8">
              TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
            </p>
            <div className="text-xl"><a href="" className="flex justify-start items-center">View Site<svg className="ml-4" width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M33.1716 8.46447L36.3536 11.6465C36.5488 11.8417 36.5488 12.1583 36.3536 12.3536L33.1716 15.5355C32.9763 15.7308 32.6597 15.7308 32.4645 15.5355C32.2692 15.3403 32.2692 15.0237 32.4645 14.8284L34.7929 12.5H12V11.5L34.7929 11.5L32.4645 9.17158C32.2692 8.97631 32.2692 8.65973 32.4645 8.46447C32.6597 8.26921 32.9763 8.26921 33.1716 8.46447Z" fill="black"/></svg></a></div>
          </div>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0 mb-34">
          <figure className="w-screen mx-[calc((100vw-100%)/-2)] mb-34">
            <Image src="/img_screenshot_sample.png" width={1240} height={1699} alt="スクリーンショット" />
          </figure>
          <figure className="w-screen mx-[calc((100vw-100%)/-2)] mb-34">
            <Image src="/img_screenshot_sample.png" width={1240} height={1699} alt="スクリーンショット" />
          </figure>
        </div>
        <div className="-ml-left-custom-sm md:-ml-24 lg:ml-0">
          <div className="w-screen mx-[calc((100vw-100%)/-2)] mb-16 bg-black text-white py-20 px-custom">
            <h2 className="mb-10 text-center text-5xl leading-relaxed tracking-wide">ROLE</h2>
            <div className="grid gap-y-6">
              <dl className="grid grid-cols-2 text-base leading-relaxed">
                <dt className="pr-6 text-[#999999] text-right">Planning</dt>
                <dd>Takuya Oshima</dd>
              </dl>
              <dl className="grid grid-cols-2 text-base leading-relaxed">
                <dt className="pr-6 text-[#999999] text-right">Desing</dt>
                <dd>Takuya Oshima</dd>
              </dl>
              <dl className="grid grid-cols-2 text-base leading-relaxed">
                <dt className="pr-6 text-[#999999] text-right">Frontend</dt>
                <dd>Takuya Oshima</dd>
              </dl>
              <dl className="grid grid-cols-2 text-base leading-relaxed">
                <dt className="pr-6 text-[#999999] text-right">Writing</dt>
                <dd>Takuya Oshima</dd>
              </dl>
              <dl className="grid grid-cols-2 text-base leading-relaxed">
                <dt className="pr-6 text-[#999999] text-right">Photography</dt>
                <dd>Takuya Oshima</dd>
              </dl>
            </div>
          </div>
        </div>
        <div>
          <div><a href=""><svg width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.82843 7.53568L0.646447 4.3537C0.451184 4.15844 0.451184 3.84185 0.646447 3.64659L3.82843 0.464612C4.02369 0.26935 4.34027 0.26935 4.53553 0.464612C4.7308 0.659874 4.7308 0.976457 4.53553 1.17172L2.20711 3.50015L33 3.50015L33 4.50015L2.20711 4.50015L4.53553 6.82857C4.7308 7.02384 4.7308 7.34042 4.53553 7.53568C4.34027 7.73094 4.02369 7.73094 3.82843 7.53568Z" fill="black"/></svg>Prev</a></div>
          <div><a href="">Works list</a></div>
          <div><a href="">Next<svg width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5H32V3.5H0V4.5Z" fill="black"/></svg></a></div>
        </div>
      </div>
    </section>
  );
}
