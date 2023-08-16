import { ReactNode } from "react";

import styles from "./styles.module.scss";
import { Navbar, ProjectsNav } from "@/components/navigation";
interface Props {
  children?: ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.navs}>
        <Navbar />
        <ProjectsNav />
      </div>
      {children}
    </div>
  );
};
