import {createTheme} from "@mui/material/styles";
import React from "react";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        title_big: React.CSSProperties;
        title_small: React.CSSProperties;
        very_bold: React.CSSProperties;
        bold: React.CSSProperties;
        bolder: React.CSSProperties;
        regular: React.CSSProperties;
        lighter: React.CSSProperties;
        light: React.CSSProperties;
        very_light: React.CSSProperties;
        cardTitle: React.CSSProperties;
        link: React.CSSProperties;
    }

    // allow configuration using `createTheme()`
    interface TypographyVariantsOptions {
        title_big?: React.CSSProperties;
        title_small?: React.CSSProperties;
        very_bold?: React.CSSProperties;
        bold?: React.CSSProperties;
        bolder?: React.CSSProperties;
        regular?: React.CSSProperties;
        lighter?: React.CSSProperties;
        light?: React.CSSProperties;
        very_light?: React.CSSProperties;
        cardTitle?: React.CSSProperties;
        link?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        title_big: true;
        title_small: true;
        very_bold: true;
        bold: true;
        bolder: true;
        regular: true;
        lighter: true;
        light: true;
        very_light: true;
        cardTitle: true;
        link: true;
    }
}

let theme = createTheme({
    colorSchemes: {
        dark: {
            palette: {
                mode: 'dark',
                background: {
                    default: '#151515',
                    paper: '#151515',
                },
                primary: {
                    light: '#fafafa',
                    main: '#f5f5f5',
                    dark: '#efefef',
                    contrastText: '#151515',
                },
                secondary: {
                    light: '#535353',
                    main: '#353535',
                    dark: '#151515',
                    contrastText: '#fafafa',
                }
            },
        },
        light: {
            palette: {
                mode: 'light',
                background: {
                    default: '#ffffff',
                    paper: '#ffffff',
                },
                primary: {
                    light: '#535353',
                    main: '#353535',
                    dark: '#151515',
                    contrastText: '#fafafa',
                },
                secondary: {
                    light: '#fafafa',
                    main: '#f5f5f5',
                    dark: '#efefef',
                    contrastText: '#151515',
                }
            },
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1200,
            xl: 1536,
        },
    },
});

export const standardFont = {
    lineHeight: 1.3,
    fontSize: '0.75rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
}

theme.typography = {
    ...theme.typography,
    fontFamily: 'Poppins, Arial',
    title_big: {
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '27px',
            lineHeight: '27px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '36px',
            lineHeight: '36px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '54px',
            lineHeight: '54px',
        },
    },
    title_small: {
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '12px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '22px'
        },
    },
    very_bold: {
        fontWeight: '700',
        ...standardFont,
    },
    bold: {
        fontWeight: '600',
        ...standardFont,
    },
    bolder: {
        fontWeight: '500',
        ...standardFont,
    },
    regular: {
        fontWeight: '400',
        ...standardFont,
    },
    lighter: {
        fontWeight: '300',
        ...standardFont,
    },
    light: {
        fontWeight: '200',
        ...standardFont,
    },
    very_light: {
        fontWeight: '100',
        ...standardFont,
    },
    link: {
        fontWeight: '600',
        ...standardFont,
    },
    body1: {
        ...standardFont,
        fontWeight: '400',
    },
    body2: {
        ...standardFont,
        fontWeight: '300',
        color: 'text.secondary',
    },
    subtitle1: {
        ...standardFont,
        fontWeight: '300',
        color: 'text.secondary',
        lineHeight: 1.5,
    },
    subtitle2: {
        ...standardFont,
        fontWeight: '300',
        color: 'text.secondary',
        lineHeight: 1.25,
        fontSize: '0.75rem'
    },
    cardTitle: {
        ...standardFont,
        fontWeight: '550',
        lineHeight: 1.2,
    },
    h1: {
        fontWeight: '800',
        lineHeight: 1.2,
        letterSpacing: "-0.02rem",
        fontSize: '2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4rem',
        },
    },
    h2: {
        fontWeight: '700',
        lineHeight: 1.3,
        letterSpacing: "-0.03rem",
        fontSize: '1.75rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.625rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '3.5rem',
        },
    },
    h3: {
        fontWeight: '700',
        lineHeight: 1.3,
        letterSpacing: "-0.02rem",
        fontSize: '1.5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.25rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '3rem',
        },
    },
    h4: {
        fontWeight: '500',
        lineHeight: 1.3,
        letterSpacing: "-0.04rem",
        fontSize: '1.5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.25rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '3rem',
        },
    },
    h5: {
        fontWeight: '700',
        lineHeight: 1.2,
        letterSpacing: "-0.02rem",
        fontSize: '1.25rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.875rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '2.5rem',
        },
    },
    h6: {
        fontWeight: '500',
        lineHeight: 1.2,
        letterSpacing: "-0.02rem",
        fontSize: '1.25rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.875rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '2.5rem',
        },
    }
}
;

export default theme;