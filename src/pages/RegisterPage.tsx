import {Box, Card, CardContent, Skeleton, Stack, Typography} from '@mui/material';
import * as React from 'react';
import {useContext} from 'react';
import {LanguageContext, Translation} from "../common/Translation";
import useWindowDimensions from "../utils/UseWindowDimensions";

function RegisterPage() {
    const [loading, setLoading] = React.useState(true);
    const {width} = useWindowDimensions();
    const iframeWidth = Math.min(width, 640);
    const language = useContext(LanguageContext);
    const lang_url = language === "pl" ? "pl" : "eng";
    return (
        <Stack
            direction="column"
            sx={{
                justifyContent: "center",
                alignItems: "center",
                mt: 5,
            }}
            spacing={5}
        >
            <Typography variant="h1" component="div">
                <Translation pl="Zapisy" en="Registration"/>
            </Typography>
            <Card
                elevation={0}
                sx={{
                    boxShadow: "none",
                    backgroundColor: 'white',
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            overflow: "hidden",
                        }}
                    >
                        {loading ?
                            <Skeleton variant="rectangular" animation="wave" width={iframeWidth}
                                      height={1370}/> : <></>}
                        <iframe title="Form title"
                                src={"https://forms.office.com/pages/responsepage.aspx?id=nCJQO3jNiEWbz5e3Yp4vD6l0XybC_ddMh6Dj0fUQYOxUQkRSVlRDMVlNRzFGMkZLRDhITTUxVEpENC4u&embed=true&lang=" + lang_url}
                                width={iframeWidth} height="1371"
                                onLoad={() => setLoading(false)}
                                style={{
                                    margin: 0,
                                    border: "none",
                                    position: "relative",
                                    overflow: "hidden",
                                    scrollbarColor: "transparent",
                                }}
                                scrolling="no"/>
                    </Box>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default RegisterPage;
