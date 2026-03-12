"use client";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("contact");
  const form = useRef<HTMLFormElement | null>(null);

  function successAlertMessage() {
    toast.success(t("successToast"), {
      theme: "dark",
    });
  }
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        "service_lne4vid",
        "template_osu7n0c",
        form.current,
        "LGR-PTheaEtY-g2KA"
      );
      successAlertMessage();
      form.current.reset();
    }
  };

  return (
    <div id="contact" className={styles.container}>
      <h4 className={styles.title}>{t("title")}</h4>
      <div className={styles.formContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <a href="https://www.instagram.com/levidlima/">
              {t("instagram")} <InstagramLogo size={32} />
            </a>
          </div>
          <div className={styles.card}>
            <a href="https://github.com/DEVLevid">
              {t("github")} <GithubLogo size={32} />
            </a>
          </div>
          <div className={styles.card}>
            <a href="https://www.linkedin.com/in/levid-lima-326311260/">
              {t("linkedin")} <LinkedinLogo size={32} />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.formTitle}>{t("formTitle")}</div>
          <div className={styles.nameContainer}>
            <label htmlFor="name">{t("nameLabel")}</label>
            <input
              required
              type="text"
              name="name"
              placeholder={t("namePlaceholder")}
            />
          </div>
          <div className={styles.emailContainer}>
            <label htmlFor="email">{t("emailLabel")}</label>
            <input
              required
              type="email"
              name="email"
              placeholder={t("emailPlaceholder")}
            />
          </div>
          <div className={styles.projectContainer}>
            <label htmlFor="message">{t("projectLabel")}</label>
            <textarea
              required
              name="message"
              placeholder={t("projectPlaceholder")}
              rows={4}
            ></textarea>
          </div>
          <button type="submit">
            {t("submit")} <TelegramLogo size={22} />
          </button>
        </form>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
}
