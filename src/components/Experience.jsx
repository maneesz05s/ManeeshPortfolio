import styles from './Experience.module.css'

const experiences = [
  {
    company: 'Actionfi Technologies Pvt Ltd',
    role: 'Software Development Engineer',
    period: 'Present',
    location: 'Kozhikode, Kerala',
    type: 'Full-Time',
    color: '#7aff6e',
    highlights: [
      'Designed, developed, and maintained Python-based applications aligned with business requirements',
      'Built automation scripts using Python and Pandas to eliminate repetitive workflows',
      'Implemented sensitive data encryption/decryption mechanisms for secure database storage',
      'Developed dashboards for automations using Django framework',
      'Participated across all SDLC phases, collaborating with QA, frontend, and product teams',
      'Followed clean coding standards and maintained Git-based version control workflows',
    ]
  },
  {
    company: 'Luminar Technolab',
    role: 'Python Django Full-Stack Developer Intern',
    period: '11/2023 – 07/2024',
    location: 'Ernakulam, India',
    type: 'Internship',
    color: '#00e5ff',
    highlights: [
      'Developed scalable web applications with Django',
      'Worked across frontend, backend, and database layers',
      'Delivered projects within timelines',
    ]
  },
  {
    company: 'Riss Technologies',
    role: 'Industrial Trainee',
    period: '2022',
    location: 'India',
    type: 'Training',
    color: '#ffb84d',
    highlights: [
      'Completed industrial training in Python and Android Development',
      'Built basic mobile applications and worked with APIs and databases',
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>03. Experience</span>
          <h2 className={styles.title}>Where I've Worked</h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={exp.company} className={styles.item}>
              <div className={styles.timelineLeft}>
                <div className={styles.dot} style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}55` }}></div>
                {i < experiences.length - 1 && <div className={styles.line}></div>}
              </div>

              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <div className={styles.roleBadge} style={{ color: exp.color, borderColor: `${exp.color}44`, background: `${exp.color}11` }}>
                      {exp.type}
                    </div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className={styles.highlights}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} className={styles.highlight}>
                      <span className={styles.bullet} style={{ background: exp.color }}></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={styles.eduSection}>
          <h3 className={styles.eduTitle}>
            <span className={styles.eduIcon}>🎓</span>
            Education
          </h3>
          <div className={styles.eduGrid}>
            {[
              {
                degree: 'Diploma in Computer Engineering',
                school: 'Government Polytechnic College, Shoranur',
                year: '2020 – 2023',
                location: 'Palakkad, Kerala'
              },
              {
                degree: 'Higher Secondary — Commerce',
                school: 'Government Higher Secondary School, Vellinezhi',
                year: '2018 – 2020',
                location: 'Palakkad, Kerala'
              },
            ].map(edu => (
              <div key={edu.school} className={styles.eduCard}>
                <div className={styles.eduYear}>{edu.year}</div>
                <div className={styles.eduDegree}>{edu.degree}</div>
                <div className={styles.eduSchool}>{edu.school}</div>
                <div className={styles.eduLoc}>{edu.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
