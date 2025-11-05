import useWindowDimensions from "./UseWindowDimensions";
import {useTheme} from "@mui/material";

export default function useVertical() {
    const {height, width} = useWindowDimensions();
    const theme = useTheme();
    const isXs = width < theme.breakpoints.values.sm;
    const isSmAndVertical = width < theme.breakpoints.values.md && height > width;
    return isXs || isSmAndVertical;
}