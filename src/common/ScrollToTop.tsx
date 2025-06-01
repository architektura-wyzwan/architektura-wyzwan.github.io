import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import {Box} from "@mui/material";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollTop() {
    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        window.scrollTo(0, 0);
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{position: 'fixed', bottom: 16, right: 16}}
            >
                <Fab size="small" aria-label="scroll back to top" sx={{boxShadow: 'none'}} >
                    <KeyboardArrowUpIcon elevation={0}/>
                </Fab>
            </Box>
        </Fade>
    );
}