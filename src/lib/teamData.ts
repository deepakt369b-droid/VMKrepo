export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    description: string;
    socials: { icon: string; link: string }[];
}

export const TEAM_DATA: TeamMember[] = [
    {
        "id": 1,
        "name": "Mohammed Al Hashmi",
        "role": "Founder & CEO",
        "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
        "description": "Over 20 years of experience in leading major construction projects across the UAE.",
        "socials": [
            {
                "icon": "linkedin",
                "link": "#"
            },
            {
                "icon": "twitter",
                "link": "#"
            }
        ]
    },
    {
        "id": 2,
        "name": "Sarah O’Connor",
        "role": "Head of Architecture",
        "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        "description": "Award-winning architect specializing in sustainable and luxury high-rise developments.",
        "socials": [
            {
                "icon": "linkedin",
                "link": "#"
            },
            {
                "icon": "dribbble",
                "link": "#"
            }
        ]
    },
    {
        "id": 3,
        "name": "Tariq Rahman",
        "role": "Chief Engineer",
        "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
        "description": "Expert in structural integrity and navigating complex Dubai Municipality regulations.",
        "socials": [
            {
                "icon": "linkedin",
                "link": "#"
            }
        ]
    }
];
