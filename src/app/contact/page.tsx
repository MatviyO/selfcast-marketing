import styles from './page.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactHeader}>
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any questions or inquiries</p>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Please use our contact information below or send us an email.</p>
          
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <div>
                <h3>Email</h3>
                <a href="mailto:info@selfcast.com" className={styles.contactLink}>info@selfcast.com</a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <div>
                <h3>Phone</h3>
                <a href="tel:+4512345678" className={styles.contactLink}>+45 12 34 56 78</a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <div>
                <h3>Address</h3>
                <p>Vesterbrogade 24B, 5th floor<br />1620 Copenhagen V<br />Denmark</p>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <h3>Follow Us</h3>
            <div className={styles.socialGrid}>
              <a href="https://linkedin.com/company/selfcast" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LinkedIn
              </a>
              <a href="https://instagram.com/selfcast" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Instagram
              </a>
              <a href="https://facebook.com/selfcast" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Facebook
              </a>
              <a href="https://twitter.com/selfcast" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.mapSection}>
          <h2>Visit Us</h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6455841473893!2d12.567144776891501!3d55.67316997309132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652530b9cac9ee3%3A0x47c1ddfa8e6fe3a0!2sVesterbrogade%2024B%2C%201620%20K%C3%B8benhavn%2C%20Denmark!5e0!3m2!1sen!2sus!4v1699887447095!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 