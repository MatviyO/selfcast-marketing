import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Selfcast',
        short_name: 'Selfcast',
        description: 'The #1 casting app for talents and producers.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#D00115',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
