import * as React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";
import {Typography} from "@mui/material";
import {TypographyProps} from "@mui/material/Typography/Typography";

type LinkProps = {
    children: React.ReactNode;
}

function Link(props: LinkProps & NavLinkProps & TypographyProps) {
    return (
        <NavLink
            className={({isActive}: any) => `link ${isActive ? "active" : ""}`}
            style={{
                textDecoration: 'none',
                color: 'inherit',
            }}
            {...(props as NavLinkProps)}
            onClick={(event) => {
                window.scrollTo(0, 0);
            }}>
            <Typography variant="link" {...(props as TypographyProps)}>
                {props.children}
            </Typography>
        </NavLink>)
}

export {Link};
export type {LinkProps};

