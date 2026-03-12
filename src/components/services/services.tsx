"use client";
import {
  CodeSimple,
  DeviceMobileCamera,
  PencilSimple,
  TestTube,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation("services");

  return (
    <div id="services" className={styles.container}>
      <h2 className={styles.title}>{t("title")}</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <PencilSimple size={26} />
          <h4 className={styles.service}>{t("uxuiTitle")}</h4>
          <p className={styles.description}>{t("uxuiText")}</p>
        </div>
        <div className={styles.card}>
          <DeviceMobileCamera size={26} />
          <h4 className={styles.service}>{t("webMobileTitle")}</h4>
          <p className={styles.description}>{t("webMobileText")}</p>
        </div>
        <div className={styles.card}>
          <TestTube size={26} />
          <h4 className={styles.service}>{t("testingTitle")}</h4>
          <p className={styles.description}>{t("testingText")}</p>
        </div>
        <div className={styles.card}>
          <CodeSimple size={26} />
          <h4 className={styles.service}>{t("devTitle")}</h4>
          <p className={styles.description}>{t("devText")}</p>
        </div>
      </div>
    </div>
  );
}
