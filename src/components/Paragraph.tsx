import {Translation} from "./Translation";
import {Typography} from "@mui/material";
import * as React from "react";

export function Paragraph(props: { pl: string, en: string }) {
    return <Typography
        component="p"
        variant="regular"
        sx={{
            textAlign: "justify",
            textJustify: "inter-word",
        }}>
        <Translation
            pl={props.pl}
            en={props.en}/>
    </Typography>
}
