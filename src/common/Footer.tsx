import * as React from "react";
import {Grid, useTheme} from "@mui/material";
import Contact from "./Contact";
import ImageCard from "./ImageCard";
import {Translation} from "./Translation";
import {
    content_partner,
    main_sponsors,
    media_patronage,
    partners,
    patronage,
    publishing_patronage,
    SponsorProps
} from "../data/Sponsors";
import useVertical from "../utils/UseVertical";

type SponsorsStackProps = {
    title_pl: string,
    title_en: string,
    list: SponsorProps[],
}

function SponsorsStack(props: SponsorsStackProps) {
    return (
        <Grid>
            <Translation pl={props.title_pl} en={props.title_en}/>
            <Grid container
                direction="row"
                width="100%"
                spacing={5}
                sx={{pt: 1}}>
                {props.list.map((sponsor) => (
                    <Grid><ImageCard
                        image={sponsor.image}
                        borderRadius={0}
                        sx={{
                            height: {
                                xs: '30px',
                                md: '3vw',
                                lg: '2vw',
                            },
                        }}/></Grid>
                ))}
            </Grid>
        </Grid>
    )
}

function Footer() {
    const theme = useTheme();
    const vertical = useVertical();
    const dark_mode = theme.palette.mode === "dark";
    return (
        <Grid container
              direction={vertical ? "column" : "row"}
              sx={{
                  color: dark_mode ? theme.palette.primary.contrastText : "initial",
                  backgroundColor: dark_mode ? theme.palette.primary.main : "initial",
                  pt: 1,
                  pl: 3,
                  pr: vertical ? 3 : 0,
                  pb: vertical ? 5 : 3,
              }}
        >
            <Grid size="grow">
                <Grid container
                      spacing={3}
                >
                    <SponsorsStack title_pl={"Patronat honorowy"} title_en={"Honorary patronage"} list={patronage}/>
                    <SponsorsStack title_pl={"Partnerzy"} title_en={"Partners"} list={partners}/>
                    <SponsorsStack title_pl={"Partner merytoryczny"} title_en={"Content partner"} list={content_partner}/>
                    <SponsorsStack title_pl={"Sponsorzy główni"} title_en={"Main sponsors"} list={main_sponsors}/>
                    <SponsorsStack title_pl={"Patronat wydawniczy"} title_en={"Publishing patronage"}
                                   list={publishing_patronage}/>
                    <SponsorsStack title_pl={"Patronat medialny"} title_en={"Media patronage"} list={media_patronage}/>
                </Grid>
            </Grid>
            <Grid size="auto" sx={{
                pt: vertical ? 5 : 0,
            }}>
                <Contact inverted={dark_mode}/>
            </Grid>
        </Grid>
    );
}

export default Footer;
