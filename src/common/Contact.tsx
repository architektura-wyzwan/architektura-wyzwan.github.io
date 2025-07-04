import * as React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip} from "@mui/material";
import {Translation} from "./Translation";

export default function Contact({inverted}: {inverted: boolean}) {
    const navigateTo = (url: string, new_window: boolean)=> ((event: any)=> {
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

    return (
        <List dense={true}>
            <ListItem>
                <Tooltip title={<Translation pl="Skopiuj do schowka" en="Copy to clipboard"/>}>
                    <ListItemButton onClick={handleCopy("(22) 234 5565")}>
                        <ListItemIcon>
                            <LocalPhoneIcon color={inverted ? "secondary" : "primary"}/>
                        </ListItemIcon>
                        <ListItemText>(22) 234 5565</ListItemText>
                    </ListItemButton>
                </Tooltip>
            </ListItem>
            <ListItem>
                <ListItemButton onClick={navigateTo("mailto://Anna.Wierzbicka@pw.edu.pl", false)}>
                    <ListItemIcon>
                        <MailIcon color={inverted ? "secondary" : "primary"}/>
                    </ListItemIcon>
                    <ListItemText>Anna.Wierzbicka@pw.edu.pl</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton onClick={navigateTo("mailto://Magdalena.Duda@pw.edu.pl", false)}>
                    <ListItemIcon>
                        <MailIcon color={inverted ? "secondary" : "primary"}/>
                    </ListItemIcon>
                    <ListItemText>Magdalena.Duda@pw.edu.pl</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton onClick={navigateTo("https://www.facebook.com/profile.php?id=100092718188131", true)}>
                    <ListItemIcon>
                        <FacebookIcon color={inverted ? "secondary" : "primary"}/>
                    </ListItemIcon>
                    <ListItemText>stawiamy_</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton onClick={navigateTo("https://www.instagram.com/stawiamy_/", true)}>
                    <ListItemIcon>
                        <InstagramIcon color={inverted ? "secondary" : "primary"}/>
                    </ListItemIcon>
                    <ListItemText>@stawiamy_</ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
    );
}