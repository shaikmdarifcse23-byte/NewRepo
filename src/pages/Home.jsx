import styles from './Page.module.css'

function Home() {
  return (
    <section className={styles.pageSection}>
      <div className={styles.heroCard}>
        <p className={styles.tagline}>Beginner-friendly portfolio starter</p>
        <h1 className={styles.title}>Hi, I&apos;m a developer building modern web experiences.</h1>
        <p className={styles.subtitle}>
          This portfolio starter is designed for beginners who want a clean React app with routing, reusable components, and responsive layout.
        </p>
        <div className={styles.heroActions}>
          <a className={styles.primaryButton} href="/projects">
            View Projects
          </a>
          <a className={styles.secondaryButton} href="/contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
