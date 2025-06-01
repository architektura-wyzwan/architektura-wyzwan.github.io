export type AgendaItem = {
    time: string;
    description_pl: string;
    description_en: string;
}

export type Agenda = {
    date_pl: string;
    date_en: string;
    items: AgendaItem[];
};

export const agenda: Agenda[] = [
    {
        date_pl: "29 czerwca",
        date_en: "June 29",
        items: [
            {
                time: "12:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "13:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "14:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "15:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "16:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
        ]
    },
    {
        date_pl: "30 czerwca",
        date_en: "June 30",
        items: [
            {
                time: "12:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "13:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "14:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "15:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "16:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
        ]
    },
    {
        date_pl: "1 lipca",
        date_en: "July 1",
        items: [
            {
                time: "12:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "13:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "14:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "15:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
            {
                time: "16:00",
                description_pl: "Głaskanie puszka",
                description_en: "Petting puszek",
            },
        ]
    },

]
