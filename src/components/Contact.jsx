import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>05. Contact</span>
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.subtitle}>
            I'm currently open to new opportunities. Whether you have a project,
            a question, or just want to say hi — my inbox is always open.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactCards}>
            {[
              {
                icon: '✉',
                label: 'Email',
                value: 'manmaneesh53@gmail.com',
                href: 'mailto:manmaneesh53@gmail.com',
                color: '#7aff6e',
              },
              {
                icon: '☎',
                label: 'Phone',
                value: '+91 8078071595',
                href: 'tel:+918078071595',
                color: '#00e5ff',
              },
              {
                icon: '⊞',
                label: 'LinkedIn',
                value: 'linkedin.com/in/maneesh-a-67a0ba27b',
                href: 'https://linkedin.com/in/maneesh-a-67a0ba27b',
                color: '#6eaaff',
              },
              {
                icon: '⌖',
                label: 'Location',
                value: 'Palakkad, Kerala, India',
                href: null,
                color: '#ffb84d',
              },
            ].map(item => (
              <a
                key={item.label}
                className={styles.contactCard}
                href={item.href || '#'}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{ '--card-color': item.color }}
                onClick={!item.href ? (e) => e.preventDefault() : undefined}
              >
                <span className={styles.cardIcon} style={{ color: item.color }}>{item.icon}</span>
                <div>
                  <div className={styles.cardLabel}>{item.label}</div>
                  <div className={styles.cardValue}>{item.value}</div>
                </div>
                {item.href && (
                  <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                )}
              </a>
            ))}
          </div>

          <div className={styles.cta}>
            <div className={styles.ctaGlow}></div>
            <div className={styles.ctaInner}>
              <span className={styles.ctaTag}>Open to work</span>
              <h3 className={styles.ctaTitle}>Ready to bring your idea to life?</h3>
              <p className={styles.ctaText}>
                From backend APIs to full-stack applications, I build robust systems that scale.
              </p>
              <a href="mailto:manmaneesh53@gmail.com" className={styles.ctaBtn}>
                Send me a message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
