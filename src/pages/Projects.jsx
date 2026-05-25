import styles from './Page.module.css'

const projects = [
  {
    title: 'Portfolio Homepage',
    description: 'A clean landing page with sections for introduction, project highlights, and contact prompts.',
  },
  {
    title: 'React Skills Grid',
    description: 'A responsive skills section to showcase frontend tools and beginner experience.',
  },
  {
    title: 'Contact Section',
    description: 'A simple contact area with quick links to email and social platforms.',
  },
]

function Projects() {
  return (
    <section id="projects" className={styles.pageSection}>
      <div className={styles.card}>
        <h1 className={styles.sectionTitle}>Projects</h1>
        <p className={styles.sectionText}>
          Add your own projects here as you learn. Each card can be replaced with real work to showcase your progress.
        </p>
      </div>

      <div className={styles.cardGrid}>
        {projects.map((project) => (
          <div className={styles.card} key={project.title}>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardBody}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
