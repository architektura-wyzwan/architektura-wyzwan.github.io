import useWindowDimensions from "./UseWindowDimensions";

export default function useVertical(narrow?: boolean) {
    const {height, width} = useWindowDimensions();
    return width < (narrow ? 600 : 800) || (width < 1050 && height > width);
}