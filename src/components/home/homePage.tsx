"use client";
import { ArrowLineUpRight, MouseSimple } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import { useHandleScrollBtn } from "@/hooks/useHandleScroll";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <div id="home" className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <img src="/Levid.jpeg" alt="levid" />
        </div>
        <p className={styles.wellcome}>{t("welcome")}</p>
        <p className={styles.ocupation}>{t("occupation")}</p>
      </div>
      <h2 className={styles.title}>{t("title")}</h2>
      <button
        className={styles.contact}
        onClick={(e) => useHandleScrollBtn(e, "#contact")}
      >
        {t("cta")} <ArrowLineUpRight size={20} />
      </button>
      <div className={styles.homeScroll}>
        <div className={styles.scrollIcon}>
          <MouseSimple size={32} className={styles.mouseIcon} />
        </div>
      </div>
    </div>
  );
}
