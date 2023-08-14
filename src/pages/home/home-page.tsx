import styles from "./styles.module.scss";
import { HomeLayout } from "@/layouts/home-layout/home-layout";

export const HomePage = () => {
  return (
    <HomeLayout>
      <div className={styles.homePage}>
        <div className={styles.content}>
          <span className={`${styles.borderTop} ${styles.border}`} />
          <span className={`${styles.borderLeft} ${styles.border}`} />
          <span className={`${styles.borderRight} ${styles.border}`} />
          <span className={`${styles.borderBottom} ${styles.border}`} />
          <div className={styles.title}>
            <span className={styles.text}>Paul</span>
            <span className={`${styles.text} ${styles.textBold}`}>Haddou</span>
          </div>
          <div className={styles.subtitle}>Bientôt</div>
        </div>
      </div>
    </HomeLayout>
  );
};
