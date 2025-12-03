export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  author: string;
  location: string;
  image: string;
  source?: 'trustpilot' | 'internal';
  date?: string;
}

export const ALL_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    rating: 5,
    text: 'I feel very secure when using your services. Your customer care team is very enthusiastic and the driver is always on time.',
    author: 'Charlie Johnson',
    location: 'New York, US',
    image: '/testimonials/mike.jpg',
    source: 'internal',
  },
  {
    id: '2',
    rating: 5,
    text: 'The platform is incredibly user-friendly and has helped me land several great roles. The team is always responsive and helpful.',
    author: 'Sarah Wilson',
    location: 'Copenhagen K, Denmark',
    image: '/testimonials/sarah.jpg',
    source: 'internal',
  },
  {
    id: '3',
    rating: 5,
    text: 'As a producer, finding the right talent has never been easier. The filtering system and profile verification make the process seamless.',
    author: 'Michael Chen',
    location: 'Copenhagen K, Denmark',
    image: '/testimonials/michael.jpg',
    source: 'internal',
  },
  {
    id: '4',
    rating: 5,
    text: 'Selfcast has transformed how I manage my acting career. I can apply for roles directly and track everything in one place. Highly recommended!',
    author: 'Emma Thompson',
    location: 'London, UK',
    image: '/testimonials/mike.jpg',
    source: 'trustpilot',
  },
  {
    id: '5',
    rating: 5,
    text: 'Best casting platform I have used. The video audition feature is a game-changer and saves so much time for both talents and producers.',
    author: 'David Martinez',
    location: 'Barcelona, Spain',
    image: '/testimonials/sarah.jpg',
    source: 'trustpilot',
  },
  {
    id: '6',
    rating: 5,
    text: 'I love how easy it is to create my profile and showcase my work. The app is intuitive and I have already booked multiple jobs through it.',
    author: 'Sophie Laurent',
    location: 'Paris, France',
    image: '/testimonials/michael.jpg',
    source: 'internal',
  },
  {
    id: '7',
    rating: 5,
    text: 'As a casting director, Selfcast has streamlined our entire process. We can find and book talent in minutes instead of days.',
    author: 'James Anderson',
    location: 'Los Angeles, US',
    image: '/testimonials/mike.jpg',
    source: 'trustpilot',
  },
  {
    id: '8',
    rating: 5,
    text: 'The global reach is amazing. I have been discovered by producers from countries I never thought possible. This platform opens doors.',
    author: 'Maria Garcia',
    location: 'Madrid, Spain',
    image: '/testimonials/sarah.jpg',
    source: 'internal',
  },
  {
    id: '9',
    rating: 5,
    text: 'No more waiting for agents to respond. I can take control of my career and apply directly to roles that interest me. Fantastic platform!',
    author: 'Oliver Brown',
    location: 'Berlin, Germany',
    image: '/testimonials/michael.jpg',
    source: 'trustpilot',
  },
  {
    id: '10',
    rating: 5,
    text: 'The verification system gives me confidence that I am working with legitimate producers. Safety and professionalism are top priorities here.',
    author: 'Isabella Rossi',
    location: 'Milan, Italy',
    image: '/testimonials/mike.jpg',
    source: 'internal',
  },
  {
    id: '11',
    rating: 5,
    text: 'I have been using Selfcast for over a year and it keeps getting better. The updates are always thoughtful and improve the user experience.',
    author: 'Lucas Nielsen',
    location: 'Stockholm, Sweden',
    image: '/testimonials/sarah.jpg',
    source: 'trustpilot',
  },
  {
    id: '12',
    rating: 5,
    text: 'The video audition feature is brilliant. I can showcase my skills immediately and producers can see my work right away. Very efficient!',
    author: 'Amelia White',
    location: 'Sydney, Australia',
    image: '/testimonials/michael.jpg',
    source: 'internal',
  },
  {
    id: '13',
    rating: 5,
    text: 'As a producer, the direct communication with talents is invaluable. No middlemen, no delays, just efficient casting.',
    author: 'Robert Taylor',
    location: 'Toronto, Canada',
    image: '/testimonials/mike.jpg',
    source: 'trustpilot',
  },
  {
    id: '14',
    rating: 5,
    text: 'The profile customization options are excellent. I can really showcase my unique skills and experience in a professional way.',
    author: 'Chloe Dubois',
    location: 'Brussels, Belgium',
    image: '/testimonials/sarah.jpg',
    source: 'internal',
  },
  {
    id: '15',
    rating: 5,
    text: 'Selfcast has helped me build my portfolio and gain exposure internationally. The platform is user-friendly and the support team is great.',
    author: 'Noah Schmidt',
    location: 'Vienna, Austria',
    image: '/testimonials/michael.jpg',
    source: 'trustpilot',
  },
  {
    id: '16',
    rating: 5,
    text: 'I appreciate the transparency of the platform. Everything is clear, from application status to contract details. Very professional.',
    author: 'Lily Chen',
    location: 'Singapore',
    image: '/testimonials/mike.jpg',
    source: 'internal',
  },
  {
    id: '17',
    rating: 5,
    text: 'The mobile app is fantastic. I can apply for roles and manage my career on the go. Perfect for busy actors like me.',
    author: 'Ethan Williams',
    location: 'Dublin, Ireland',
    image: '/testimonials/sarah.jpg',
    source: 'trustpilot',
  },
  {
    id: '18',
    rating: 5,
    text: 'As a model, I love how I can showcase my portfolio and get discovered by top agencies and producers worldwide.',
    author: 'Zoe Anderson',
    location: 'Amsterdam, Netherlands',
    image: '/testimonials/michael.jpg',
    source: 'internal',
  },
  {
    id: '19',
    rating: 5,
    text: 'The notification system keeps me updated on all my applications. I never miss an opportunity thanks to the timely alerts.',
    author: 'Mason Lee',
    location: 'Tokyo, Japan',
    image: '/testimonials/mike.jpg',
    source: 'trustpilot',
  },
  {
    id: '20',
    rating: 5,
    text: 'Selfcast has revolutionized casting for our production company. We save time and money while finding better talent. Highly recommended!',
    author: 'Ava Johnson',
    location: 'Melbourne, Australia',
    image: '/testimonials/sarah.jpg',
    source: 'internal',
  },
];

/**
 * Get testimonials for today - rotates based on day of year
 * This ensures different testimonials are shown each day
 */
export function getTodaysTestimonials(count: number = 3): Testimonial[] {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 
    (1000 * 60 * 60 * 24)
  );
  
  const startIndex = dayOfYear % (ALL_TESTIMONIALS.length - count + 1);
  return ALL_TESTIMONIALS.slice(startIndex, startIndex + count);
}

