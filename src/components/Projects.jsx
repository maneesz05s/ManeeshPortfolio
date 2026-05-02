import styles from './Projects.module.css'

const projects = [
  {
    id: '01',
    name: 'RUNMYBOT',
    tagline: 'Python Automation Platform',
    description: 'A production-grade automation platform built with Django and Selenium. Processes large datasets with Pandas, handles async tasks with Redis & Celery, and integrates third-party services like Trintech and RetailCloud.',
    tech: ['Python', 'Django', 'Selenium', 'Redis', 'Celery', 'Pandas', 'REST APIs'],
    highlights: ['Async task processing', 'Third-party integrations', 'Automated testing workflows'],
    color: '#7aff6e',
    icon: '🤖',
    featured: true,
  },
  {
    id: '02',
    name: 'DresseCart',
    tagline: 'E-Commerce Fashion Platform',
    description: 'Full-stack e-commerce platform for fashion and apparel with complete shopping experience — product catalog, cart, secure checkout, and automated order notification emails.',
    tech: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'Stripe / Razorpay', 'Django Email'],
    highlights: ['Payment gateway integration', 'Responsive mobile-first UI', 'Django ORM models'],
    color: '#00e5ff',
    icon: '👗',
    featured: true,
  },
  {
    id: '03',
    name: 'Personal Portfolio',
    tagline: 'Responsive React Site',
    description: 'A fully responsive personal portfolio website built with React. Clean modern UI with continuous deployment on Netlify for instant updates.',
    tech: ['React', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
    highlights: ['Responsive design', 'Netlify CD pipeline', 'Optimized rendering'],
    color: '#ffb84d',
    icon: '💼',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>04. Projects</span>
          <h2 className={styles.title}>Things I've Built</h2>
          <p className={styles.subtitle}>A selection of real-world projects from my professional work and personal endeavors.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
              style={{ '--project-color': project.color }}
            >
              {/* Top bar */}
              <div className={styles.cardBar} style={{ background: project.color }}></div>

              <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                  <span className={styles.projectIcon}>{project.icon}</span>
                  <span className={styles.projectNum}>{project.id}</span>
                </div>

                <div className={styles.projectName} style={{ color: project.color }}>
                  {project.name}
                </div>
                <div className={styles.projectTagline}>{project.tagline}</div>

                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.highlights}>
                  {project.highlights.map(h => (
                    <div key={h} className={styles.highlightChip} style={{ borderColor: `${project.color}44`, color: project.color, background: `${project.color}0d` }}>
                      <span className={styles.checkIcon}>✓</span>
                      {h}
                    </div>
                  ))}
                </div>

                <div className={styles.techStack}>
                  {project.tech.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
