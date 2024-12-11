import {
  Briefcase,
  GraduationCap,
  Medal,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import Marquee from "react-fast-marquee";

export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Um pouco mais sobre mim</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.profilePicture}>
          <img src="/about.jpeg" alt="about" />
        </div>
        <div className={styles.info}>
          <div className={styles.experience}>
            <div className={styles.card}>
              <Medal size={26} /> <h3>Experiência</h3>
              <p>+3 anos desenvolvendo</p>
            </div>
            <div className={styles.card}>
              <Briefcase size={26} /> <h3>Projetos concluídos</h3>
              <p>+8 projetos</p>
            </div>
            <div className={styles.card}>
              <GraduationCap size={26} />
              <h3>Bacharelado em Sistemas de Informação - IFAL</h3>
              <p>em andamento...</p>
            </div>
          </div>
          <p className={styles.description}>
            Sou Levid Lima, estudante de Sistemas de Informação no Instituto
            Federal de Alagoas - IFAL e desenvolvedor. Minha trajetória começou
            com a paixão por tecnologia, que me levou a participar de projetos
            impactantes como o Colabora, plataforma web de gerenciamento de
            colaboradores e projetos, além de atuar como bolsista PIBITI no
            projeto Acompanha, contribuindo no desenvolvimento de uma plataforma
            de genrênciamento acadêmico utilizado pelo instituto federal. Ao
            longo do caminho, aperfeiçoei minhas habilidades com React,
            TypeScript e Next.js, sempre buscando criar soluções inovadoras e
            eficientes.
          </p>
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
