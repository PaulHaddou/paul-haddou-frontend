import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";
import MainLogo from "@/assets/images/logo/main-logo.svg";
import { NAVBAR_LINKS } from "@/constants";

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <img className={styles.logo} src={MainLogo} alt={t("Porfolio logo")} />
        <div className={styles.links}>
          {NAVBAR_LINKS.map((link) => (
            <a className={styles.link} href={link.path} key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
