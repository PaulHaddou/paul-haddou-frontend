import { ReactNode } from "react";

import styles from "./styles.module.scss";
import { Navbar, ProjectsNav, ProjectsInfos } from "@/components/bars";
interface Props {
  children?: ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.navs}>
        <Navbar />
        <div className={styles.asides}>
          <ProjectsNav />
          <ProjectsNav />
        </div>
        <ProjectsInfos />
      </div>
      {children}
    </div>
  );
};
