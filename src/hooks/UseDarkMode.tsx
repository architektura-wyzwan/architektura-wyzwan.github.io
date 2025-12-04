import {useTheme} from "@mui/material";

export default function useDarkMode() {
    const theme = useTheme();
    return theme.palette.mode === "dark";
}