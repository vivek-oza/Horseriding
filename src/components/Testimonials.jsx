import { memo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    text: 'My daughter has been training here for over a year and the transformation is incredible. The trainers are patient, professional, and truly care about each student.',
    author: 'Rajesh Patel',
    role: 'Parent of a Young Rider',
    rating: 5,
  },
  {
    text: 'I started as a complete beginner and within six months I was confidently riding on my own. The facilities are world-class and the horses are beautifully trained.',
    author: 'Priya Sharma',
    role: 'Recreational Rider',
    rating: 5,
  },
  {
    text: 'The competition training program helped me prepare for state-level events with rigorous drills and technique refinement. A truly professional setup in Gandhinagar.',
    author: 'Arjun Mehta',
    role: 'Competitive Equestrian',
    rating: 5,
  },
  {
    text: 'We bring our entire family on weekends — the kids absolutely love it. The environment is safe, clean, and surrounded by nature. Best weekend activity in Gandhinagar.',
    author: 'Ananya Desai',
    role: 'Family Rider',
    rating: 5,
  },
  {
    text: 'The trail riding experience was unforgettable. Riding through the beautiful countryside around Gandhinagar with an expert guide was the highlight of our trip to Gujarat.',
    author: 'Vikram Singh',
    role: 'Tourist & Adventure Rider',
    rating: 5,
  },
  {
    text: 'My son was terrified of horses initially, but the trainers here were so gentle and patient. Now he looks forward to every weekend session. Truly grateful for this academy.',
    author: 'Neha Joshi',
    role: 'Parent',
    rating: 5,
  },
];

const cards = [...REVIEWS, ...REVIEWS];

const Testimonials = memo(function Testimonials() {
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
        <p className={styles.subtitle}>
          Hear from riders and families who train with us.
        </p>
      </motion.div>

      <div className={styles.marqueeWrap} aria-label="Testimonials">
        <div className={styles.marquee}>
          {cards.map((r, i) => (
            <article key={`r-${i}`} className={styles.card}>
              <div className={styles.cardHead}>
                <Quote size={20} className={styles.quoteIcon} />
                <div className={styles.stars}>
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className={styles.text}>{r.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {r.author.charAt(0)}
                </div>
                <div>
                  <strong className={styles.name}>{r.author}</strong>
                  <span className={styles.role}>{r.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
