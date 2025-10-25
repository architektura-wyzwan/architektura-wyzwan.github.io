import {ArticleMetadata} from "../../layout/Article";
import {Paragraph} from "../../components/Paragraph";
import BigImage from "../../layout/article/BigImage";

export const conference_2025: ArticleMetadata = {
    title_pl: "III Międzynarodowa Konferecja już za nami",
    title_en: "We've successfully wrapped up our 3rd International Conference",
    subtitle_pl: "Konferencja \"Architecture of Challenges: New European Bauhaus – Building Community 2025\" zgromadziła architektów i ekspertów w  Warszawie na dwa dni inspirujących debat i wymiany doświadczeń.",
    subtitle_en: "The 'Architecture of Challenges: New European Bauhaus – Building Community 2025' conference successfully brought together architects and experts in Warsaw for two days of inspiring debates and knowledge sharing.",
    image: "/static/About/News/Conference_2025/Idzien.jpg",
    content: Content,
}

function Content() {
    return (
        <>
            <Paragraph
                text_pl={"1 lipca, w Światowym Dniu Architektury, zakończyliśmy dwa dni intensywnych debat, prezentacji i spotkań podczas III Międzynarodowej Konferencji „Architecture of Challenges: New European Bauhaus – Building Community 2025”."}
                text_en={"On July 1st, World Architecture Day, we concluded two days of intensive debates, presentations, and meetings during the 3rd International Conference 'Architecture of Challenges: New European Bauhaus – Building Community 2025.'"}
            />
            <Paragraph
                text_pl={"Pierwszy dzień spędziliśmy w wyjątkowych przestrzeniach Muzeum Łazienki Królewskie. Drugi dzień konferencji spędziliśmy w inspirujących przestrzeniach Akademii Sztuk Pięknych w Warszawie."}
                text_en={"We spent the first day in the unique setting of the Royal Łazienki Museum. The second day of the conference took place in the inspiring spaces of the Academy of Fine Arts in Warsaw."}/>
            <BigImage src={"/static/About/News/Conference_2025/IIdzien.jpg"}/>
            <Paragraph
                text_pl={"To był czas pełen otwartych rozmów, współdziałania i wymiany doświadczeń. W imieniu Organizatorów: Wydziału Architektury Politechniki Warszawskiej, Muzeum Łazienki Królewskie, Akademii Sztuk Pięknych w Warszawie oraz Narodowego Instytutu Architektury i Urbanistyki – serdecznie dziękujemy wszystkim, którzy razem z nami tworzyli atmosferę dialogu i wspólnoty. Do zobaczenia za rok!"}
                text_en={"It was a time full of open dialogue, collaboration, and the exchange of experiences. On behalf of the organizers – the Faculty of Architecture at the Warsaw University of Technology, the Royal Łazienki Museum, the Academy of Fine Arts in Warsaw, and the National Institute of Architecture and Urban Planning – we sincerely thank everyone who helped create an atmosphere of dialogue and community with us. See you next year!"}/>
        </>
    )
}
