import {Button, Menu, MenuItem, Stack} from "@mui/material";
import {menuTree} from "../../data/Menu";
import ThemePicker from "../../ThemePicker";
import {LanguagePicker} from "../Translation";
import * as React from "react";
import {Link} from "../Link";
import {Item, MakeTextElement} from "./Common";
import RegisterButton from "./RegisterButton";
import {useNavigate} from "react-router-dom";

type MenuListItem = {
    children: React.ReactNode;
    ref: string;
}

type MenuButtonProps = {
    options: MenuListItem[];
    children: React.ReactNode;
}

function MenuButton(props: MenuButtonProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button
                disableElevation
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                // onMouseOver={handleClick}
                sx={(theme) => ({
                    ...theme.typography.body1,
                    padding: theme.spacing(1),
                    textTransform: 'none',
                    color: theme.palette.text.secondary,
                })}
            >
                {props.children}
            </Button>
            <Menu
                elevation={0}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                autoFocus={false}
                slotProps={{
                    list: {
                        onMouseLeave: handleClose,
                    },
                }}
            >
                {props.options.map((option) => (
                    <MenuItem onClick={handleClose}><Link to={option.ref}>
                        <Item>{option.children}</Item>
                    </Link></MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default function BrowserNav() {
    const navigate = useNavigate();

    return (<Stack direction="row" spacing={1} sx={{
        justifyContent: "flex-end",
        alignItems: "center",
        mr: 2,
    }}>
        {menuTree.map((menuItem, _) => {
            const textElement = MakeTextElement(menuItem);
            if (typeof menuItem.navigation === "string") {
                return (
                    <Button
                        disableElevation
                        id="basic-button"
                        onClick={(event) => navigate(menuItem.navigation as string)}
                        sx={(theme) => ({
                            ...theme.typography.body1,
                            // padding: 0,
                            padding: theme.spacing(1),
                            textTransform: 'none',
                            color: theme.palette.text.secondary,
                        })}
                    >
                        {textElement}
                    </Button>)
            } else {
                return (
                    <MenuButton options={menuItem.navigation.map((subMenuItem, _) => ({
                        children: MakeTextElement(subMenuItem),
                        ref: subMenuItem.navigation,
                    }))}>
                        {textElement}
                    </MenuButton>
                )
            }
        })}
        <Item sx={{scale: 1}}><ThemePicker/></Item>
        <Item sx={{scale: 0.7}}><LanguagePicker/></Item>
        <RegisterButton/>
    </Stack>);
}


