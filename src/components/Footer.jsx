import { Heart } from 'lucide-react';
import styles from './Footer.module.css';

const LINKS = [
  { label: 'Programs', href: '#programs' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <a href="#home" className={styles.logo}>
            Royal Equestrian
          </a>
          <nav className={styles.nav}>
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className={styles.link}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Royal Equestrian Academy,
            Gandhinagar. All rights reserved.
          </p>
          <p className={styles.credits}>
            Made with <Heart size={12} className={styles.heart} /> for
            equestrian excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
