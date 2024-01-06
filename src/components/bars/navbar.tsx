import { useTranslation } from "react-i18next";

import MainLogo from "@/assets/images/logo/main-logo.svg";
import { NAVBAR_LINKS } from "@/constants";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="z-navbar box-border flex h-navbar w-full justify-center px-150">
      <div className="relative flex w-full max-w-maxW items-center justify-center">
        <img className="h-[35px] w-auto" src={MainLogo} alt={t("Porfolio logo")} />
        <div className="absolute right-0 flex w-fit gap-16">
          {NAVBAR_LINKS.map((link) => (
            <a className="font-primary text-18 leading-150 text-dark no-underline" href={link.path} key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
