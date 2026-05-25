import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import styles from './ThemeToggle.module.css'

// Simple toggle switch that reads theme from context and toggles it
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.toggle} ${theme === 'dark' ? styles.dark : ''}`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
    >
      <span className={styles.knob} />
    </button>
  )
}

export default ThemeToggle
