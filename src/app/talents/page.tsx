import styles from './page.module.css'
import Link from 'next/link'
import { FaUserAlt, FaBriefcase, FaVideo } from 'react-icons/fa'

export const metadata = {
  title: 'For Talents – Selfcast',
}

export default function TalentsPage() {
  return (
    <div className={styles.talentsPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <h1>Download the app today</h1>
          <p>
            Create your profile and start looking for jobs in films, TV and commercials
          </p>
          <Link href="#download" className={styles.downloadButton}>
            Download Now
          </Link>
        </div>

        {/* What is Selfcast Section */}
        <section className={styles.section}>
          <h2>What is Selfcast?</h2>
          <p>
            Selfcast is the #1 casting app for actors, models, dancers, extras, and everyone who wants to appear in films, TV, and commercials.
          </p>
          <p>
            Whether you're a professional or a beginner, Selfcast will make you stand out and look amazing to Producers.
          </p>
          <p>
            Best of all, there is no requirement of experience. You can cast yourself, create a profile and receive job offers. Among other great features, you can communicate directly with Producers, when they want to book you for exciting jobs.
          </p>
          <p>
            When using Selfcast you don't need an expensive agency to manage your career. You can just do it yourself.
          </p>
        </section>

        {/* How to Apply Section */}
        <section className={styles.section}>
          <h2>How to apply for jobs in the App!</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Download the App</h3>
              <p>Download the Selfcast App from your device's app store</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Create Your Profile</h3>
              <p>Click "New here? Sign Up" and create your own profile</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Start Applying</h3>
              <p>You are now ready to apply for your first job</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.section}>
          <h2>Why Choose Selfcast?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaBriefcase />
              </div>
              <h3>Access jobs</h3>
              <p>Access lots of exclusive jobs and castings</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserAlt />
              </div>
              <h3>Build your own career</h3>
              <p>Manage your career - you don't need an agency</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaVideo />
              </div>
              <h3>Selfcast</h3>
              <p>Record a video audition and send it instantaneously to the Producers</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.section}>
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Download the app today, create your profile, and start looking for jobs right away. See you on Selfcast!
          </p>
          <Link href="#download" className={styles.downloadButton}>
            Download Now
          </Link>
        </section>

        {/* Disclaimer */}
        <p className={styles.disclaimer}>
          *) All free activities are offered in a limited quantity and you must register on a first-come, first-served basis.
          Generally: We reserve the right to make any changes and accept no liability for any printing errors.
        </p>
      </div>
    </div>
  )
} 