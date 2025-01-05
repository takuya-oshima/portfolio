import PageTitleSide from "@/components/PageTitleSide";
import WorksList from "@/components/WorksList";
import { getWorksList } from "@/libs/microcms";
import { WORKSLIST_LIMIT } from "@/constants"

export default async function Page() {
  //const sliceData = data.contents.slice(0, 20); //表示件数を定義
  const data = await getWorksList({
    limit: WORKSLIST_LIMIT,
  });

  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <PageTitleSide pageTitleSide="WORKS" />
      <div className="relative">
        <WorksList works={data.contents} />
      </div>
    </section>
  );
}
