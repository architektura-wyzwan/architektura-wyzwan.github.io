import {Grid, useTheme} from "@mui/material";

export type LayoutProps = {
    children: React.ReactNode,
    wide?: boolean
}

export default function Layout(props: LayoutProps) {
    const wide = props.wide ?? true;
    const theme = useTheme();

    const wideSx = {
        width: {
            xs: '100%',
            sm: theme.breakpoints.values.sm - 50 * 2,
            md: theme.breakpoints.values.md - 75 * 2,
            lg: theme.breakpoints.values.lg - 150 * 2,
            xl: theme.breakpoints.values.xl - 250 * 2,
        },
        ml: {
            xs: '5%',
            sm: 0,
        },
        mr: {
            xs: '5%',
            sm: 0,
        }
    };

    const narrowSx = {
        width: {
            xs: '100%',
            sm: theme.breakpoints.values.sm - 50 * 2,
            md: theme.breakpoints.values.md - 75 * 2,
            lg: theme.breakpoints.values.lg - 150 * 2,
            xl: theme.breakpoints.values.xl - 250 * 2,
        },
        ml: {
            xs: '5%',
            sm: 0,
        },
        mr: {
            xs: '5%',
            sm: 0,
        }
    };

    return <Grid container sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        columns: 1
    }}>
        <Grid size={1}
              sx={wide ? wideSx : narrowSx}>
            {props.children}
        </Grid>
    </Grid>
}