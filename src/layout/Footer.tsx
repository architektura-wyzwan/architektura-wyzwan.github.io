import * as React from "react";
import {Box, Divider, Stack, Typography, useTheme} from "@mui/material";
import Contact from "../components/Contact";
import ImageCard from "../components/ImageCard";
import {Translation} from "../components/Translation";
import {sponsors_list} from "../data/Sponsors";
import useVertical from "../hooks/UseVertical";
import {Carousel} from "../components/Carousel";

function Sponsors() {
    const vertical = useVertical();
    return <Carousel
        autoPlay={true}
        hideButtons={true}
        autoPlayInterval={1000}
        space={vertical ? 25 : 50}
        numberOfSlides={{
            xs: 1,
            sm: vertical ? 2 : 1,
            md: 2,
            lg: 5,
            xl: 6,
        }}
        containerHeight="150px"
        nodeList={
            sponsors_list.map((sponsor_list) =>
                sponsor_list.sponsors.map((sponsor, id) => {
                    return {
                        name_pl: sponsor_list.name_pl,
                        name_en: sponsor_list.name_en,
                        sponsor: sponsor,
                        id: id,
                    };
                }))
                .flat()
                .map((item) => {
                    return (currentId: number, numberOfSlides: number) => {
                        // const displayText = currentId === item.id || item.id === 0;
                        const displayText = true;
                        return <Stack
                            gap='15px'
                            sx={{
                                width: '100%',
                                alignItems: 'center',
                            }}>
                            <ImageCard sx={{
                                objectFit: 'contain',
                                height: '100px',
                            }} src={item.sponsor.image}/>
                            <Box sx={{height: '20px'}}>
                                {displayText ? <Translation
                                    pl={item.name_pl} en={item.name_en}/> : <></>}
                            </Box>
                        </Stack>;
                    }
                })}
    />;
}

function Copyright() {
    return <Typography variant="body1">
        Copyright © 2025 International Conference – ARCHITECTURE OF CHALLENGES – NEW EUROPEAN BAUHAUS – BUILDING
        COMMUNITY. All rights reserved.
    </Typography>;
}

function Footer() {
    const theme = useTheme();
    const vertical = useVertical();
    const dark_mode = theme.palette.mode === "dark";
    return (
        <Box sx={{
            color: dark_mode ? theme.palette.primary.contrastText : "initial",
            backgroundColor: dark_mode ? theme.palette.primary.main : "initial",
            width: '100%',
            pl: {
                xs: '15%',
                sm: '10%',
                lg: '12.5%',
            },
            pr: {
                xs: '15%',
                sm: '10%',
                lg: '12.5%',
            },
        }}>
            <Box sx={{
                mt: 10,
            }}>
                <Divider variant="middle"/>
            </Box>
            <Contact inverted={dark_mode} light={true} direction='row'/>
            <Sponsors/>
            <Box sx={{
                pt: 2,
                pl: 3,
                pr: 3,
                pb: 2,
            }}>
                <Copyright/>
            </Box>
        </Box>

    );
}

export default Footer;
