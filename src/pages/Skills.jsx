import { motion } from 'framer-motion'
import styles from './Page.module.css'
import { fadeInUp, staggerSection } from '../utils/animationVariants'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'VS Code', 'Figma', 'Vite', 'npm'],
  },
]

function Skills() {
  return (
    <motion.section
      id="skills"
      className={styles.pageSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerSection}
    >
      <motion.div className={styles.card} variants={fadeInUp}>
        <h1 className={styles.sectionTitle}>Skills</h1>
        <p className={styles.sectionText}>
          These are the skills you can highlight as a beginner developer. Use this sheet to track what you know and what you want to learn next.
        </p>
      </motion.div>

      <div className={styles.cardGrid}>
        {skillCategories.map((category) => (
          <motion.div className={styles.card} variants={fadeInUp} key={category.title}>
            <h2 className={styles.cardTitle}>{category.title}</h2>
            <div className={styles.labelList}>
              {category.skills.map((skill) => (
                <span className={styles.label} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
