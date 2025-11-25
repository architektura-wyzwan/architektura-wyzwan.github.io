import useWindowDimensions from "./UseWindowDimensions";
import {useTheme} from "@mui/material";

export default function useVertical() {
    const {height, width} = useWindowDimensions();
    const theme = useTheme();
    const isSm = width < theme.breakpoints.values.md;
    const isXs = width < theme.breakpoints.values.sm;
    const isMdAndVertical = width < theme.breakpoints.values.lg && height > width;
    // return isSm || isMdAndVertical;
    return isXs;
}

export function useIsXs() {
    const {width} = useWindowDimensions();
    const theme = useTheme();
    return width < theme.breakpoints.values.sm;
}
