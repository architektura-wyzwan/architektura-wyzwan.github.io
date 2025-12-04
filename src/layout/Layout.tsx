import {Grid, useTheme} from "@mui/material";

export type LayoutProps = {
    children: React.ReactNode,
}

export default function Layout(props: LayoutProps) {
    const theme = useTheme();

    return <Grid container sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        columns: 1,
    }}>
        <Grid size={1}
              sx={{
                  width: {
                      xs: '100%',
                      sm: theme.breakpoints.values.sm - 50 * 2,
                      md: theme.breakpoints.values.md - 75 * 2,
                      lg: theme.breakpoints.values.lg - 150 * 2,
                      xl: theme.breakpoints.values.xl - 250 * 2,
                  },
                  ml: {
                      xs: '15%',
                      sm: 0,
                  },
                  mr: {
                      xs: '15%',
                      sm: 0,
                  }
              }}>
            {props.children}
        </Grid>
    </Grid>
}