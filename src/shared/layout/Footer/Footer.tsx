import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerColumns}>
                    {/* Categories Column */}
                    <div className={styles.footerColumn}>
                        <h3>Categories</h3>
                        <nav>
                            <Link href="/user-interface">User Interface</Link>
                            <Link href="/user-experience">User Experience</Link>
                            <Link href="/digital-media">Digital Media</Link>
                            <Link href="/lifestyle">Lifestyle</Link>
                        </nav>
                    </div>

                    {/* Product Column */}
                    <div className={styles.footerColumn}>
                        <h3>Product</h3>
                        <nav>
                            <Link href="/pricing">Pricing</Link>
                            <Link href="/overview">Overview</Link>
                            <Link href="/browse">Browse <span className={styles.beta}>BETA</span></Link>
                            <Link href="/accessibility">Accessibility</Link>
                        </nav>
                    </div>

                    {/* Solutions Column */}
                    <div className={styles.footerColumn}>
                        <h3>Solutions</h3>
                        <nav>
                            <Link href="/brainstorming">Brainstorming</Link>
                            <Link href="/ideation">Ideation</Link>
                            <Link href="/wireframing">Wireframing</Link>
                            <Link href="/research">Research</Link>
                        </nav>
                    </div>

                    {/* Resources Column */}
                    <div className={styles.footerColumn}>
                        <h3>Resources</h3>
                        <nav>
                            <Link href="/help">Help Center</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/tutorials">Tutorials</Link>
                            <Link href="/faqs">FAQs</Link>
                        </nav>
                    </div>

                    {/* Support Column */}
                    <div className={styles.footerColumn}>
                        <h3>Support</h3>
                        <nav>
                            <Link href="/contact">Contact Us</Link>
                            <Link href="/developers">Developers</Link>
                            <Link href="/documentation">Documentation</Link>
                            <Link href="/integrations">Integrations</Link>
                        </nav>
                    </div>

                    {/* Company Column */}
                    <div className={styles.footerColumn}>
                        <h3>Company</h3>
                        <nav>
                            <Link href="/about">About</Link>
                            <Link href="/press">Press</Link>
                            <Link href="/events">Events</Link>
                            <Link href="/request-demo" className={styles.requestDemo}>
                                Request Demo <span>→</span>
                            </Link>
                        </nav>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.footerLeft}>
                        <Link href="/" className={styles.logo}>
                            <Image src="/logo.svg" alt="Selfcast" width={120} height={24} />
                        </Link>
                        <nav>
                            <Link href="/terms">Terms of Service</Link>
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/cookies">Manage Cookies</Link>
                        </nav>
                    </div>

                    <div className={styles.footerRight}>
                        <div className={styles.socialLinks}>
                            <a href="https://youtube.com/selfcast" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                            <a href="https://facebook.com/selfcast" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com/selfcast" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com/selfcast" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com/company/selfcast" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
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
                </div>
            </div>
        </footer>
    )
}
