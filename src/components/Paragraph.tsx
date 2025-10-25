import {Translation} from "./Translation";
import {Typography} from "@mui/material";
import * as React from "react";

export function Paragraph(props: { text_pl: string, text_en: string }) {
    return <Typography
        component="p"
        variant="regular"
        sx={{
            textAlign: "justify",
            textJustify: "inter-word",
        }}>
        <Translation
            pl={props.text_pl}
            en={props.text_en}/>
    </Typography>
}
