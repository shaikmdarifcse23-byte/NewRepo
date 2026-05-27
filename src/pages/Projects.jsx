import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Page.module.css'
import { fadeInUp, staggerSection } from '../utils/animationVariants'

const projects = [
  {
    title: 'Django E-commerce Website',
    description:
      'A secure Django web application with email verification, automated billing, and real-time cart updates. Built with robust session handling and product rating features.',
    image: 'https://via.placeholder.com/640x420?text=Django+E-commerce',
    techStack: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/shaikmdarifcse23-byte',
    demo: 'https://github.com/shaikmdarifcse23-byte',
  },
  {
    title: 'Battery Data Modeling & ML',
    description:
      'Evaluated machine learning algorithms on battery datasets to predict health indicators and performance trends, comparing accuracy and reliability across models.',
    image: 'https://via.placeholder.com/640x420?text=Battery+ML',
    techStack: ['Python', 'Keras', 'Pandas', 'Scikit-learn', 'SVM', 'Neural Networks'],
    github: 'https://github.com/shaikmdarifcse23-byte',
    demo: 'https://github.com/shaikmdarifcse23-byte',
  },
  {
    title: 'Battery Fault Detection Research',
    description:
      'A research study on EV battery fault diagnosis, cell balancing, and predictive maintenance using AI/ML and deep reinforcement learning techniques.',
    image: 'https://via.placeholder.com/640x420?text=Battery+Research',
    techStack: ['Python', 'AI/ML', 'Deep RL', 'LaTeX'],
    github: 'https://github.com/shaikmdarifcse23-byte',
    demo: 'https://github.com/shaikmdarifcse23-byte',
  },
]

function Projects() {
  const [selectedTech, setSelectedTech] = useState('All')

  const techOptions = useMemo(() => {
    const techSet = new Set(['All'])
    projects.forEach((project) => project.techStack.forEach((tech) => techSet.add(tech)))
    return Array.from(techSet)
  }, [])

  const filteredProjects = useMemo(() => {
    return selectedTech === 'All'
      ? projects
      : projects.filter((project) => project.techStack.includes(selectedTech))
  }, [selectedTech])

  return (
    <motion.section
      id="projects"
      className={styles.pageSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerSection}
    >
      <motion.div className={styles.card} variants={fadeInUp}>
        <h1 className={styles.sectionTitle}>Projects</h1>
        <p className={styles.sectionText}>
          These projects highlight my experience in Django, machine learning, and research-driven AI applications, alongside polished interface design.
        </p>
      </motion.div>

      <motion.div className={styles.projectFilterBar} variants={fadeInUp}>
        {techOptions.map((tech) => (
          <button
            key={tech}
            type="button"
            className={`${styles.filterButton} ${selectedTech === tech ? styles.filterButtonActive : ''}`}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </button>
        ))}
      </motion.div>

      <div className={styles.projectGrid}>
        {filteredProjects.map((project) => (
          <motion.article className={styles.projectCard} variants={fadeInUp} key={project.title}>
            <div className={styles.projectImageWrapper}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
            </div>
            <div className={styles.projectContent}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardBody}>{project.description}</p>
              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span className={styles.techPill} key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectActions}>
                <a className={styles.projectLink} href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className={styles.projectLink} href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
