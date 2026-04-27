import {ArticleMetadata} from "../layout/Article";
import {Paragraph} from "../components/Paragraph";
import * as React from "react";
import {Translation} from "../components/Translation";
import {Box, Stack, Typography} from "@mui/material";
import {StandardList} from "../components/StandardList";

export const aboutPage: ArticleMetadata = {
    title_pl: "Obecna edycja",
    title_en: "Current edition",
    image: "/static/MainPage/Main page_poster.jpg",
    subtitle_pl: "",
    subtitle_en: "",
    content: Content,
}

function Content() {
    return (<>
        <Stack>
            <Typography sx={{fontStyle: "italic"}}>
                <Translation
                pl="Architektura powstaje z pamięci, eksperymentu i wyobraźni."
                en="Architecture emerges from memory, experiment, and imagination."/>
            </Typography>
            <Typography variant="bolder" sx={{alignSelf: "flex-end", fontStyle: "italic"}}>
                <Translation
                    pl="w duchu myśli Aldo Rossiego, inspirowane A Scientific Autobiography (1981)"
                    en="In the spirit of Aldo Rossi’s thought, inspired by A Scientific Autobiography (1981)."/>
            </Typography>
        </Stack>
        <br/>
        <Paragraph
            pl={"Architektura to jedna z najbardziej złożonych dziedzin sztuk użytkowych. Nie sprowadza się wyłącznie do kształtowania formy i rozmieszczenia funkcji; obejmuje również testowanie relacji między przestrzenią, działaniem a użytkownikiem. W działaniach projektowych w centrum zawsze znajduje się człowiek, a każdy projekt – w pewnym stopniu – stanowi proces eksperymentalny."}
            en={"Architecture is one of the most complex fields of applied arts. It cannot be reduced merely to shaping form and arranging functions; it also involves testing the relationships between space, action, and the user. In design practice, the human being is always at the center, and every project – to some extent – constitutes an experimental process."}
        />
        <Paragraph
            pl={"Traktowana jako pole eksperymentu, architektura wraz ze swoim obszarem oddziaływania przestaje być jedynie statycznym obiektem, a staje się przestrzenią zdarzeń. W takim ujęciu eksperyment pozwala ujawniać napięcia pomiędzy tym, co zaprojektowane, a tym, jak przestrzeń jest faktycznie użytkowana. Może także pełnić rolę narzędzia badania granic dyscypliny, prowokowania nowych sposobów doświadczania i współdzielenia przestrzeni oraz pogłębiania rozumienia rzeczywistości, która często przekracza materialne i pragmatyczne założenia projektowe."}
            en={"When treated as a field of experimentation, architecture and its sphere of influence cease to be only static objects and become spaces of events. In this perspective, experimentation reveals tensions between what is designed and how space is actually used. It may also serve as a tool for examining the boundaries of the discipline, provoking new ways of experiencing and sharing space, and deepening the understanding of reality, which often exceeds material and pragmatic design assumptions."}
        />
        <Paragraph
            pl={"W obliczu wyzwań klimatycznych i społecznych konieczne staje się reinterpretowanie pojęcia eksperymentu jako poszukiwania równowagi między technologią, ekologią i etyką. W tym kontekście na nowo aktualizuje się witruwiańska triada – trwałości, użyteczności i piękna – organizując proces projektowy: od testowania granic konstrukcji (firmitas), przez redefinicję funkcji (utilitas), po rozwój estetyki i symboliki (venustas). Architektura zrównoważona, pracująca w obiegu zamkniętym i oparta na zasadach cyrkularności, stanowi przykład eksperymentu etycznego redefiniującego odpowiedzialność twórcy. Prototypy, instalacje i pawilony – jako laboratoria idei – ujawniają szczególną relację między „eksperymentem w przestrzeni” a „przestrzenią eksperymentu”. Każdy eksperyment architektoniczny funkcjonuje w dialogu z kontekstem: krajobrazem, historią i wspólnotą, nie negując tradycji, lecz twórczo ją reinterpretując. Ostatecznym wyzwaniem architektury jest tworzenie eksperymentów służących człowiekowi – przestrzeni znaczących, funkcjonalnych, etycznych i zakorzenionych w świecie."}
            en={"In the face of climatic and social challenges, it becomes necessary to reinterpret the notion of experiment as a search for balance between technology, ecology, and ethics. In this context, the Vitruvian triad – durability, utility, and beauty – gains renewed relevance, structuring the design process: from testing structural limits (firmitas), through redefining function (utilitas), to the development of aesthetics and symbolism (venustas). Sustainable architecture, operating within a closed loop and based on circular principles, is an example of an ethical experiment that redefines the designer’s responsibility. Prototypes, installations, and pavilions – as laboratories of ideas − reveal a distinct relationship between the “experiment in space” and the “space of experiment.” Each architectural experiment functions in dialogue with its context: the landscape, history, and community − not rejecting tradition, but creatively reinterpreting it. Ultimately, the challenge of architecture is to create experiments that serve the human being − spaces that are meaningful, functional, ethical, and rooted in the world."}
        />
        <Translation
            variant= "cardTitle"
            en="1. EXPERIMENT IN ARCHITECTURE – MICRO-WORLDS OF INNOVATION"
            pl="1. EKSPERYMENT W ARCHITEKTURZE – MIKROŚWIATY INNOWACJI"/>
        <Paragraph
            pl={
                "Architektura od początku swojego funkcjonuje jako dziedzina eksperymentu, oparta na nieustannym poszukiwaniu nowych sposobów kształtowania przestrzeni odpowiadających zmieniającym się potrzebom człowieka. Eksperyment architektoniczny obejmuje nie tylko formę, lecz przede wszystkim relacje między człowiekiem, środowiskiem i technologią, które determinują jakość przestrzeni."
            }
            en={
                "Architecture has, from the very beginning, functioned as a field of experimentation, grounded in the continuous search for new ways of shaping space that respond to the evolving needs of people. Architectural experiment encompasses not only form, but above all the relationships between humans, the environment, and technology − relationships that determine the quality of space."
            }
        />
        <Paragraph
            pl={
                "Przekraczanie granic materiałowych, konstrukcyjnych i technologicznych stanowi fundament rozwoju architektury. Eksperyment z materiałem – jego fakturą, ciężarem, transparentnością czy trwałością – otwiera nowe możliwości projektowe. Eksperyment z formą umożliwia poszukiwanie innowacyjnych układów przestrzennych oraz redefinicję relacji między bryłą, światłem i krajobrazem. Z kolei operowanie światłem staje się narzędziem budowania atmosfery, wzmacniania percepcji i symboliki miejsca. Eksperymentowanie z funkcją pozwala przełamywać tradycyjne podziały programowych, prowadząc do tworzenia przestrzeni elastycznych, hybrydowych i wielozadaniowych, odpowiadających zmieniającym się modelom życia i wspólnotowości. Najważniejszym eksperymentem architektury pozostaje jednak samo tworzenie przestrzeni – rozumiane jako próba kształtowania zachowań, doświadczeń i sposobów współistnienia użytkowników."
            }
            en={
                "Pushing the boundaries of materials, structures, and technologies forms the foundation of architectural development. Experimentation with material − its texture, weight, transparency, or durability − opens new design possibilities. Experimentation with form enables the exploration of innovative spatial configurations and the redefinition of relations between volume, light, and landscape. Working with light becomes a tool for creating atmosphere, enhancing perception, and enriching the symbolism of place. Experimenting with function allows us to break traditional programmatic divisions, leading to flexible, hybrid, and multi-purpose spaces that respond to changing models of living and community. Yet the most important architectural experiment remains the act of creating space itself − understood as an attempt to shape behaviours, experiences, and ways of coexistence among users.\n"
            }
        />
        <Translation
            variant= "cardTitle"
            en="2. EXPERIMENT IN URBANISM – LABORATORY: CITY"
            pl="2. EKSPERYMENT W URBANISTYCE – LABORATORIUM: MIASTO"/>
        <Paragraph
            pl={
                "Eksperyment w odniesieniu do miasta możne obejmować zarówno proces „pisania” jego struktury przestrzennej, jak i „odczytywania” jej różnorodnego oddziaływania. Te dwa kluczowe sposoby podejścia do tematu należy rozpatrywać w różnych skalach: całych jednostek urbanistycznych, wydzielonych zespołów zabudowy lub wybranych fragmentów miejskiej przestrzeni publicznej."
            }
            en={
                "Experimentation in relation to the city may involve both the process of writing its spatial structure and reading the diverse impacts it generates. These two key approaches must be considered at different scales: entire urban units, selected building complexes, or specific fragments of public urban space."
            }
        />
        <Paragraph
            pl={
                "Działania urbanistyczne polegające na tworzeniu modelowych rozwiązań – układów budynków, dzielnic wystawowych czy prototypowych układów funkcjonalno-przestrzennych – stanowią poligon doświadczalny, którego efekty mogą być powielane i stanowić sprawdzoną odpowiedź na zagadnienia w innych miejscach. W podobny sposób można spojrzeć na konkursy architektoniczno – urbanistyczne, będące eksperymentalnymi poszukiwaniami optymalnego wzorów środowiska zamieszkiwania oraz najlepiej zorganizowanych i zagospodarowanych przestrzeni wspólnych."
            }
            en={
                "Urban design activities that create model solutions – building layouts, exhibition districts, or prototype functional-spatial systems – act as testing grounds whose results may be replicated and serve as proven answers to similar challenges elsewhere. In a similar way, architecturalurban competitions can be viewed as experimental searches for optimal living environments and well-organized, well-designed shared spaces."
            }
        />

        <Paragraph
            pl={
                "Z kolei „odczytywanie” przestrzeni miejskiej – jej oddziaływania poprzez formę, funkcjonowanie i znaczenie ukrytych kodów kulturowych – wymaga zastosowania bogatego i wielodziedzinowego aparatu badawczego. Pozwala on konfrontować tradycyjne teorie urbanistyczne z wiedzą pozyskiwaną dzięki współczesnym technikom psychologii poznawczej, kognitywistyki i neurobiologii."
            }
            en={
                "Conversely, reading urban space – its impact through form, functioning, and the meaning of hidden cultural codes − requires a rich, multidisciplinary research toolkit. It enables us to confront traditional urban theories with knowledge acquired through contemporary methods in cognitive psychology, cognitive science, and neurobiology."
            }
        />
        <Translation
            variant= "cardTitle"
            en="3. EXPERIMENT IN EDUCATION – THE SPACE OF LEARNING THROUGH ACTION"
            pl="3. EKSPERYMENT W EDUKACJI – PRZESTRZEŃ UCZENIA SIĘ POPRZEZ DZIAŁANIE"/>
        <Paragraph
            pl={
                "Eksperyment projektowy stanowi kluczowe narzędzie kształtowania krytycznego myślenia w edukacji architektonicznej. Świadome testowanie rozwiązań umożliwia studentom nie tylko generować alternatywne koncepcje, ale również analizować, kwestionować i redefiniować zastane paradygmaty projektowe."
            }
            en={
                "Design experimentation is a key tool in shaping critical thinking within architectural education. Conscious testing of solutions enables students not only to generate alternative concepts, but also to analyse, question, and redefine existing design paradigms."
            }
        />
        <Paragraph
            pl={
                "Najpełniejszy wymiar eksperyment osiąga w środowisku interdyscyplinarnym, w którym spotykają się odmienne metodologie, języki i narzędzia badawcze. To właśnie na styku różnych obszarów wiedzy powstają najbardziej innowacyjne strategie dydaktyczne. Emergentne technologie – narzędzia cyfrowe, symulacje, algorytmiczne generowanie form, prototypowanie addytywne czy automatyzacja procesów – przekształcają tradycyjny sposób rozumienia procesu projektowego. Adepci sztuki architektury mogą równocześnie eksplorować idee i testować ich materialną wykonalność."
            }
            en={
                "Experiment reaches its fullest dimension in an interdisciplinary environment where different methodologies, languages, and research tools meet. It is at the intersection of diverse fields of knowledge that the most innovative didactic strategies emerge. Emerging technologies – digital tools, simulations, algorithmic form generation, additive prototyping, and process automation – are transforming the traditional understanding of the design process. Students of architecture can simultaneously explore ideas and test their material feasibility."
            }
        />
        <Paragraph
            pl={
                "Eksperymentowanie staje się nie tylko metodą dydaktyczną, lecz całościową strategią kształcenia: narzędziem przełamywania schematów, pogłębiania rozumienia złożonych zależności przestrzennych i konstrukcyjnych oraz rozwijanie krytycznego i refleksyjnego podejścia do projektowania w dynamicznie zmieniającym się środowisku architektonicznym. Jednocześnie każde działanie eksperymentalne powinno być zakorzenione w etyce i odpowiedzialnej praktyce – refleksji nad wpływem projektów na środowisko, lokalne społeczności i dziedzictwo kulturowe."
            }
            en={
                "Experimentation thus becomes not only a teaching method, but a comprehensive educational strategy: a tool for breaking established patterns, deepening the understanding of complex spatial and structural relationships, and fostering a critical and reflective approach to design in a dynamically changing architectural landscape. At the same time, every experimental action should be rooted in ethics and responsible practice – in reflection on the impact of design on the environment, local communities, and cultural heritage."
            }
        />
        <Translation
            variant= "cardTitle"
            en="4. EXPERIMENT IN THE SERVICE OF SOCIETY"
            pl="4. EKSPERYMENT W SŁUŻBIE SPOŁECZEŃSTWA"/>
        <Paragraph
            pl={
                "Współczesne środowisko życia człowieka – miasto – funkcjonuje jako złożony system, w którym architektura i urbanistyka integrują potrzeby mieszkańców z wyzwaniami ekologicznymi, społecznymi i infrastrukturalnymi, przy zachowaniu spójności przestrzennej. Tymczasowe interwencje, prototypy oraz działania oddolne umożliwiają testowanie nowych form użytkowania i współistnienia, dostarczając wiedzy wspierającej procesy projektowe i planistyczne."
            }
            en={
                "The contemporary human living environment – the city – functions as a complex system in which architecture and urban planning integrate inhabitants’ needs with ecological, social, and infrastructural challenges while maintaining spatial coherence. Temporary interventions, prototypes, and grassroots initiatives make it possible to test new forms of use and coexistence, providing knowledge that supports design and planning processes."
            }
        />
        <Paragraph
            pl={
                "Architektura nie jest wyłącznie obiektem fizycznym – stanowi również platformę dialogu, współtworzenia praktyk miejskich i kształtowania narracji społecznych. W tym kontekście eksperyment staje się narzędziem uczenia się, komunikacji i budowania współodpowiedzialności."
            }
            en={
                "Architecture is not merely a physical object – it is also a platform for dialogue, co-creation of urban practices, and the shaping of social narratives. In this context, experiment becomes a tool for learning, communication, and building shared responsibility."
            }
        />
        <Paragraph
            pl={
                "Dzięki temu możliwa jest adaptacja miasta do zmieniających się potrzeb mieszkańców przy zachowaniu jego czytelnej struktury i jakości przestrzeni publicznych. Społeczny wymiar eksperymentu otwiera przestrzeń do refleksji, badań i prezentacji nowych podejść projektowych oraz nowych modeli współtworzenia przestrzeni miejskich."
            }
            en={
                "This enables the city to adapt to the changing needs of its inhabitants while preserving its legible structure and the quality of public spaces. The social dimension of experimentation opens a space for reflection, research, and the presentation of new design approaches and new models for co-creating urban environments."
            }
        />

        <Box>
            <Translation pl={"KOMITET NAUKOWY KONFERENCJI"} en={"CONFERENCE SCIENTIFIC COMMITTEE"}/>
            <StandardList>
                <Translation
                    pl={"Anna Maria Wierzbicka – dr hab. inż. arch., prof. PW; Wydział Architektury Politechniki Warszawskiej – przewodnicząca komitetu naukowego"}
                    en={"Anna Maria Wierzbicka – DSc, PhD, Eng. Arch., Associate Professor; Faculty of Architecture, Warsaw University of Technology – chairwoman of the Scientific Committee"}/>
                <Translation
                    pl={"Agata Bonenberg – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Poznańskiej"}
                    en={"Agata Bonenberg – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Poznan University of Technology"}/>
                <Translation
                    pl={"Wojciech Bonenberg – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Poznańskiej"}
                    en={"Wojciech Bonenberg – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Poznan University of Technology"}/>
                <Translation
                    pl={"Bohdan Cherkes – prof. dr hab. inż. аrch.; Instytut Architektury i Designu, Narodowy Uniwersytet „Politechnika Lwowska\"(Lwów, Ukraina)"}
                    en={"Bohdan Cherkes – Professor, DSc, PhD, Eng. Arch.; Institute of Architecture and Design, Lviv Polytechnic National University"}
                />
                < Translation
                    pl={"Yurii Dyba – prof. dr hab. inż. аrch.; Dyrektor Instytutu Architektury i Designu, Uniwersytet Narodowy Politechnika Lwowska (Lwów, Ukraina)"}
                    en={"Yurii Dyba – Professor, DSc, PhD, Eng. Arch.; Director of the Institute of Architecture and Design, Lviv Polytechnic National University"}
                />
                <Translation
                    pl={"Viktor Greshta – prof. dr. hab. inż.; Rektor, Narodowy Uniwersytet „Politechnika Zaporoska (Zaporoże, Ukraina)"}
                    en={"Viktor Greshta – Professor, DSc, PhD, Eng.; Rector of Zaporizhzhia Polytechnic National University"}
                />
                <Translation
                    pl={"Barbara Gronostajska – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Wrocławskiej"}
                    en={"Barbara Gronostajska – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Wrocław University of Science and Technology"}/>
                <Translation
                    pl={"Sławomir Gzell – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Sławomir Gzell – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Krzysztof Ingarden – prof. dr hab. inż. arch.; Wydział Architektury i Sztuk Pięknych, Uniwersytet Andrzeja Frycza Modrzewskiego"}
                    en={"Krzysztof Ingarden – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture and Fine Arts, Andrzej Frycz Modrzewski Krakow University"}/>
                <Translation
                    pl={"Magdalena Maria Jagiełło – Kowalczyk – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Krakowskiej"}
                    en={"Magdalena Maria Jagiełło–Kowalczyk – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Cracow University of Technology"}/>
                <Translation
                    pl={"Prot Jarnuszkiewicz – profesor sztuk plastycznych; Akademia Sztuk Pięknych w Warszawie"}
                    en={"Prot Jarnuszkiewicz – Professor, DSc, PhD; Academy of Fine Arts in Warsaw"}/>
                <Translation
                    pl={"Oleksandr Kashchenko – prof. dr hab. inż. arch.; Dziekan Wydziału Architektury, Kijowski Narodowy Uniwersytet Budownictwa i Architektury (Kijów, Ukraina)"}
                    en={"Oleksandr Kashchenko – Professor, DSc, PhD, Eng. Arch.; Institute of Architecture and Design, Lviv Polytechnic National University"}/>
                <Translation
                    pl={"Magdalena Kozień-Woźniak – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Krakowskiej"}
                    en={"Magdalena Kozień-Woźniak – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Cracow University of Technology"}/>
                <Translation
                    pl={"Tomasz Kozłowski – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Krakowskiej"}
                    en={"Tomasz Kozłowski – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Cracow University of Technology"}/>
                <Translation
                    pl={"Yuriy Kryvoruchko – prof. dr hab. inż. arch.; Instytut Architektury i Designu, Narodowy Uniwersytet, Politechnika Lwowska (Lwów, Ukraina)"}
                    en={"Yuriy Kryvoruchko – Professor, DSc, PhD, Eng. Arch.; Institute of Architecture and Design, Lviv Polytechnic National University"}/>
                <Translation
                    pl={"Konrad Kucza-Kuczyński – prof. dr hab. inż. arch; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Konrad Kucza-Kuczyński – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Krzysztof Olszewski – prof. dr hab.; arch.; Wydział Sztuki Mediów, Akademia Sztuk Pięknych w Warszawie"}
                    en={"Krzysztof Olszewski – Professor, DSc, PhD; Arch.; Faculty of Media Art, Academy of Fine Arts in Warsaw"}/>
                <Translation
                    pl={"Błażej Ostoja Lniski – prof. dr hab.; Rektor Akademii Sztuk Pięknych w Warszawie"}
                    en={"Błażej Ostoja Lniski – Professor, DSc, PhD; Rector of Academy of Fine Arts in Warsaw"}/>
                <Translation
                    pl={"Piotr Lorens – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Gdańskiej"}
                    en={"Piotr Lorens – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Gdańsk University of Technology"}/>
                <Translation
                    pl={"Marek Pabich – prof. dr hab. inż. arch.; Wydział Budownictwa, Architektury i Inżynierii Środowiska Politechniki Łódzkiej"}
                    en={"Marek Pabich – Professor, DSc, PhD, Eng. Arch.; Faculty of Civil, Architecture, and Environmental Engineering, Lodz University of Technology"}/>
                <Translation
                    pl={"Jan Rabiej – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Śląskiej"}
                    en={"Jan Rabiej – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Silesian University of Technology"}/>
                <Translation
                    pl={"Krystyna Solarek – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Krystyna Solarek – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Bolesław Stelmach – prof. dr hab. inż. arch.; Dyrektor Narodowego Instytutu Architektury i Urbanistyki"}
                    en={"Bolesław Stelmach – Professor, DSc, PhD, Eng. Arch.; Director of the National Institute of Architecture and Urban Planning"}/>
                <Translation
                    pl={"Viktor Shtets – prof. dr art.; Instytut Architektury i Designu, Narodowy Uniwersytet, Politechnika Lwowska (Lwów, Ukraina)"}
                    en={"Viktor Shtets – Professor, DSc in Art; Institute of Architecture and Design, Lviv Polytechnic National University"}/>
                <Translation
                    pl={"Jerzy Uścinowicz – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Białostockiej"}
                    en={"Jerzy Uścinowicz – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Bialystok University of Technology"}/>
                <Translation
                    pl={"Valeriy Tovbych – prof. dr hab. inż. arch.; Wydział Architektury, Kijowski Narodowy Uniwersytet Budownictwa i Architektury (Kijów, Ukraina)"}
                    en={"Valeriy Tovbych – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Kyiv National University of Building and Architecture"}/>
                <Translation
                    pl={"Beata Joanna Gawryszewska – dr hab. inż. arch. kraj., prof. SGGW; Szkoła Główna Gospodarstwa Wiejskiego w Warszawie"}
                    en={"Beata Joanna Gawryszewska – DSc, PhD, Eng. in landscape arch., Associate Professor. Warsaw University of Life Sciences"}/>
                <Translation
                    pl={"Marcin Goncikowski – dr hab. inż. arch.; prof. PW; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Marcin Goncikowski – DSc, PhD, Eng. Arch., Associate Professor; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Jerzy Grochulski, dr hab. inż. arch.; prof. PW; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Jerzy Grochulski – DSc, PhD, Eng. Arch., Associate Professor; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Janina Zaczek-Peplinska - dr inż. hab. profesor PW, Wydział Geodezji i Kartografii Politechniki Warszawskiej"}
                    en={"Janina Zaczek-Peplinska - DSc, PhD, Eng., Associate Professor, Faculty of Geodesy and Cartography, Warsaw University of Technology"}/>
                <Translation
                    pl={"Krzysztof Koszewski – dr hab. inż. arch.; Dziekan Wydziału Architektury Politechniki Warszawskiej"}
                    en={"Krzysztof Koszewski – DSc, PhD, Eng. Arch., Dean of the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Andrij Markovskyi – dr hab. arch.; Narodowa Akademia Sztuk Pięknych i Architektury Ukrainy (Kijów, Ukraina)"}
                    en={"Andrij Markovskyi – DSc, PhD, Arch., National Academy of Fine Arts and Architecture, Kyiv, Ukraine"}/>
                <Translation
                    pl={"Grzegorz Nawrot – dr hab. inż. arch., prof. WAPŚ; Wydział Architektury Politechniki Śląskiej"}
                    en={"Grzegorz Nawrot – DSc, PhD, Eng. Arch., Associate Professor; Faculty of Architecture, Silesian University of Technology"}/>
                <Translation
                    pl={"Mirosław Orzechowski – dr hab. inż. arch., prof. PW; Prodziekan ds. Studiów Wydziału Architektury Politechniki Warszawskiej"}
                    en={"Mirosław Orzechowski – DSc, PhD, Eng. Arch., Associate Professor; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Bogusław Podhalański – dr hab. inż. arch. prof. ANS; Akademia Nauk Stosowanych w Nowym Targu"}
                    en={"Bogusław Podhalański – DSc, PhD, Eng. Arch., Associate Professor; University of Applied Sciences in Nowy Targ"}/>
                <Translation
                    pl={"Kinga Racoń-Leja – dr hab. inż. arch., prof. PK; Wydział Architektury Politechniki Krakowskiej"}
                    en={"Kinga Racoń-Leja – DSc, PhD, Eng. Arch., Associate Professor; Faculty of Architecture, Cracow University of Technology"}/>
                <Translation
                    pl={"Karolina Tulkowska-Słyk– dr hab. inż. arch., prof. PW; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Karolina Tulkowska-Słyk – DSc, PhD, Eng. Arch., Associate Professor; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Oleksandr Chyzhevsky – dr inż. arch.; Przewodniczący Narodowego Związku Architektów Ukrainy (Kijów, Ukraina)"}
                    en={"Oleksandr Chyzhevsky – PhD, Eng. Arch.; Chairman of the National Union of Architects of Ukraine"}/>
                <Translation
                    pl={"Ewelina Gawell – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Ewelina Gawell – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Michał Gołębiewski – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Michał Gołębiewski – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Renata Jóźwik – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Renata Jóźwik – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Jerzy Łątka – dr inż. arch.; Wydział Architektury Politechniki Wrocławskiej"}
                    en={"Jerzy Łątka – PhD, Eng. Arch.; Faculty of Architecture, Wrocław University of Science and Technology"}/>
                <Translation
                    pl={"Maciej Miłobędzki - dr inż. arch.; Prodziekan ds. Rozwoju Wydziału Architektury Politechniki Warszawskiej"}
                    en={"Maciej Miłobędzki - PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Anita Orchowska – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Anita Orchowska – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Marianna Otmianowska – dr; dyrektor Muzeum Łazienki Królewskie w Warszawie"}
                    en={"Marianna Otmianowska – PhD; director of the Royal Łazienki Museum in Warsaw"}/>
                <Translation
                    pl={"Andrzej Skalimowski – dr, kierownik Działu Naukowego Narodowego Instytutu Architektury i Urbanistyki"}
                    en={"Andrzej Skalimowski – PhD, Head of the Scientific Department of the National Institute of Architecture and Urban Planning"}/>
                <Translation
                    pl={"Maciej Skaza - dr inż. arch.; Wydział Architektury Politechniki Krakowskiej"}
                    en={"Maciej Skaza - PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Anna Tofiluk – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Anna Tofiluk – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Paweł Trębacz – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Paweł Trębacz – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Justyna Zdunek-Wielgołaska – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Justyna Zdunek-Wielgołaska – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Kinga Zinowiec-Cieplik – dr inż. arch. krajobrazu; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Kinga Zinowiec-Cieplik – PhD, Eng. in landscape arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Oleksandr Baranovskyi – architekt, koordynator projektów Narodowego Stowarzyszenia Architektów Ukrainy (Kijów, Ukraina)"}
                    en={"Oleksandr Baranovskyi – architect, project coordinator of the National Union of Architects of Ukraine"}/>
                <Translation
                    pl={"Kamilla Pereta – zastępca dyr. Muzeum Łazienki Królewskie w Warszawie"}
                    en={"Kamilla Pereta – deputy director of the Royal Łazienki Museum in Warsaw"}/>
            </StandardList>
        </Box>
        <Box>
            <Translation pl={"KOMITET ORGANIZACYJNY KONFERENCJI"} en={"CONFERENCE ORGANISING COMMITTEE"}/>
            <StandardList>
                <Translation
                    pl={"Anna Maria Wierzbicka – dr hab. inż. arch., prof. PW; Wydział Architektury Politechniki Warszawskiej – przewodnicząca komitetu organizacyjnego"}
                    en={"Anna Maria Wierzbicka – DSc, PhD, Eng. Arch., Associate Professor; Faculty of Architecture, Warsaw University of Technology – chairwoman of the Scientific Committee"}/>
                <Translation
                    pl={"Konrad Kucza-Kuczyński – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Konrad Kucza-Kuczyński – Professor, DSc, PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Krzysztof Olszewski – prof. dr hab.; arch.; Wydział Sztuki Mediów, Akademia Sztuk Pięknych w Warszawie"}
                    en={"Krzysztof Olszewski – Professor, DSc, PhD; Arch.; Faculty of Media Art, Academy of Fine Arts in Warsaw"}/>
                <Translation
                    pl={"Anita Orchowska – dr inż. arch.; Prodziekan ds. Studenckich Wydziału Architektury Politechniki Warszawskiej"}
                    en={"Anita Orchowska – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Michał Gołębiewski – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Michał Gołębiewski – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Renata Jóźwik – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Renata Jóźwik – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Paulina Lis-Meldner – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Paulina Lis-Meldner – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Hanna Malik-Trocha – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Hanna Malik-Trocha – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Mateusz Płoszaj-Mazurek – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Mateusz Płoszaj-Mazurek – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Marcin Strzała - dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Marcin Strzała – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Anna Tofiluk – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Anna Tofiluk – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Paweł Trębacz – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Paweł Trębacz – PhD, Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Kinga Zinowiec-Cieplik – dr inż. arch.; krajobrazu; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Kinga Zinowiec-Cieplik – PhD, Eng. in landscape arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Małgorzata Benedek – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                en={"Małgorzata Benedek – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Magdalena Duda – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej, sekretarz konferencji"}
                    en={"Magdalena Duda – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology, Conference Secretary"}/>
                <Translation
                    pl={"Wiktor Gago – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Wiktor Gago – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Paweł Grobelny – dr; Wydział Wzornictwa, Akademia Sztuk Pięknych w Warszawie"}
                    en={"Paweł Grobelny – PhD in Arts; Faculty of Graphic Arts, Academy of Fine Arts in Warsaw"}/>
                <Translation
                    pl={"Anita Kacprzyk – Kierowniczka Działu Marketingu, Muzeum Łazienki Królewskie w Warszawie"}
                    en={"Anita Kacprzyk – Head of the Marketing Department, Royal Łazienki Museum in Warsaw"}/>
                <Translation
                    pl={"Martyna Kędrzyńska – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Martyna Kędrzyńska – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Iwona Kalenik – dr sztuki, inż. arch.; Wydział Architektury Wnętrz, Akademia Sztuk Pięknych w Warszawie"}
                    en={"Iwona Kalenik – PhD in Arts, MSc. Eng. Arch.; Faculty of Interior Design, Academy of Fine Arts in Warsawy"}/>
                <Translation
                    pl={"Ewa Maniak – studentka Wydziału Architektury Politechniki Warszawskiej"}
                    en={"Ewa Maniak – Student at the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Emilian Nagiel – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Emilian Nagiel – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Marta Nawrocka – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Marta Nawrocka – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Małgorzata Neumann - mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Małgorzata Neumann - MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Małgorzata Nowak-Pieńkowska – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Małgorzata Nowak-Pieńkowska – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Jakub Pieńkowski – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Jakub Pieńkowski – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Ewa Rombalska – mgr inż. arch.; pełnomocnik Dyrektora Narodowego Instytutu Architektury i Urbanistyki"}
                    en={"Ewa Rombalska – MSc. Eng. Arch.; Director’s Proxy, National Institute of Architecture and Urban Planning"}/>
                <Translation
                    pl={"Martyna Rowicka-Michałowska – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Martyna Rowicka-Michałowska – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Filip Strzelecki – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Filip Strzelecki – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Lech Szymborski – mgr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={"Lech Szymborski – MSc. Eng. Arch.; Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Milena Żakowska – specjalista ds. organizacji wydarzeń w Muzeum Łazienki Królewskie w Warszawie"}
                    en={"Milena Żakowska – Event Organization Specialist, Royal Łazienki Museum in Warsaw"}/>
            </StandardList>
        </Box>
    </>);
}
