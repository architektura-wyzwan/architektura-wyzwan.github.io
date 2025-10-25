import * as React from "react";
import {Box, Divider, Grid, Typography, useTheme} from "@mui/material";
import Contact from "../components/Contact";
import ImageCard from "../components/ImageCard";
import {Translation} from "../components/Translation";
import {
    sponsors_list,
    SponsorType
} from "../data/Sponsors";
import useVertical from "../hooks/UseVertical";

type SponsorsStackProps = {
    title_pl: string,
    title_en: string,
    list: SponsorType[],
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
                            objectFit: "contain",
                            width: "unset",
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
        <>
            <Box sx={{
                color: dark_mode ? theme.palette.primary.contrastText : "initial",
                backgroundColor: dark_mode ? theme.palette.primary.main : "initial",
                mt: 10,
            }}>
                <Divider variant="middle"/>
            </Box>
            <Grid container
                  direction={vertical ? "column-reverse" : "row"}
                  columns={vertical ? 1 : 12}
                  sx={{
                      color: dark_mode ? theme.palette.primary.contrastText : "initial",
                      backgroundColor: dark_mode ? theme.palette.primary.main : "initial",
                      pt: vertical ? 1 : 4,
                      pl: 3,
                      pr: vertical ? 3 : 0,
                      pb: vertical ? 5 : 3,
                  }}
            >
                <Grid size={vertical ? 1 : "grow"}>
                    <Grid container
                          spacing={3}
                    >
                        {sponsors_list.map((sponsor_list) => <SponsorsStack title_pl={sponsor_list.name_pl} title_en={sponsor_list.name_en} list={sponsor_list.sponsors}/>)}
                    </Grid>
                </Grid>
                <Grid size={vertical ? 1 : "auto"} sx={{
                    pb: vertical ? 4 : 0,
                }}>
                    <Contact inverted={dark_mode} light={true}/>
                </Grid>
            </Grid>
            <Box sx={{
                color: dark_mode ? theme.palette.primary.contrastText : "initial",
                backgroundColor: dark_mode ? theme.palette.primary.main : "initial",
                pl: 3,
                pr: 3,
                pb: 2,
            }}>
                <Typography variant="body1">
                    Copyright © 2025 International Conference – ARCHITECTURE OF CHALLENGES – NEW EUROPEAN BAUHAUS –
                    BUILDING
                    COMMUNITY. All rights reserved.
                </Typography>
            </Box>

        </>
    );
}

export default Footer;
