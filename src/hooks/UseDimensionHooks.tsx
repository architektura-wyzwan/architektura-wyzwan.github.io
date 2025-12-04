import useWindowDimensions from "./UseWindowDimensions";
import {useTheme} from "@mui/material";

export function useIsXs() {
    const {width} = useWindowDimensions();
    const theme = useTheme();
    return width < theme.breakpoints.values.sm;
}

export function useIsSm() {
    const {width} = useWindowDimensions();
    const theme = useTheme();
    return width < theme.breakpoints.values.md;
}

export function useIsMd() {
    const {width} = useWindowDimensions();
    const theme = useTheme();
    return width < theme.breakpoints.values.lg;
}
