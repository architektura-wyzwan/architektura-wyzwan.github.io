export type ImportantDate = {
    date_pl: string;
    date_en: string,
    description_pl: string,
    description_en: string,
    important: boolean,
}

export const important_dates: ImportantDate[] = [
    {
        date_pl: "24 kwietnia",
        date_en: "April 24",
        description_pl: "ostateczny termin składania artykułów naukowych (short paper)",
        description_en: "deadline for submitting scientific articles (short paper)",
        important: false,
    },
    {
        date_pl: "11 maja",
        date_en: "May 11",
        description_pl: "powiadomienie o przyjętych zgłoszeniach",
        description_en: "notification of accepted applications",
        important: false,
    },
    {
        date_pl: "28 maja",
        date_en: "May 28",
        description_pl: "ogłoszenie programu konferencji",
        description_en: "conference program announcement",
        important: false,
    },
    {
        date_pl: "29 maja",
        date_en: "May 29",
        description_pl: "termin rejestracji (uczestnictwo bez artykułu)",
        description_en: "registration deadline (attendance without article)",
        important: false,
    },
    {
        date_pl: "29 maja",
        date_en: "May 29",
        description_pl: "termin uiszczenia opłaty konferencyjnej",
        description_en: "conference fee payment deadline",
        important: false,
    },
    {
        date_pl: "12 czerwca",
        date_en: "June 12",
        description_pl: "termin nadsyłania prezentacji przez prelegentów konferencji",
        description_en: "deadline for submitting presentations by conference speakers",
        important: false,
    },
    {
        date_pl: "28 czerwca",
        date_en: "June 28",
        description_pl: "otwarcie Pawilonu Eksperymentu",
        description_en: "opening of the Experiment Pavilion",
        important: true,
    },
    {
        date_pl: "29-30 czerwca",
        date_en: "June 29-30",
        description_pl: "konferencja",
        description_en: "conference",
        important: true,
    },
];
