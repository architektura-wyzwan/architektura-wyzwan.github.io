import * as React from "react";
import {Collapse, Drawer, IconButton, List, ListItemButton, Stack, Theme} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import {menuTree, MenuTreeItem} from "../../data/Menu";
import ThemePicker from "../../ThemePicker";
import {LanguagePicker} from "../Translation";
import {Item, MakeTextElement} from "./Common";
import {Link} from "../Link"
import RegisterButton from "./RegisterButton";
import {useNavigate} from "react-router-dom";

function SubMenuNav({menuItem, drawerCloseHandler}: { menuItem: MenuTreeItem, drawerCloseHandler: () => void }) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(!open);
    };

    const iconSx = (theme: Theme) => ({
        color: theme.palette.text.secondary,
    });
    if (typeof menuItem.navigation === "string") {
        const textElement = MakeTextElement(menuItem);
        return (
            <ListItemButton onClick={(event) => {
                drawerCloseHandler();
                navigate(menuItem.navigation as string);
            }}>
                <Item>{textElement}</Item>
            </ListItemButton>
        );
    } else {
        return (<>
            <ListItemButton onClick={handleClick}>
                <Item>{MakeTextElement(menuItem)}</Item>
                {open ? <ExpandLess sx={iconSx}/> : <ExpandMore sx={iconSx}/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div">
                    {menuItem.navigation.map((subMenuItem, _) =>
                        (<ListItemButton sx={{pl: 4}} onClick={(event) => {
                            drawerCloseHandler();
                            navigate(subMenuItem.navigation);
                        }}>
                            <Link
                                to={subMenuItem.navigation}>
                                <Item>{MakeTextElement(subMenuItem)}</Item>
                            </Link>
                        </ListItemButton>)
                    )}
                </List>
            </Collapse>
        </>)
    }
}

export default function BurgerNav() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Stack direction="row" spacing={1} sx={{
                justifyContent: "flex-end",
                alignItems: "center",
                mr: 2,
            }}>
                <RegisterButton/>
                <IconButton
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon/>
                </IconButton>
            </Stack>
            <Drawer
                variant="temporary"
                anchor="right"
                open={open}
                onClose={handleDrawerClose}
                elevation={16}
            >
                <Stack direction="row" sx={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                    <Item sx={{scale: 0.7}}><LanguagePicker/></Item>
                    <Item sx={{scale: 1}}><ThemePicker/></Item>
                </Stack>
                <List sx={{minWidth: 200}}>
                    {menuTree.map((menuItem, _) => <SubMenuNav menuItem={menuItem} drawerCloseHandler={handleDrawerClose}/>)}
                </List>
            </Drawer>
        </>
    );
}