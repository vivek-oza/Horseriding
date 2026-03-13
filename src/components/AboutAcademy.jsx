import { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutAcademy.module.css';

const AboutAcademy = memo(function AboutAcademy() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.pexels.com/photos/15358606/pexels-photo-15358606.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Student learning horse riding at Royal Equestrian Academy Gandhinagar"
            className={styles.image}
            loading="lazy"
            decoding="async"
            width={800}
            height={1067}
          />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h2 className={styles.title}>About Our Academy</h2>
          <p className={styles.text}>
            Located in the serene outskirts of Gandhinagar, Royal Equestrian
            Academy is Gujarat&apos;s most trusted destination for horse riding
            training. We blend traditional horsemanship with modern equestrian
            techniques.
          </p>
          <p className={styles.text}>
            Whether you&apos;re a complete beginner or an experienced rider
            preparing for competitions, our certified trainers and well-bred
            horses ensure a safe, enriching, and unforgettable experience.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Years</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Riders Trained</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>15+</span>
              <span className={styles.statLabel}>Horses</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default AboutAcademy;
