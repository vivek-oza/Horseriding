import { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './ContactSection.module.css';

const FIELD_LIMITS = { name: 100, email: 100, phone: 20, message: 1000 };

function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

const ContactSection = memo(function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = useCallback(() => {
    const e = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRe = /^[\d\s\-+()]{10,}$/;

    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!emailRe.test(formData.email)) e.email = 'Invalid email';
    if (formData.phone && !phoneRe.test(formData.phone))
      e.phone = 'Invalid phone number';
    if (!formData.message.trim()) e.message = 'Message is required';

    setErrors(e);
    return Object.keys(e).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault();
      if (!validate()) return;

      const sanitized = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        message: sanitizeInput(formData.message),
      };

      console.log('Form submitted:', sanitized);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    },
    [formData, validate],
  );

  const handleChange = useCallback(
    (ev) => {
      const { name, value } = ev.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    },
    [errors],
  );

  return (
    <section id="contact" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.subtitle}>
          Book a free trial session or reach out with any questions.
        </p>
      </motion.div>

      <div className={styles.container}>
        <motion.div
          className={styles.formWrap}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            <div className={styles.success} role="status">
              <p>Thank you! We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="on"
            >
              <div className={styles.field}>
                <label htmlFor="contact-name">Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  maxLength={FIELD_LIMITS.name}
                  autoComplete="name"
                  className={errors.name ? styles.inputError : ''}
                />
                {errors.name && (
                  <span className={styles.error} role="alert">{errors.name}</span>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email">Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  maxLength={FIELD_LIMITS.email}
                  autoComplete="email"
                  className={errors.email ? styles.inputError : ''}
                />
                {errors.email && (
                  <span className={styles.error} role="alert">{errors.email}</span>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-phone">Phone</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  maxLength={FIELD_LIMITS.phone}
                  autoComplete="tel"
                  className={errors.phone ? styles.inputError : ''}
                />
                {errors.phone && (
                  <span className={styles.error} role="alert">{errors.phone}</span>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your riding goals..."
                  rows={4}
                  maxLength={FIELD_LIMITS.message}
                  className={errors.message ? styles.inputError : ''}
                />
                {errors.message && (
                  <span className={styles.error} role="alert">{errors.message}</span>
                )}
              </div>
              <button type="submit" className={styles.submit}>
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.mapWrap}>
            <iframe
              title="Royal Equestrian Academy – Gandhinagar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58708.32553460506!2d72.5969!3d23.2156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b5a4!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              className={styles.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className={styles.details}>
            <div className={styles.item}>
              <MapPin size={16} aria-hidden="true" />
              <span>Near Indroda Nature Park, Sector 7, Gandhinagar, Gujarat 382007</span>
            </div>
            <div className={styles.item}>
              <Phone size={16} aria-hidden="true" />
              <a href="tel:+919876543210" rel="noopener">+91 98765 43210</a>
            </div>
            <div className={styles.item}>
              <Mail size={16} aria-hidden="true" />
              <a href="mailto:info@royalequestrianacademy.in" rel="noopener">info@royalequestrianacademy.in</a>
            </div>
            <div className={styles.item}>
              <Clock size={16} aria-hidden="true" />
              <span>Mon–Sat: 6 AM – 7 PM | Sun: 8 AM – 4 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ContactSection;
