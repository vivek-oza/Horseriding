import { motion } from 'framer-motion';
import { GraduationCap, MapPin, User, Trophy, Baby } from 'lucide-react';
import styles from './Services.module.css';

const SERVICES = [
  {
    icon: GraduationCap,
    title: 'Horse Riding Lessons',
    description:
      'Structured lessons designed for all levels — from complete beginners to experienced equestrians looking to sharpen their skills.',
    details: [
      'Beginner, intermediate & advanced batches',
      'Certified trainer assistance throughout',
      'Safety equipment & riding gear provided',
      'Morning & evening session options',
    ],
  },
  {
    icon: MapPin,
    title: 'Trail Riding',
    description:
      'Guided rides through scenic trails around Gandhinagar, perfect for a refreshing outdoor experience on horseback.',
    details: [
      '1–2 hour guided trail sessions',
      'Suitable for all age groups',
      'Scenic routes through green countryside',
      'Instructor-accompanied rides',
    ],
  },
  {
    icon: User,
    title: 'Private Coaching',
    description:
      'One-on-one sessions with our senior trainers, fully tailored to your personal goals, pace, and riding style.',
    details: [
      'Personalized training plan',
      'Dedicated coach & horse assigned',
      'Flexible scheduling & timing',
      'Regular progress assessment',
    ],
  },
  {
    icon: Trophy,
    title: 'Competition Training',
    description:
      'Intensive preparation for state and national level equestrian events including dressage, show jumping, and more.',
    details: [
      'State & national level event prep',
      'Dressage & show jumping drills',
      'Video analysis & technique review',
      'Dedicated arena access for practice',
    ],
  },
  {
    icon: Baby,
    title: 'Kids Riding Program',
    description:
      'Fun, safe, and engaging programs for young riders aged 5–14, designed to build confidence and a love for horses.',
    details: [
      'Small group sizes (max 4–5 kids)',
      'Pony rides for young beginners',
      'Weekend & holiday batches',
      'Trained instructor supervision',
    ],
  },
];

export default function Services() {
  const cards = [...SERVICES, ...SERVICES];

  return (
    <section id="programs" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>What We Offer</h2>
        <p className={styles.subtitle}>
          Comprehensive equestrian programs for every rider, every age, every
          goal.
        </p>
      </motion.div>

      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {cards.map((s, i) => (
            <article key={`${s.title}-${i}`} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.icon}>
                  <s.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
              </div>
              <p className={styles.cardText}>{s.description}</p>
              <ul className={styles.details}>
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
