export type AgendaItem = {
    title?: string;
    title_pl?: string;
    title_en?: string;
    speaker?: string;
    speaker_pl?: string;
    speaker_en?: string;
    institution_pl: string;
    institution_en: string;
}

export type AgendaBlock = {
    time: string;
    description_pl: string;
    description_en: string;
    items: AgendaItem[];
}

export type Agenda = {
    date_pl: string;
    date_en: string;
    items: AgendaBlock[];
};

export const agenda: Agenda[] = [
    {
        date_pl: "30 czerwca",
        date_en: "June 30",
        items: [
            {
                time: "9:15-9:45",
                description_pl: "Rejestracja",
                description_en: "Registration",
                items: []
            },
            {
                time: "9:45-11:00",
                description_pl: "Oficjalne otwarcie konferencji",
                description_en: "Official opening of the conference",
                items: []
            },
            {
                time: "11:00-11:30",
                description_pl: "Przerwa kawowa",
                description_en: "Coffee Break",
                items: []
            },
            {
                time: "11:30-13:00",
                description_pl: "Blok 1 - Wspólnota Kultury - Różnorodność Kultur",
                description_en: "Block 1 - Community od Culture - Diversity of Cultures",
                items: [
                    {
                        title: "Spatial Justice in the Realm of Sacred Space",
                        speaker: "Michael J. Crosbie",
                        institution_pl: "University of Hartford, Wydział Architektury, USA",
                        institution_en: "University of Hartford, Department of Architecture, USA",
                    },
                    {
                        title: "Interdisciplinary Formation of “NextGenerationEU” in the Context of Civic Education on the Built Environment and Shaping “Archiculture” in Poland",
                        speaker: "Dorota Wantuch-Matla",
                        institution_pl: "Politechnika Krakowska, Wydział Architektury, Polska",
                        institution_en: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "The Communal Nature of Urban Space Created by Identity and Time",
                        speaker: "Renata Jóźwik",
                        institution_pl: "Politechnika Warszawska, Wydział Architektury, Polska",
                        institution_en: "Warsaw University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Cathedral as a Symbol of the Cosmos in Urban Space",
                        speaker_pl: "Biskup Michał Janocha",
                        speaker_en: "Bishop Michał Janocha",
                        institution_pl: "Uniwersytet Warszawski, Wydział “Artes Liberales”, Polska",
                        institution_en: "University of Warsaw, Faculty of “Artes Liberales”, Poland",
                    },
                    {
                        title: "Networks of Support",
                        speaker: "Zuzanna Mielczarek",
                        institution_pl: "Narodowy Instytut Architektury i Urbanistyki w Warszawiem Polska",
                        institution_en: "National Institute of Architecture and Urban Planning in Warsaw, Poland",
                    },
                    {
                        title: "Anchors of Collective Memory and Identity. Creating Sustainable Public Spaces in Heritage Areas in Cities",
                        speaker: "Ewa Stachura, Magdalena Jagiełło-Kowalczy",
                        institution_pl: "Politechnika Krakowska, Wydział Architektury, Polska",
                        institution_en: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                ]
            },
            {
                time: "13:00-14:00",
                description_pl: "Przerwa obiadowa",
                description_en: "Lunch Break",
                items: []
            },
            {
                time: "14:00-15:20",
                description_pl: "Blok 2 - Wspólnota Kultury - Różnorodność Kultur",
                description_en: "Block 2 - Community od Culture - Diversity of Cultures",
                items: [
                    {
                        title: "Reciprocal Urban Design: The Prospect of Another History",
                        speaker: "Tom Avermaete",
                        institution_pl: "ETH Zurich, Wydział Architektury, Szwajcaria",
                        institution_en: "ETH Zurich, Department of Architecture, Switzerland",
                    },
                    {
                        title: "Community as a Climate  Protection Strategy",
                        speaker: "Agata Gawlak, Barbara Świt-Jankowska",
                        institution_pl: "Politechnika Poznańska, Wydział Architektury, Polska",
                        institution_en: "Poznan University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "A Radiant City: the Marseille Housing Unit as an Incubator of Social Space  after 70 Years",
                        speaker: "Kinga Zinowiec-Cieplik, Beata Gawryszewska",
                        institution_pl: "Politechnika Warszawska i Szkoła Główna Gospodarstwa Wiejskiego w Warszawie, Polska",
                        institution_en: "Warsaw University of Technology and University of Life Sciences, Poland",
                    },
                    {
                        title: "MyPW: Intelligent Campus Solutions  for Academic Community Building  at WUT",
                        speaker: "Paweł Trębacz, Jakub Możaryn, Marcin Iwanowski, Sławomir Paśko, Bartosz Sawicki",
                        institution_pl: "Politechnika Warszawska, Wydział Architektury, Wydział Mechatrkoniki i Wydział Elektryczny, Polska",
                        institution_en: "Warsaw University of Technology, Faculty of Architecture, Faculty of Mechatronics and Faculty of Electrical Engineering, Poland",
                    },
                    {
                        title: "Towards Smart Neighbourhood  Design",
                        speaker: "Karolina Dąbrowska-Żółtak, Jerzy Wojtowicz, Stefan Wrona",
                        institution_pl: "Politechnika Warszawska, Wydział Architektury, Polska",
                        institution_en: "Warsaw University of Technology,  Faculty of Architecture, Poland",
                    },
                ]
            },
            {
                time: "15:20-15:40",
                description_pl: "Przerwa Kawowa",
                description_en: "Coffee Break",
                items: []
            },
            {
                time: "15:40-17:10",
                description_pl: "Blok 3 - Miasto i przestrzeń publiczna",
                description_en: "Block 3 - City and its Public Space",
                items: [
                    {
                        title: "Integrated Urban Development and the Notion of Transformation",
                        speaker: "Kees Christiaanse",
                        institution_pl: "ETH Zurich, Wydział Architektury, Szwajcaria",
                        institution_en: "ETH Zurich, Department of Architecture, Switzerland",
                    },
                    {
                        title: "The Evolution of Public Spaces in Bar- celona - the Superblocks as an Element Building the Community",
                        speaker: "Mateusz Gyurkovich",
                        institution_pl: "Politechnika Krakowska, Wydział Architektury, Polska",
                        institution_en: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "New Public Space in Cities Beyond Growth: Insights from Shrinking Cities",
                        speaker: "Jowita Tabak, Justyna Zdunek-Wielgołaska, Elena Vigliocco",
                        institution_pl: "Politecnico di Torino, Włochy i Politechnika Warszawska, Wydział Architektury, Polska",
                        institution_en: "Politecnico di Torino, Italy and Warsaw University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Social Participation in the Costs of Public Infrastructure Construction in Poland - Theoretical Basis for Necessary Reform Measures",
                        speaker: "Wojciech Korbel",
                        institution_pl: "Politechnika Krakowska, Wydział Architektury, Polska",
                        institution_en: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Models of Public Spacesa as a Rep- resentation of the Images of the Cities – The Case Study of Metropolis GZM Models and Game’s Cards",
                        speaker: "Tomasz Bradecki, Paulina Siudyka, Amelia Gałas, Magdalena Fijał",
                        institution_pl: "Politechnika Śląska, Wydział Architektury, Polska",
                        institution_en: "Silesian University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Underground Space as a Direction of Modern Urban Development",
                        speaker: "Halyna Koznarska, Olena Bilous",
                        institution_pl: "Politechnika Lwowska, Wydział Planowania i Projektowania Urbanistycznego, Ukraina",
                        institution_en: "Lviv Polytechnic National University, Urban Planning and Design Department, Ukraine",
                    },
                ]
            },
            {
                time: "17:10-17:30",
                description_pl: "Przerwa Kawowa",
                description_en: "Coffee Break",
                items: []
            },
            {
                time: "17:30-18:50",
                description_pl: "Blok 4 - Miasto i przestrzeń publiczna",
                description_en: "Block 4 - City and its Public Space",
                items: [
                    {
                        title: "Building Communities through Shared Visions",
                        speaker: "Juan Jose, Galan Vivas",
                        institution_pl: "Polytechnic University of Valencia, Wydział Urbanistyki, Hiszpania",
                        institution_en: "Polytechnic University of Valencia, Departament of Urbanism, Spain",
                    },
                    {
                        title: "Kraków Tenement as a Typology of Central European Cities Leading to Tailored Solutions in the FuturHist Research Project",
                        speaker: "Kinga Racoń-Leja, Ernestyna Szpakowska-Loranc, Filip Suchoń, Krzysztof Barnaś, Krzysztof Klus",
                        institution_pl: "Politechnika Krakowska, Wydział Architektury, Polska",
                        institution_en: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Contemporary Methods of Design- ing Residential Courtyard Spaces of the 19th–20th Centuries in Lviv in the Context of Social Philosophy",
                        speaker: "Oresta Remeshylo-Rybchynska, Adrian Rybchynskyi",
                        institution_pl: "Politechnika Lwowska, Wydział Architektury, Ukraina",
                        institution_en: "Lviv Polytechnic National University, Department of Architecture and Design, Ukraine",
                    },
                    {
                        title: "Floating & Urban Community Architecture for the New European Bauhaus",
                        speaker: "Marek Zawalski",
                        institution_pl: "Łukasiewicz - Warszawski Instytut Technologiczny, Polska",
                        institution_en: "Łukasiewicz - Warsaw Institute of Technology, Poland",
                    },
                    {
                        title: "New Approaches to the Restoration of Industrial Cities of Ukraine Using the Example of Chornomorsk, Odessa region",
                        speaker: "Andriy Pavliv, Roksoliana Kvasnytsia",
                        institution_pl: "Politechnika Lwowska, Wydział Projektowania Wizualnego i Sztuki, Ukraina",
                        institution_en: "Lviv Polytechnic National University, Department of Visual Design and Art, Ukraine",
                    },
                ]
            },
            {
                time: "19:00",
                description_pl: "Bankiet (Pałac na wodzie)",
                description_en: "Banquet (Palace on the Isle)",
                items: []
            },
        ]
    },
    {
        date_pl: "1 lipca",
        date_en: "July 1",
        items: [

        ]
    },

]
