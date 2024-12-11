"use client";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function Header() {
  const [copy, setCopy] = useState(false);
  const handleCopyEmail = () => {
    const email = "levidlima70@gmail.com";
    navigator.clipboard.writeText(email);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <div className={styles.emailContainer}>
            {copy ? (
              <p className={styles.gmailCopy}>Email copiado!</p>
            ) : (
              <p className={styles.gmail}>levidlima70@gmail.com</p>
            )}
            <button onClick={handleCopyEmail} className={styles.copyBtn}>
              copy
            </button>
          </div>
          <div className={styles.cvContainer}>
            <a href="/cv.pdf" download>
              <button className={styles.cvBtn}> cv <DownloadSimple size={20} /></button>
            </a>
          </div>
        </div>
        <div className={styles.socialContainer}>
          <a href="https://www.linkedin.com/in/levid-lima-326311260/">
            Linkedin
          </a>
          <a href="https://github.com/DEVLevid">Github</a>
          <a href="https://www.instagram.com/levidlima">Instagram</a>
        </div>
      </div>
    </header>
  );
}
