import styles from './page.module.css'
import Link from 'next/link'

export default function SupportPage() {
  return (
    <div className={styles.supportPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <h1>Welcome to Our Support Page</h1>
          <p>
            Welcome to Selfcast's support page! We're here to assist you with any questions, concerns, or issues you may have regarding our products or services. Whether you're a new customer exploring our offerings or a long-time user seeking assistance, you've come to the right place.
          </p>
        </div>

        {/* How Can We Help Section */}
        <section className={styles.section}>
          <h2>How Can We Help You?</h2>
          <p>
            Below, you'll find resources to help you get the most out of your experience with Selfcast. From frequently asked questions to troubleshooting guides, we've curated a collection of helpful information to address common queries and concerns. If you can't find what you're looking for or need further assistance, don't hesitate to reach out to our dedicated support team.
          </p>
        </section>

        {/* FAQs Section */}
        <section className={styles.section}>
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h3>Login & Account Issues</h3>
              <ul>
                <li>
                  <strong>Login problems:</strong> First, ensure you're using the latest app version and correct email. Try password reset if needed.
                </li>
                <li>
                  <strong>How to subscribe:</strong> Go to Settings → Subscription → Select plan → Complete purchase.
                </li>
                <li>
                  <strong>Delete account:</strong> Settings → Delete account (Note: This action is permanent).
                </li>
              </ul>
            </div>

            <div className={styles.faqCard}>
              <h3>Payment & Subscription</h3>
              <ul>
                <li>
                  <strong>Payment issues:</strong> Refresh subscription page, update app, or try logging out and back in.
                </li>
                <li>
                  <strong>How to unsubscribe:</strong> Detailed steps for both iPhone and Android devices provided.
                </li>
                <li>
                  <strong>Free vs Premium:</strong> Information about free and premium job applications.
                </li>
              </ul>
            </div>

            <div className={styles.faqCard}>
              <h3>App Permissions & Settings</h3>
              <ul>
                <li>
                  <strong>Gallery and video:</strong> Enable camera, storage, and media permissions.
                </li>
                <li>
                  <strong>Notifications:</strong> Steps to enable notifications on both Android and iPhone.
                </li>
                <li>
                  <strong>Profile privacy:</strong> Information about data access and security.
                </li>
              </ul>
            </div>

            <div className={styles.faqCard}>
              <h3>Jobs & Bookings</h3>
              <ul>
                <li>
                  <strong>Booking confirmation:</strong> Read push messages carefully for booking status.
                </li>
                <li>
                  <strong>Payment timeline:</strong> Usually 30-60 business days after job completion.
                </li>
                <li>
                  <strong>Job applications:</strong> Tips for applying and viewing jobs from different countries.
                </li>
              </ul>
            </div>

            <div className={styles.faqCard}>
              <h3>Professional Actors</h3>
              <ul>
                <li>
                  <strong>Professional status:</strong> Choose "professional actor" under "talent type" and provide credentials.
                </li>
                <li>
                  <strong>Agent representation:</strong> You can use the app with an agent by adding their contact information.
                </li>
                <li>
                  <strong>Experience level:</strong> Selfcast welcomes both professionals and newcomers.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact}>
          <h2>Need More Help?</h2>
          <p>
            If you didn't find the help you were looking for, our support team is here to assist you. We're committed to providing you with the best possible support experience.
          </p>
          <Link href="mailto:support@selfcast.com" className={styles.contactButton}>
            Contact Support
          </Link>
        </section>

        {/* Feedback Section */}
        <section className={styles.section}>
          <h2>Your Feedback Matters</h2>
          <p>
            We're constantly striving to improve our support services to better meet your needs. If you have any feedback or suggestions on how we can enhance your experience, please don't hesitate to let us know. Your input is invaluable to us as we continue to refine and optimize our support resources.
          </p>
          <p>
            Thank you for choosing Selfcast. We're committed to providing you with the best possible support experience and ensuring your satisfaction with our products and services.
          </p>
        </section>
      </div>
    </div>
  )
} 