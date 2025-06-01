import PageLayout from "../common/PageLayout";
import {Box, List, ListItem, Stack, Typography, useTheme} from "@mui/material";
import {Organizer, organizers} from "../data/Organizers";
import ImageCard from "../common/ImageCard";
import {Translation} from "../common/Translation";
import useVertical from "../utils/UseVertical";
import * as React from "react";

function OrganizerItem({organizer}: { organizer: Organizer }) {
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
                        filter: dark_mode && organizer.invertColorInDarkMode ? "invert(100%)" : "invert(0%)",
                    }} src={organizer.image}/>
                </Box>
                <Box sx={{
                    width: vertical ? '100%' : '60%',
                }}>
                    <Typography variant="h6" sx={{pb: 2}}>
                        <Translation pl={organizer.name_pl} en={organizer.name_en}/>
                    </Typography>
                    <Box>
                        {organizer.description.map(content => <Box sx={{mt: 3}}>{content(vertical)}</Box>)}
                    </Box>
                </Box>
            </Stack>
        </ListItem>
    )
}

export function OrganizersPage() {
    return (
        <PageLayout title_pl="Organizatorzy" title_en="Organizers" wide={true}>
            <List sx={{width: '100%', backgroundColor: 'background.paper'}}>
                {organizers.map((organizer, id) => {
                    return (<>
                        <OrganizerItem organizer={organizer}/>
                    </>);
                })}
            </List>
        </PageLayout>
    );
}