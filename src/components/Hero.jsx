import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Master the Art of
          <br />
          Horse Riding
        </motion.h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Professional equestrian training with expert instructors and
          well-trained horses — in the heart of Gandhinagar, Gujarat.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a href="#contact" className={styles.ctaPrimary}>
            Book a Free Trial
          </a>
          <a href="#programs" className={styles.ctaSecondary}>
            View Programs
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
