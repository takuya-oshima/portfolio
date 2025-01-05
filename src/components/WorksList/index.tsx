import Link from "next/link";
import { Works } from "@/libs/microcms";

type Props = {
  works: Works[];
};

export default function WorksList({works}: Props) {
  if(works.length === 0){
    return <div>データがありません。</div>;
  }
  return (
    <ul className="lg:w-10/12 2xl:w-full mx-auto mb-34 md:mb-[12.5rem] counter-reset-list">
      {works.map((works) => (
        <li key={works.id} className="first:border-t border-b border-black">
          <Link href="" className="flex justify-start items-center py-4 px-2 counter-increment-item text-base md:text-lg">
            <h2 className="ml-2 md:ml-8 text-base md:text-3.5xl leading-normal">{works.title}<span className="ml-4">;</span></h2>
            <div className="ml-auto text-base md:text-lg">{works.category.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
