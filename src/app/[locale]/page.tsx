import Image from "next/image";
import Prefetcher from "@/components/Prefetcher";
import { Link } from "@/i18n/routing";
import BackgroundStar from "@/components/BackgroundStar";
import BackgroundParticle from "@/components/BackgroundParticle";


export default function HomePage() {
  return (
    <div className="h-fit">
      <BackgroundStar />
      <BackgroundParticle />
      <div className="top-visual">
        <Image className="md:w-[45rem] mx-auto" src="/images/img_bg_topvisual.png" width={1920} height={1000} alt="白い花" priority />
      </div>
      <div className="mt-[18vh] md:mt-24 lg:mt-8 mb-[15vh] lg:mb-32 text-center tracking-wide top-text-shadow">
        <h1 className="mb-8 md:mb-14 text-5xl md:text-8xl lg:text-index-title font-normal whitespace-nowrap">Takuya Oshima</h1>
        <h2 className="text-lg md:text-xl lg:text-3.5xl font-normal">Web Designer / Frontend Developer</h2>
      </div>
      <ul className="mb-24 text-center tracking-wide top-text-shadow">
        <li className="mb-10 text-xl md:text-2xl"><Prefetcher href="/works/" /><Link className="text-link" href="/works">Works</Link></li>
        <li className="mb-10 text-xl md:text-2xl"><Prefetcher href="/profile/" /><Link className="text-link" href="/profile">Profile</Link></li>
        <li className="text-xl md:text-2xl"><Prefetcher href="/contact/" /><Link className="text-link" href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};
