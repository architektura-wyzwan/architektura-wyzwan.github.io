import {Grid, useTheme} from "@mui/material";
import useVertical from "../hooks/UseVertical";

export type LayoutProps = {
    children: React.ReactNode,
    wide?: boolean
}

export default function Layout(props: LayoutProps) {
    const wide = props.wide ?? false;
    const theme = useTheme();
    const vertical = useVertical();
    const marginXs = 50;
    const marginSm = wide ? 10 : 50;
    const marginMd = wide ? 10 : 75;
    const marginLg = wide ? 10 : 150;
    const marginXl = wide ? 10 : 250;

    return <Grid container sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        columns: 1
    }}>
        <Grid size={1}
              sx={vertical ?
                  {
                      width: '100%',
                      ml: '5%',
                      mr: '5%',
                  } : {
                      width: {
                          xs: 300 - marginXs * 2,
                          sm: theme.breakpoints.values.sm - marginSm * 2,
                          md: theme.breakpoints.values.md - marginMd * 2,
                          lg: theme.breakpoints.values.lg - marginLg * 2,
                          xl: theme.breakpoints.values.xl - marginXl * 2,
                      },
                  }}>
            {props.children}
        </Grid>
    </Grid>
}