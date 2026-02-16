import * as React from "react";
import {Stack, Typography} from "@mui/material";
import ImageCard from "../../components/ImageCard";
import {Translation} from "../../components/Translation";
import {Link} from "../../components/Link";
import urls from "../../Urls";
import {Paragraph} from "../../components/Paragraph";
import Layout from "../../layout/Layout";

function Text() {
    return <>
        <Typography gutterBottom variant="h3"><Translation
            pl="O KONFERENCJI"
            en="ABOUT CONFERENCE"/></Typography>
        <Stack>
            <Typography sx={{fontStyle: "italic"}}>
                "<Translation
                pl="Architektura powstaje z pamięci, eksperymentu i wyobraźni."
                en="Architecture emerges from memory, experiment, and imagination."/>"
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
        <br/>
        <Link to={urls.current_edition}>
            <Translation pl="Więcej..." en="Read more..."/>
        </Link>
    </>;
}

function Image() {
    return <ImageCard image="/static/MainPage/Fot-6.jpg" sx={{
        objectFit: "contain",
    }}/>;
}

function MainPageDescription() {
    return <Layout>
        <Stack
            spacing={3}
            sx={{
                pt: 5
        }}>
            <Text/>
            <Image/>
        </Stack>
    </Layout>;
}

export default MainPageDescription;
