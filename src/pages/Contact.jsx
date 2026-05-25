import styles from './Page.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.pageSection}>
      <div className={styles.card}>
        <h1 className={styles.sectionTitle}>Contact</h1>
        <p className={styles.sectionText}>
          Use this starter to share how people can reach you. Link to your email, GitHub, or other developer profiles.
        </p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <h2 className={styles.cardTitle}>Email</h2>
          <p className={styles.cardBody}>
            <a className={styles.contactLink} href="mailto:hello@yourdomain.com">
              hello@yourdomain.com
            </a>
          </p>
        </div>
        <div className={styles.contactItem}>
          <h2 className={styles.cardTitle}>GitHub</h2>
          <p className={styles.cardBody}>
            <a className={styles.contactLink} href="https://github.com/your-username" target="_blank" rel="noreferrer">
              github.com/your-username
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
