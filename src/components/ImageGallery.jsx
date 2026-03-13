import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ImageGallery.module.css';

const fullImages = [
  { src: 'https://images.pexels.com/photos/4894974/pexels-photo-4894974.jpeg', alt: 'Rider training in open field' },
  { src: 'https://images.pexels.com/photos/4895010/pexels-photo-4895010.jpeg', alt: 'Horse riding coaching session' },
  { src: 'https://images.pexels.com/photos/4894938/pexels-photo-4894938.jpeg', alt: 'Equestrian in beautiful landscape' },
  { src: 'https://images.pexels.com/photos/12314846/pexels-photo-12314846.jpeg', alt: 'Majestic horse closeup portrait' },
  { src: 'https://images.pexels.com/photos/10932276/pexels-photo-10932276.jpeg', alt: 'Horse galloping at the arena' },
  { src: 'https://images.pexels.com/photos/35401832/pexels-photo-35401832.jpeg', alt: 'Professional riding demonstration' },
];

const scrollImages = [
  { src: 'https://images.pexels.com/photos/15358606/pexels-photo-15358606.jpeg', alt: 'Student learning riding' },
  { src: 'https://images.pexels.com/photos/15358605/pexels-photo-15358605.jpeg', alt: 'Riding practice session' },
  { src: 'https://images.pexels.com/photos/10329702/pexels-photo-10329702.jpeg', alt: 'Trail riding experience' },
  { src: 'https://images.pexels.com/photos/26745307/pexels-photo-26745307.jpeg', alt: 'Young rider on horseback' },
  { src: 'https://images.pexels.com/photos/15657366/pexels-photo-15657366.jpeg', alt: 'Evening riding session' },
  { src: 'https://images.pexels.com/photos/16669129/pexels-photo-16669129.jpeg', alt: 'Equestrian at dusk' },
  { src: 'https://images.pexels.com/photos/7824751/pexels-photo-7824751.jpeg', alt: 'Young rider training' },
  { src: 'https://images.pexels.com/photos/13814407/pexels-photo-13814407.jpeg', alt: 'Horse and rider bond' },
  { src: 'https://images.pexels.com/photos/7883138/pexels-photo-7883138.jpeg', alt: 'Golden hour ride' },
  { src: 'https://images.pexels.com/photos/34732248/pexels-photo-34732248.jpeg', alt: 'Horse care moment' },
  { src: 'https://images.pexels.com/photos/34317073/pexels-photo-34317073.jpeg', alt: 'Riding academy life' },
  { src: 'https://images.pexels.com/photos/32147991/pexels-photo-32147991.jpeg', alt: 'Equestrian training' },
];

export default function ImageGallery() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((i) => (i + 1) % fullImages.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 3000);
    return () => clearInterval(id);
  }, [advance]);

  const marqueeItems = [...scrollImages, ...scrollImages];

  return (
    <section id="gallery" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>Life at the Academy</h2>
      </motion.div>

      {/* Full-image slideshow */}
      <div className={styles.slideshow}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={fullImages[current].src}
            alt={fullImages[current].alt}
            className={styles.slideImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className={styles.dots}>
          {fullImages.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Marquee scroll */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {marqueeItems.map((img, i) => (
            <div key={`m-${i}`} className={styles.marqueeItem}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
