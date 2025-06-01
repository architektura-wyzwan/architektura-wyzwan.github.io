import * as React from "react";
import {AppBar, Box, CardActionArea, Stack, useTheme,} from "@mui/material";
import urls from "../Urls";
import useWindowDimensions from "../utils/UseWindowDimensions";
import BurgerNav from "./header/BurgerNav";
import BrowserNav from "./header/BrowserNav";
import {useNavigate} from "react-router-dom";
import ImageCard from "./ImageCard";

function Header() {
    const {width} = useWindowDimensions();
    const theme = useTheme();
    const dark_mode = theme.palette.mode === "dark";
    let navigate = useNavigate();
    const burger = width < 950;
    const xl = width >= 2000;
    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={(theme) => ({
                backgroundColor: theme.palette.background.paper,
            })}>
            <Stack
                direction="row"
                sx={{
                    pt: burger ? 2 : 1,
                    pb: 1,
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box sx={{pl: 3}}>
                    <CardActionArea onClick={() => {
                        window.scrollTo(0, 0);
                        navigate(urls.main as string);
                    }}>
                        {burger
                            ? <ImageCard
                                image={dark_mode ? "/static/logo/white_plain.png" : "/static/logo/black_plain.png"}
                                sx={{height: 40}}
                            />
                            : <ImageCard
                                image={dark_mode ? "/static/logo/white_text_left.png" : "/static/logo/black_text_left.png"}
                                sx={{height: xl ? 57 : 40}}
                            />
                        }
                    </CardActionArea>
                </Box>
                {burger ? <BurgerNav/> : <BrowserNav/>}

            </Stack>
        </AppBar>
    );
}

export default Header;
