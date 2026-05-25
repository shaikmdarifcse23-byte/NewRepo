import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Page.module.css'
import { fadeInUp, staggerSection } from '../utils/animationVariants'

const projects = [
  {
    title: 'Portfolio Homepage',
    description: 'A polished landing page with modern hero content, responsive layout, and a clear call-to-action experience.',
    image: 'https://via.placeholder.com/640x420?text=Portfolio+Homepage',
    techStack: ['React', 'CSS', 'Responsive Design'],
    github: 'https://github.com/your-username/portfolio-homepage',
    demo: 'https://your-demo-site.com/portfolio-homepage',
  },
  {
    title: 'React Skills Grid',
    description: 'An interactive skills board that visualizes frontend tools in a responsive grid with clean typography.',
    image: 'https://via.placeholder.com/640x420?text=Skills+Grid',
    techStack: ['React', 'CSS Grid', 'JavaScript'],
    github: 'https://github.com/your-username/react-skills-grid',
    demo: 'https://your-demo-site.com/react-skills-grid',
  },
  {
    title: 'Contact Dashboard',
    description: 'A contact page designed for quick outreach with email, GitHub, and social links in a minimal card layout.',
    image: 'https://via.placeholder.com/640x420?text=Contact+Dashboard',
    techStack: ['React', 'HTML', 'Accessibility'],
    github: 'https://github.com/your-username/contact-dashboard',
    demo: 'https://your-demo-site.com/contact-dashboard',
  },
  {
    title: 'Project Showcase',
    description: 'A project gallery with smooth card hover effects, badge-style tech tags, and clear live/demo actions.',
    image: 'https://via.placeholder.com/640x420?text=Project+Showcase',
    techStack: ['React', 'CSS Animations', 'UI Design'],
    github: 'https://github.com/your-username/project-showcase',
    demo: 'https://your-demo-site.com/project-showcase',
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
          Explore a responsive collection of projects built with React, modern layout, and accessible UI patterns.
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
