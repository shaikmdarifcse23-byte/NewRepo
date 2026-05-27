import { motion } from 'framer-motion'
import styles from './Page.module.css'
import { fadeInUp, staggerSection } from '../utils/animationVariants'

const skillCategories = [
  {
    title: 'Languages & Tools',
    skills: ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bash/Linux'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Django', 'Keras', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
  },
  {
    title: 'Areas of Interest',
    skills: ['Data Structures & Algorithms', 'Competitive Programming', 'AI/ML', 'Web Development'],
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
          My technical skill set includes programming languages, data science libraries, backend frameworks, and problem-solving skills in algorithms and competitive programming.
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
