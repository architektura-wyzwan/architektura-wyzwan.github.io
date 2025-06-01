import {Paper, PaperProps, styled} from "@mui/material";
import * as React from "react";
import {MenuTreeItem, SubMenuTreeItem} from "../../data/Menu";
import {Translation} from "../Translation";

export const Item = styled((props: PaperProps) => (<Paper elevation={0} {...props}/>))(({theme}) => ({
    ...theme.typography.body1,
    background: "transparent",
    color: theme.palette.text.secondary
}));

export function MakeTextElement(menuItem: SubMenuTreeItem | MenuTreeItem) {
    return (<Translation pl={menuItem.name_pl} en={menuItem.name_en}/>);
}
