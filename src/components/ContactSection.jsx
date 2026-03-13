import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './ContactSection.module.css';

function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .trim();
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-+()]{10,}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email';
    if (formData.phone && !phoneRegex.test(formData.phone))
      newErrors.phone = 'Invalid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

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
            <div className={styles.success}>
              <p>Thank you! We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  maxLength={100}
                  className={errors.name ? styles.inputError : ''}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  maxLength={100}
                  className={errors.email ? styles.inputError : ''}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  maxLength={20}
                  className={errors.phone ? styles.inputError : ''}
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your riding goals..."
                  rows={4}
                  maxLength={1000}
                  className={errors.message ? styles.inputError : ''}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
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
              <MapPin size={16} />
              <span>Near Indroda Nature Park, Sector 7, Gandhinagar, Gujarat 382007</span>
            </div>
            <div className={styles.item}>
              <Phone size={16} />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <div className={styles.item}>
              <Mail size={16} />
              <a href="mailto:info@royalequestrianacademy.in">info@royalequestrianacademy.in</a>
            </div>
            <div className={styles.item}>
              <Clock size={16} />
              <span>Mon–Sat: 6 AM – 7 PM &nbsp;|&nbsp; Sun: 8 AM – 4 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
