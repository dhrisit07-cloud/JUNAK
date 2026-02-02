export interface Category {
    id: string;
    title: string;
    icon: string; // Lucide icon name or image asset
    description: string;
}

export const CATEGORIES: Category[] = [
    {
        id: 'temples',
        title: 'Temples',
        icon: 'landmark',
        description: 'Spiritual journeys & heritage sites',
    },
    {
        id: 'riverfront',
        title: 'Riverfront',
        icon: 'waves',
        description: 'Brahmaputra sunsets & ghats',
    },
    {
        id: 'crafts',
        title: 'Local Crafts',
        icon: 'palette',
        description: 'Weaving, pottery & bamboo',
    },
    {
        id: 'tea',
        title: 'Tea Trails',
        icon: 'coffee',
        description: 'Assam tea tasting & history',
    },
    {
        id: 'neighborhood',
        title: 'Neighborhoods',
        icon: 'map-pin',
        description: 'Heritage walks & local markets',
    },
];
