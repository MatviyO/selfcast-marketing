import styles from './page.module.css'
import Link from 'next/link'
import { FaClock, FaComments, FaMoneyBillWave, FaTasks } from 'react-icons/fa'

export const metadata = {
  title: 'For Producers – Selfcast',
}

export default function ProducersPage() {
  return (
    <div className={styles.producersPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <h1>Casting made easy</h1>
          <h2>BOOK YOUR TALENTS WITH SELFCAST FOR FREE!</h2>
          <p>A PLATFORM FOR CASTERS & PRODUCERS</p>
          <p>WE GOT ALL KINDS OF TALENTS IN 155 COUNTRIES</p>
          <Link href="#contact" className={styles.contactButton}>
            Contact us now
          </Link>
        </div>

        {/* What is Selfcast Section */}
        <section className={styles.section}>
          <h2>What is Selfcast</h2>
          <p>
            Selfcast is a free, super easy and innovative casting platform for everyone who work professionally with TV, films and commercials.
          </p>
          <p>
            Casting of actors, models, dancers and extras is well known to be very time-consuming. With Selfcast the workflow is fast and the creative outcome is impressive.
          </p>
          <p>
            You can post jobs, search for talents or request job-specific Selfcast videos from the Talents. Other features are direct communication with your Cast, built-in contract module, handling of unlimited productions and much more.
          </p>
          <p>
            Selfcast has skilled local partners in the Nordic and more and more European countries who can assist you with castings, advice and callbacks.
          </p>
          <p>
            Please contact us for assistance with sign up, use of the platform and casting or booking.
          </p>
          <p className={styles.signature}>
            Best regards<br />
            Selfcast – Casting made easy!
          </p>
          <div className={styles.center}>
            <Link href="#contact" className={styles.contactButton}>
              Contact us now
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.section}>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FaClock />
              </div>
              <h3>Smart casting</h3>
              <p>Super easy and innovative casting platform for professionals – <span className={styles.highlight}>SAVE time</span></p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FaComments />
              </div>
              <h3>Get in touch with the talents</h3>
              <p>Built-in communication and contract module – <span className={styles.highlight}>NO MORE emails</span></p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FaMoneyBillWave />
              </div>
              <h3>It's free</h3>
              <p>Professionals can use Selfcast for free - and save even more on casting days</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FaTasks />
              </div>
              <h3>Keep track of your productions</h3>
              <p>Full overview of productions, roles and people - <span className={styles.highlight}>STAY ORGANIZED</span></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 