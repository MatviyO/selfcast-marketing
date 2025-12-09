import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { getTodaysTestimonials } from '@/shared/utils/testimonials'

export default function Home() {
  const startDate = new Date('2025-07-01')
  const now = new Date()
  const daysSinceStart = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

  const downloads = 90000 + daysSinceStart * 100
  const castings = 70000 + daysSinceStart * 20
  const producers = 500 + Math.floor((daysSinceStart * 10) / 7)

  const formatStat = (value: number) => value.toLocaleString('en-US')
  const todaysTestimonials = getTodaysTestimonials(3)

  return (
    <>

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Get Discovered. Get Booked.  </h1>
            <h2>CASTING MADE EASY</h2>
            <div className={styles.buttons}>
              <Link href="/talents" className={styles.primary}>
                I’m a Talent
              </Link>
              <Link href="/producers" className={styles.primary}>
                I’m a Producer
              </Link>
            </div>
            <p className={styles.description}>For Talents – Download the App to get started</p>
            <div className={styles.appStoreButtons}>
              <a className={styles.apple} href="https://apps.apple.com/us/app/selfcast/id1467179570?ignmpt=uo%3D4" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                <Image
                  src="/apple.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.selfcast" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                <Image
                  src="/google.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                />
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/home.png"
              alt="Smiling woman using Selfcast app"
              width={600}
              height={800}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.blogHeader}>
          <h3>Join Selfcast users worldwide booking real jobs in film, TV, and commercials</h3>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon} aria-hidden="true">
              🎬
            </div>
            <div className={styles.statNumber}>{formatStat(downloads)}+</div>
            <div className={styles.statLabel}>All-time downloads</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon} aria-hidden="true">
              🎭
            </div>
            <div className={styles.statNumber}>{formatStat(castings)}+</div>
            <div className={styles.statLabel}>Roles posted</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon} aria-hidden="true">
              🤝
            </div>
            <div className={styles.statNumber}>{formatStat(producers)}+</div>
            <div className={styles.statLabel}>Verified producers</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon} aria-hidden="true">
              🌍
            </div>
            <div className={styles.statNumber}>157+</div>
            <div className={styles.statLabel}>Countries with users</div>
          </div>
        </div>
      </section>

      {/* Feature Section - Split: For Talents (Left) & For Producers (Right) */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={styles.splitFeatureContent}>
            {/* For Talents - Left Side */}
            <div className={styles.featureText}>
              <span className={styles.sectionLabel}>For Talents</span>
              <h2>Build Your Career with Selfcast</h2>
              <p>
                Take control of your casting journey. Create your profile, apply for roles, and get booked — all from one app.
              </p>
              <ul className={styles.featureList}>
                <li>📸 Create a Standout Profile
                  Upload your best photos, videos, and experience to get noticed.</li>
                <li>🎬 Apply for Real Roles
                  Browse castings in film, TV, commercials, and more – and apply with one tap.</li>
                <li>📱 Manage Everything from the App
                  Track your applications, update your profile, and get alerts when you&apos;re selected.</li>
                <li>🌍 Get Discovered Worldwide
                  Be seen by producers across 150+ countries – no agents or agencies required.</li>
              </ul>
              <Link href="/talents" className={styles.learnMore}>
                Learn more for Talents
              </Link>
            </div>

            {/* For Producers - Right Side */}
            <div className={styles.featureText}>
              <span className={styles.sectionLabel}>For Producers</span>
              <h2>Casting Made Easy</h2>
              <p className={styles.producerSubheadline}>
                Built by real casters – trusted by top producers.
              </p>
              <p>
                Book talents in minutes. No agents. No waiting.
              </p>
              <ul className={styles.featureList}>
                <li>Create roles, notify selected talents, get replies instantly.</li>
                <li>Book the right talents in just minutes.</li>
              </ul>
              <p className={styles.producerQuestion}>
                Want full control over your casting process?
              </p>
              <Link href="/producers" className={styles.learnMore}>
                Learn how Selfcast works →
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.testimonials}>
        <div className={styles.testimonialHeader}>
          <h2 className={styles.textWhite}>Hear from our satisfied customers</h2>
          <p className={styles.textWhite}>Trusted by over 60,000+ talents worldwide</p>
        </div>
        <div className={styles.testimonialGrid}>
          {todaysTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.rating}>{testimonial.rating}.0</div>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              {testimonial.source === 'trustpilot' && (
                <div className={styles.trustpilotBadge}>
                  <span>Trustpilot</span>
                </div>
              )}
              <p className={styles.testimonialText}>
                {testimonial.text}
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.authorInfo}>
                  <h3>{testimonial.author}</h3>
                  <p>From {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className={styles.clients}>
        <div className={styles.container}>
          <div className={styles.clientsHeader}>
            <h2>Our Clients</h2>
            <p>We have been working with major production companies and studios worldwide</p>
          </div>
          <div className={styles.clientLogos}>
            <Image
              width={1920}
              height={942}
              src="/home/partners.png"
              alt="Logos of our partner production companies"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Selfcast',
            applicationCategory: 'EntertainmentApplication',
            operatingSystem: 'iOS, Android',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '60000',
            },
            author: {
              '@type': 'Organization',
              name: 'Selfcast',
              url: 'https://selfcast.com',
            },
          }),
        }}
      />
    </>
  )
}
