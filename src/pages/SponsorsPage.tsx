import * as React from "react";
import ArticleLayout from "../layout/ArticleLayout";
import {Box, List, ListItem, Stack, useTheme} from "@mui/material";
import SectionHeading from "../components/SectionHeading";
import {Translation} from "../components/Translation";
import {sponsors_list, SponsorType} from "../data/Sponsors";
import useVertical from "../hooks/UseVertical";
import ImageCard from "../components/ImageCard";
import {Paragraph} from "../components/Paragraph";

type SponsorsListProps = {
    title_pl: string,
    title_en: string,
    list: SponsorType[],
}

function SponsorItem({sponsor}: { sponsor: SponsorType }) {
    const vertical = useVertical();
    const theme = useTheme();
    const dark_mode = theme.palette.mode === "dark";
    return (
        <ListItem alignItems="flex-start" sx={{pb: 5}}>
            <Stack direction={vertical ? "column" : "row"} justifyContent="space-between" spacing={2}>
                <Box sx={{
                    width: vertical ? '100%' : '30%',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    pt: vertical ? 0 : 5,
                    pb: vertical ? {
                        xs: 2,
                        sm: 5,
                    } : 0,
                }}>
                    <ImageCard sx={{
                        objectFit: 'contain',
                        height: {
                            xs: '20vw',
                            sm: vertical ? '15vw' : '10vw',
                            md: '10vw',
                        },
                        maxWidth: vertical ? '60vw' : '20vw',
                        width: "unset",
                        filter: dark_mode && sponsor.invertColorInDarkMode ? "invert(100%)" : "invert(0%)",
                    }} src={sponsor.image}/>
                </Box>
                <Box sx={{
                    width: vertical ? '100%' : '60%',
                }}>
                    <Box sx={{pb: 2}}>
                        <Translation variant="h6" pl={sponsor.name_pl} en={sponsor.name_en}/>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Paragraph pl={sponsor.description_pl} en={sponsor.description_en}/>
                    </Box>
                </Box>
            </Stack>
        </ListItem>
    )
}

function SponsorsList(props: SponsorsListProps) {
    return (
        <Box sx={{
            mb:20,
        }}>
            <SectionHeading>
                <Translation pl={props.title_pl} en={props.title_en}/>
            </SectionHeading>
            <List sx={{width: '100%', backgroundColor: 'background.paper'}}>
                {props.list.map((sponsor) => <SponsorItem sponsor={sponsor}/>
                )}
            </List>
        </Box>
    )
}

function SponsorsPage() {
    return (
        <ArticleLayout title_pl="Sponsorzy i partnerzy" title_en="Sponsors and partners" wide={false}>
            {sponsors_list.map((sponsor_list) =>
                <SponsorsList title_pl={sponsor_list.name_pl}
                              title_en={sponsor_list.name_en}
                              list={sponsor_list.sponsors}/>)}
        </ArticleLayout>
    );
}

export default SponsorsPage;