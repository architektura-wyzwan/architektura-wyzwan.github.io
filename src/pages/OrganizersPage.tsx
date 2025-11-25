import ArticleLayout from "../layout/ArticleLayout";
import {Box, Grid, List, ListItem, Typography, useTheme} from "@mui/material";
import {
    chairwoman,
    Organizer,
    organizers,
    organizers_committee,
    scientific_and_organizing_committee,
    secretary
} from "../data/Organizers";
import ImageCard from "../components/ImageCard";
import {Translation} from "../components/Translation";
import * as React from "react";
import {CircleGrid} from "../components/CircleGrid";
import {Paragraph} from "../components/Paragraph";
import {Speaker} from "../data/Speakers";

function OrganizerItem({organizer}: { organizer: Organizer }) {
    const theme = useTheme();
    const dark_mode = theme.palette.mode === "dark";
    return (
        <ListItem alignItems="flex-start" sx={{pb: 5}}>
            <Grid container
                  direction={"row"}
                  columns={{
                      xs: 1,
                      sm: 10,
                  }}
                  justifyContent="space-between" spacing={2}>
                <Grid
                    size={{
                        xs: 1,
                        sm: 4,
                    }}
                    sx={{
                        pt: {
                            xs: 0,
                            sm: 5,
                        },
                        pb: {
                            xs: 2,
                            sm: 0,
                        },
                    }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "row",
                            sm: "column",
                        },
                        justifyContent: {
                            xs: "center",
                            sm: "flex-start",
                        },
                        alignItems: "center",
                    }}>
                        <ImageCard sx={{
                            objectFit: 'contain',
                            height: {
                                xs: '20vw',
                                sm: '10vw',
                                md: '10vw',
                            },
                            width: {
                                xs: "100%",
                                sm: "90%",
                            },
                            filter: dark_mode && organizer.invertColorInDarkMode ? "invert(100%)" : "invert(0%)",
                        }} src={organizer.image}/>
                    </Box>
                </Grid>
                <Grid size={{
                    xs: 1,
                    sm: 6,
                }}>
                    <Typography variant="h5" sx={{pb: 2}}>
                        <Translation pl={organizer.name_pl} en={organizer.name_en}/>
                    </Typography>
                    <Box sx={{mt: 3}}>
                        <Paragraph pl={organizer.description_pl} en={organizer.description_en}/>
                    </Box>
                </Grid>
            </Grid>
        </ListItem>
    )
}

function splitAtEmail(text: string): string {
    return text.replace("@", "@\u200B")
}

function BreakDescriptionAtEmailCircleGrid(props: { items: Speaker[] }) {
    const speakersChanged = props.items.map((speaker): Speaker => (
        {
            image: speaker.image,
            name: speaker.name,
            description_pl: splitAtEmail(speaker.description_pl),
            description_en: splitAtEmail(speaker.description_en),
        }
    ))
    return <CircleGrid items={speakersChanged}/>;
}

export function OrganizersPage() {
    return (
        <ArticleLayout title_pl="Organizatorzy" title_en="Organizers" wide={true}>
            <Typography variant="h3"
                        sx={{
                            mt: {
                                xs: 0,
                                sm: 8,
                            },
                            mb: 8
                        }}>
                <Translation pl={"Przewodnicząca komitetu organizacyjnego i naukowo-organizacyjnego"}
                             en={"Chairwoman of the conference"}/>
            </Typography>
            <BreakDescriptionAtEmailCircleGrid items={chairwoman}/>
            <Typography variant="h3"
                        sx={{
                            mt: {
                                xs: 0,
                                sm: 8,
                            },
                            mb: 8
                        }}>
                <Translation pl={"Sekretarz konferencji"} en={"Secretary of the conference"}/>
            </Typography>
            <BreakDescriptionAtEmailCircleGrid items={secretary}/>
            <Typography variant="h3"
                        sx={{
                            mt: {
                                xs: 0,
                                sm: 8,
                            },
                            mb: 8
                        }}>
                <Translation pl={"Komitet naukowo-organizacyjny konferecji"}
                             en={"Scientific and organizing committee of the conference"}/>
            </Typography>
            <BreakDescriptionAtEmailCircleGrid items={scientific_and_organizing_committee}/>
            <Typography variant="h3"
                        sx={{
                            mt: {
                                xs: 0,
                                sm: 8,
                            },
                            mb: 8
                        }}>
                <Translation pl={"Komitet organizacyjny konferecji"} en={"Conference organising committee"}/>
            </Typography>
            <BreakDescriptionAtEmailCircleGrid items={organizers_committee}/>
            <Typography variant="h3"
                        sx={{
                            mt: 4,
                            mb: 8
                        }}>

                <Translation pl={"Instytucje"} en={"Institutions"}/>
            </Typography>
            <List sx={{width: '100%', backgroundColor: 'background.paper'}}>
                {organizers.map((organizer) => {
                    return (<>
                        <OrganizerItem organizer={organizer}/>
                    </>);
                })}
            </List>
        </ArticleLayout>
    );
}
