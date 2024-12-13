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

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  function successAlertMessage() {
    toast.success("Mensagem enviada com sucesso!", {
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
    <div className={styles.container}>
      <h4 className={styles.title}>
        Entre em contato e fale mais sobre seu projeto
      </h4>
      <div className={styles.formContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <a href="https://www.instagram.com/levidlima/">
              Instagram <InstagramLogo size={32} />
            </a>
          </div>
          <div className={styles.card}>
            <a href="https://github.com/DEVLevid">
              Github <GithubLogo size={32} />
            </a>
          </div>
          <div className={styles.card}>
            <a href="https://www.linkedin.com/in/levid-lima-326311260/">
              Linkedin <LinkedinLogo size={32} />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.nameContainer}>
            <label htmlFor="">nome</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Digite aqui o seu nome"
            />
          </div>
          <div className={styles.emailContainer}>
            <label htmlFor="">email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Digite aqui o seu email"
            />
          </div>
          <div className={styles.projectContainer}>
            <label htmlFor="">Seu Projeto</label>
            <textarea
              required
              name="message"
              placeholder="Descreva sua ideia ou sua proposta..."
              rows={4}
            ></textarea>
          </div>
          <button type="submit">
            Enviar <TelegramLogo size={22} />
          </button>
        </form>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
}
