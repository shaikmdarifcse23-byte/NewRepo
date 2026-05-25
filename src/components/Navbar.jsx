import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((current) => !current)
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.brandWrapper}>
        <Link to="/" className={styles.brand}>
          DevPortfolio
        </Link>
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={styles.menuIcon} />
          <span className={styles.menuIcon} />
          <span className={styles.menuIcon} />
        </button>
      </div>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')} onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? styles.active : '')} onClick={() => setMenuOpen(false)}>
          Skills
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : '')} onClick={() => setMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : '')} onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
