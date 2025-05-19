'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { FaSearch } from 'react-icons/fa'

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    excerpt: 'Learn how OneRen revolutionized their safeguarding processes using innovative solutions and best practices.',
    image: '/pedroquintela.jpg',
    category: 'Case Study',
    date: 'March 15, 2024',
    slug: 'streamlined-processes'
  },
  {
    id: 2,
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    excerpt: 'A comprehensive guide to understanding and managing safeguarding responsibilities in the entertainment industry.',
    image: '/pedroquintela.jpg',
    category: 'Guide',
    date: 'March 12, 2024',
    slug: 'safeguarding-responsibilities'
  },
  {
    id: 3,
    title: 'Revamping the Membership Model with Triathlon Australia',
    excerpt: 'Discover how Triathlon Australia transformed their membership model to better serve their community.',
    image: '/pedroquintela.jpg',
    category: 'Case Study',
    date: 'March 10, 2024',
    slug: 'membership-model'
  },
  {
    id: 4,
    title: 'The Future of Digital Casting: Trends to Watch',
    excerpt: 'Explore the emerging trends shaping the future of digital casting and talent management.',
    image: '/pedroquintela.jpg',
    category: 'Industry Insights',
    date: 'March 8, 2024',
    slug: 'digital-casting-trends'
  },
  {
    id: 5,
    title: 'How to Prepare for Your First Casting Call',
    excerpt: 'Essential tips and tricks to help you nail your first casting call and make a lasting impression.',
    image: '/pedroquintela.jpg',
    category: 'Career Tips',
    date: 'March 5, 2024',
    slug: 'first-casting-preparation'
  },
  {
    id: 6,
    title: 'The Rise of Virtual Auditions',
    excerpt: 'How technology is transforming the audition process and what it means for talents and producers.',
    image: '/pedroquintela.jpg',
    category: 'Industry Insights',
    date: 'March 3, 2024',
    slug: 'virtual-auditions'
  },
  {
    id: 7,
    title: 'Building Your Professional Portfolio',
    excerpt: 'A step-by-step guide to creating a compelling portfolio that gets you noticed by casting directors.',
    image: '/pedroquintela.jpg',
    category: 'Guide',
    date: 'March 1, 2024',
    slug: 'portfolio-building'
  },
  {
    id: 8,
    title: 'Success Story: From Extra to Lead Role',
    excerpt: 'An inspiring journey of persistence and growth in the entertainment industry.',
    image: '/pedroquintela.jpg',
    category: 'Case Study',
    date: 'February 28, 2024',
    slug: 'extra-to-lead'
  },
  {
    id: 9,
    title: 'Understanding Acting Techniques',
    excerpt: 'A deep dive into various acting methods and how to apply them in your performances.',
    image: '/pedroquintela.jpg',
    category: 'Guide',
    date: 'February 25, 2024',
    slug: 'acting-techniques'
  },
  {
    id: 10,
    title: 'Networking in the Entertainment Industry',
    excerpt: 'How to build and maintain professional relationships that advance your career.',
    image: '/pedroquintela.jpg',
    category: 'Career Tips',
    date: 'February 22, 2024',
    slug: 'networking-tips'
  },
  {
    id: 11,
    title: 'The Impact of AI on Casting',
    excerpt: 'Exploring how artificial intelligence is changing the casting landscape.',
    image: '/pedroquintela.jpg',
    category: 'Industry Insights',
    date: 'February 20, 2024',
    slug: 'ai-impact'
  },
  {
    id: 12,
    title: 'Mastering Self-Tape Auditions',
    excerpt: 'Technical and performance tips for creating professional self-tape auditions.',
    image: '/pedroquintela.jpg',
    category: 'Guide',
    date: 'February 18, 2024',
    slug: 'self-tape-mastery'
  },
  {
    id: 13,
    title: 'International Casting Opportunities',
    excerpt: 'How to find and apply for casting calls worldwide using Selfcast.',
    image: '/pedroquintela.jpg',
    category: 'Career Tips',
    date: 'February 15, 2024',
    slug: 'international-opportunities'
  },
  {
    id: 14,
    title: 'The Evolution of Commercial Casting',
    excerpt: 'How commercial casting has changed and what it means for modern actors.',
    image: '/pedroquintela.jpg',
    category: 'Industry Insights',
    date: 'February 12, 2024',
    slug: 'commercial-evolution'
  },
  {
    id: 15,
    title: 'Success Story: Revolutionizing Theater Casting',
    excerpt: 'How a major theater company streamlined their casting process with Selfcast.',
    image: '/pedroquintela.jpg',
    category: 'Case Study',
    date: 'February 10, 2024',
    slug: 'theater-revolution'
  },
  {
    id: 16,
    title: 'Managing Your Online Presence',
    excerpt: 'Tips for maintaining a professional social media presence as a performer.',
    image: '/pedroquintela.jpg',
    category: 'Guide',
    date: 'February 8, 2024',
    slug: 'online-presence'
  },
  {
    id: 17,
    title: 'Understanding Casting Contracts',
    excerpt: 'A comprehensive guide to reading and understanding casting contracts.',
    image: '/pedroquintela.jpg',
    category: 'Guide',
    date: 'February 5, 2024',
    slug: 'contract-guide'
  },
  {
    id: 18,
    title: 'The Future of Reality TV Casting',
    excerpt: 'Trends and predictions for reality TV casting in the coming years.',
    image: '/pedroquintela.jpg',
    category: 'Industry Insights',
    date: 'February 3, 2024',
    slug: 'reality-tv-future'
  },
  {
    id: 19,
    title: 'Breaking Into Voice Acting',
    excerpt: 'Everything you need to know about starting a career in voice acting.',
    image: '/pedroquintela.jpg',
    category: 'Career Tips',
    date: 'February 2, 2024',
    slug: 'voice-acting-guide'
  },
  {
    id: 20,
    title: 'Building a Successful Career in the Entertainment Industry',
    excerpt: 'Expert tips and strategies for developing a thriving career in entertainment.',
    image: '/pedroquintela.jpg',
    category: 'Career Tips',
    date: 'February 1, 2024',
    slug: 'career-success'
  }
]

const categories = ['All', 'Case Study', 'Guide', 'Industry Insights', 'Career Tips', 'News']

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 20

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, activeCategory])

  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Selfcast Blog</h1>
          <p>
            Stay up to date with the latest casting insights, industry trends, and success stories
            from our global community.
          </p>
        </header>

        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search articles..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.filterTags}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.tag} ${category === activeCategory ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.blogGrid}>
          {currentPosts.map((post, index) => (
            <article key={post.id} className={styles.blogCard} style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className={styles.blogImage}
              />
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageButton}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ←
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={`${styles.pageButton} ${currentPage === i + 1 ? styles.active : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={styles.pageButton}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
