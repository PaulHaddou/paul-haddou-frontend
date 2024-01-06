import cx from "classnames";
import { useTranslation } from "react-i18next";

import ArrowDownIcon from "@/assets/icons/arrow-down.png";
import ArrowUpIcon from "@/assets/icons/arrow-up.png";
import { PROJECTS } from "@/constants";
import { useProjectsNav } from "@/contexts/projects-navigation/projects-nav-context";

export const ProjectsNav = () => {
  const { t } = useTranslation();

  const { currentProjectIndex, updateCurrentProject } = useProjectsNav();

  const lastProjectIndex = PROJECTS.length - 1;

  const previousProjectIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : 0;
  const nextProjectIndex = currentProjectIndex < lastProjectIndex ? currentProjectIndex + 1 : lastProjectIndex;

  const arrowClass =
    "ease h-auto w-18 cursor-pointer opacity-100 transition-[opacity,transform] duration-main hover:opacity-60 hover:scale-90";

  return (
    <div className="box-border flex h-[calc(100vh-150px*2)] w-150 items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <img
          className={cx(currentProjectIndex === 0 && "pointer-events-none opacity-10", arrowClass)}
          src={ArrowUpIcon}
          alt={t("Arrow up icon")}
          onClick={() => updateCurrentProject({ projectIndex: previousProjectIndex })}
        />
        <div className="flex w-fit flex-col items-center gap-8">
          <span className="font-primary text-26 font-bold leading-150 text-dark">{currentProjectIndex}</span>
          <span className="h-px w-[40%] bg-dark" />
          <span className="font-primary text-26 font-normal leading-150 text-dark">{lastProjectIndex}</span>
        </div>
        <img
          className={cx(currentProjectIndex === lastProjectIndex && "pointer-events-none opacity-10", arrowClass)}
          src={ArrowDownIcon}
          alt={t("Arrow down icon")}
          onClick={() => updateCurrentProject({ projectIndex: nextProjectIndex })}
        />
      </div>
    </div>
  );
};
