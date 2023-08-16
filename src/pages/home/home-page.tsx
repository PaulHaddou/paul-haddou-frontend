import styles from "./styles.module.scss";
import { PROJECTS } from "@/constants";
import { useProjectsNav } from "@/contexts/projects-navigation/projects-nav-context";
import { HomeLayout } from "@/layouts/home-layout/home-layout";

export const HomePage = () => {
  const { currentProjectIndex } = useProjectsNav();
  return (
    <HomeLayout>
      <div className={styles.homePage}>
        <div className={styles.content}>
          <span className={`${styles.borderRight} ${styles.border}`} />
          <div className={styles.title}>
            <span className={styles.text}>{PROJECTS[currentProjectIndex].name}</span>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
