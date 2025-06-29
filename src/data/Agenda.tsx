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
                        title: "The Evolution of Public Spaces in Barcelona - the Superblocks as an Element Building the Community",
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
                        title: "Models of Public Spacesa as a Representation of the Images of the Cities – The Case Study of Metropolis GZM Models and Game’s Cards",
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
                        title: "Contemporary Methods of Designing Residential Courtyard Spaces of the 19th–20th Centuries in Lviv in the Context of Social Philosophy",
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
            {
                time: "9:00-9:30",
                description_pl: "Rejestracja i poranna kawa",
                description_en: "Registration and Welcome Coffe",
                items: []
            },
            {
                time: "9:30-10:50",
                description_pl: "Blok 5 - Architektura Wspólnoty",
                description_en: "Block 5 - Architecture of Community",
                items: [
                    {
                        title: "Don’t Hate the Player: Resident-led Housing in the Age of Developers",
                        speaker: "Małgorzata Mader",
                        institution_pl: "Politechnika Łódzka, Instytut Architektury i Urbanistyki, Polska",
                        institution_en: "Lodz University of Technology, Institute of Architecture and Urban Planning, Poland",
                    },
                    {
                        title: "Infrastructures of Wildness: The Making of Warsaw’s Fourth Nature Parks as Hybrid Commons",
                        speaker: "Maciej Kaufman",
                        institution_pl: "Politechnika Warszawska, Wydział Architektury, Polska",
                        institution_en: "Warsaw University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Architecture to Support the Process of Creating a School Community",
                        speaker: "Piotr Trębacz, Paweł Trębacz",
                        institution_pl: "Politechnika Warszawska, Wydział Architektury, Polska",
                        institution_en: "Warsaw University of Technology, Faculty of Architecture, Warsaw",
                    },
                    {
                        title: "CITY LIGHTS - The Creation of a New Space Perception through Light",
                        speaker: "Liberty Peterson",
                        institution_pl: "Ateńska Szkoła Sztuk Pięknych, Grecja",
                        institution_en: "Athens School of Fine Arts, Greece",
                    },
                    {
                        title: "A Strategy of Short-Term Actions and Tactical Urban Planning Tools for Creating Community and Development Urban Spaces in Zaporizhia (Ukraine)",
                        speaker: "Yuriy Kryvoruchko, Joanna Kopacz-Gruźlewska",
                        institution_pl: "Politechnika Białostocka, Polska i Politechnika Lwowska, Ukraina / Politechnika Śląska, Polska",
                        institution_en: "Bialystok University of Technology, Poland and Lviv Polytechnic National University, Ukraine / Silesian University of Technology, Poland",
                    },

                ]
            },
            {
                time: "10:50-11:20",
                description_pl: "Przerwa Kawowa",
                description_en: "Coffee Break",
                items: []
            },
            {
                time: "11:20-12:40",
                description_pl: "Blok 6 - Architektura Wspólnoty",
                description_en: "Block 6 - Architecture of Community",
                items: [
                    {
                        title: "Inclusive Placemaking as a Catalyst for Social Engagement and Fair Communities: Reflections from A-Place",
                        speaker: "Spela Verovsek",
                        institution_pl: "Uniwersytet w Lublanie, Wydział Architektury, Słowenia",
                        institution_en: "University of Ljubljana, Faculty of Architecture, Slovenia",
                    },
                    {
                        title: "Reinhabiting Abandonment. Architectural Reuse for Enhancement of Alpine Communities in Trentino",
                        speaker: "Alisia Tognon, Dominika Komisarczyk",
                        institution_pl: "Politecnico di Milano, Wydział Architektury i Urbanistyki, Włochy",
                        institution_en: "Politecnico di Milano, Department of Architecture and Urban Studies, Italy",
                    },
                    {
                        title: "New European Bauhaus – Four Years of Building Community",
                        speaker: "Hubert Trammer",
                        institution_pl: "Nowy Europejski Bauhaus (2021-2024)",
                        institution_en: "New European Bauhaus (2021-2024)",
                    },
                    {
                        title: "Growing Our Cities from Within: A Collaborative Approach to Urban Densification",
                        speaker: "Daan Roggeveen",
                        institution_pl: "MORE Architecture, Amsterdam, Niderlandy",
                        institution_en: "MORE Architecture, Amsterdam, Netherlands",
                    },
                    {
                        title: "Cartographies of Care: Community Knowledge and Environmental Agency in Post-War Housing Estates",
                        speaker: "Damian Poklewski-Kozieł, Eliza Szczerek",
                        institution_pl: "Politechnika Krakowska, Wydział Architektury, Polska",
                        institution_en: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                ]
            },
            {
                time: "12:40-13:40",
                description_pl: "Przerwa obiadowa",
                description_en: "Lunch Break",
                items: []
            },
            {
                time: "13:40-15:10",
                description_pl: "Blok 7 - Architektura Wspólnoty",
                description_en: "Block 7 - Architecture of Community",
                items: [
                    {
                        title: "Empowering Communities of Professionals and the Role of the New European Bauhaus",
                        speaker: "Roberto Cavallo",
                        institution_pl: "Uniwersytet Techniczny w Delft, Wydział Architektury, Niderlandy/European Association for Architectural Education",
                        institution_en: "Delft University of Technology, Department of Architecture, Netherlands/European Association for Architectural Education",
                    },
                    {
                        title: "Wayfinding as Community Building: The Case of the Warsaw University of Technology Central Campus",
                        speaker: "Krzysztof Koszewski, Stefan Drewiczewski, Jacek Kopczewski, Karolina Dąbrowska-Żółtak, Hanna Malik-Trocha, Marta Żak, Konrad Szumiński",
                        institution_pl: "Politechnika Warszawska, Wydział Architektury i Biuro Komunikacji i Promocji, Polska",
                        institution_en: "Warsaw University of Technology, Faculty of Architecture and Communication and Promotion Office, Poland",
                    },
                    {
                        title: "Social Responsibility of Universities in Shaping Public Spaces",
                        speaker: "Krystyna Solarek",
                        institution_pl: "Politechnika Warszawska, Wydział Architektury, Polska",
                        institution_en: "Warsaw University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Research by Design as a Tool for Building Community: Lessons from Athens Lycabettus Hill",
                        speaker: "Athanosios Pagonis",
                        institution_pl: "Politechnika Narodowa w Atenach, Szkoła Architektury, Grecja",
                        institution_en: "National Technical University of Athens, School of Architecture, Greece",
                    },
                    {
                        title: "Embracing Beauty, Sustainability, and Community: The New European Bauhaus Initiative",
                        speaker: "Anna Maria Wierzbicka",
                        institution_pl: "Politechnika Warszawska, Wydział Architektury, Polska",
                        institution_en: "Warsaw University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "The New European Bauhaus as a Catalyst for Sustainable Senior Cohousing: A Case Study of Building Revitalisation in Imperia",
                        speaker: "Agata Bonnenberg",
                        institution_pl: "Politechnika Poznańska, Wydział Architektury, Polska",
                        institution_en: "Poznan University of Technology, Faculty of Architecture, Poland",
                    },
                ]
            },
            {
                time: "15:10-15:40",
                description_pl: "Przerwa Kawowa",
                description_en: "Coffee Break",
                items: []
            },
            {
                time: "15:40-17:10",
                description_pl: "Blok 8 - Zaangaźowanie Społeczne",
                description_en: "Block 8 - Social Engagement",
                items: [
                    {
                        title: "Learning by Building with Wood: Prototyping for Emergency Housing in Universitat Politècnica de València and Universidad Nacional de Guinea Ecuatorial",
                        speaker: "Apolonia Begoña Serrano Lanzarote, Alberto Rubio, Garrido Joan Romero Clausell, Isaac Villanova Civera",
                        institution_pl: "Politechnika w Walencji, Zakład Mechaniki Ośrodków Ciągłych i Teorii Struktur, Hiszpania",
                        institution_en: "Polytechnic University of Valencia Dept. of Mechanics of Continuous Media and Theory of Structures, Spain",
                    },
                    {
                        title: "Architecture as a Space Integrating Scientific, Social, and Technological Functions. Revitalization of the Historic Campus of Łukasiewicz Research Network – PORT as an Example of Synergy Between Research Activities, Cross-Sectoral Collaboration, and the Formation of a Local Community",
                        speaker: "Elżbieta Kocowska-Siekierka",
                        institution_pl: "Sieć Badawcza Łukasiewicz - PORT Polski Ośrodek Rozwoju Technologii, Wrocław, Polska",
                        institution_en: "Łukasiewicz – PORT Polish Center for Technology Development, Wrocław, Poland",
                    },
                    {
                        title: "Strategies for Integrating Urban Sports into Public Spaces",
                        speaker: "Monika Wróbel",
                        institution_pl: "Skwer Sportów Miejskich, Warszawa, Polska",
                        institution_en: "Urban Sports Square Foundation, Warsaw, Poland",
                    },
                    {
                        title: "An Interdisciplinary and Process-Oriented Approach to Diagnosing Urban Public Spaces with Community Involvement",
                        speaker: "Joanna Mędrzec-Stefańska, Andrzej Jaworski, Aleksandra Wiktorko-Rakoczy, Anna Wieczorek, Marianna Waśniewska",
                        institution_pl: "ThinkTankMiasto Foundation, JAZ+Architekci sp. z o.o. i Szelest, Warszawa, Polska",
                        institution_en: "ThinkTankMiasto Foundation, JAZ+Architekci sp. z o.o. and Szelest, Warsaw, Poland",
                    },
                    {
                        title: "Innovative Materials for Modern and Sustainable Architecture - Technologies Developed in the Łukasiewicz Research Network",
                        speaker: "Katarzyna Jodko-Piórecka",
                        institution_pl: "Łukasiewicz - ITECH Instytut Innowacji i Technologii, Warszawa, Polska",
                        institution_en: "Łukasiewicz - ITECH Institute of Innovation and Technology, Warsaw, Poland",
                    },
                    {
                        title: "System for Parametric Retainers - Overgrowable Urban Tissue (SPROUT). Experimental Apparatus for Bioreceptive Architecture",
                        speaker: "Marcin Strzała",
                        institution_pl: "Politechnika Warszawska, Wydział Architektury, Polska",
                        institution_en: "Warsaw University of Technology, Faculty of Architecture Poland",
                    },
                ]
            },
            {
                time: "17:10-18:00",
                description_pl: "Dyskusja",
                description_en: "General Discussion",
                items: []
            },
        ]
    },

]
