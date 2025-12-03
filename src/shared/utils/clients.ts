export interface Client {
  id: string;
  name: string;
  logo: string;
  website: string;
  alt: string;
  campaignVideoUrl?: string; // For future use
}

export const CLIENTS: Client[] = [
  {
    id: '1',
    name: 'Client 1',
    logo: '/logos/client1.svg',
    website: 'https://example.com',
    alt: 'Client 1 - Production Company',
  },
  // Add more clients here as logos become available
  // Example structure:
  // {
  //   id: '2',
  //   name: 'Client 2',
  //   logo: '/logos/client2.svg',
  //   website: 'https://client2.com',
  //   alt: 'Client 2 - Film Production Studio',
  //   campaignVideoUrl: 'https://youtube.com/watch?v=...', // Optional
  // },
];

