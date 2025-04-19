import Image from "next/image";
import { Works } from "@/libs/microcms";

type Props = {
  works: Works[];
  locale: string;
};

export default function WorksListThumbnail({works, locale}: Props) {

  return (
    <div>
      {works.map((works) => (
        <div key={works.id} className="works-list-item -mt-[1px] border-t border-b border-[#aaa] dark:border-[#444] ">
          <Image className="fixed top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-500 -z-10" src={works.thumbnail.url} width={works.thumbnail.width} height={works.thumbnail.height} alt={locale === "ja" ? works.title_ja : works.title_en} priority />
        </div>
      ))}
    </div>
  );
}

