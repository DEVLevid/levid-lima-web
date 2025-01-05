import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Lima</h2>
      </div>
      <div className={styles.redirectionContainer}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Sobre mim</a>
          </li>
          <li>
            <a href="">Feedbacks</a>
          </li>
          <li>
            <a href="">Entre em Contato</a>
          </li>
        </ul>
      </div>
      <div className={styles.socialContainer}>
        <a href=""><InstagramLogo size={32} /></a>
        <a href=""><LinkedinLogo size={32} /></a>
        <a href=""><GithubLogo size={32} /></a>
      </div>

      <p>© DEVLevid. All rigths reserved</p>
    </div>
  );
}
