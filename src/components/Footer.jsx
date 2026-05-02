import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.line}></div>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <span className={styles.logoAccent}>M</span>ANEESH.A
          </div>
          <p className={styles.copy}>
            Designed & Built with ♥ — {new Date().getFullYear()}
          </p>
          <div className={styles.socials}>
            <a href="mailto:manmaneesh53@gmail.com" className={styles.social} title="Email">✉</a>
            <a href="https://linkedin.com/in/maneesh-a-67a0ba27b" className={styles.social} target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
            <a href="tel:+918078071595" className={styles.social} title="Phone">☎</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
