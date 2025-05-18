import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'About – Selfcast',
}

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <h1>Who are we?</h1>
          <p>
            Selfcast is founded by experienced people from the casting, model, film, and TV industry. Our mission is to modernize the industry and the way it works.
          </p>
        </div>

        {/* What is Selfcast Section */}
        <section className={styles.section}>
          <h2>What is Selfcast?</h2>
          <p>
            Selfcast is a platform that enables Talents – actors, models, dancers, extras, and many others – to connect with Producers in the film, TV, event, and advertising industry without any intermediary.
          </p>
          <p>
            We offer Talents to manage their own careers independently of agents and managers by working directly with the Producers.
          </p>
        </section>

        {/* Team Section */}
        <section className={styles.section}>
          <h2>Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamCardContent}>
                <h3>Maria Christina Jarltoft</h3>
                <h4>CEO, Founder and Director</h4>
                <p>
                  With over 25 years of industry experience, Maria Christina Riel Jarltoft is a visionary in casting direction. She has owned multiple production companies, producing shows, events, and commercials. For the past two decades, she has been connecting talented individuals with top producers and casting directors in film, television, and advertising worldwide.
                </p>
                <Link href="mailto:Maria.Christina@selfcast.com" className={styles.teamContact}>
                  Maria.Christina@selfcast.com
                </Link>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamCardContent}>
                <h3>Mads Korsgaard</h3>
                <h4>International Manager</h4>
                <p>
                  Mads trained at the Stockholm Academy of Dramatic Arts and The Royal College of Music. He has experience in film, TV, dubbing, theatre, musicals, opera, and as a TV presenter.
                </p>
                <Link href="mailto:Mads.Korsgaard@selfcast.com" className={styles.teamContact}>
                  Mads.Korsgaard@selfcast.com
                </Link>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamCardContent}>
                <h3>Camilla Cunha</h3>
                <h4>Partner Selfcast Nordic</h4>
                <p>
                  Sweden, Norway, Finland, Estonia, Latvia and Lithuania
                </p>
                <Link href="mailto:Camilla.Cunha@selfcast.com" className={styles.teamContact}>
                  Camilla.Cunha@selfcast.com
                </Link>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamCardContent}>
                <h3>Damla Yolac</h3>
                <h4>Director Selfcast Turkey</h4>
                <Link href="mailto:Damla.Yolac@selfcast.com" className={styles.teamContact}>
                  Damla.Yolac@selfcast.com
                </Link>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamCardContent}>
                <h3>Diego Grinblat</h3>
                <h4>Partner Selfcast Spain</h4>
                <Link href="mailto:Spain@selfcast.com" className={styles.teamContact}>
                  Spain@selfcast.com
                </Link>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamCardContent}>
                <h3>Marinela Djekic</h3>
                <h4>Partner Selfcast Balkans</h4>
                <p>
                  Albania, Bosnia and Herzegovina, Bulgaria, Croatia, Greece, Kosovo, Montenegro, Macedonia, Romania, Serbia and Slovenia
                </p>
                <Link href="mailto:Balkans@selfcast.com" className={styles.teamContact}>
                  Balkans@selfcast.com
                </Link>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamCardContent}>
                <h3>Frederikke Blaagran</h3>
                <h4>Selfcast Germany</h4>
                <Link href="mailto:Germany@selfcast.com" className={styles.teamContact}>
                  Germany@selfcast.com
                </Link>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamCardContent}>
                <h3>Hakan Bicioglu</h3>
                <h4>Selfcast Turkey</h4>
                <Link href="mailto:Turkey@selfcast.com" className={styles.teamContact}>
                  Turkey@selfcast.com
                </Link>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamCardContent}>
                <h3>Hamide Kirlangic</h3>
                <h4>Selfcast Turkey</h4>
                <Link href="mailto:Turkey@selfcast.com" className={styles.teamContact}>
                  Turkey@selfcast.com
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className={styles.companyInfo}>
          <h2>Company Information</h2>
          <div className={styles.contactInfo}>
            <Link href="mailto:info@selfcast.com">info@selfcast.com</Link>
            <span>|</span>
            <Link href="tel:+4531399113">+45 31 399 113</Link>
          </div>
          <p>Selfcast ApS</p>
          <p>Store Kongensgade 25</p>
          <p>1264 Copenhagen K</p>
          <p>Denmark</p>
        </section>
      </div>
    </div>
  )
}
