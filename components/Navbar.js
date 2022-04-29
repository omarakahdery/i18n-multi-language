import React from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import LangOption from "../components/LangOption";

import classes from "./Navbar.module.css";
const Navbar = () => {
  const { t, lang } = useTranslation("common");
  return (
    <nav className={classes.nav}>
      <Link href="/">
        <div className={classes.logo}>OMAR.</div>
      </Link>
      <div className={classes.div}>
        <Link href="/">
          <a> {t("home")}</a>
        </Link>
      </div>
      <div className={classes.div}>
        <Link href="/about">
          <a> {t("about")}</a>
        </Link>
      </div>
      <div className={classes.div}>
        <Link href="/contact">
          <a> {t("Contact")}</a>
        </Link>
      </div>
      <div className={classes.div}>
        <Link href="/policy">
          <a> {t("Privacy-Policy")}</a>
        </Link>
      </div>
      <div className={classes.div}>
        <Link href="/text">
          <a> {t("Terms-of-Use")}</a>
        </Link>
      </div>

      <LangOption />
    </nav>
  );
};

export default Navbar;
