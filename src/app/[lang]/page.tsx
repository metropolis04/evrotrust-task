import ProjectLink from "../utils/components/ProjectLink";
import { getDictionary } from "./dictonaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'bg' }>
}) {

  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <ProjectLink section="/profile" classes="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        {dict.main_navigation.buttons.profile}
      </ProjectLink>
    </div>
  );
}
