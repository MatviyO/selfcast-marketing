'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <Image src="/logo.svg" alt="Selfcast" width={120} height={24} />
                </Link>

                <input
                    type="checkbox"
                    id="menuToggle"
                    className={styles.toggle}
                    checked={isMenuOpen}
                    onChange={(e) => setIsMenuOpen(e.target.checked)}
                    aria-hidden="true"
                />

                <label htmlFor="menuToggle" className={styles.burger}>
                    <span />
                    <span />
                    <span />
                </label>

                <nav className={styles.nav}>
                    {[
                        ['Producers', '/producers'],
                        ['Talents', '/talents'],
                        ['Blog', '/blog'],
                        ['About', '/about'],
                        ['Support', '/support'],
                    ].map(([label, href]) => (
                        <Link key={href} href={href} className={styles.navLink} onClick={closeMenu}>
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Contact button */}
                <Link href="/contact" className={styles.contactButton} onClick={closeMenu}>
                    Contact Us
                </Link>
            </div>
        </header>
    )
}
