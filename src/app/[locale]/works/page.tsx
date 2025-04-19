import PageTitleSide from "@/components/PageTitleSide";
import WorksList from "@/components/WorksList";
import { getWorksList } from "@/libs/microcms";
//import { WORKSLIST_LIMIT } from "@/constants"

export default async function WorksListPage({ params }: { params: { locale: string } }) {

  const { contents: works } = await getWorksList();

  return (
    <section className="ml-left-custom-sm md:ml-24 lg:ml-0">
      <div id="bg" className="fixed top-0 left-0 w-full h-full bg-opacity-60 bg-center bg-cover transition-all duration-500 -z-10" />
      <div className="background" id="bg"></div>
      <PageTitleSide pageTitleSide="WORKS" />
      <div className="relative">
        <WorksList works={works} locale={params.locale} />
      </div>
    </section>
  );
}


