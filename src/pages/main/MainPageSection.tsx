import * as React from "react";
import {Box} from "@mui/material";
import {Translation} from "../../common/Translation";
import SectionHeading from "../../common/SectionHeading";

export type MainPageSectionProps = {
    children: React.ReactNode | React.ReactNode[],
    title_pl: string,
    title_en: string,
    wide?: boolean,
}

export default function MainPageSection(props: MainPageSectionProps) {
    const wide = props.wide !== undefined ? props.wide : false;
    return (
        <Box sx={{
            pl: {
                xs: wide ? '5%' : '15%',
                sm: wide ? '5%' : '10%',
                lg: wide ? '5%' : '12.5%',
            },
            pr: {
                xs: wide ? '5%' : '15%',
                sm: wide ? '5%' : '10%',
                lg: wide ? '5%' : '12.5%',
            },
        }}>
            <SectionHeading>
                <Translation pl={props.title_pl} en={props.title_en}/>
            </SectionHeading>
            {props.children}
        </Box>);
}