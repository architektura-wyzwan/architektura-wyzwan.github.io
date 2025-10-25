import {Paragraph} from "../../components/Paragraph";
import {ArticleMetadata} from "../../layout/Article";
import BigImage from "../../layout/article/BigImage";
import TwoImages from "../../layout/article/TwoImages";
import {StandardList} from "../../components/StandardList";
import {Box} from "@mui/material";
import {Translation} from "../../components/Translation";

export const edition_2023: ArticleMetadata = {
    title_pl: "Architektura Wyzwań - Odbudowa Ukrainy",
    title_en: "Architecture of Challenges – Rebuilding Ukraine",
    content: Content,
}

function Content() {
    return (<>
        <Paragraph
            text_pl={"W dniach 3 i 4 lipca 2023 r. w Muzeum Łazienki Królewskie odbyła się międzynarodowa konferencja pod hasłem Architektura Wyzwań - Odbudowa Ukrainy, organizowana przez Wydział Architektury Politechniki Warszawskiej, Muzeum Łazienki Królewskie w Warszawie i Narodowy Instytut Dziedzictwa. Konferencja była przestrzenią wymiany myśli na temat roli architektury, planowania przestrzennego i projektowania krajobrazu w obliczu zniszczeń wojennych oraz przyszłej odbudowy. Jej celem było wspólne poszukiwanie odpowiedzi na pytania, jak kształtować środowisko życia wobec zagrożeń wojennych i jaką przyszłość powinna mieć Ukraina po zakończeniu działań zbrojnych."}
            text_en={
                "On July 3–4, 2023, the international conference titled Architecture of Challenges – Rebuilding Ukraine was held at the Royal Łazienki Museum in Warsaw. The event was organized by the Faculty of Architecture of the Warsaw University of Technology, the Royal Łazienki Museum in Warsaw, and the National Heritage Board of Poland. The conference served as a platform for the exchange of ideas on the role of architecture, spatial planning, and landscape design in the context of war-related destruction and future reconstruction. Its aim was to collectively seek answers to the questions of how to shape living environments in the face of wartime threats and what kind of future Ukraine should have after the end of military operations."
            }/>
        <BigImage src={"/static/POSTER_2023.png"}/>
        <Paragraph
            text_pl={"24 lutego 2022 r. Ukraina znów została zaatakowana przez Rosję – wojna dotknęła cały kraj"}
            text_en={
                "24 February 2022. Russia has attacked Ukraine again - the war has affected the whole country."
            }/>
        <Paragraph
            text_pl={"Wojna niszczy dorobek cywilizacji, kultury, człowieczeństwo. Walka o ocalenie życia swojego i osób najbliższych, domu, wreszcie Ojczyzny - jest oczywistą reakcją każdego człowieka. O jego tożsamości stanowi przynależność do miejsca życia, przywiązanie do krajobrazu, wartości wyrosłych z rodzimości miejsca – do dziedzictwa, dla którego znaczenie i pamięć są podstawą."}
            text_en={
                "War destroys the achievements of civilisation, culture, and humanity. Fighting to save one’s life and that of one’s loved ones, one’s home, and finally one’s homeland - is the obvious reaction of every human being. One’s identity is determined by one belonging to the place where one’s lives, one’s attachment to the landscape, to the values that grow out of the indigenousness of the place - to the heritage for which meaning and memory are the basis."
            }/>
        <Paragraph
            text_pl={"Po wojnie przyjdzie czas pokoju. Odbudowa ma jednak miejsce już teraz"}
            text_en={
                "After the war comes a time of peace. Reconstruction has, however, already started."
            }/>
        <Paragraph
            text_pl={"Odbudowa Ukrainy dotyczy wszystkich aspektów środowiska życia: architektury, infrastruktury, w skali miast, miasteczek, wsi. Odnowa obejmuje zarówno rozległe krajobrazy, jak i poszczególne miejsca. Wymaga przemyślenia, współdziałania i solidarności ludzkiej na skalę międzynarodową. Czas nie stoi w miejscu. Odbudowa i inne działania architektoniczne odpowiadające na skutki wojny dzieją się już teraz. Dostarczają wielu wzorów do naśladowania, ale także wyzwań do uwzględnienia."}
            text_en={
                "Ukraine’s reconstruction encompasses all aspects of the living environment: architecture and infrastructure, at the scale of cities, towns and villages. This renewal encompasses both vast landscapes and individual places. It requires consideration, cooperation and human solidarity on an international scale. Time does not stand still. Reconstruction and other architectural actions in response to the efects of war already take place. They bring examples of good practices, but also the challenges to be taken in account."
            }/>
        <TwoImages src_1={"/static/PreviousEditions/2023/04.07 konferencja ukraina 1.jpg"}
                   src_2={"/static/PreviousEditions/2023/04.07 konferencja ukraina 8.jpg"}/>
        <Paragraph
            text_pl={"Jak kształtować środowisko życia wobec zagrożeń wojennych?"}
            text_en={
                "How to shape the living environment in the face of war threats?"
            }/>
        <Paragraph
            text_pl={"Zakończenie wojny nie oznacza uwolnienia się od wszystkich zagrożeń z nią związanych. Doświadczenie ograniczonego dostępu do podstawowych zasobów zapewniających przetrwanie, jak : woda, energia i żywność powoduje, że na nowo pojawia się pytanie o sposób kształtowania zabudowy mieszkaniowej, gwarantujący dostęp do tych składników w najbliższym sąsiedztwie. Podobnie, kluczowym zagadnieniem staje się ochrona mieszkańców przed nagłym atakiem z miejsc oddalonych czasami o setki kilometrów, zagwarantowanie odpowiednio wyposażonych , bezpiecznych miejsc przebywania. Jednym z kluczowych problemów dla projektantów jest odpowiedź na problem natychmiastowej pomocy w obliczu klęski humanitarnej (braku domu, wody, pożywienia, energii...}/> w kontekście perspektywy długoterminowej, bowiem projekt i budowa środowiska zamieszkiwania zawsze rozważane są w szerszych skalach urbanistycznych i krajobrazowych. Jak pogodzić dwie perspektywy, jakie przyjąć kierunki i rozwiązania, aby maksymalnie wykorzystać zaangażowaną energię w osiągnięcie kluczowych celów krótkoterminowych, które mogą stać się podwaliną do osiągnięcia założeń długoterminowych - odbudowy rezylientnego, regeneratywnego środowiska."}
            text_en={
                "The end of war does not mean freedom from all its associated risks. The experience of limited access to basic survival resources, such as water, energy and food, raises the question of how to shape housing developments that guarantee access to these components in the immediate vicinity. Similarly, protecting residents against sudden attacks from places sometimes hundreds of kilometres away, guaranteeing adequately equipped, safe places to stay, is becoming a key issue. One of the key problems for designers is to respond to the problem of immediate relief in the face of a humanitarian disaster (lack of homes, water, food, energy...}/> in the context of a long-term perspective since the design and construction of the living environment is always considered at wider urban and landscape scales. How to reconcile the two perspectives, what directions and solutions to adopt to maximise the energy involved in achieving the key short-term goals that can become the foundation for achieving the long-term objectives - the reconstruction of a resilient, regenerative environment."
            }/>
        <Paragraph
            text_pl={"Jaka ma być Ukraina po odbudowie? Jak kształtować środowisko życia wobec zagrożeń wojennych? Jak powinno wyglądać współczesne środowisko zamieszkiwania?"}
            text_en={
                "What should Ukraine be like after reconstruction? How to shape the living environment in the face of war threats? What should a contemporary living environment look like?"
            }/>
        <Paragraph
            text_pl={"Czas jest czynnikiem determinującym działania związane z odbudową ze zniszczeń. Działania te dotyczyć będą jednak dziesięcioleci i sięgać następnych pokoleń. Racjonalne rozplanowanie podejmowanych inwestycji, wykorzystanie infrastruktury, zastosowanie dostępnych materiałów, również tych pochodzących z recyclingu, a także znalezienie właściwej odpowiedzi zarówno funkcji jak i formy staje się ważnym problemem odbudowy."}
            text_en={
                "Time is a determining factor in reconstruction activities from the devastation. However, these activities will concern decades and reach into the next generations. The rational planning of the investments to be made, the use of infrastructure, the use of available materials, including recycled ones, and finding the right answer to both function and form become important reconstruction issues."
            }/>
        <Paragraph
            text_pl={"Jak ochronić ponadczasowe wartości środowiska umożliwiające kontynuacje życia biologicznego?"}
            text_en={
                "How do we protect the timeless values of the environment that allow biological life to continue?"
            }/>
        <Paragraph
            text_pl={"Odbudowa Ukrainy wpisuje się w szereg działań stanowiących wyzwania o skali globalnej. Jednym z najistotniejszych są zapewnienie dostępu do kurczących się zasobów areału ziem uprawnych, wody, utrzymanie bioróżnorodności. Kolejny stanowią problemy z uzyskaniem źródeł energii, które nie będą wpływać niekorzystnie na zmiany klimatu oraz powodować zanieczyszczania środowiska. W konsekwencji rodzi się pytanie o współczesne technologie wznoszenia oraz materiały, których produkcja wpływa na ograniczenie śladu węglowego. Nowe środowisko zamieszkiwania powinno zapewnić racjonalne gospodarowanie retencjonowaną wodą, zachowanie korytarzy ekologicznych i ochronę najbardziej wartościowych warstw gleby."}
            text_en={
                "The reconstruction of Ukraine is part of a series of activities that represent global challenges. One of the most important is ensuring access to dwindling resources of arable land and water and maintaining biodiversity. Another is the problem of obtaining energy sources that will not adversely affect climate change or cause environmental pollution. This raises the question of modern construction technologies and materials whose production contributes to reducing the carbon footprint. The new living environment should ensure the rational management of retained water, the preservation of ecological corridors and the protection of the most valuable soil layers."
            }/>
        <Paragraph
            text_pl={"Jak wspierać społeczność tworzoną z osób, które pozostawiły swoje dotychczasowe miejsca zamieszkiwania, a ich rodzinne korzenie zostały bezpowrotnie utracone?"}
            text_en={
                "How can we support a community of people who have left their previous places of residence and whose family roots have been irretrievably lost?"
            }/>
        <Paragraph
            text_pl={"Każdy człowiek wychowywał się w konkretnych warunkach, w rozpoznawalnym dla niego środowisku kulturowym. Wojna burzy strukturę społeczną, przynosi śmierć członków rodziny, zmusza do podejmowania trudnych, a czasami dramatycznych decyzji dotyczących losu własnego i swoich bliskich. Znalezienie odpowiedniej formy przestrzennej i funkcji, służących odbudowie relacji społecznych stanowi jedno z najistotniejszych zagadnień czasów powojennych. Oprócz oczywistych, funkcjonalnych odpowiedzi na te pytania pojawia się głębsza, dotykające podstaw ludzkiej tożsamości, rozumienia znaczeń form przestrzennych i kodu kulturowego."}
            text_en={
                "Each person grew up in specific conditions, in a unique cultural environment. War shatters the social structure, brings the death of family members, and forces one to make difficult and sometimes dramatic decisions about one’s and one’s loved ones’ fate. Finding an appropriate spatial form and function to rebuild social relations is one of the most crucial issues of the post-war era. In addition to the obvious, functional answers to these questions, there is a deeper one, touching on the foundations of human identity, the understanding of the meanings of spatial forms and the cultural code."
            }/>
        <Paragraph
            text_pl={"Jaka ma przebiegać odbudowa Ukrainy?"}
            text_en={
                "How should the reconstruction of Ukraine proceed?"
            }/>
        <Paragraph
            text_pl={"Celem konferencji jest zgromadzenie wspólnoty akademickiej oraz środowisk kulturalnych, naukowych, technicznych, gospodarczych, społecznikowskich, samorządowych, rządowych i innych zaangażowanych w odbudowę Ukrainy. Tematem wspólnej dyskusji - w kontekście konsekwencji wojny w Ukrainie - będą: ochrona ocalałego oraz odbudowa utraconego dziedzictwa architektury, możliwości stworzenia nowych warunków życia, znaczenie architektury w kształtowaniu tożsamości i bezpieczeństwa. Dyskusja ta powinna wpisywać się w idee Nowego Europejskiego Bauhausu oparte na jakości przestrzeni, wspieraniu złożoności środowiska przyrodniczego oraz tworzeniu demokratycznej wspólnoty ludzkiej."}
            text_en={
                "The conference aims to bring together the academic community and the cultural, scientific, technical, economic, social activists, self-governmental, governmental and other circles engaged in rebuilding Ukraine. The subjects of the common discussion - in the context of the effects of war in Ukraine - are to be: the protection of the surviving and the reconstruction of the lost architectural heritage, the possibility of creating new living conditions, the importance of architecture in shaping identity and security. This discussion should go in line with the New European Bauhaus’s ideas, basing on the quality of space, supporting the complexity of the natural environment and creating a democratic human community."
            }/>
        <TwoImages src_1={"/static/PreviousEditions/2023/DSC02234.JPG"}
                   src_2={"/static/PreviousEditions/2023/DSC02238.JPG"}/>
        <Box>
            <Translation
                pl={"Konferencja odbyła się pod przewodnictwem międzynarodowego Komitetu Naukowego w składzie:"}
                en={"The conference was chaired by an international Scientific Committee consisting of:"}/>
            <StandardList>
                <Translation
                    pl={"Anna Maria Wierzbicka – dr hab. inż. arch., prof. PW; Wydział Architektury Politechniki Warszawskiej – przewodnicząca komitetu naukowego"}
                    en={
                        "Anna Maria Wierzbicka – dr hab. Eng. arch., prof. of Warsaw University of Technology, the Faculty of Architecture – chairwoman"}/>
                <Translation
                    pl={"Shigeru Ban – prof., architekt; Okrągły Stół Nowego Europejskiego Bauhausu,Uniwersytet Keiō (Tokio, Japonia)"}
                    en={
                        "Shigeru Ban – prof., architect; The New European Bauhaus Round Table, Keiō University (Tokyo, Japan)"}/>
                <Translation
                    pl={"Agata Bonenberg – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Poznańskiej"}
                    en={
                        "Agata Bonenberg – prof. dr hab. Eng arch.; the Faculty of Architecture, Poznań University of Technology"}/>
                <Translation
                    pl={"Wojciech Bonenberg – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Poznańskiej"}
                    en={
                        "Wojciech Bonenberg – prof. dr hab. Eng. arch.; the Faculty of Architecture, Poznań University of Technology"}/>
                <Translation
                    pl={"Bohdan Cherkes – prof. dr hab. inż. аrch.; Instytut Architektury i Designu, Narodowy Uniwersytet „Politechnika Lwowska\"(Lwów, Ukraina)"}
                    en={
                        "Bohdan Cherkes – prof. dr hab. Eng. аrch.; the Institute of Architecture and Design, \"Lviv Polytechnic\" National University (Lviv, Ukraine)"
                    }/>
                <Translation
                    pl={"Viktor Greshta – prof. dr. hab. inż.; Rektor, Narodowy Uniwersytet „Politechnika Zaporoska\"(Zaporoże, Ukraina)"}
                    en={
                        "Viktor Greshta – prof. dr. hab. Eng.; Rector, National University\"Zaporizhzhia Polytechnic\" (Zaporizhzhia, Ukraine)"
                    }/>
                <Translation
                    pl={"Barbara Gronostajska – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Wrocławskiej"}
                    en={
                        "Barbara Gronostajska – prof. dr hab. Eng. arch.; the Faculty of Architecture, Wrocław University of Science and Technology"}/>
                <Translation
                    pl={"Sławomir Gzell – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={
                        "Sławomir Gzell – prof. dr hab. Eng. arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Prot Jarnuszkiewicz – profesor sztuk plastycznych; Akademia Sztuk Pięknych w Warszawie"} en={
                    "Prot Jarnuszkiewicz – professor of fine arts; Academy of Fine Arts, Warsaw"}/>
                <Translation
                    pl={"Oleksandr Kashchenko – prof. dr hab. inż. arch.; Dziekan Wydziału Architektury, Kijowski Narodowy Uniwersytet Budownictwa i Architektury (Kijów, Ukraina)"}
                    en={
                        "Oleksandr Kashchenko – prof. dr hab. Eng. arch.; Dean of the Faculty of Architecture, Kyiv National University of Construction and Architecture (Kyiv, Ukraine)"}/>
                <Translation
                    pl={"Tomasz Kozłowski – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Krakowskiej"}
                    en={
                        "Tomasz Kozłowski – prof. dr hab. Eng. arch.; the Faculty of Architecture, Cracow University of Technology"}/>
                <Translation
                    pl={"Yuriy Kryvoruchko – prof. dr hab. inż. arch.; Instytut Architektury i Designu, Narodowy Uniwersytet „Politechnika Lwowska\"(Lwów, Ukraina)"}
                    en={"Yuriy Kryvoruchko – prof. dr hab. Eng. arch.; the Institute of Architecture and Design, \"Lviv Polytechnic\" National University (Lviv, Ukraine)"
                    }/>
                <Translation
                    pl={"Konrad Kucza-Kuczyński – prof. dr hab. inż. arch; Wydział Architektury Politechniki Warszawskiej"}
                    en={
                        "Konrad Kucza-Kuczyński – prof. dr hab. Eng. arch; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Jakub Lewicki – prof. dr hab.; Wydział Nauk Historycznych, Uniwersytet Kardynała Stefana Wyszyńskiego w Warszawie; Mazowiecki Wojewódzki Konserwator Zabytków"}
                    en={
                        "Jakub Lewicki – prof. dr hab.; the Faculty of Historical Sciences, Cardinal Stefan Wyszyński University in Warsaw; Mazovian Voivodship Conservator of Monuments"}/>
                <Translation
                    pl={"Piotr Lorens – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Gdańskiej"} en={
                    "Piotr Lorens – prof. dr hab. Eng. arch.; the Faculty of Architecture, Gdańsk University of Technology"}/>
                <Translation
                    pl={"Marek Pabich – prof. dr hab. inż. arch.; Wydział Budownictwa, Architektury i Inżynierii Środowiska Politechniki Łódzkiej"}
                    en={
                        "Marek Pabich – prof. dr hab. Eng. arch.; the Faculty of Civil, Architecture, and Environmental Engineering, Lodz University of Technology"}/>
                <Translation
                    pl={"Bogusław Podhalański – prof. dr hab. inż. arch.; Podhalańska Państwowa Uczelnia Zawodowa w Nowym Targu"}
                    en={
                        "Bogusław Podhalański – prof. dr hab. Eng. arch.; Podhale State Vocational University in Nowy Targ"}/>
                <Translation
                    pl={"Jan Rabiej – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Śląskiej"} en={
                    "Jan Rabiej – prof. dr hab. Eng. arch.; the Faculty of Architecture, Silesian University of Technology"}/>
                <Translation
                    pl={"Elżbieta Dagny Ryńska – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={
                        "Elżbieta Dagny Ryńska – prof. dr hab. Eng. Arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Krystyna Solarek – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={
                        "Krystyna Solarek – prof. dr hab. Eng. arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Bolesław Stelmach – prof. dr hab. inż. arch.; Dyrektor Narodowego Instytutu Architektury i Urbanistyki"}
                    en={
                        "Bolesław Stelmach – prof. dr hab. Eng. arch.; Director of the National Institute of Architecture and Urban Planning"}/>
                <Translation
                    pl={"Valeriy Tovbych – prof. dr hab. inż. arch.; Wydział Architektury, Kijowski Narodowy Uniwersytet Budownictwa i Architektury (Kijów, Ukraina)"}
                    en={
                        "Valeriy Tovbych – prof. dr hab. Eng. arch.; the Faculty of Architecture, Kyiv National University of Construction and Architecture (Kyiv, Ukraine)"}/>
                <Translation
                    pl={"Jerzy Uścinowicz – prof. dr hab. inż. arch.; Wydział Architektury Politechniki Białostockiej"}
                    en={
                        "Jerzy Uścinowicz – prof. dr hab. Eng. arch.; the Faculty of Architecture, Bialystok University of Technology"}/>
                <Translation
                    pl={"Beata Joanna Gawryszewska – dr hab. inż. arch. kraj., prof. SGGW; Szkoła Główna Gospodarstwa Wiejskiego w Warszawie"}
                    en={
                        "Beata Joanna Gawryszewska – dr hab. Eng. landscape arch., prof. of the Warsaw University of Life Sciences"}/>
                <Translation
                    pl={"Krzysztof Ingarden – dr hab. inż. arch., prof. KAAFM; Wydział Architektury i Sztuk Pięknych, Krakowska Akademia im. Andrzeja Frycza Modrzewskiego"}
                    en={
                        "Krzysztof Ingarden – dr hab. Eng. arch., prof. AFMKU; Faculty of Architecture and Fine Arts, Andrzej Frycz Modrzewski Krakow University"}/>
                <Translation
                    pl={"Grzegorz Nawrot – dr hab. inż. arch., prof. WAPŚ; Wydział Architektury Politechniki Śląskiej"}
                    en={
                        "Grzegorz Nawrot – dr hab. Eng. arch., prof. of the Faculty of Architecture, Silesian University of Technology"}/>
                <Translation
                    pl={"Krzysztof Koszewski – dr hab. inż. arch.; Wydział Architektury Politechniki Warszawskiej"} en={
                    "Krzysztof Koszewski – dr hab. Eng. arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Magdalena Kozień-Woźniak – dr hab. inż. arch., prof. PK; Wydział Architektury Politechniki Krakowskiej"}
                    en={
                        "Magdalena Kozień-Woźniak – dr hab. Eng. arch., prof. of Cracow University of Technology, the Faculty of Architecture"}/>
                <Translation
                    pl={"Mirosław Orzechowski – dr hab. inż. arch., prof. PW; Wydział Architektury Politechniki Warszawskiej"}
                    en={
                        "Mirosław Orzechowski – dr hab. Eng. arch., prof. of Warsaw University of Technology, the Faculty of Architecture"}/>
                <Translation
                    pl={"Karolina Tulkowska-Słyk– dr hab. inż. arch., prof. PW; Wydział Architektury Politechniki Warszawskiej"}
                    en={
                        "Karolina Tulkowska-Słyk– dr hab. Eng. arch., prof. of Warsaw University of Technology, the Faculty of Architecture"}/>
                <Translation
                    pl={"Kinga Racoń-Leja – dr hab. inż. arch., prof. PK; Wydział Architektury Politechniki Krakowskiej"}
                    en={
                        "Kinga Racoń-Leja – dr hab. Eng. arch., prof. of Cracow University of Technology, the Faculty of Architecture"}/>
                <Translation
                    pl={"Oleksandr Chyzhevsky – dr inż. arch.; Przewodniczący Narodowego Związku Architektów Ukrainy (Kijów, Ukraina)"}
                    en={
                        "Oleksandr Chyzhevsky – dr Eng. arch.; Chairman of the National Union of Architects of Ukraine (Kyiv, Ukraine)"}/>
                <Translation
                    pl={"Ewelina Gawell – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"} en={
                    "Ewelina Gawell – dr Eng. arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Renata Jóźwik – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"} en={
                    "Renata Jóźwik – dr Eng.arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Jerzy Łątka – dr inż. arch.; Wydział Architektury Politechniki Wrocławskiej"} en={
                    "Jerzy Łątka – dr Eng. arch.; the Faculty of Architecture, Wrocław University of Science and Technology"}/>
                <Translation
                    pl={"Anita Orchowska – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"} en={
                    "Anita Orchowska – dr Eng. arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Łukasz Piątek – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"} en={
                    "Łukasz Piątek – dr Eng. arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Hubert Trammer – dr inż. arch.; Okrągły Stół Nowego Europejskiego Bauhausu"} en={
                    "Hubert Trammer – dr Eng. arch.; The New European Bauhaus Round Table"}/>
                <Translation
                    pl={"Paweł Trębacz – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"} en={
                    "Paweł Trębacz – dr Eng. arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Justyna Zdunek-Wielgołaska – dr inż. arch.; Wydział Architektury Politechniki Warszawskiej"}
                    en={
                        "Justyna Zdunek-Wielgołaska – dr Eng. arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Kinga Zinowiec-Cieplik – dr inż. arch. krajobrazu; Wydział Architektury Politechniki Warszawskiej"}
                    en={
                        "Kinga Zinowiec-Cieplik – dr Eng. landscape arch.; the Faculty of Architecture, Warsaw University of Technology"}/>
                <Translation
                    pl={"Oleksandr Baranovskyi – architekt, koordynator projektów Narodowego Stowarzyszenia Architektów Ukrainy (Kijów, Ukraina)"}
                    en={
                        "Oleksandr Baranovskyi – architect, project coordinator of the National Union of Architects of Ukraine (Kyiv, Ukraine)"}/>
                <Translation
                    pl={"Anastasiya Ponomaryova – architekt, Wydział Architektury ETH Zurych (Szwajcaria), inicjatywa CO-HATY (Iwano-Frankiwsk, Ukraina)"}
                    en={"Anastasiya Ponomaryova – architect, Department of Architecture ETH Zurich (Switzerland), CO-HATY initiative (Ivano-Frankivsk, Ukraine)"}/>
            </StandardList>
        </Box>
    </>)
}
