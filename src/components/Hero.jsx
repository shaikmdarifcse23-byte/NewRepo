import { useEffect, useMemo, useState } from 'react'
import profileImage from '../assets/profile.svg'
import styles from './Hero.module.css'

const rolePhrases = ['Frontend Developer', 'React Enthusiast', 'UI Explorer']
const typingSpeed = 100
const deletingSpeed = 60
const pauseDuration = 1400

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
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <span className={styles.label}>Hello, I&apos;m</span>
        <h1 className={styles.heading}>Arif Shah</h1>
        <p className={styles.role}>
          <span>{displayedRole}</span>
          <span className={styles.cursor} aria-hidden="true">
            |
          </span>
        </p>
        <p className={styles.description}>
          I build polished, responsive portfolio experiences with React. This hero section includes smooth entrance animation, profile details, and modern UI styling.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="/resume.pdf" download>
            Download Resume
          </a>
          <a className={styles.secondaryButton} href="#projects">
            See Projects
          </a>
        </div>

        <div className={styles.socials}>
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
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.25 8.5h4.5V24h-4.5V8.5zm7.5 0h4.31v2.13h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.95c0-1.9-.04-4.35-2.65-4.35-2.65 0-3.05 2.07-3.05 4.2V24H7.75V8.5z" />
            </svg>
          </a>
          <a
            className={styles.socialLink}
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 4.56c-.89.39-1.84.66-2.84.78a4.98 4.98 0 0 0 2.18-2.75 9.96 9.96 0 0 1-3.17 1.21 4.94 4.94 0 0 0-8.43 4.5A14.01 14.01 0 0 1 1.67 3.15 4.92 4.92 0 0 0 3.19 9.72a4.9 4.9 0 0 1-2.24-.62v.06a4.94 4.94 0 0 0 3.96 4.84 4.96 4.96 0 0 1-2.23.08 4.96 4.96 0 0 0 4.62 3.42 9.9 9.9 0 0 1-6.13 2.1c-.4 0-.8-.02-1.19-.07a14 14 0 0 0 7.58 2.22c9.1 0 14.08-7.53 14.08-14.08 0-.21 0-.42-.01-.63A10.06 10.06 0 0 0 24 4.56z" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.heroMedia}>
        <div className={styles.imageWrapper}>
          <img src={profileImage} alt="Profile illustration" className={styles.profileImage} />
        </div>
      </div>
    </div>
  )
}

export default Hero
