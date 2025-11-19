import * as React from "react";
import {Box, Divider, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Address, SocialLinks} from "../components/Contact";
import ImageCard from "../components/ImageCard";
import {Translation} from "../components/Translation";
import {sponsors_list} from "../data/Sponsors";
import useVertical from "../hooks/UseVertical";
import {Carousel} from "../components/Carousel";
import Layout from "./Layout";

function Sponsor(props: { name_pl: string, name_en: string, image: string }) {
    return <Stack
        gap='15px'
        sx={{
            width: '100%',
            alignItems: 'center',
        }}>
        <ImageCard sx={{
            objectFit: 'contain',
            height: '100px',
        }} src={props.image}/>
        <Box sx={{height: '40px'}}>
            <Translation
                variant="subtitle2"
                pl={props.name_pl}
                en={props.name_en}/>
        </Box>
    </Stack>;
}

function Sponsors() {
    const vertical = useVertical();
    return <Box sx={{
        display: "flex",
        justifyContent: {
            xs: 'center',
            sm: 'initial',
        }
    }}>
        <Box sx={{
            pt: {
                xs: 2,
                sm: 0,
            },
            width: {
                xs: '300px',
                sm: '100%',
            },
        }}>
            <Translation variant="cardTitle" pl={"Sponsorzy i partnerzy"} en={"Sponsors and partners"}/>
            <Carousel
                autoPlay={true}
                hideButtons={true}
                autoPlayInterval={1500}
                space={vertical ? 25 : 50}
                numberOfSlides={{
                    xs: 1,
                    sm: vertical ? 3 : 2,
                    md: 3,
                    lg: 4,
                    xl: 5,
                }}
            >
                {sponsors_list.map((sponsor_list) =>
                    sponsor_list.sponsors.map((sponsor) => <Sponsor
                        name_pl={sponsor_list.name_pl}
                        name_en={sponsor_list.name_en}
                        image={sponsor.image}
                    />))
                    .flat()}
            </Carousel>
        </Box>
    </Box>;
}

function Logo() {
    const theme = useTheme();
    const underSm = useMediaQuery(theme.breakpoints.down('sm'));
    const overXl = useMediaQuery(theme.breakpoints.up('lg'));
    if (!(overXl || underSm)) {
        return <></>
    }
    return <Box sx={{
        pt: 2,
    }}>
        <ImageCard
            image={"/static/logo/black_text_bottom.png"}
            sx={{
                height: '125px',
                objectFit: "contain",
            }}
        />
    </Box>;
}

function FooterDivider() {
    return <Box sx={{
        mb: 2,
    }}>
        <Divider variant="fullWidth"/>
    </Box>;
}

function Copyright() {
    return <Box sx={{
        pt: 2,
        pb: 2,
    }}>
        <Typography variant="body2">
            Copyright © 2025 International Conference – ARCHITECTURE OF CHALLENGES – NEW EUROPEAN BAUHAUS – BUILDING
            COMMUNITY. All rights reserved.
        </Typography>
    </Box>;
}

function Footer() {
    const theme = useTheme();
    const dark_mode = theme.palette.mode === "dark";
    const underSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            mt: 10,
            color: dark_mode ? theme.palette.primary.contrastText : "initial",
            backgroundColor: dark_mode ? theme.palette.primary.main : "initial",
        }}>
            <Layout>
                <FooterDivider/>
                <Stack
                    justifyContent={underSm ? "flex-start" : "space-between"}
                    alignItems={underSm ? "center" : "initial"}
                    gap={underSm ? 5 : 0}
                    direction={underSm ? "column" : "row"}>
                    <Logo/>
                    <Address light={true} dense={true}/>
                    <SocialLinks inverted={dark_mode} dense={true}/>
                </Stack>
                <Sponsors/>
                <Copyright/>
            </Layout>
        </Box>
    );
}

export default Footer;
