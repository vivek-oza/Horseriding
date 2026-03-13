import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    text: 'My daughter has been training here for over a year and the transformation is incredible. The trainers are patient, professional, and truly care about each student.',
    author: 'Rajesh Patel',
    role: 'Parent',
  },
  {
    text: 'I started as a complete beginner and within six months I was confidently riding on my own. The facilities are world-class and the horses are beautifully trained.',
    author: 'Priya Sharma',
    role: 'Recreational Rider',
  },
  {
    text: 'The competition training program helped me prepare for state-level events. A truly professional setup right here in Gandhinagar.',
    author: 'Arjun Mehta',
    role: 'Competitive Rider',
  },
  {
    text: 'We bring our entire family on weekends — the kids absolutely love it. The environment is safe, clean, and surrounded by nature.',
    author: 'Ananya Desai',
    role: 'Family Rider',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="reviews" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>What Our Riders Say</h2>
      </motion.div>

      <div className={styles.slider}>
        <button className={styles.navBtn} onClick={prev} aria-label="Previous review">
          <ChevronLeft size={22} />
        </button>

        <div className={styles.slideWrap}>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              className={styles.quote}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className={styles.text}>&ldquo;{REVIEWS[index].text}&rdquo;</p>
              <footer className={styles.author}>
                <strong>{REVIEWS[index].author}</strong>
                <span>{REVIEWS[index].role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <button className={styles.navBtn} onClick={next} aria-label="Next review">
          <ChevronRight size={22} />
        </button>
      </div>

      <div className={styles.dots}>
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Review ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
