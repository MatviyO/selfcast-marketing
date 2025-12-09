import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://selfcast.com'

    // Static routes
    const routes = [
        '',
        '/about',
        '/producers',
        '/talents',
        '/blog',
        '/contact',
        '/support',
        '/privacy-policy',
        '/terms-of-use',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
