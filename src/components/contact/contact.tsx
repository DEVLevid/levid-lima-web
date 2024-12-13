import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

export default function Contact() {
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
        <form action="">
          <div className={styles.nameContainer}>
            <label htmlFor="">nome</label>
            <input type="text" placeholder="Digite aqui o seu nome" />
          </div>
          <div className={styles.emailContainer}>
            <label htmlFor="">email</label>
            <input type="text" placeholder="Digite aqui o seu email" />
          </div>
          <div className={styles.projectContainer}>
            <label htmlFor="">Seu Projeto</label>
            <textarea placeholder="Descreva sua ideia ou sua proposta..."></textarea>
          </div>
          <button type="submit">
            Enviar <TelegramLogo size={22} />
          </button>
        </form>
      </div>
    </div>
  );
}
