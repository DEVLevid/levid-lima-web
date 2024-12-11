import { ArrowLineUpRight } from '@phosphor-icons/react/dist/ssr'
import styles from './styles.module.scss'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.profile}><img src="/Levid.jpeg" alt="levid" /></div>
        <p className={styles.wellcome}>olá, meu nome é Levid 👋</p>
        <p className={styles.ocupation}>software engineer</p>
      </div>
      <h2 className={styles.title}>Contruindo experiências e aplicações de alta performance.</h2>
      <button className={styles.contact}>Me fale mais sobre o seu projeto! <ArrowLineUpRight size={20} /></button>
    </div>
  )
}
