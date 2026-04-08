import {ArticleMetadata} from "../../layout/Article";
import {Paragraph} from "../../components/Paragraph";
import BigImage from "../../components/BigImage";

export const Wierzbicka_award_2025: ArticleMetadata = {
    title_pl: "Prof. Anna Maria Wierzbicka wyróżniona odznaką \"Zasłużony dla Kultury Polskiej\"",
    title_en: "Prof. Anna Maria Wierzbicka awarded the \"Merit for Polish Culture\" honorary badge",
    subtitle_pl: "\"To dla mnie ogromne wyróżnienie i zaszczyt, które odbieram także jako docenienie pracy na rzecz kultury, edukacji i wspólnoty, którą od lat tworzę w ramach społeczności akademickiej Politechniki Warszawskiej.\" - dr hab. inż. arch. Anna Maria Wierzbicka, prof. PW",
    subtitle_en: "\"This is an immense honor and distinction for me, which I also view as recognition of my work for culture, education, and the community I have been building for years within the academic community of the Warsaw University of Technology.\"— Anna Maria Wierzbicka, PhD, DSc, BArch, Associate Prof. at WUT.",
    image: "/static/About/News/Wierzbicka_award_2025/Wierzbicka_award_2025_1.jpg",
    content: Content,
}

function Content() {
    return (
        <>
            <Paragraph
                pl={"16 października 2025 roku w Muzeum Łazienki Królewskie rozpoczęło się wyjątkowe wydarzenie – konferencja naukowa \"Herstoria muzealnictwa w Polsce. Narracje muzealniczek\".W trakcie uroczystej inauguracji konferencji dr hab. inż. arch. Anna Maria Wierzbicka, prof. PW  otrzymała odznakę „Zasłużony dla Kultury Polskiej” przyznane przez Ministerstwo Kultury i Dziedzictwa Narodowego"}
                en={"On October 16, 2025, a special event commenced at the Royal Łazienki Museum – the academic conference 'Herstory of Museology in Poland: Narratives of Female Museum Professionals.' During the ceremonial inauguration, Anna Maria Wierzbicka, PhD, DSc, Assoc. Prof. (WUT), was presented with the 'Merit for Polish Culture' honorary badge, awarded by the Ministry of Culture and National Heritage."}
            />
            <Paragraph
                pl={"Odznakę \"Zasłużony dla Kultury Polskiej\", nadaje się osobom wyróżniającym się w tworzeniu, upowszechnianiu i ochronie kultury."}
                en={"The 'Merit for Polish Culture' honorary badge is awarded to individuals who have distinguished themselves in the creation, dissemination, and protection of culture."}/>
            <BigImage src={"/static/About/News/Wierzbicka_award_2025/Wierzbicka_award_2025_2.jpg"}/>

        </>
    )
}
