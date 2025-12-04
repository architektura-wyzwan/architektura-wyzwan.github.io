import * as React from "react";
import ArticleLayout from "../layout/ArticleLayout";
import {Box, Grid, List, ListItem, Typography, useTheme} from "@mui/material";
import SectionHeading from "../components/SectionHeading";
import {Translation} from "../components/Translation";
import {sponsors_list, SponsorType} from "../data/Sponsors";
import ImageCard from "../components/ImageCard";
import {Paragraph} from "../components/Paragraph";

type SponsorsListProps = {
    title_pl: string,
    title_en: string,
    list: SponsorType[],
}

function SponsorItem({sponsor}: { sponsor: SponsorType }) {
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
                            filter: dark_mode && sponsor.invertColorInDarkMode ? "invert(100%)" : "invert(0%)",
                        }} src={sponsor.image}/>
                    </Box>
                </Grid>
                <Grid size={{
                    xs: 1,
                    sm: 6,
                }}>
                    <Typography variant="h5" sx={{pb: 2}}>
                        <Translation pl={sponsor.name_pl} en={sponsor.name_en}/>
                    </Typography>
                    <Box sx={{mt: 3}}>
                        <Paragraph pl={sponsor.description_pl} en={sponsor.description_en}/>
                    </Box>
                </Grid>
            </Grid>
        </ListItem>
    )
}

function SponsorsList(props: SponsorsListProps) {
    return (
        <>
            <SectionHeading>
                <Translation pl={props.title_pl} en={props.title_en}/>
            </SectionHeading>
            <List sx={{width: '100%', backgroundColor: 'background.paper'}}>
                {props.list.map((sponsor) => <SponsorItem sponsor={sponsor}/>
                )}
            </List>
        </>
    )
}

function SponsorsPage() {
    return (
        <ArticleLayout title_pl="Sponsorzy i partnerzy" title_en="Sponsors and partners">
            {sponsors_list.map((sponsor_list) =>
                <SponsorsList title_pl={sponsor_list.name_pl}
                              title_en={sponsor_list.name_en}
                              list={sponsor_list.sponsors}/>)}
        </ArticleLayout>
    );
}

export default SponsorsPage;