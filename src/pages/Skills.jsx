import styles from './Page.module.css'

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
    <section id="skills" className={styles.pageSection}>
      <div className={styles.card}>
        <h1 className={styles.sectionTitle}>Skills</h1>
        <p className={styles.sectionText}>
          These are the skills you can highlight as a beginner developer. Use this sheet to track what you know and what you want to learn next.
        </p>
      </div>

      <div className={styles.cardGrid}>
        {skillCategories.map((category) => (
          <div className={styles.card} key={category.title}>
            <h2 className={styles.cardTitle}>{category.title}</h2>
            <div className={styles.labelList}>
              {category.skills.map((skill) => (
                <span className={styles.label} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
