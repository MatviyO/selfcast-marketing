import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <Image src="/logo.svg" alt="Selfcast" width={120} height={24} />
                </Link>

                {/* Цей чекбокс керує відкриттям/закриттям меню */}
                <input
                    type="checkbox"
                    id="menuToggle"
                    className={styles.toggle}
                    aria-hidden="true"
                />

                {/* Мітка-бургер */}
                <label htmlFor="menuToggle" className={styles.burger}>
                    <span />
                    <span />
                    <span />
                </label>

                {/* Навігація */}
                <nav className={styles.nav}>
                    {[
                        ['Producers', '/producers'],
                        ['Talents', '/talents'],
                        ['Blog', '/blog'],
                        ['About', '/about'],
                        ['Support', '/support'],
                    ].map(([label, href]) => (
                        <Link key={href} href={href} className={styles.navLink}>
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Contact button */}
                <Link href="/contact" className={styles.contactButton}>
                    Contact Us
                </Link>
            </div>
        </header>
    )
}
