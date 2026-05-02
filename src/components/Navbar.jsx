import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => scrollTo('hero')}>
        <span className={styles.logoText}>M</span>
        <span className={styles.logoSub}>ANEESH</span>
        <span className={styles.logoDot}></span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(link => (
          <li key={link}>
            <button
              className={`${styles.link} ${active === link ? styles.activeLink : ''}`}
              onClick={() => scrollTo(link.toLowerCase())}
            >
              <span className={styles.linkNum}>{String(links.indexOf(link) + 1).padStart(2,'0')}.</span>
              {link}
            </button>
          </li>
        ))}
      </ul>

      <a
        href="mailto:manmaneesh53@gmail.com"
        className={styles.ctaBtn}
      >
        Hire Me
      </a>

      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`}></span>
      </button>
    </nav>
  )
}
