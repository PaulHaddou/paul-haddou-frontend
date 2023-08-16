import { useMemo } from "react";

import styles from "./styles.module.scss";
import { PROJECTS } from "@/constants";
import { useProjectsNav } from "@/contexts/projects-navigation/projects-nav-context";

export const ProjectsInfos = () => {
  const { currentProjectIndex } = useProjectsNav();

  const projectData = useMemo(() => {
    return PROJECTS[currentProjectIndex];
  }, [currentProjectIndex]);

  return (
    <div className={styles.projectsInfos}>
      <div className={styles.content}>
        {projectData.infos?.job && <span className={styles.subtitle}>{projectData.infos?.job}</span>}

        <span className={styles.title}>{projectData.name}</span>

        {projectData.infos?.job && <span className={styles.subtitle}>{projectData.infos?.year}</span>}
      </div>
    </div>
  );
};
