import styles from './Page.module.css'

function About() {
  return (
    <section id="about" className={styles.pageSection}>
      <div className={styles.card}>
        <h1 className={styles.sectionTitle}>About Me</h1>
        <p className={styles.sectionText}>
          I am a beginner developer learning React and modern frontend tools. This starter portfolio helps show your projects, skills, and contact information in a clean and professional layout.
        </p>
      </div>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>My Focus</h2>
          <p className={styles.cardBody}>
            Building responsive web pages, practicing component-driven UI, and learning how to create reusable layouts that work on both desktop and mobile screens.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>What I Enjoy</h2>
          <p className={styles.cardBody}>
            Turning ideas into interactive user interfaces, improving my HTML/CSS skills, and learning how React apps can scale with better structure and routing.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
