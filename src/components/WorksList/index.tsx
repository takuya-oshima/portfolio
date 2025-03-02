import { Link } from "@/i18n/routing";
import { Works } from "@/libs/microcms";

type Props = {
  works: Works[];
  locale: string;
};

export default function WorksList({works, locale}: Props) {

  if(works.length === 0){
    return <div>データがありません。</div>;
  }
  return (
    <ul className="lg:w-10/12 2xl:w-full mx-auto mb-34 md:mb-[12.5rem] counter-reset-list">
      {works.map((works) => (
        <li key={works.id} className="first:border-t border-b border-black">
          <Link href={`/works/${works.id}`} className="flex justify-start items-center py-4 px-2 counter-increment-item text-base md:text-lg">
            {locale === "ja" ? (
              <h2 className="ml-2 md:ml-8 py-4 font-ja text-base md:text-2xl leading-normal">
                {works.title_ja}
                <span className="ml-2 md:ml-4">;</span>
              </h2>
            ) : locale === "en" ? (
              <h2 className="ml-2 md:ml-8 text-base md:text-3.5xl leading-normal">
                {works.title_en}
                <span className="ml-2 md:ml-4">;</span>
              </h2>
            ) : null}
            <div className="ml-auto text-base md:text-lg">{works.category.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

