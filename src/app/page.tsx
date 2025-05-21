import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Get Discovered. Get Booked.  </h1>
            <h3>CASTING MADE EASY</h3>
            <div className={styles.buttons}>
              <Link href="/talents">
                <button className={styles.primary}>I’m a Talent</button>
              </Link>
              <Link href="/producers">
                <button className={styles.primary}>I’m a Producer</button>
              </Link>
            </div>
            <h5 className={styles.description}>For Talents – Download the App to get started</h5>
            <div className={styles.appStoreButtons}>
              <a className={styles.apple} href="https://apps.apple.com/us/app/selfcast/id1467179570?ignmpt=uo%3D4" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/apple.svg"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.selfcast" target="_blank" rel="noopener noreferrer">
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
          <h5>Join Selfcast users worldwide booking real jobs in film, TV, and commercials.</h5>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              🎬
            </div>
            <div className={styles.statNumber}>🎬90,000+</div>
            <div className={styles.statLabel}>Downloads</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              🎭
            </div>
            <div className={styles.statNumber}>20,000+</div>
            <div className={styles.statLabel}>Castings</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              🤝
            </div>
            <div className={styles.statNumber}>2,000+</div>
            <div className={styles.statLabel}>Producers</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              🌍
            </div>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Countries</div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className={styles.blogSection}>
        <div className={styles.blogHeader}>
          <h2>Caring is the new marketing</h2>
          <p>
            The Selfcast blog is the best place to read about the latest casting insights,
            trends and more. See who&apos;s joining the community, read about how our community
            are increasing their casting success and lot&apos;s more.
          </p>
        </div>

        <div className={styles.blogGrid}>
          <article className={styles.blogCard}>
            <Image
                src="/pedroquintela.jpg"
                alt="Person using laptop"
                width={400}
                height={200}
                className={styles.blogImage}
            />
            <div className={styles.blogContent}>
              <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
              <Link href="/blog/streamlined-processes" className={styles.readMore}>
                Read more →
              </Link>
            </div>
          </article>

          <article className={styles.blogCard}>
            <Image
                src="/pedroquintela.jpg"
                alt="Laptop with analytics"
                width={400}
                height={200}
                className={styles.blogImage}
            />
            <div className={styles.blogContent}>
              <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
              <Link href="/blog/safeguarding-responsibilities" className={styles.readMore}>
                Read more →
              </Link>
            </div>
          </article>

          <article className={styles.blogCard}>
            <Image
                src="/pedroquintela.jpg"
                alt="Person working on laptop"
                width={400}
                height={200}
                className={styles.blogImage}
            />
            <div className={styles.blogContent}>
              <h3>Revamping the Membership Model with Triathlon Australia</h3>
              <Link href="/blog/membership-model" className={styles.readMore}>
                Read more →
              </Link>
            </div>
          </article>
        </div>
      </section>
      {/* Feature Section - Image Right */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={`${styles.featureContent} ${styles.imageRight}`}>
            <div className={styles.featureText}>
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
                  Track your applications, update your profile, and get alerts when you're selected.</li>
                <li>🌍 Get Discovered Worldwide
                  Be seen by producers across 150+ countries – no agents or agencies required.</li>
              </ul>
              <Link href="/talents" className={styles.learnMore}>
                Learn More
              </Link>
            </div>
            <div className={styles.featureImage}>
              <Image
                  src="/home/Baggrund.png"
                  alt="Talent Management System"
                  width={600}
                  height={450}
                  quality={95}
                  priority
              />
            </div>
          </div>
        </div>
      </section>


      <section className={styles.testimonials}>
        <div className={styles.testimonialHeader}>
          <h2 className={styles.textWhite}>What people say about us?</h2>
          <p className={styles.textWhite}>Hear from our satisfied customers</p>
        </div>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.rating}>5.0</div>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className={styles.testimonialText}>
              I feel very secure when using your services. Your customer care team is very enthusiastic and the driver is always on time.
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                <Image
                  src="/testimonials/mike.jpg"
                  alt="Charlie Johnson"
                  width={48}
                  height={48}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4>Charlie Johnson</h4>
                <p>From New York, US</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.rating}>5.0</div>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className={styles.testimonialText}>
              The platform is incredibly user-friendly and has helped me land several great roles. The team is always responsive and helpful.
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                <Image
                  src="/testimonials/sarah.jpg"
                  alt="Sarah Wilson"
                  width={48}
                  height={48}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4>Sarah Wilson</h4>
                <p>From Copenhagen K, Denmark</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.rating}>5.0</div>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className={styles.testimonialText}>
              As a producer, finding the right talent has never been easier. The filtering system and profile verification make the process seamless.
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                <Image
                  src="/testimonials/michael.jpg"
                  alt="Michael Chen"
                  width={48}
                  height={48}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4>Michael Chen</h4>
                <p>From Copenhagen K, Denmark</p>
              </div>
            </div>
          </div>
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
            <Image width={1300} height={600} src="/home/partners.png" alt="Client Logo"/>
          </div>
        </div>
      </section>
    </>
  )
}
