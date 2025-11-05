import * as React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography} from "@mui/material";
import {Translation} from "./Translation";
import theme from "../Theme";

export function Address(props: { light: boolean, dense: boolean }) {
    const lightSx = {
        pl: props.dense ? 0 : 4,
        fontWeight: '300',
        fontSize: '12px',
        lineHeight: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '14px',
            lineHeight: '21px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '14px',
            lineHeight: '21px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
    };
    const darkSx = {
        pl: props.dense ? 0 : 4,
    };
    return <Typography component="div" sx={props.light ? lightSx : darkSx}>
        <Translation pl={<>
            Przewodnicząca komitetu organizacyjnego:<br/>
            Profesor arch. Anna Maria Wierzbicka<br/>
            Sekretarz konferencji:<br/>
            arch. Magdalena Duda<br/>
            <br/>
            Wydział Architektury Politechniki Warszawskiej<br/>
            ul. Koszykowa 55, 00-659 Warszawa
        </>} en={<>
            Chairwoman:<br/>
            Professor Arch. Anna Maria Wierzbicka<br/>
            Conference secretary:<br/>
            Arch. Magdalena Duda<br/>
            <br/>
            Faculty of Architecture,<br/>
            Warsaw University of Technology<br/>
            Koszykowa 55, 00-659 Warszawa
        </>}/>
    </Typography>;
}

export function SocialLinks(props: { inverted: boolean, dense: boolean }) {
    const navigateTo = (url: string, new_window: boolean) => ((event: any) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    });
    const handleCopy = (data: string) => (async (event: any) => {
        try {
            await navigator.clipboard.writeText(data);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });

    return <List dense={true} disablePadding={props.dense}>
        <ListItem disableGutters={props.dense}>
            <Tooltip title={<Translation pl="Skopiuj do schowka" en="Copy to clipboard"/>}>
                <ListItemButton
                    disableGutters={props.dense}
                    onClick={handleCopy("(22) 234 5565")}>
                    <ListItemIcon>
                        <LocalPhoneIcon color={props.inverted ? "secondary" : "primary"}/>
                    </ListItemIcon>
                    <ListItemText>(22) 234 5565</ListItemText>
                </ListItemButton>
            </Tooltip>
        </ListItem>
        <ListItem disableGutters={props.dense}>
            <ListItemButton
                disableGutters={props.dense}
                onClick={navigateTo("mailto://Anna.Wierzbicka@pw.edu.pl", false)}>
                <ListItemIcon>
                    <MailIcon color={props.inverted ? "secondary" : "primary"}/>
                </ListItemIcon>
                <ListItemText>Anna.Wierzbicka@pw.edu.pl</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disableGutters={props.dense}>
            <ListItemButton
                disableGutters={props.dense}
                onClick={navigateTo("mailto://Magdalena.Duda@pw.edu.pl", false)}>
                <ListItemIcon>
                    <MailIcon color={props.inverted ? "secondary" : "primary"}/>
                </ListItemIcon>
                <ListItemText>Magdalena.Duda@pw.edu.pl</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disableGutters={props.dense}>
            <ListItemButton
                disableGutters={props.dense}
                onClick={navigateTo("https://www.facebook.com/profile.php?id=100092718188131", true)}>
                <ListItemIcon>
                    <FacebookIcon color={props.inverted ? "secondary" : "primary"}/>
                </ListItemIcon>
                <ListItemText>stawiamy_</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disableGutters={props.dense}>
            <ListItemButton
                disableGutters={props.dense}
                onClick={navigateTo("https://www.instagram.com/stawiamy_/", true)}>
                <ListItemIcon>
                    <InstagramIcon color={props.inverted ? "secondary" : "primary"}/>
                </ListItemIcon>
                <ListItemText>@stawiamy_</ListItemText>
            </ListItemButton>
        </ListItem>
    </List>;
}
