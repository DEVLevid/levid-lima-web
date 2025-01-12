"use client";
import { ArrowLineUpRight, MouseSimple } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import { useHandleScrollBtn } from "@/hooks/useHandleScroll";

export default function HomePage() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <img src="/Levid.jpeg" alt="levid" />
        </div>
        <p className={styles.wellcome}>olá, meu nome é Levid 👋</p>
        <p className={styles.ocupation}>software engineer</p>
      </div>
      <h2 className={styles.title}>
        Contruindo experiências e aplicações de alta performance.
      </h2>
      <button
        className={styles.contact}
        onClick={(e) => useHandleScrollBtn(e, "#contact")}
      >
        Me fale mais sobre o seu projeto! <ArrowLineUpRight size={20} />
      </button>
      <div className={styles.homeScroll}>
        <div className={styles.scrollIcon}>
          <MouseSimple size={32} className={styles.mouseIcon} />
        </div>
      </div>
    </div>
  );
}
