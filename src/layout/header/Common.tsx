import {Paper, PaperProps} from "@mui/material";
import * as React from "react";
import {MenuTreeItem, SubMenuTreeItem} from "../../data/Menu";
import {Translation} from "../../components/Translation";

export function Item(props: PaperProps) {
    return <Paper
        elevation={0}
        sx={(theme) => ({
            ...theme.typography.body1,
            background: "transparent",
            color: theme.palette.text.secondary,
        })}
        {...(props as PaperProps)}/>;
}

export function MakeTextElement(menuItem: SubMenuTreeItem | MenuTreeItem) {
    return (<Translation pl={menuItem.name_pl} en={menuItem.name_en}/>);
}
