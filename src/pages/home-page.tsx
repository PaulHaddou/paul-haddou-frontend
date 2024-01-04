import { PROJECTS } from "@/constants";
import { useProjectsNav } from "@/contexts/projects-navigation/projects-nav-context";
import { HomeLayout } from "@/layouts/home-layout/home-layout";

export const HomePage = () => {
  const { currentProjectIndex } = useProjectsNav();
  return (
    <HomeLayout>
      <div className="box-border flex h-screen w-screen flex-col overflow-hidden bg-primary-beige p-40 md:p-[150px]">
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <span className="absolute right-0 top-0 h-full w-2 bg-homeBorderSides" />
          <div className="mb-16 flex flex-col items-center justify-center">
            <span className="w-fit font-primary text-[48px] font-normal text-dark md:text-[58px]">
              {PROJECTS[currentProjectIndex].name}
            </span>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
