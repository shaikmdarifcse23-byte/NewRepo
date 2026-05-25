import { motion } from 'framer-motion'
import styles from './Page.module.css'
import { fadeInUp, staggerSection } from '../utils/animationVariants'

function About() {
  return (
    <motion.section
      id="about"
      className={styles.pageSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerSection}
    >
      <motion.div className={styles.card} variants={fadeInUp}>
        <h1 className={styles.sectionTitle}>About Me</h1>
        <p className={styles.sectionText}>
          I am a beginner developer learning React and modern frontend tools. This starter portfolio helps show your projects, skills, and contact information in a clean and professional layout.
        </p>
      </motion.div>

      <div className={styles.cardGrid}>
        <motion.div className={styles.card} variants={fadeInUp}>
          <h2 className={styles.cardTitle}>My Focus</h2>
          <p className={styles.cardBody}>
            Building responsive web pages, practicing component-driven UI, and learning how to create reusable layouts that work on both desktop and mobile screens.
          </p>
        </motion.div>
        <motion.div className={styles.card} variants={fadeInUp}>
          <h2 className={styles.cardTitle}>What I Enjoy</h2>
          <p className={styles.cardBody}>
            Turning ideas into interactive user interfaces, improving my HTML/CSS skills, and learning how React apps can scale with better structure and routing.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
