import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    color: '#7aff6e',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML5', level: 85 },
      { name: 'CSS', level: 80 },
    ]
  },
  {
    category: 'Frameworks',
    icon: '⟨/⟩',
    color: '#00e5ff',
    skills: [
      { name: 'Django', level: 90 },
      { name: 'Django REST', level: 88 },
      { name: 'React', level: 72 },
      { name: 'Bootstrap', level: 80 },
    ]
  },
  {
    category: 'Databases',
    icon: '⊞',
    color: '#ffb84d',
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MySQL', level: 78 },
      { name: 'MongoDB', level: 65 },
    ]
  },
  {
    category: 'Tools & DevOps',
    icon: '⚙',
    color: '#b06aff',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Docker', level: 68 },
      { name: 'Postman', level: 82 },
      { name: 'Redis & Celery', level: 72 },
    ]
  },
  {
    category: 'Automation',
    icon: '⟳',
    color: '#ff6e8f',
    skills: [
      { name: 'Selenium', level: 80 },
      { name: 'Pandas', level: 75 },
    ]
  },
  {
    category: 'Integrations',
    icon: '⟐',
    color: '#6eaaff',
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'OAuth', level: 78 },
      { name: 'Stripe / Razorpay', level: 75 },
    ]
  },
]

function SkillBar({ name, level, color, animate }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel} style={{ color }}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: animate ? `0 0 12px ${color}55` : 'none',
            transition: 'width 1s ease, box-shadow 0.3s ease'
          }}
        ></div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>02. Skills</span>
          <h2 className={styles.title}>Technical Arsenal</h2>
          <p className={styles.subtitle}>Tools and technologies I work with to bring ideas to life.</p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon} style={{ color: group.color }}>{group.icon}</span>
                <h3 className={styles.cardTitle}>{group.category}</h3>
              </div>
              <div className={styles.skillList}>
                {group.skills.map(skill => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    animate={visible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
