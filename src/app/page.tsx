import Link from "next/link";

export default function Home() {
  return (
    <div className="h-fit">
      <div className="mt-40 md:mt-24 lg:mt-8 mb-32 lg:mb-36 text-center tracking-wide">
        <h1 className="mb-8 md:mb-14 text-5xl md:text-8xl lg:text-index-title font-normal whitespace-nowrap">Takuya Oshima</h1>
        <h2 className="text-lg md:text-xl lg:text-3.5xl font-normal">Web Designer / Frontend Developer</h2>
      </div>
      <ul className="mb-24 text-center tracking-wide">
        <li className="mb-10 text-xl md:text-2xl"><Link href="/works">Works</Link></li>
        <li className="mb-10 text-xl md:text-2xl"><Link href="/profile">Profile</Link></li>
        <li className="text-xl md:text-2xl"><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};
