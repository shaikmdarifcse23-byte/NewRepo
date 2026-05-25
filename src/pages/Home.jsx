import styles from './Page.module.css'
import Hero from '../components/Hero'

function Home() {
  return (
    <section id="home" className={styles.pageSection}>
      <Hero />
    </section>
  )
}

export default Home
