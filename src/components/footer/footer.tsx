"use client";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr"; 
import styles from "./styles.module.scss";
import { useHandleScroll } from "@/hooks/useHandleScroll";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Lima</h2>
      </div>
      <div className={styles.redirectionContainer}>
        <ul>
          <li>
            <a href="#home" onClick={(e) => useHandleScroll(e, "#home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => useHandleScroll(e, "#services")}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => useHandleScroll(e, "#about")}>
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#feedbacks" onClick={(e) => useHandleScroll(e, "#feedbacks")}>
              Feedbacks
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => useHandleScroll(e, "#contact")}>
              Entre em Contato
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.socialContainer}>
        <a href="https://www.instagram.com/levidlima/">
          <InstagramLogo size={32} />
        </a>
        <a href="https://www.linkedin.com/in/levid-lima-326311260/">
          <LinkedinLogo size={32} />
        </a>
        <a href="https://github.com/DEVLevid">
          <GithubLogo size={32} />
        </a>
      </div>

      <p>© DEVLevid. All rigths reserved</p>
    </div>
  );
}
