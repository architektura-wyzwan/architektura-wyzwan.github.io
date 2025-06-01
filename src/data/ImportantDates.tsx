export type ImportantDate = {
    date_pl: string;
    date_en: string,
    description_pl: string,
    description_en: string,
    important: boolean,
}

export const important_dates: ImportantDate[] = [
    {
        date_pl: "23 kwietnia",
        date_en: "April 23",
        description_pl: "termin składania artykułów (short paper)",
        description_en: "deadline for submitting articles (short paper)",
        important: false,
    },
    {
        date_pl: "13 maja",
        date_en: "May 13",
        description_pl: "powiadomienie o przyjętych zgłoszeniach",
        description_en: "notification of accepted applications",
        important: false,
    },
    {
        date_pl: "23 maja",
        date_en: "May 23",
        description_pl: "termin uiszczenia opłaty konferencyjnej",
        description_en: "conference fee payment deadline",
        important: false,
    },
    {
        date_pl: "26 maja",
        date_en: "May 26",
        description_pl: "termin rejestracji bez artykułu",
        description_en: "registration deadline without article",
        important: false,
    },
    {
        date_pl: "5 czerwca",
        date_en: "June 5",
        description_pl: "ogłoszenie programu konferencji",
        description_en: "conference program announcement",
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
        date_pl: "29 czerwca",
        date_en: "June 29",
        description_pl: "otwarcie Pawilonu Wspólnoty",
        description_en: "opening of the Community Pavilion",
        important: true,
    },
    {
        date_pl: "30 czerwca - 1 lipca",
        date_en: "June 30 - July 1",
        description_pl: "konferencja",
        description_en: "conference",
        important: true,
    },
];
