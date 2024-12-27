import Link from "next/link";
import PageTitle from "../components/PageTitle";

export default function WorksList() {
  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <PageTitle pageTitle="WORKS" />
      <div>
        <ul className="counter-reset-list">
          <li className="first:border-t border-b border-black">
            <Link href="" className="flex justify-start items-center py-4 px-2 counter-increment-item text-base md:text-lg">
              <h2 className="ml-2 md:ml-8 text-base md:text-3.5xl leading-normal">Takuya Oshima<span className="ml-1">;</span></h2>
              <div className="ml-auto text-base md:text-lg">Portfolio</div>
            </Link>
          </li>
          <li className="first:border-t border-b border-black">
            <Link href="" className="flex justify-start items-center py-4 px-2 counter-increment-item text-base md:text-lg">
              <h2 className="ml-2 md:ml-8 text-base md:text-3.5xl leading-normal">Eri Hashida<span className="ml-1">;</span></h2>
              <div className="ml-auto text-base md:text-lg">Portfolio</div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
