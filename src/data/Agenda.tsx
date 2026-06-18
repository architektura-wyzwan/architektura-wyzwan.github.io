export type AgendaItem = {
    title?: string;
    title_pl?: string;
    title_en?: string;
    speaker?: string;
    speaker_pl?: string;
    speaker_en?: string;
    institution?: string;
    institution_pl?: string;
    institution_en?: string;
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
        date_pl: "29 czerwca",
        date_en: "June 29",
        items: [
            {
                time: "9:00-9:30",
                description_pl: "Rejestracja",
                description_en: "Registration",
                items: []
            },
            {
                time: "9:30-10:45",
                description_pl: "Oficjalne otwarcie konferencji",
                description_en: "Official opening of the conference",
                items: []
            },
            {
                time: "10:45-11:15",
                description_pl: "Przerwa kawowa",
                description_en: "Coffee Break",
                items: []
            },
            {
                time: "11:15-12:45",
                description_pl: "Blok 1 - EKSPERYMENT W ARCHITEKTURZE – MIKROŚWIATY INNOWACJI",
                description_en: "Block 1 - EXPERIMENT IN ARCHITECTURE – MICRO-WORLDS OF INNOVATION",
                items: [
                    {
                        title: "Somactive Art Practice: Embodied Attention as a Methodology for Artistic Researche",
                        speaker: "Bartłomiej Struzik",
                        institution: "Jan Matejko Academy of Fine Arts in Kraków, Faculty of Sculpture, PolandA",
                    },
                    {
                        title: "Repair and Memory as Design Tools: Architecture of Care as Experimental Practice",
                        speaker: "Iwona Kalenik",
                        institution: "Academy of Fine Arts in Warsaw, Poland",
                    },
                    {
                        title: "Strangeness: Narrative Experiments with Form in Architecture",
                        speaker: "Ernestyna Szpakowska-Loranc",
                        institution: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Contemporary Architecture as a Space of Perceptual Experiment: Between Compositional Intent and User Experience",
                        speaker: "Maciej Skaza",
                        institution: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Between Iconic Status and Accessibility: The Implications of Spatial Experiments for Universal Design",
                        speaker: "Małgorzata Nowak-Pieńkowska, Anna Tofiluk",
                        institution: "Warsaw University of Technology, Faculty of Architecture, Poland",
                    },
                ]
            },
            {
                time: "12:45-13:45",
                description_pl: "Przerwa obiadowa",
                description_en: "Lunch Break",
                items: []
            },
            {
                time: "13:45-15:15",
                description_pl: "Blok 2 - EKSPERYMENT W ARCHITEKTURZE – MIKROŚWIATY INNOWACJI",
                description_en: "Block 2 - EXPERIMENT IN ARCHITECTURE – MICRO-WORLDS OF INNOVATION",
                items: [
                    {
                        title: "The Architecture of a Second Life: Szyb Krystyna, Szombierki Power Plant, and the Provocative Architect in the Moratorium on New Construction",
                        speaker: "Przemo Łukasik",
                        institution: "Medusa Group Limited Liability Partnership, Bytom, Warsaw, Poland",
                    },
                    {
                        title: "Prefabrication as an Architectural Experiment – Scale of Integration and Circular Potential",
                        speaker: "Aleksandra Witeczek",
                        institution: "Silesian University of Technology, Faculty of Architecture, Gliwice, Poland",
                    },
                    {
                        title: "Kinetic Photovoltaic Roof Systems with Biocomposite Components: From Simulation to Field Experiments",
                        speaker: "Krystian Kwieciński, Karolina Dąbrowska-Żółtak, Piotr Baszyński, Michał Marzantowicz",
                        institution: "Warsaw University of Technology, Faculty of Architecture + Faculty of Physics / ITKE, University of Stuttgart, Poland / Germany",
                    },
                    {
                        title: "Architecture and Digital Technologies as Complementary Tools for Enhancing Museum Accessibility: A Case Study of the Silesian Museum",
                        speaker: "Natalia Tadla-Borowska",
                        institution: "Silesian University of Technology, Faculty of Architecture, Gliwice, Poland",
                    },
                    {
                        title: "Development and Certification of a Retractable Anti-Terrorist Gate: A Technical Study on Impact Resilience",
                        speaker: "Jacek Kühnl-Kinel",
                        institution: "JP Novation Sp. z o.o., Lublin, Poland",
                    },
                    {
                        title: "Emergent Architectural Detail – The Importance of Design-Build Experiments within the Postdigital Curriculum",
                        speaker: "Marcin Strzała",
                        institution: "Warsaw University of Technology,  Faculty of Architecture, Poland",
                    },
                ]
            },
            {
                time: "15:15-15:40",
                description_pl: "Przerwa Kawowa",
                description_en: "Coffee Break",
                items: []
            },
            {
                time: "15:40-17:10",
                description_pl: "Blok 3 - EKSPERYMENT W URBANISTYCE – MIASTO-LABORATORIUM",
                description_en: "Block 3 - EXPERIMENT IN URBANISM – LABORATORY CITY",
                items: [
                    {
                        title: "Balancing Efficiency and Cognitive Flexibility: A Neuroarchitectural Perspective on Experimental Spaces",
                        speaker: "Rafał Czajkowski",
                        institution: "Polish Academy of Sciences, Nencki Institute of Experimental Biology, Laboratory of Spatial Memory, Poland",
                    },
                    {
                        title: "Walking Through Memory: Movement and Spatial Experience in Contemporary Urban Memorials",
                        speaker: "Małgorzata Petelenz, Magdalena Jagiełło-Kowalczyk",
                        institution: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Reading the Palimpsest: The Medieval Location Layout of a Small Town as a Laboratory of Spatial Forms. The Case of Subcarpathia",
                        speaker: "Anna Martyka",
                        institution: "Rzeszów University of Technology, Faculty of Civil and Environmental Engineering and Architecture, Poland",
                    },
                    {
                        title: "Between Block and House: Atrial Dwellings as a Social Experiment in the Polish People's Republic, 1960s-1980s",
                        speaker: "Jan Kamil Matusewicz",
                        institution: "Polish Academy of Sciences, Institute of Art, Warsaw, Poland",
                    },
                    {
                        title: "Bucharest as an Urban Laboratory: Experimental Approaches to the Encounter of Old and New Architecture",
                        speaker: "Agnieszka Żabicka",
                        institution: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "(Re)writing the City: The Impact of Selected Contemporary Large-Scale Multi-Family Residential Developments on the City’s Urbanscape",
                        speaker: "Natalia Gorgol",
                        institution: "Cracow University of Technology, Faculty of Architecture, Poland",
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
                time: "17:30-19:00",
                description_pl: "Blok 4 - EKSPERYMENT W URBANISTYCE – MIASTO-LABORATORIUM",
                description_en: "Block 4 - EXPERIMENT IN URBANISM – LABORATORY CITY",
                items: [
                    {
                        title: "Urbanism as a Laboratory: Experimental Approach to Inner-city Densification",
                        speaker: "Daan Roggeveen",
                        institution: "MORE Architecture BV, Amsterdam, The Netherlands",
                    },
                    {
                        title: "Participation as a Tool of Urban Experiment: Prototyping Dialogue, Space, and Decision Making",
                        speaker: "Kinga Racoń-Leja",
                        institution: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "The Concept of Adaptive Governance as an Urban Experiment",
                        speaker: "Yuriy Kryvoruchko, Yaryna Voronych, Oksana Melnyk",
                        institution: "Bialystok University of Technology, Poland; Lviv Polytechnic National University, Architecture and Design Institute, Ukraine",
                    },
                    {
                        title: "AI and the City as Laboratory: Experiments with Urban Space",
                        speaker: "Matylda Wdowiarz-Bilska",
                        institution: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Research by Design as Architectural Experiment: Designing the Warsaw Skyscraper between Form, Function and Urban Context",
                        speaker: "Marcin Goncikowski",
                        institution: "Warsaw University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Streets as a Design Experiment on the Example of Comprehensively Planned Urban Development: Seestadt Aspern in Vienna and Miasteczko Wilanów in Warsaw",
                        speaker: "Paweł Trębacz, Magdalena Duda",
                        institution: "Warsaw University of Technology, Faculty of Architecture, Poland",
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
        date_pl: "30 czerwca",
        date_en: "June 30",
        items: [
            {
                time: "9:00-9:30",
                description_pl: "Rejestracja i poranna kawa",
                description_en: "Registration and Welcome Coffe",
                items: []
            },
            {
                time: "9:30-11:30",
                description_pl: "Blok 5 - EKSPERYMENT W SŁUŻBIE SPOŁECZEŃSTWA",
                description_en: "Block 5 - EXPERIMENT IN THE SERVICE OF SOCIETY",
                items: [
                    {
                        title: "A Temporary Research Model of a Sensory Garden as a Tool for Spatial Experimentation",
                        speaker: "Barbara Gronostajska, Anna Miśniakiewicz",
                        institution: "Wrocław University of Science and Technology, Faculty of Architecture, Wroclaw, Poland",
                    },
                    {
                        title: "Camouflage Reborn: Community Painting at Fort Mistrzejowice as a Participatory Approach to Heritage Activation",
                        speaker: "Filip Suchoń",
                        institution: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Experiment–Transformation–Centrality in Post-Industrial Łódź",
                        speaker: "Karolina Dudzic- Gyurkovich, Justyna Kobylarczyk",
                        institution: "Cracow University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "The Need for Contact as a Lens for Reading Urban Space: a Case Study of EKOPark, Ursus, Warsaw",
                        speaker: "Andrzej Jaworski, Maja Skibińska, Anna Wieczorek, Marianna Waśniewska",
                        institution: "University of Technology and Arts, Warsaw / Think Tank Miasto / JAZ+Architekci, Poland",
                    },
                    {
                        title: "From Sports Infrastructure to Third Places: Reading Shared School Sports Fields in Warsaw",
                        speaker: "Marta Kobecka, Monika Wróbel, Marianna Waśniewska, Ewelina Jaskulska",
                        institution: "Urban Sports Square Foundation, Warsawa, Poland, ARCHITEKTONICZKI",
                    },
                    {
                        title: "Reuse as an Experiment - from Office to Housing and Community Space",
                        speaker: "Dominik Różański",
                        institution: "Flora Development, Warsaw, Poland",
                    },
                    {
                        title: "Open-ended Play: The Afterlife of Late Modernist Playgrounds in Warsaw and Tychy",
                        speaker: "Urszula Prokop, Józef Gałązka",
                        institution: "Warsaw University of Technology / Jan Matejko Academy of Fine Arts in Kraków, Poland",
                    },
                    {
                        title: "Urban Ecological Interactions and their Impact on the Vitality of Urban Ecosystems",
                        speaker: "Ruslan Zhyrak",
                        institution: "King Danylo University, Department of Architecture and Construction, Ivano-Frankivsk, Ukraine",
                    },

                ]
            },
            {
                time: "11:30-11:50",
                description_pl: "Przerwa Kawowa",
                description_en: "Coffee Break",
                items: []
            },
            {
                time: "11:50-13:30",
                description_pl: "Blok 6 - EKSPERYMENT W EDUKACJI – PRZESTRZEŃ UCZENIA SIĘ PRZEZ DZIAŁANIE",
                description_en: "Block 6 - EXPERIMENT IN EDUCATION – THE SPACE OF LEARNING THROUGH ACTION",
                items: [
                    {
                        title: "Bauhaus in the Context of Contemporary Art Education",
                        speaker: "Marta Kawecka-Smolińska, Krzysztof Olszewski, Kacper Greń",
                        institution: "Academy of Fine Arts in Warsaw, Faculty of Media Art, Poland",
                    },
                    {
                        title: "Experimentation through Making: The Importance of Design-Build within Academia",
                        speaker: "Cole von Feldt",
                        institution: "Delft University of Technology, Faculty of Architecture, The Netherlandsy",
                    },
                    {
                        title: "Experimentation in Education: MINIFORMA Student Workshops as Learning by Design (Editions 2023–2024)",
                        speaker: "Agnieszka Dobrzyńska-Jarosz, Joanna Krajewska",
                        institution: "Wrocław University of Science and Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Mycelium Morphologies Seminar as an Experiment in Teaching Future-Proof Design Skills",
                        speaker: "Eliza Biała, Piotr Baszyński, Martin Ostermann",
                        institution: "University of Stuttgart, Institute of Building Construction, FuMaLab, Germany",
                    },
                    {
                        title: "Narrative and Participatory Teaching Strategies – The Role of Experimentation in Architectural Education in the Age of AI",
                        speaker: "Anna Maria Wierzbicka",
                        institution: "Warsaw University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "The model as a Space for Experimentation: Interuniversity Workshops on Sensory Garden Design at the Intersection of Architecture and Art",
                        speaker: "Magdalena Wąsowicz, Anna Berbesz-Wyrodek",
                        institution: "Warsaw University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Implementing Building Energy Modelling in a Master’s Level Architectural Design Course: Preliminary Insights from a Pilot Study",
                        speaker: "Michał Gołębiewski, Michał Pierzchalski, Mateusz Płoszaj-Mazurek",
                        institution: "Warsaw University of Technology, Faculty of Architecture, Poland",
                    },
                    {
                        title: "Spatial Experiment and the Formation of Social Space in Modular Housing Architecture",
                        speaker: "Dorota Wiśniewska",
                        institution: "Bydgoszcz University of Science and Technology, Faculty of Civil and Environmental Engineering and Architecture, Poland",
                    },
                ]
            },
            {
                time: "13:30-14:30",
                description_pl: "Przerwa obiadowa",
                description_en: "Lunch Break",
                items: [                ]
            },
            {
                time: "14:30-15:30",
                description_pl: "Warsztaty",
                description_en: "Conference workshop",
                items: [
                    {
                        title: "Anna Maria Wierzbicka, Marcin Strzała",
                    },
                ]
            },
            {
                time: "15:30-16:30",
                description_pl: "Dyskusja",
                description_en: "General Discussion",
                items: []
            },
            {
                time: "16:30-17:00",
                description_pl: "Przerwa Kawowa",
                description_en: "Final Coffee",
                items: []
            },
        ]
    },

]
