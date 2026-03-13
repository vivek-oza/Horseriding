import { motion } from 'framer-motion';
import { Sunrise, Sun, Calendar } from 'lucide-react';
import styles from './SessionSchedule.module.css';

const SCHEDULES = [
  {
    icon: Sunrise,
    title: 'Morning Training',
    time: '6:00 AM – 10:00 AM',
    days: 'Mon – Sat',
    description: 'Cool, energizing sessions ideal for focused training and skill building.',
  },
  {
    icon: Sun,
    title: 'Afternoon Coaching',
    time: '3:00 PM – 7:00 PM',
    days: 'Mon – Fri',
    description: 'Comprehensive coaching for intermediate and advanced riders.',
  },
  {
    icon: Calendar,
    title: 'Weekend Sessions',
    time: '8:00 AM – 4:00 PM',
    days: 'Sat & Sun',
    description: 'Extended hours for families, trail rides, and weekend workshops.',
  },
];

export default function SessionSchedule() {
  return (
    <section id="schedule" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>Session Timings</h2>
        <p className={styles.subtitle}>
          Flexible schedules to fit your lifestyle.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {SCHEDULES.map((s, i) => (
          <motion.article
            key={s.title}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <div className={styles.icon}>
              <s.icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <span className={styles.time}>{s.time}</span>
            <span className={styles.days}>{s.days}</span>
            <p className={styles.desc}>{s.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
