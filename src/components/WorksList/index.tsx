"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import type { Works } from "@/libs/microcms";
import Prefetcher from "@/components/Prefetcher";

type Props = {
  works: Works[];
  locale: string;
  setBgImage: (url: string) => void;
};

export default function WorksList({ works, locale, setBgImage }: Props) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleMouseEnter = (thumbnail?: string, index?: number) => {
    setBgImage(thumbnail ?? "/images/img_bg_default_thumbnail.webp");
    setHoverIndex(index ?? null);
  };

  const handleMouseLeave = () => {
    setBgImage("/images/img_bg_default_thumbnail.webp");
    setHoverIndex(null);
  };

  if (works.length === 0) {
    return <div>データがありません。</div>;
  }
  return (
    <ul className="lg:w-10/12 2xl:w-full mx-auto mb-34 md:mb-[12.5rem] counter-reset-list">
      {works.map((work, index) => (
        <li key={work.id} className={`-mt-[1px] border-t border-b border-[#aaa] dark:border-[#444] ${hoverIndex !== null && hoverIndex !== index ? "inactive" : ""
          }`} onMouseEnter={() => handleMouseEnter(`${work.thumbnail?.url}?fm=webp`, index)} onMouseLeave={handleMouseLeave}>

          <Prefetcher href={`/works/${work.id}`} />
          <Link href={`/works/${work.id}`} className="flex justify-start items-center py-4 px-2 counter-increment-item text-base md:text-lg">
            {locale === "ja" ? (
              <h2 className="ml-2 md:ml-8 py-4 font-ja text-base md:text-2xl leading-normal">
                {work.title_ja}
                <span className="ml-2 md:ml-4">;</span>
              </h2>
            ) : (
              <h2 className="ml-2 md:ml-8 text-base md:text-3.5xl leading-normal">
                {work.title_en}
                <span className="ml-2 md:ml-4">;</span>
              </h2>
            )}
            <div className="ml-auto text-base md:text-lg">{work.category.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

