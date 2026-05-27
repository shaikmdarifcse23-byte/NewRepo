import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.svg'
import styles from './Hero.module.css'
import { fadeInRight, fadeInUp, staggerSection } from '../utils/animationVariants'

const rolePhrases = ['B.Tech CSE Student', 'AI/ML Enthusiast', 'Web Developer']
const typingSpeed = 100
const deletingSpeed = 60
const pauseDuration = 1200

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [typedCharacters, setTypedCharacters] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentRole = rolePhrases[currentRoleIndex]
  const displayedRole = useMemo(
    () => currentRole.slice(0, typedCharacters),
    [currentRole, typedCharacters]
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && typedCharacters < currentRole.length) {
        setTypedCharacters((value) => value + 1)
        return
      }

      if (!isDeleting && typedCharacters === currentRole.length) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && typedCharacters > 0) {
        setTypedCharacters((value) => value - 1)
        return
      }

      if (isDeleting && typedCharacters === 0) {
        setIsDeleting(false)
        setCurrentRoleIndex((value) => (value + 1) % rolePhrases.length)
      }
    }, isDeleting ? deletingSpeed : typedCharacters === currentRole.length ? pauseDuration : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentRole, typedCharacters, isDeleting])

  return (
    <motion.div
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={staggerSection}
      viewport={{ once: true }}
    >
      <motion.div className={styles.heroText} variants={fadeInUp}>
        <span className={styles.label}>Hi, I&apos;m</span>
        <h1 className={styles.heading}>Shaik Mohammed Arif</h1>
        <p className={styles.role}>
          <span>{displayedRole}</span>
          <span className={styles.cursor} aria-hidden="true">
            |
          </span>
        </p>
        <p className={styles.description}>
          I am a B.Tech Computer Science and Engineering student at IIT (BHU), Varanasi. I build secure Django web applications, AI/ML modeling pipelines, and polished responsive interfaces.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="/resume.pdf" download>
            Download Resume
          </a>
          <a className={styles.secondaryButton} href="#projects">
            View Projects
          </a>
        </div>

        <motion.div className={styles.socials} variants={fadeInUp}>
          <a
            className={styles.socialLink}
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0.297c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.091-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.072 1.836 2.809 1.306 3.495.998.108-.775.418-1.306.76-1.606-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.467-2.381 1.235-3.221-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.649.243 2.872.12 3.176.77.84 1.233 1.91 1.233 3.221 0 4.61-2.807 5.623-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            className={styles.socialLink}
            href="mailto:arifskmd2005@gmail.com"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.99L12 13 4 8.99V6l8 4.99L20 6v2.99z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      <motion.div className={styles.heroMedia} variants={fadeInRight}>
        <div className={styles.imageWrapper}>
          <img src={profileImage} alt="Profile illustration" className={styles.profileImage} loading="eager" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
