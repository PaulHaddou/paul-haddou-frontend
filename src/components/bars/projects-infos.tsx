import { PROJECTS } from "@/constants";
import { useProjectsNav } from "@/contexts/projects-navigation/projects-nav-context";

export const ProjectsInfos = () => {
  const { currentProjectIndex } = useProjectsNav();

  const projectData = PROJECTS[currentProjectIndex];

  const subtitleClass = "font-secondary text-22 font-normal text-dark";

  return (
    <div className="box-border flex h-150 w-full justify-center px-150">
      <div className="relative flex w-full max-w-maxW items-center justify-between">
        {projectData.infos?.job && <span className={subtitleClass}>{projectData.infos?.job}</span>}

        <span className="absolute left-1/2 -translate-x-1/2 font-primary text-26 font-bold text-dark">
          {projectData.name}
        </span>

        {projectData.infos?.year && <span className={subtitleClass}>{projectData.infos?.year}</span>}
      </div>
    </div>
  );
};
