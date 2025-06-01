import * as React from "react";
import {Grid, Typography} from "@mui/material";
import ImageCard from "../../common/ImageCard";
import {Translation} from "../../common/Translation";
import {Link} from "../../common/Link";
import urls from "../../Urls";
import {Citation} from "../../common/Citation";
import {Paragraph} from "../../common/ArticleParts";
import useWindowDimensions from "../../utils/UseWindowDimensions";

function SecondPage() {
    const {width} = useWindowDimensions();
    const vertical = width < 900;
    return (
        <Grid
            container
            spacing={6}
            columns={12}
            direction={vertical ? "column-reverse" : "row"}
            sx={{
                justifyContent: "center", alignItems: "center",
            }}>
            <Grid size={{
                xs: 10,
                sm: vertical ? 10 : 5,
                md: 5
            }}>
                <Typography gutterBottom variant="h3"><Translation pl="O KONFERENCJI"
                                                                   en="ABOUT CONFERENCE"/></Typography>
                <Citation
                    author="Denise Scott Brown"
                    text_pl="Architektura nie może zmusić ludzi do nawiązywania kontaktów – może jedynie zaplanować punkty styku, usunąć bariery i uczynić miejsca spotkań użytecznymi oraz atrakcyjnymi."
                    text_en="Architecture can’t force people to connect; it can only plan the crossing points, remove barriers and make the meeting places useful and attractive."
                />
                <br/>
                <Paragraph
                    text_pl={"Od czasów Arystotelesa podkreślano, że człowiek jest istotą społeczną. Tworzenie więzi i budowanie relacji wpływają na różnorodne aspekty ludzkiego doświadczenia. Niezaprzeczalnie wiąże się to z interakcjami człowieka z otoczeniem, które przejawiają się w różnych formach działań architektonicznych. Fundamentem współpracy w obszarze kształtowania architektury są relacje międzyludzkie, które, jak zauważa Scott, rodzą się w określonej „przestrzeni i miejscu\", stanowiąc istotę życia społecznego. Miejsce, w zależności od kontekstu kulturowego, może pomagać wspierać lub osłabiać te relacje.\"."}
                    text_en={"Since the time of Aristotle, it has been emphasised that humans are social beings. The formation of bonds and the building of relationships influence various aspects of the human experience. It undeniably involves human interactions with the environment, manifested by participation in various architectural activities. As Scott notes, the foundation of this collaboration in shaping architecture is human relationships, which are born in a particular ‘space and place’, constituting the essence of social life. Depending on the cultural context, place can help support or undermine these relationships."}
                />
                <Paragraph
                    text_pl={"Zapoczątkowana w 2020 przez Unię Europejska inicjatywa Nowego Europejskiego Bauhausu promuje ideę budowania wspólnoty poprzez tworzenie przestrzeni o wysokiej jakości estetycznej i o zrównoważonych procesach rozwojowych oraz sprzyja włączeniu społecznemu różnorodnych grup użytkowników. Wspiera zatem wartości istotne dla budowania wspólnoty, takie jak: równość, ekologia, dobrostan, solidarność, współpraca, różnorodność, sprawiedliwość społeczna, a także odpowiedzialność za funkcjonowanie ludzkości - jej obecnych i przyszłych pokoleń."}
                    text_en={"Launched in 2020 by the European Union, the New European Bauhaus initiative promotes the idea of community building by creating aesthetically pleasing spaces with sustainable development processes that are inclusive of diverse user groups. They, therefore, support the values relevant to community building, such as equality, ecology, well-being, solidarity, cooperation, diversity, social justice, and responsibility for the functioning of humanity - its present and future generations."}
                />
                <br/>
                <Link to={urls.current_edition}>
                    <Translation pl="Więcej..." en="Read more..."/>
                </Link>
            </Grid>
            <Grid size={{
                xs: 11,
                sm: vertical ? 11 : 6,
                md: 6,
            }}>
                <ImageCard image="/static/MainPage/Fot-6.jpg" sx={{
                    height: {
                        xs: "50vh",
                        sm: vertical ? "50vh" : "80vh",
                        md: "60vw",
                        lg: "40vw",
                        xl: "30vw",
                    }
                }}/>
            </Grid>
        </Grid>
    );
}

export default SecondPage;
