"use client";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Header() {
  const { t, i18n } = useTranslation("header");
  const [copy, setCopy] = useState(false);

  const handleCopyEmail = () => {
    const email = t("email");
    navigator.clipboard.writeText(email);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  const cvHref =
  i18n.language && i18n.language.startsWith("pt")
    ? "/levid lima souza - cv.pdf"     
    : "/Levid Lima ECV.pdf";            

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <div className={styles.emailContainer}>
            {copy ? (
              <p className={styles.gmailCopy}>{t("emailCopied")}</p>
            ) : (
              <p className={styles.gmail}>{t("email")}</p>
            )}
            <button onClick={handleCopyEmail} className={styles.copyBtn}>
              {t("copyButton")}
            </button>
          </div>
          <div className={styles.cvContainer}>
            <a href={cvHref} download>
              <button className={styles.cvBtn}>
                {t("downloadCv")} <DownloadSimple size={20} />
              </button>
            </a>
          </div>
        </div>
        <div className={styles.socialContainer}>
          <a href="https://www.linkedin.com/in/levid-lima-326311260/">
            {t("linkedin")}
          </a>
          <a href="https://github.com/DEVLevid">{t("github")}</a>
          <a href="https://www.instagram.com/levidlima">
            {t("instagram")}
          </a>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

