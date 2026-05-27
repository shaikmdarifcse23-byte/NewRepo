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
          I am Shaik Mohammed Arif, a B.Tech Computer Science and Engineering student at IIT (BHU), Varanasi.
          With an 8.59 CGPA and strong academic performance in both board exams and competitive programming, I work at the intersection of AI/ML and web development.
        </p>
      </motion.div>

      <div className={styles.cardGrid}>
        <motion.div className={styles.card} variants={fadeInUp}>
          <h2 className={styles.cardTitle}>Academic Profile</h2>
          <p className={styles.cardBody}>
            B.Tech in Computer Science and Engineering at IIT (BHU), Varanasi, CGPA 8.59.
            Completed XII at Sri Chaitanya Junior College with 94.25% and X at Dr KKR Gowtham High School with 100%.
          </p>
        </motion.div>
        <motion.div className={styles.card} variants={fadeInUp}>
          <h2 className={styles.cardTitle}>Research & Tech</h2>
          <p className={styles.cardBody}>
            Experienced in Django web apps, AI/ML research, battery data modeling, and predictive maintenance.
            I enjoy building production-ready systems and exploring the latest machine learning tools.
          </p>
        </motion.div>
        <motion.div className={styles.card} variants={fadeInUp}>
          <h2 className={styles.cardTitle}>Leadership</h2>
          <p className={styles.cardBody}>
            Served as Security Executive for Spardha'24, the annual sports festival at IIT BHU.
            I also competed in competitive programming camps and national-level olympiads.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
