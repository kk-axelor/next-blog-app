export type blog = {
    id: number,
    title: string,
    img: string[],
    desc: string,
    authorName: string,
    authorImg: string,
    pulishDate: string,
    categories: string[]
}

export const blogItems: blog[] = [
    {
        id: 1,
        title: "News title",
        img: [
            'https://img.freepik.com/premium-photo/rear-view-woman-walking-road-park-sunny-day_1048944-28013545.jpg'
        ],
        authorImg: "https://img.freepik.com/premium-psd/woman-with-her-arms-crossed-yellow-shirt-right_176841-44196.jpg",
        authorName: "Hanwean Wilson",
        desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam rerum atque officiis beatae nesciunt numquam .!",
        pulishDate: "17 june ,2021 am",
        categories: ["categories"]
    },

    {
        id: 2,
        title: "News title",
        img: [
            'https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?t=st=1718804507~exp=1718808107~hmac=c0c6469cdd008515e02f90061ad8189899008b68b9d68d49740e64079c7267e7&w=900',

        ],
        authorImg: "https://img.freepik.com/premium-psd/woman-with-her-arms-crossed-yellow-shirt-right_176841-44196.jpg",
        authorName: "Hanwean Wilson",
        desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam rerum atque officiis beatae nesciunt numquam .!",
        pulishDate: "17 june ,2021 am",
        categories: ["categories", 'categorie']
    },
    {
        id: 3,
        title: "News title",
        img: [
            'https://img.freepik.com/premium-photo/rear-view-woman-walking-road-park-sunny-day_1048944-28013545.jpg'
        ],
        authorImg: "https://img.freepik.com/premium-psd/woman-with-her-arms-crossed-yellow-shirt-right_176841-44196.jpg",
        authorName: "Hanwean Wilson",
        desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam rerum atque officiis beatae nesciunt numquam .!",
        pulishDate: "17 june ,2021 am",
        categories: ["categories", 'cateories', 'categorie']
    },
    {
        id: 4,
        title: "News title",
        img: [
            'https://img.freepik.com/free-vector/hand-drawn-music-notes-illustration_23-2151320658.jpg?t=st=1718804241~exp=1718807841~hmac=324fc915ba4ff565ee48d9f22f2aceae33646322a4550884b6ac047f9b6dbdcd&w=996',
        ],
        authorImg: "https://img.freepik.com/premium-psd/woman-with-her-arms-crossed-yellow-shirt-right_176841-44196.jpg",
        authorName: "Hanwean Wilson",
        desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam rerum atque officiis beatae nesciunt numquam .!",
        pulishDate: "17 june ,2021 am",
        categories: ["categories", 'cateories', 'categorie']
    }
    ,
    {
        id: 5,
        title: "News title",
        img: [
            'https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?t=st=1718804277~exp=1718807877~hmac=117230cebf28a3b1f6f37b8bd53ed7bb11ee0c360962ea7434147914f53c1c04&w=996',
        ],
        authorImg: "https://img.freepik.com/premium-psd/woman-with-her-arms-crossed-yellow-shirt-right_176841-44196.jpg",
        authorName: "Hanwean Wilson",
        desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam rerum atque officiis beatae nesciunt numquam .!",
        pulishDate: "17 june ,2021 am",
        categories: ["categories", 'cateories', 'categorie']
    }

]


export interface Slide {
    id: number,
    img: string,
    title: string,
}

export const carouselData = [
    {
        id: 1,
        img: 'https://img.freepik.com/premium-photo/rear-view-woman-walking-road-park-sunny-day_1048944-28013545.jpg',
        title: 'Nature'
    },
    {
        id: 3,
        img: 'https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?t=st=1718804277~exp=1718807877~hmac=117230cebf28a3b1f6f37b8bd53ed7bb11ee0c360962ea7434147914f53c1c04&w=996',
        title: 'Business'
    },
    {
        id: 4,
        img: 'https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?t=st=1718804507~exp=1718808107~hmac=c0c6469cdd008515e02f90061ad8189899008b68b9d68d49740e64079c7267e7&w=900',
        title: 'Sport'
    },
    {
        id: 5,
        img: 'https://img.freepik.com/premium-photo/rear-view-woman-walking-road-park-sunny-day_1048944-28013545.jpg',
        title: 'Kunal'
    },
    {
        id: 6,
        img: 'https://img.freepik.com/premium-photo/rear-view-woman-walking-road-park-sunny-day_1048944-28013545.jpg',
        title: 'Politics'
    },
    {
        id: 7,
        img: 'https://img.freepik.com/premium-photo/rear-view-woman-walking-road-park-sunny-day_1048944-28013545.jpg',
        title: 'Ecology'
    },
    {
        id: 8,
        img: 'https://img.freepik.com/premium-photo/rear-view-woman-walking-road-park-sunny-day_1048944-28013545.jpg',
        title: 'History'
    },
    {
        id: 9,
        img: 'https://img.freepik.com/premium-photo/rear-view-woman-walking-road-park-sunny-day_1048944-28013545.jpg',
        title: 'Cinema'
    },
    {
        id: 10,
        img: 'https://img.freepik.com/free-vector/hand-drawn-music-notes-illustration_23-2151320658.jpg?t=st=1718804241~exp=1718807841~hmac=324fc915ba4ff565ee48d9f22f2aceae33646322a4550884b6ac047f9b6dbdcd&w=996',
        title: 'Music'
    }
]


export const colorClasses = [
    'bg-purple-300 text-purple-500',
    'bg-green-200 text-green-500',
    'bg-red-200   text-red-400',
];

export const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
};
