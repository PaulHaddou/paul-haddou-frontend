import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";
import ArrowDownIcon from "@/assets/icons/arrow-down.png";
import ArrowUpIcon from "@/assets/icons/arrow-up.png";
import { PROJECTS } from "@/constants";
import { useProjectsNav } from "@/contexts/projects-navigation/projects-nav-context";

export const ProjectsNav = () => {
  const { t } = useTranslation();

  const { currentProjectIndex, updateCurrentProject } = useProjectsNav();

  const PROJECTS_LENGTH = PROJECTS.length - 1;

  const previousProjectIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : 0;
  const nextProjectIndex = currentProjectIndex < PROJECTS_LENGTH ? currentProjectIndex + 1 : PROJECTS_LENGTH;

  return (
    <div className={styles.projectsNav}>
      <div className={styles.content}>
        <img
          src={ArrowUpIcon}
          alt={t("Arrow up icon")}
          className={`${styles.arrow} ${currentProjectIndex === 0 && styles.arrowDisabled}`}
          onClick={() => updateCurrentProject({ projectIndex: previousProjectIndex })}
        />
        <div className={styles.projects}>
          <span className={styles.current}>{currentProjectIndex}</span>
          <span className={styles.divider} />
          <span className={styles.total}>{PROJECTS_LENGTH}</span>
        </div>
        <img
          src={ArrowDownIcon}
          alt={t("Arrow down icon")}
          className={`${styles.arrow} ${currentProjectIndex === PROJECTS_LENGTH && styles.arrowDisabled}`}
          onClick={() => updateCurrentProject({ projectIndex: nextProjectIndex })}
        />
      </div>
    </div>
  );
};
