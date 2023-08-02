import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
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
  );
};
