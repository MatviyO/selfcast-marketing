import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { FaCalendar, FaUser, FaTag, FaShare, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

// This would typically come from a CMS or API
const blogPost = {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    excerpt: "Learn how OneRen revolutionized their safeguarding processes through digital transformation and community engagement.",
    author: "Maria Christina",
    date: "March 15, 2024",
    category: "Case Study",
    readTime: "5 min read",
    image: "/blog/streamlined-processes.jpg",
    content: `
        <p>In today's digital age, safeguarding processes have become increasingly important for organizations working with talents and performers. OneRen, a leading performing arts organization, faced challenges in managing their safeguarding procedures efficiently while maintaining the highest standards of security and privacy.</p>

        <h2>The Challenge</h2>
        <p>Before implementing Selfcast, OneRen struggled with:</p>
        <ul>
            <li>Manual documentation processes</li>
            <li>Inconsistent reporting methods</li>
            <li>Time-consuming verification procedures</li>
            <li>Limited visibility across departments</li>
        </ul>

        <h2>The Solution</h2>
        <p>By partnering with Selfcast, OneRen was able to:</p>
        <ul>
            <li>Digitize their entire safeguarding workflow</li>
            <li>Implement automated verification systems</li>
            <li>Create standardized reporting templates</li>
            <li>Establish real-time monitoring capabilities</li>
        </ul>

        <h2>The Results</h2>
        <p>The implementation of Selfcast's platform led to:</p>
        <ul>
            <li>50% reduction in processing time</li>
            <li>90% improvement in reporting accuracy</li>
            <li>100% compliance with regulatory requirements</li>
            <li>Increased stakeholder satisfaction</li>
        </ul>

        <blockquote>
            "Selfcast has transformed how we manage our safeguarding processes. The platform's intuitive design and robust features have made it easier for our team to maintain the highest standards of safety and security."
            <cite>- Sarah Johnson, Head of Operations at OneRen</cite>
        </blockquote>
    `
}

export default function BlogPost() {
    return (
        <article className={styles.blogPost}>
            <div className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.metadata}>
                        <div className={styles.category}>{blogPost.category}</div>
                        <div className={styles.readTime}>{blogPost.readTime}</div>
                    </div>
                    <h1>{blogPost.title}</h1>
                    <p className={styles.excerpt}>{blogPost.excerpt}</p>
                    <div className={styles.authorInfo}>
                        <div className={styles.author}>
                            <FaUser />
                            <span>{blogPost.author}</span>
                        </div>
                        <div className={styles.date}>
                            <FaCalendar />
                            <span>{blogPost.date}</span>
                        </div>
                        <div className={styles.category}>
                            <FaTag />
                            <span>{blogPost.category}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.featuredImage}>
                <Image
                    src={blogPost.image}
                    alt={blogPost.title}
                    width={1200}
                    height={600}
                    priority
                />
            </div>

            <div className={styles.container}>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                
                <div className={styles.share}>
                    <span className={styles.shareLabel}>
                        <FaShare /> Share this article
                    </span>
                    <div className={styles.socialLinks}>
                        <a href={`https://twitter.com/intent/tweet?text=${blogPost.title}`} target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${blogPost.title}`} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div className={styles.navigation}>
                    <Link href="/blog" className={styles.backLink}>
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        </article>
    )
} 