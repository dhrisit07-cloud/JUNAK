export interface Destination {
    id: string;
    title: string;
    category: string;
    shortDesc: string;
    fullDesc: string;
    image: string; // URL for prototype
    rating: number;
    duration: string; // "2-3 hrs"
    price: number;
    location: string;
    vendor: {
        name: string;
        verified: boolean;
    };
}

export const DESTINATIONS: Destination[] = [
    {
        id: '1',
        title: 'Kamakhya Temple Walk',
        category: 'temples',
        shortDesc: 'Ancient Shakti Peeth exploration.',
        fullDesc: 'Experience the spiritual energy of Nilachal Hill. Guided walk through the temple complex explaining history, architecture, and rituals.',
        image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=600&auto=format&fit=crop', // Placeholder
        rating: 4.8,
        duration: '3 hrs',
        price: 500,
        location: 'Nilachal Hill',
        vendor: { name: 'Raju Guide', verified: true },
    },
    {
        id: '2',
        title: 'Brahmaputra Sunset Cruise',
        category: 'riverfront',
        shortDesc: 'Golden hour on the mighty river.',
        fullDesc: 'Private boat ride during sunset. Includes local snacks and stories of the river.',
        image: 'https://images.unsplash.com/photo-1596502282245-12a97aa64894?q=80&w=600&auto=format&fit=crop',
        rating: 4.9,
        duration: '2 hrs',
        price: 1200,
        location: 'Uzan Bazar Ghat',
        vendor: { name: 'River Queen Tours', verified: true },
    },
    {
        id: '3',
        title: 'Sualkuchi Silk Village',
        category: 'crafts',
        shortDesc: 'Manchester of the East.',
        fullDesc: 'Witness the magic of Muga and Pat silk weaving. Visit local family looms and buy direct from artisans.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_u2lUlgd9R-HVaDR_q_P8K_vX6vYhC0wWig&s',
        rating: 4.7,
        duration: '4 hrs',
        price: 800,
        location: 'Sualkuchi',
        vendor: { name: 'Lotus Weavers', verified: true },
    },
    {
        id: '4',
        title: 'Umananda Island Ferry',
        category: 'temples',
        shortDesc: 'Smallest inhabited river island.',
        fullDesc: 'Ferry ride to Peacock Island. Visit the Shiva temple and spot Golden Langurs.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gN7l9Z-yX5l6c0wWig&s',
        rating: 4.6,
        duration: '2.5 hrs',
        price: 300,
        location: 'Peacock Island',
        vendor: { name: 'City Ferries', verified: true },
    },
    {
        id: '5',
        title: 'Heritage Tea Tasting',
        category: 'tea',
        shortDesc: 'Sip the finest Assam brew.',
        fullDesc: 'A guided tasting session at a heritage bungalow. Learn about the tea making process.',
        image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=600&auto=format&fit=crop',
        rating: 4.9,
        duration: '1.5 hrs',
        price: 600,
        location: 'Pan Bazar',
        vendor: { name: 'Assam Tea House', verified: true },
    },
];
