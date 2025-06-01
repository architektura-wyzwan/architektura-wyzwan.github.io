import {Box, Grid, Stack, Typography, TypographyProps, useTheme} from "@mui/material";
import {Translation} from "../../common/Translation";
import * as React from "react";
import ImageCard from "../../common/ImageCard";
import useWindowDimensions from "../../utils/UseWindowDimensions";

type CenteredJustifiedProps = {
    text: (string | React.ReactNode)[];
}

function CenteredJustified(props: CenteredJustifiedProps & TypographyProps) {
    return (<Stack direction="row"
                   sx={{
                       justifyContent: "space-between",
                       alignItems: "center",
                   }}>
        {props.text.map((item, index) => (<Typography {...props}>{item}</Typography>))}
    </Stack>)
}


function FirstPage() {
    const theme = useTheme();
    const dark_mode = theme.palette.mode === "dark";
    const {height, width} = useWindowDimensions();
    const vertical = width < 800;

    const headerHeight = width >= 2000 ? 85 : 74;
    const columnHeight = height - headerHeight;

    const verticalTitleSmallSx = {
        fontSize: '11px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
        },
    };

    const logos = (<Stack direction="row" justifyContent="space-between" alignItems="center">
        <ImageCard
            image="/static/Logo_organizatorzy/pw_logo.png"
            borderRadius={0}
            sx={{
                width: {
                    xs: '40px',
                    sm: vertical ? '60px' : '40px',
                    md: '60px',
                    lg: '80px',
                    xl: '120px',
                },
                filter: dark_mode ? "invert(100%)" : "invert(0%)",
            }}/>
        <ImageCard
            image="/static/Logo_organizatorzy/wapw_logo.png"
            borderRadius={0}
            sx={{
                width: {
                    xs: '75px',
                    sm: vertical ? '110px' : '75px',
                    md: '110px',
                    lg: '150px',
                    xl: '220px',
                },
                filter: dark_mode ? "invert(100%)" : "invert(0%)",
            }}/>
        <ImageCard
            image="/static/Logo_organizatorzy/lazienki_logo.png"
            borderRadius={0}
            sx={{
                width: {
                    xs: '20px',
                    sm: vertical ? '30px' : '20px',
                    md: '30px',
                    lg: '40px',
                    xl: '60px',
                },
                filter: dark_mode ? "invert(100%)" : "invert(0%)",
            }}/>
        <ImageCard
            image="/static/Logo_organizatorzy/asp_logo.png"
            borderRadius={0}
            sx={{
                width: {
                    xs: '35px',
                    sm: vertical ? '50px' : '35px',
                    md: '50px',
                    lg: '70px',
                    xl: '100px',
                },
                filter: dark_mode ? "invert(100%)" : "invert(0%)",
            }}/>
        <ImageCard
            image="/static/Logo_organizatorzy/nid_logo.png"
            borderRadius={0}
            sx={{
                width: {
                    xs: '40px',
                    sm: vertical ? '60px' : '40px',
                    md: '60px',
                    lg: '80px',
                    xl: '120px',
                },
                filter: dark_mode ? "invert(100%)" : "invert(0%)",
            }}/>
    </Stack>);

    const textElement = (<Stack
        direction="column"
        spacing={{
            xs: 1,
            sm: vertical ? 3 : 5
        }}
        sx={{
            alignItems: "stretch",
            maxWidth: {
                xs: '280px',
                sm: vertical ? '450px' : '300px',
                md: '450px',
                lg: '600px',
                xl: '900px',
            }
        }}>
        <Box>
            <ImageCard
                image={dark_mode ? "/static/logo/white_text_bottom.png" : "/static/logo/black_text_bottom.png"}
                sx={{pb: 1}}
            />
            <CenteredJustified variant={vertical ? "regular" : "title_small"} sx={vertical ? verticalTitleSmallSx : {}}
                               text={["NEW", "EUROPEAN", "BAUHAUS", "-", "BUILDING", "COMMUNITY"]}/>
        </Box>
        <Box>
            <Translation
                pl={<CenteredJustified variant="title_small" sx={vertical ? verticalTitleSmallSx : {fontWeight: "bold"}}
                                       text={["30.06", "-", "1.07.2025", "-", "III", "Międzynarodowa", "Konferencja"]}/>}
                en={<CenteredJustified variant="title_small" sx={vertical ? verticalTitleSmallSx : {fontWeight: "bold"}}
                                       text={["30.06", "-", "1.07.2025", "-", "III", "International", "Conference"]}/>}
            />
            <Typography variant="lighter" component="p" sx={{
                textAlign: "justify",
                textJustify: "inter-word",
            }}>
                <Translation
                    pl="Pałac na Wyspie, Muzeum Łazienki Królewskie w Warszawie i Pałac Czapskich, Akademia Sztuk Pięknych w Warszawie"
                    en="Pałac na Wyspie, Muzeum Łazienki Królewskie w Warszawie i Pałac Czapskich, Akademia Sztuk Pięknych w Warszawie"/>
            </Typography>
        </Box>
        {logos}
    </Stack>);

    if (vertical) {
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
                    {textElement}
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid container
                  direction="row"
                  justifyContent={{
                      sm: "initial",
                      md: "flex-start",
                  }}
                  alignItems={{
                      sm: "flex-end",
                  }}
            >
                <Grid sx={{
                    maxWidth: {
                        sm: "55%",
                        md: "50%",
                    },
                    justifySelf: {
                        md: "flex-start"
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
                        lg: 10,
                    },
                    ml: {
                        sm: "5%",
                        lg: "2%"
                    },
                    mr: {
                        sm: "5%",
                        lg: "2%"
                    },
                }}>
                    <Box>
                        {textElement}
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

export default FirstPage;
