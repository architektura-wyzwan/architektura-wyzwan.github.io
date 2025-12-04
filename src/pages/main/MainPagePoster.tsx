import {Box, Grid, Stack, Typography, TypographyProps, useTheme} from "@mui/material";
import {Translation} from "../../components/Translation";
import * as React from "react";
import ImageCard from "../../components/ImageCard";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import {useIsSm} from "../../hooks/UseDimensionHooks";
import useDarkMode from "../../hooks/UseDarkMode";
import {useHeaderHeight} from "../../layout/header/Header";

type CenteredJustifiedProps = {
    text: (string | React.ReactNode)[];
}

function CenteredJustified(props: CenteredJustifiedProps & TypographyProps) {
    return (<Stack direction="row"
                   sx={{
                       justifyContent: "space-between",
                       alignItems: "center",
                   }}>
        {props.text.map((item) => (<Typography {...props}>{item}</Typography>))}
    </Stack>)
}

function Logos() {
    const dark_mode = useDarkMode();

    return <Stack direction="row" justifyContent="space-between" alignItems="center">
        <ImageCard
            image="/static/Logo_organizatorzy/pw_logo.png"
            borderRadius={0}
            sx={{
                width: {
                    xs: '40px',
                    sm: '60px',
                    md: '40px',
                    lg: '60px',
                    xl: '80px',
                },
                filter: dark_mode ? "invert(100%)" : "invert(0%)",
            }}/>
        <ImageCard
            image="/static/Logo_organizatorzy/wapw_logo.png"
            borderRadius={0}
            sx={{
                width: {
                    xs: '75px',
                    sm: '110px',
                    md: '75px',
                    lg: '110px',
                    xl: '150px',
                },
                filter: dark_mode ? "invert(100%)" : "invert(0%)",
            }}/>
        <ImageCard
            image="/static/Logo_organizatorzy/lazienki_logo.png"
            borderRadius={0}
            sx={{
                width: {
                    xs: '20px',
                    sm: '30px',
                    md: '20px',
                    lg: '30px',
                    xl: '40px',
                },
                filter: dark_mode ? "invert(100%)" : "invert(0%)",
            }}/>
        <ImageCard
            image="/static/Logo_organizatorzy/asp_logo.png"
            borderRadius={0}
            sx={{
                width: {
                    xs: '35px',
                    sm: '50px',
                    md: '35px',
                    lg: '50px',
                    xl: '70px',
                },
                filter: dark_mode ? "invert(100%)" : "invert(0%)",
            }}/>
        <ImageCard
            image="/static/Logo_organizatorzy/nid_logo.png"
            borderRadius={0}
            sx={{
                width: {
                    xs: '40px',
                    sm: '60px',
                    md: '40px',
                    lg: '60px',
                    xl: '80px',
                },
                filter: dark_mode ? "invert(100%)" : "invert(0%)",
            }}/>
    </Stack>;
}

function TextElement() {
    const theme = useTheme();
    const dark_mode = useDarkMode();

    const title_big = {
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: 1.5,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '22px'
        },
    };
    const title_big_pl = {
        fontSize: '10px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: 1.5,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '22px'
        },
    };
    const title_small = {
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: 1.5,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '22px'
        },
    };
    const title_small_pl = {
        fontSize: '11px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: 1.5,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '22px'
        },
    }

    return <Stack
        direction="column"
        spacing={{
            xs: 1,
            sm: 5
        }}
        sx={{
            alignItems: "stretch",
            maxWidth: {
                xs: '280px',
                sm: '450px',
                md: '280px',
                lg: '450px',
                xl: '600px',
            }
        }}>
        <Box>
            <ImageCard
                image={dark_mode ? "/static/logo/white_text_bottom.png" : "/static/logo/black_text_bottom.png"}
                sx={{pb: 1}}
            />
            <Translation
                pl={<CenteredJustified sx={title_big_pl}
                                       text={["NOWY", "EUROPEJSKI", "BAUHAUS", "-", "BUDOWANIE", "WSPÓLNOTY"]}/>}
                en={<CenteredJustified sx={title_big}
                                       text={["NEW", "EUROPEAN", "BAUHAUS", "-", "BUILDING", "COMMUNITY"]}/>}
            />
        </Box>
        <Box>
            <Translation
                pl={<CenteredJustified sx={title_small_pl}
                                       text={["30.06", "-", "1.07.2025", "-", "III", "Międzynarodowa", "Konferencja"]}/>}
                en={<CenteredJustified sx={title_small}
                                       text={["30.06", "-", "1.07.2025", "-", "III", "International", "Conference"]}/>}
            />
            <Typography variant="lighter" component="p" sx={{
                textAlign: "justify",
                textJustify: "inter-word",
                fontSize: {
                    sx: '12px',
                    sm: '16px',
                }
            }}>
                <Translation
                    pl="Pałac na Wyspie, Muzeum Łazienki Królewskie w Warszawie i Pałac Czapskich, Akademia Sztuk Pięknych w Warszawie"
                    en="Palace on the Isle, Royal Łazienki Museum in Warsaw and Czapski Palace, The Academy of Fine Arts in Warsaw"/>
            </Typography>
        </Box>
        <Logos/>
    </Stack>;
}

function MainPagePoster() {
    const isSm = useIsSm();
    const {height} = useWindowDimensions();

    const headerHeight = useHeaderHeight();
    const columnHeight = height - headerHeight;

    if (isSm) {
        return (
            <Grid container
                  direction="column"
                  columns={12}
                  spacing={{
                      xs: 5,
                      sm: 10,
                  }}
                  sx={{
                      alignItems: "center",
                      justifyContent: "space-around",
                  }}
            >
                <Grid
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    size={11}>
                    <ImageCard
                        image="/static/MainPage/Main page_poster.png"
                    />
                </Grid>
                <Grid>
                    <TextElement/>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid container
                  direction="row"
                  justifyContent={{
                      sm: "initial",
                      lg: "flex-start",
                  }}
                  alignItems={{
                      sm: "flex-end",
                  }}
            >
                <Grid sx={{
                    maxWidth: {
                        sm: "55%",
                        lg: "50%",
                    },
                    justifySelf: {
                        lg: "flex-start"
                    }
                }}>
                    <ImageCard
                        sx={{
                            ml: {
                                sm: "5%",
                                lg: "2%",
                            },
                            maxHeight: {
                                lg: Math.max(columnHeight, 850),
                            }
                        }}
                        image="/static/MainPage/Main page_poster.png"
                    />
                </Grid>
                <Grid size="grow" sx={{
                    display: "flex",
                    justifyContent: "center",
                    pb: {
                        sm: "5%",
                        xl: 10,
                    },
                    ml: {
                        sm: "5%",
                        xl: "2%"
                    },
                    mr: {
                        sm: "5%",
                        xl: "2%"
                    },
                }}>
                    <Box>
                        <TextElement/>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

export default MainPagePoster;
