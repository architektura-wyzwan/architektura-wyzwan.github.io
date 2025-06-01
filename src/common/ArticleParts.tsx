import {Translation} from "./Translation";
import {Box, Grid, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import * as React from "react";
import ImageCard from "./ImageCard";
import CircleIcon from '@mui/icons-material/Circle';
import useVertical from "../utils/UseVertical";

export function big_image(src: string, crop?: boolean) {
    return (vertical: boolean) => (
        <ImageCard
            sx={crop ? {maxHeight: vertical ? '40vw' : '30vw'} : {}}
            src={src}/>
    );
}

export function paragraph(text_pl: string, text_en: string) {
    return custom(
        <Typography
            component="p"
            variant="regular"
            sx={{
                textAlign: "justify",
                textJustify: "inter-word",
            }}>
            <Translation
                pl={text_pl}
                en={text_en}/>
        </Typography>
    )
}

export type ParagraphProps = {
    text_pl: string;
    text_en: string;
}

export function Paragraph({text_pl, text_en}: ParagraphProps) {
    const vertical = useVertical();
    return paragraph(text_pl, text_en)(vertical);
}

export function break_line() {
    return custom(<br/>);
}

export function two_images(src_1: string, src_2: string) {
    return (vertical: boolean) => (
        <Grid container columns={2}
              spacing={2}
              sx={{
                  justifyContent: "center",
                  alignItems: "flex-start",
              }}>
            <Grid size={1}>
                <ImageCard sx={{
                    height: vertical ? '40vw' : '30vw',
                    minWidth: vertical ? '40vw' : '30vw',
                }} src={src_1}/>
            </Grid>
            <Grid size={1}>
                <ImageCard sx={{
                    height: vertical ? '40vw' : '30vw',
                    minWidth: vertical ? '40vw' : '30vw',
                }} src={src_2}/>
            </Grid>
        </Grid>
    );
}

export type TypographyVariant =
    'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | 'very_bold'
    | 'bold'
    | 'bolder'
    | 'regular'
    | 'lighter'
    | 'light'
    | 'very_light'
    | 'title_small'
    | 'title_big'
    | 'cardTitle';

export function styled_text(
    variant: TypographyVariant, text_pl: string, text_en: string) {
    return custom(<Typography
        variant={variant as TypographyVariant}>
        <Translation pl={text_pl} en={text_en}/>
    </Typography>);
}

export type ListItemType = React.ReactNode | ((vertical: boolean) => React.ReactNode);

export function list(items: ListItemType[]) {
    return (vertical: boolean) => {
        return <List dense={true}>
            {
                items.map((item, id) => (
                    <ListItem key={"#" + id}>
                        <ListItemIcon><CircleIcon sx={{scale: 0.3}} color="primary"/></ListItemIcon>
                        {(item instanceof Function) ? item(vertical) : item}
                    </ListItem>
                ))
            }
        </List>;
    };
}

export function group(items: ((vertical: boolean) => React.ReactNode)[]) {
    return (vertical: boolean) => {
        return <Box>
            {items.map((item, _) => item(vertical))}
        </Box>;
    };
}

export function custom(item: React.ReactNode) {
    return (vertical: boolean) => {
        return <>{item}</>;
    }
}
