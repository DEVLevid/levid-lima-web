"use client";
import {
  Briefcase,
  GraduationCap,
  Medal,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <div id="about" className={styles.container}>
      <h2 className={styles.title}>{t("title")}</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.profilePicture}>
          <img src="/about.jpeg" alt="about" />
        </div>
        <div className={styles.info}>
          <div className={styles.experience}>
            <div className={styles.card}>
              <Medal size={26} /> <h3>{t("experienceTitle")}</h3>
              <p>{t("experienceText")}</p>
            </div>
            <div className={styles.card}>
              <Briefcase size={26} /> <h3>{t("projectsTitle")}</h3>
              <p>{t("projectsText")}</p>
            </div>
            <div className={styles.card}>
              <GraduationCap size={26} />
              <h3>{t("graduationTitle")}</h3>
              <p>{t("graduationText")}</p>
            </div>
          </div>
          <p className={styles.description}>{t("description")}</p>
          <Marquee
            direction="left"
            speed={50}
            autoFill={true}
            loop={0}
            className={styles.carousel}
            style={{ transformOrigin: "center" }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
              alt="ReactJs"
              className="size-8 mr-6"
            />
            <img
              src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
              alt="Node"
              className="size-8 mr-6"
            />
            <img
              src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
              alt="Typescript"
              className="size-8 mr-6"
            />
            <img
              src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
              alt="Tailwind css"
              className="size-8 mr-6"
            />
            <img
              src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
              alt="NextJs"
              className="size-8 mr-6"
            />
            <img
              src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
              alt="HTML5"
              className="size-8 mr-6"
            />
            <img
              src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
              alt="css3"
              className="size-8 mr-6"
            />
            <img
              src="https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000"
              alt="sass | scss"
              className="size-8"
            />
            <img
              src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
              alt="Javascript"
              className="size-8 mr-8"
            />
            <img
              src="https://img.icons8.com/?size=100&id=bp24DwGXJDyT&format=png&color=000000"
              alt="Jest"
              className="size-8"
            />
            <img
              src="https://img.icons8.com/?size=100&id=40253&format=png&color=000000"
              alt="Jquery"
              className="size-8"
            />
            <img
              src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
              alt="Git"
              className="size-8 mr-6"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
}
