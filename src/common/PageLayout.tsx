import {Box, Typography} from "@mui/material";
import * as React from "react";
import {Translation} from "./Translation";
import useVertical from "../utils/UseVertical";

export type PageLayoutProps = {
    children: React.ReactNode | React.ReactNode[],
    title_pl: string,
    title_en: string,
    wide: boolean,
}

export default function PageLayout(props: PageLayoutProps) {
    const vertical = useVertical(!props.wide);
    return (<Box
        sx={{
            m: '50px',
            ml: props.wide ? {
                xs: '15%',
                sm: '10%',
                lg: '12.5%',
            } : (vertical ? '5%' : '20%'),
            mr: props.wide ? {
                xs: '15%',
                sm: '10%',
                lg: '12.5%',
            } : (vertical ? '5%' : '20%'),
        }}
    >
        <Typography variant="h2"
                    gutterBottom={true}
                    sx={props.wide ? {mb: 4} : {}}
        >
            <Translation pl={props.title_pl} en={props.title_en}/>
        </Typography>
        {props.children}
    </Box>);
}