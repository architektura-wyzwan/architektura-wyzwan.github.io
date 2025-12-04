import * as React from "react";
import {AppBar, Box, CardActionArea, Stack,} from "@mui/material";
import urls from "../../Urls";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import BurgerNav from "./BurgerNav";
import BrowserNav from "./BrowserNav";
import {useNavigate} from "react-router-dom";
import ImageCard from "../../components/ImageCard";
import useDarkMode from "../../hooks/UseDarkMode";

export function useHeaderHeight() {
    const {width} = useWindowDimensions();
    return width < 2000 ? 74 : 85;
}

export function useLogoHeight() {
    const {width} = useWindowDimensions();
    return width < 2000 ? 40 : 57;
}

function useHeaderType() {
    const {width} = useWindowDimensions();
    return width < 950;
}

function useLogo() {
    const isBurger = useHeaderType();
    const dark_mode = useDarkMode();
    if (isBurger) {
        if (dark_mode) {
            return "/static/logo/white_plain.png";
        } else {
            return "/static/logo/black_plain.png";
        }
    } else {
        if (dark_mode) {
            return "/static/logo/white_text_left.png";
        } else {
            return "/static/logo/black_text_left.png";
        }
    }
}

function Header() {
    let navigate = useNavigate();
    const isBurger = useHeaderType();
    const headerHeight = useHeaderHeight();
    const logoHeight = useLogoHeight();
    const logo = useLogo();
    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={(theme) => ({
                backgroundColor: theme.palette.background.paper,
                height: headerHeight,
            })}>
            <Stack
                direction="row"
                sx={{
                    pt: isBurger ? 2 : 1,
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
                        <ImageCard
                            image={logo}
                            sx={{
                                height: logoHeight,
                                objectFit: "contain",
                                width: "unset",
                            }}
                        />

                    </CardActionArea>
                </Box>
                {isBurger ? <BurgerNav/> : <BrowserNav/>}
            </Stack>
        </AppBar>
    );
}

export default Header;
