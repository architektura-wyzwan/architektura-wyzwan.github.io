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
                primary: {
                    light: '#ffffff',
                    main: '#ffffff',
                    dark: '#ffffff',
                    contrastText: '#000000',
                },
                secondary: {
                    light: '#101010',
                    main: '#101010',
                    dark: '#101010',
                    contrastText: '#ffffff',
                }
            },
        },
        light: {
            palette: {
                mode: 'light',
                primary: {
                    light: '#000000',
                    main: '#000000',
                    dark: '#000000',
                    contrastText: '#ffffff',
                },
                secondary: {
                    light: '#f0f0f0',
                    main: '#f0f0f0',
                    dark: '#f0f0f0',
                    contrastText: '#000000',
                }
            },
        },
    },
    components: {
        // Name of the component
        MuiButtonBase: {
            defaultProps: {
                // The props to change the default for.
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1100,
            lg: 1500,
            xl: 2000,
        },
    },
});

theme.typography = {
    ...theme.typography,
    fontFamily: 'Poppins, Arial',
    title_big: {
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '24px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '24px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '36px',
            lineHeight: '36px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '48px',
            lineHeight: '48px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '72px',
            lineHeight: '72px',
        },
    },
    title_small: {
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '12px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '22px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '32px'
        },
    },
    very_bold: {
        fontWeight: '700',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    bold: {
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    bolder: {
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    regular: {
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    lighter: {
        fontWeight: '300',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    light: {
        fontWeight: '200',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    very_light: {
        fontWeight: '100',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    link: {
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    body1: {
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    body2: {
        fontWeight: 'lighter',
        color: 'text.secondary',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    cardTitle: {
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    h1: {
        fontSize: '48px',
        fontWeight: '800',
        lineHeight: '60px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '72px',
            lineHeight: '90px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '96px',
            lineHeight: '120px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '144px',
            lineHeight: '180px',
        },
    },
    h2: {
        fontWeight: '700',
        fontSize: '36px',
        lineHeight: '45px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '54px',
            lineHeight: '67.5px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
            lineHeight: '90px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '108px',
            lineHeight: '135px',
        },
    },
    h3: {
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '30px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '36px',
            lineHeight: '45px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '48px',
            lineHeight: '60px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '72px',
            lineHeight: '90px',
        },
    },
    h4: {
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '30px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '36px',
            lineHeight: '45px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '48px',
            lineHeight: '60px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '72px',
            lineHeight: '90px',
        },
    },
    h5: {
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '22.5px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '27px',
            lineHeight: '33.75px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '36px',
            lineHeight: '45px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '54px',
            lineHeight: '67.5px',
        },
    },
    h6: {
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '22.5px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '27px',
            lineHeight: '33.75px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '36px',
            lineHeight: '45px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '54px',
            lineHeight: '67.px',
        },
    }
}
;

export default theme;