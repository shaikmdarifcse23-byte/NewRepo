import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const observers = []
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id)
      })
    }

    const io = new IntersectionObserver(handleIntersect, { root: null, threshold: 0.6 })
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) {
        io.observe(el)
        observers.push(el)
      }
    })

    return () => {
      observers.forEach((el) => io.unobserve(el))
      io.disconnect()
    }
  }, [location.pathname])

  const handleToggle = () => setMenuOpen((s) => !s)

  const handleNav = (e, link) => {
    const element = document.getElementById(link.id)
    if (element) {
      e.preventDefault()
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
      return
    }

    // If section not on this page, navigate to the route and attempt scroll after mount
    // small timeout allows the new route to render before scrolling
    setMenuOpen(false)
    navigate(link.path)
    setTimeout(() => {
      const elAfter = document.getElementById(link.id)
      if (elAfter) elAfter.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 250)
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.brandWrapper}>
        <Link to="/" className={styles.brand} aria-label="Homepage">
          DevPortfolio
        </Link>
        <div className={styles.toggleWrapper}>
          <ThemeToggle />
        </div>

        <button
          className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
          onClick={handleToggle}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          <span className={styles.menuIcon} />
          <span className={styles.menuIcon} />
          <span className={styles.menuIcon} />
        </button>
      </div>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleNav(e, link)}
            className={`${styles.navItem} ${activeId === link.id ? styles.active : ''}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
