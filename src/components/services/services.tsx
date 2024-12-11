import {
  CodeSimple,
  Desktop,
  DeviceMobileCamera,
  PencilSimple,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

export default function Services() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Serviços que trazem resultados impactantes
      </h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <PencilSimple size={26} />
          <h4 className={styles.service}>UX & Ui</h4>
          <p className={styles.description}>
            Desenvolvimento de interfaces intuitivas, eficientes e agradáveis de usar.
          </p>
        </div>
        <div className={styles.card}>
          <DeviceMobileCamera size={26} />
          <h4 className={styles.service}>Web & Mobile App</h4>
          <p className={styles.description}>
            Transformando ideias em aplicações incríveis para dispositivos móveis e web.
          </p>
        </div>
        <div className={styles.card}>
          <Desktop size={26} /> 
          <h4 className={styles.service}>Design e criação</h4>
          <p className={styles.description}>
            Criando Designs que te conecte com seu público da melhor maneira.
          </p>
        </div>
        <div className={styles.card}>
          <CodeSimple size={26} /> 
          <h4 className={styles.service}>Development</h4>
          <p className={styles.description}>
            Aplicando suas ideias com as tecnologias mais atualizadas e conceitos avançados.
          </p>
        </div>
      </div>
    </div>
  );
}
