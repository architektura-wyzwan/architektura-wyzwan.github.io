import {Grid, useTheme} from "@mui/material";

export type LayoutProps = {
    children: React.ReactNode,
    wide?: boolean
}

export default function Layout(props: LayoutProps) {
    const wide = props.wide ?? false;
    const theme = useTheme();
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
              sx={{
                  width: {
                      xs: '100%',
                      sm: theme.breakpoints.values.sm - marginSm * 2,
                      md: theme.breakpoints.values.md - marginMd * 2,
                      lg: theme.breakpoints.values.lg - marginLg * 2,
                      xl: theme.breakpoints.values.xl - marginXl * 2,
                  },
                  ml: {
                      xs: '5%',
                      sm: 0,
                  },
                  mr: {
                      xs: '5%',
                      sm: 0,
                  }
              }}>
            {props.children}
        </Grid>
    </Grid>
}