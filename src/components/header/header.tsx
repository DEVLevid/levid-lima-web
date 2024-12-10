"use client"

import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function Header() {
    const [copy, setCopy] = useState(false);
    const handleCopyEmail = () => {
        const email = "levidlima70@gmail.com";
        navigator.clipboard.writeText(email)
        setCopy(true);
        setTimeout(() => setCopy(false), 2000);
      };
    
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.emailContainer}>
          <button onClick={handleCopyEmail} className={styles.icon}>
          <EnvelopeSimple size={20} />
          </button>
          {copy ? <p className={styles.gmailCopy}>Email copiado com sucesso!</p> : <p className={styles.gmail}>levidlima70@gmail.com</p>} 
        </div>
        <div className={styles.socialContainer}>
          <a href="https://www.linkedin.com/in/levid-lima-326311260/">Linkedin</a>
          <a href="https://github.com/DEVLevid">Github</a>
          <a href="https://www.instagram.com/levidlima">Instagram</a>
        </div>
      </div>
    </header>
  );
}
