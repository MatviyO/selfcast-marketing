import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerColumns}>
                    {/* Product/Explore Column */}
                    <div className={styles.footerColumn}>
                        <h3>Explore</h3>
                        <nav>
                            <Link href="/">Home</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/producers">Producers</Link>
                            <Link href="/talents">Talents</Link>
                        </nav>
                    </div>
                    <div className={styles.footerColumn}>
                        <h3>Business</h3>
                        <nav>
                            <Link href="/producers">Producers</Link>
                            <Link href="/talents">Talents</Link>
                        </nav>
                    </div>
                    {/* Company Column */}
                    <div className={styles.footerColumn}>
                        <h3>Company</h3>
                        <nav>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/support">Support</Link>
                        </nav>
                    </div>
                    {/* Legal Column */}
                    <div className={styles.footerColumn}>
                        <h3>Legal</h3>
                        <nav>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/terms-of-use">Terms of Use</Link>
                        </nav>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.footerLeft}>
                        <Link href="/" className={styles.logo}>
                            <Image src="/logo.svg" alt="Selfcast" width={120} height={24} />
                        </Link>
                        <nav>
                            <Link href="/terms-of-use">Terms of Service</Link>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </nav>
                    </div>

                    <div className={styles.footerRight}>
                        <div className={styles.socialLinks}>
                            <a href="https://www.facebook.com/selfcastApp" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://www.youtube.com/selfcast" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                            <a href="https://www.instagram.com/selfcastapp" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/company/selfcast" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>

                        <div className={styles.appStoreButtons}>
                            <a href="https://apps.apple.com/us/app/selfcast/id1467179570?ignmpt=uo%3D4" target="_blank" rel="noopener noreferrer">
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
                </div>
            </div>
        </footer>
    )
}
