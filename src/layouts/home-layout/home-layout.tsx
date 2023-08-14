import { ReactNode } from "react";

import styles from "./styles.module.scss";
import { Navbar } from "@/components/navigation/navbar/navbar";

interface Props {
  children?: ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <div className={styles.homeLayout}>
      <Navbar />
      {children}
    </div>
  );
};
