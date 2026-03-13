import { motion } from 'framer-motion';
import { Users, Award, Building2, Shield } from 'lucide-react';
import styles from './WhyUs.module.css';

const FEATURES = [
  {
    icon: Users,
    title: 'Certified Trainers',
    description: 'Nationally certified instructors with years of experience in competitive and recreational riding.',
  },
  {
    icon: Award,
    title: 'Well-Bred Horses',
    description: 'Carefully selected and trained horses suited for every skill level — from beginners to advanced riders.',
  },
  {
    icon: Building2,
    title: 'Modern Facilities',
    description: 'Well-maintained arenas, stables, and amenities designed for an optimal riding experience.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Rigorous safety protocols and premium riding gear ensure every session is secure and enjoyable.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>Why Choose Us</h2>
        <p className={styles.subtitle}>
          Trusted by 500+ riders across Gujarat for quality, safety, and
          passion.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {FEATURES.map((f, i) => (
          <motion.article
            key={f.title}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <div className={styles.icon}>
              <f.icon size={22} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardText}>{f.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
