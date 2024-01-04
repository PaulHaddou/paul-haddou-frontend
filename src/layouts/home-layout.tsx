import { ReactNode } from "react";

import { Navbar, ProjectsNav, ProjectsInfos } from "@/components/bars";

interface Props {
  children?: ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <div className="relative flex w-screen flex-col">
      <div className="fixed left-0 top-0 flex h-screen w-screen flex-col">
        <Navbar />
        <div className="flex w-full items-center justify-between">
          <ProjectsNav />
          <ProjectsNav />
        </div>
        <ProjectsInfos />
      </div>
      {children}
    </div>
  );
};
