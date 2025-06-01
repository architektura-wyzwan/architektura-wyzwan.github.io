import urls from "../Urls";

export type SubMenuTreeItem = {
    name_pl: string,
    name_en: string,
    navigation: string,
}

export type MenuTreeItem = {
    name_pl: string,
    name_en: string,
    navigation: string | SubMenuTreeItem[]
}

export const menuTree: MenuTreeItem[] = [
    {
        name_pl: "O konferencji",
        name_en: "About",
        navigation: [
            {
                name_pl: "Aktualności",
                name_en: "News",
                navigation: urls.news,
            },
            {
                name_pl: "Obecna edycja",
                name_en: "Current edition",
                navigation: urls.current_edition,
            },
            {
                name_pl: "Publikacje",
                name_en: "Publications",
                navigation: urls.publications,
            },
            {
                name_pl: "Organizatorzy",
                name_en: "Organizers",
                navigation: urls.organizers,
            },
            {
                name_pl: "Sponsorzy i partnerzy",
                name_en: "Sponsors and partners",
                navigation: urls.sponsors,
            },
            {
                name_pl: "Stawiamy",
                name_en: "Stawiamy",
                navigation: "https://stawiamyna.pl/"
            },
            {
                name_pl: "Galeria",
                name_en: "Gallery",
                navigation: urls.all_galleries,
            }
        ],
    },    {
        name_pl: "Poprzednie edycje",
        name_en: "Previous editions",
        navigation: [
            {
                name_pl: "2023",
                name_en: "2023",
                navigation: urls.previous_editions(0),
            },            {
                name_pl: "2024",
                name_en: "2024",
                navigation: urls.previous_editions(1),
            },
        ],
    },
    {
        name_pl: "Program",
        name_en: "Agenda",
        navigation: urls.agenda,
    },
    {
        name_pl: "Kontakt",
        name_en: "Contact",
        navigation: urls.contact,
    }
];
