// app/page.tsx
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { FaStar, FaCloudDownloadAlt, FaExchangeAlt, FaStar as FaStarIcon } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>CASTING MADE EASY</h1>
            <div className={styles.buttons}>
              <Link href="/talents">
                <button className={styles.primary}>For Talents</button>
              </Link>
              <Link href="/producers">
                <button className={styles.primary}>For Producers</button>
              </Link>
            </div>
            <div className={styles.appStoreButtons}>
              <a href="https://apps.apple.com/app/selfcast" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/apple.png"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.selfcast" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/google.png"
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
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FaCloudDownloadAlt />
            </div>
            <div className={styles.statNumber}>+200M</div>
            <div className={styles.statLabel}>Downloads</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FaExchangeAlt />
            </div>
            <div className={styles.statNumber}>+480M</div>
            <div className={styles.statLabel}>Transactions</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FaStarIcon />
            </div>
            <div className={styles.statNumber}>+180M</div>
            <div className={styles.statLabel}>Ratings</div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className={styles.blogSection}>
        <div className={styles.blogHeader}>
          <h2>Caring is the new marketing</h2>
          <p>
            The Selfcast blog is the best place to read about the latest casting insights,
            trends and more. See who's joining the community, read about how our community
            are increasing their casting success and lot's more.
          </p>
        </div>

        <div className={styles.blogGrid}>
          <article className={styles.blogCard}>
            <Image
                src="/blog/streamlined-processes.jpg"
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
                src="/blog/safeguarding.jpg"
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
                src="/blog/membership-model.jpg"
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
              <h2>Streamlined Talent Management</h2>
              <p>
                Take control of your talent pool with our comprehensive management system.
                Organize profiles, schedule auditions, and communicate seamlessly with your
                team and talents.
              </p>
              <ul className={styles.featureList}>
                <li>Centralized talent database</li>
                <li>Automated scheduling tools</li>
                <li>Integrated messaging system</li>
                <li>Performance analytics</li>
              </ul>
              <Link href="/talent-management" className={styles.learnMore}>
                Learn More
              </Link>
            </div>
            <div className={styles.featureImage}>
              <Image
                  src="/features/talent-management.jpg"
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
          <h2>What people say about us?</h2>
          <p>Hear from our satisfied customers</p>
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
              "I feel very secure when using your services. Your customer care team is very enthusiastic and the driver is always on time."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                <Image
                  src="/testimonials/charlie.jpg"
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
              "The platform is incredibly user-friendly and has helped me land several great roles. The team is always responsive and helpful."
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
                <p>From Los Angeles, US</p>
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
              "As a producer, finding the right talent has never been easier. The filtering system and profile verification make the process seamless."
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
                <p>From Chicago, US</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section - Image Left */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={styles.featureContent}>
            <div className={styles.featureImage}>
              <Image
                  src="/features/casting-platform.jpg"
                  alt="Modern Casting Platform"
                  width={600}
                  height={450}
                  quality={95}
                  priority
              />
            </div>
            <div className={styles.featureText}>
              <h2>Modern Casting Platform</h2>
              <p>
                Transform your casting workflow with our intuitive platform. From talent
                discovery to final selection, manage everything in one place with our
                advanced tools and analytics.
              </p>
              <ul className={styles.featureList}>
                <li>Advanced talent search and filtering</li>
                <li>Real-time communication tools</li>
                <li>Digital portfolio management</li>
                <li>Smart scheduling system</li>
              </ul>
              <Link href="/features" className={styles.learnMore}>
                Explore Features
              </Link>
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
            <Image src="/clients/client1.png" alt="Client Logo" width={120} height={60} />
            <Image src="/clients/client2.png" alt="Client Logo" width={120} height={60} />
            <Image src="/clients/client3.png" alt="Client Logo" width={120} height={60} />
            <Image src="/clients/client4.png" alt="Client Logo" width={120} height={60} />
            <Image src="/clients/client5.png" alt="Client Logo" width={120} height={60} />
            <Image src="/clients/client6.png" alt="Client Logo" width={120} height={60} />
          </div>
        </div>
      </section>
    </>
  )
}
