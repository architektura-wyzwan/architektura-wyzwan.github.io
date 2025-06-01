import {Stack, Typography} from "@mui/material";
import {Translation} from "./Translation";
import * as React from "react";

export type CitationProps = {
    author: string;
    text_pl: string;
    text_en: string;
};

export function Citation({author, text_pl, text_en}: CitationProps) {
    return (
        <Stack>
            <Typography variant="regular"  sx={{fontStyle: "italic"}}>
                "<Translation pl={text_pl} en={text_en}/>"
            </Typography>
            <Typography variant="bolder" sx={{alignSelf: "flex-end", fontStyle: "italic"}}>
                {author}
            </Typography>
        </Stack>)
}