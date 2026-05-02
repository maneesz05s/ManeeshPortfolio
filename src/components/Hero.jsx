import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const roles = ['Python Developer', 'Django Expert', 'REST API Builder', 'Full-Stack Engineer']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = roles[roleIdx]
    let i = typing ? displayed.length : displayed.length - 1

    const timeout = setTimeout(() => {
      if (typing) {
        if (i < target.length) {
          setDisplayed(target.slice(0, i + 1))
        } else {
          setTimeout(() => setTyping(false), 1800)
        }
      } else {
        if (i >= 0) {
          setDisplayed(target.slice(0, i))
        } else {
          setRoleIdx((roleIdx + 1) % roles.length)
          setTyping(true)
        }
      }
    }, typing ? 80 : 45)

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section className={styles.hero} id="hero">
      {/* Radial glow */}
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      {/* Floating code fragments */}
      <div className={styles.floatingCode}>
        {['def build():', 'import django', 'git commit -m', 'npm run dev', 'SELECT *', 'docker run'].map((t, i) => (
          <span key={i} className={styles.codeChip} style={{ '--i': i }}>{t}</span>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          <span>Available for opportunities</span>
        </div>

        <div className={styles.greeting}>
          <span className={styles.greetMono}>{'// Hello, World! I am'}</span>
        </div>

        <h1 className={styles.name}>
          <span className={styles.nameFirst}>Maneesh</span>
          <span className={styles.nameLast}>.A</span>
        </h1>

        <div className={styles.roleWrap}>
          <span className={styles.rolePrefix}>~$ </span>
          <span className={styles.roleText}>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </div>

        <p className={styles.bio}>
          Dedicated Software Engineer crafting robust backend systems with
          <span className={styles.highlight}> Python & Django</span>, building seamless REST APIs,
          and delivering full-stack experiences from Palakkad, Kerala.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary} onClick={e => {
            e.preventDefault()
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="mailto:manmaneesh53@gmail.com" className={styles.btnSecondary}>
            Get In Touch
          </a>
        </div>

        <div className={styles.stats}>
          {[
            { val: '2+', label: 'Years Exp.' },
            { val: '3+', label: 'Projects Built' },
            { val: '10+', label: 'Tech Skills' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.val}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right side terminal card */}
      <div className={styles.terminal}>
        <div className={styles.termHeader}>
          <span className={styles.dot} style={{ background: '#ff5f57' }}></span>
          <span className={styles.dot} style={{ background: '#ffbd2e' }}></span>
          <span className={styles.dot} style={{ background: '#28c840' }}></span>
          <span className={styles.termTitle}>maneesh@dev ~ info</span>
        </div>
        <div className={styles.termBody}>
          {[
            { key: 'name', val: 'Maneesh.A' },
            { key: 'role', val: 'SDE @ Actionfi Technologies' },
            { key: 'location', val: 'Palakkad, Kerala 🇮🇳' },
            { key: 'email', val: 'manmaneesh53@gmail.com' },
            { key: 'phone', val: '+91 8078071595' },
            { key: 'stack', val: 'Python, Django, React' },
            { key: 'db', val: 'PostgreSQL, MySQL, MongoDB' },
            { key: 'status', val: '✅ Open to work' },
          ].map((item, i) => (
            <div key={item.key} className={styles.termLine} style={{ animationDelay: `${0.1 * i}s` }}>
              <span className={styles.termKey}>{item.key}</span>
              <span className={styles.termArrow}>→</span>
              <span className={styles.termVal}>{item.val}</span>
            </div>
          ))}
          <div className={styles.termPrompt}>
            <span className={styles.termPs}>❯</span>
            <span className={styles.termCursor}></span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine}></div>
        <span>scroll</span>
      </div>
    </section>
  )
}
