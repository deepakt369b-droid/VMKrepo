export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    stats: { label: string; value: string }[];
    image: string;
    badge: string;
}

export const PROJECT_DATA: Project[] = [
    {
        id: 1,
        title: 'Burj Al Noor Residences',
        category: 'Luxury Residential',
        description: 'A 32-story high-rise complex featuring 240 premium apartments with state-of-the-art amenities, completed on schedule with full Dubai Municipality approvals.',
        stats: [
            { label: 'Area', value: '180,000 sqft' },
            { label: 'Duration', value: '28 Months' },
            { label: 'Floors', value: '32' },
        ],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        badge: 'Completed',
    },
    {
        id: 2,
        title: 'Emerald Business Hub',
        category: 'Commercial',
        description: 'A premium Grade-A office development in DIFC, featuring sustainable smart-building tech and fully approved interior fit-out for multiple anchor tenants.',
        stats: [
            { label: 'Area', value: '95,000 sqft' },
            { label: 'Duration', value: '18 Months' },
            { label: 'Floors', value: '14' },
        ],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        badge: 'Featured',
    },
    {
        id: 3,
        title: 'Al Barsha Villa Complex',
        category: 'Private Villas',
        description: 'A bespoke collection of 20 luxury villas with private pools and landscaped gardens, navigating complex authority approvals from concept to handover.',
        stats: [
            { label: 'Villas', value: '20 Units' },
            { label: 'Duration', value: '24 Months' },
            { label: 'Area', value: '5 Acres' },
        ],
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
        badge: 'Completed',
    },
];
