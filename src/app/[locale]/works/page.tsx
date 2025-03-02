import PageTitleSide from "@/components/PageTitleSide";
import WorksList from "@/components/WorksList";
import { getWorksList } from "@/libs/microcms";
//import { WORKSLIST_LIMIT } from "@/constants"

export default async function WorksListPage({ params }: { params: { locale: string } }) {

  const { contents: works } = await getWorksList();

  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <PageTitleSide pageTitleSide="WORKS" />
      <div className="relative">
        <WorksList works={works} locale={params.locale} />
      </div>
    </section>
  );
}


