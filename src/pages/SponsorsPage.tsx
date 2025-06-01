import * as React from "react";
import PageLayout from "../common/PageLayout";
import {Box, Grid, useTheme} from "@mui/material";
import SectionHeading from "../common/SectionHeading";
import {Translation} from "../common/Translation";
import {StandardCard} from "../common/StandardCard";
import {
    content_partner,
    main_sponsors,
    media_patronage,
    partners,
    patronage,
    publishing_patronage,
    SponsorProps,
    sponsors
} from "../data/Sponsors";
import useVertical from "../utils/UseVertical";

type SponsorsListProps = {
    title_pl: string,
    title_en: string,
    list: SponsorProps[],
}

function SponsorsList(props: SponsorsListProps) {
    const vertical = useVertical();
    const theme = useTheme();
    const dark_mode = theme.palette.mode === "dark";
    return (
        <Box>
            <SectionHeading>
                <Translation pl={props.title_pl} en={props.title_en}/>
            </SectionHeading>
            <Grid container
                  spacing={{
                      xs: 2,
                      sm: 3,
                  }}
                  justifyContent="flex-start"
                  alignItems="center"
                  direction={vertical ? "column" : "row"}
            >
                {props.list.map((sponsor, _) => (
                    <Grid sx={{
                        maxWidth: {
                            xs: "100%",
                            sm: vertical ? "80%" : "18vw",
                            lg: "13vw",
                        },
                    }}>
                        {/*<Box >*/}
                            <StandardCard
                                cardWidth={{}}
                                cardImageHeight={{
                                    xs: "17.5vw",
                                    sm: vertical ? "20vw" : "13vw",
                                    md: "10vw",
                                }}
                                sx={{
                                    objectFit: 'contain',
                                    filter: dark_mode && sponsor.invertColorInDarkMode ? "invert(100%)" : "invert(0%)",
                                }}
                                image={sponsor.image}
                                textInCenter={true}
                                cardTitle={<Translation pl={sponsor.name_pl} en={sponsor.name_en}/>}
                                cardDescription=""
                            />
                        {/*</Box>*/}
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

function SponsorsPage() {
    return (
        <PageLayout title_pl="" title_en="" wide={true}>
            <SponsorsList title_pl={"Partnerzy"} title_en={"Partners"} list={partners}/>
            <SponsorsList title_pl={"Partner merytoryczny"} title_en={"Content partner"} list={content_partner}/>
            <SponsorsList title_pl={"Patronat honorowy"} title_en={"Honorary patronage"} list={patronage}/>
            <SponsorsList title_pl={"Sponsorzy główni"} title_en={"Main sponsors"} list={main_sponsors}/>
            <SponsorsList title_pl={"Sponsorzy"} title_en={"Sponsors"} list={sponsors}/>
            <SponsorsList title_pl={"Patronat wydawniczy"} title_en={"Publishing patronage"}
                          list={publishing_patronage}/>
            <SponsorsList title_pl={"Patronat medialny"} title_en={"Media patronage"} list={media_patronage}/>
        </PageLayout>
    );
}

export default SponsorsPage;