import * as React from "react";
import {Box} from "@mui/material";
import {Translation} from "../../common/Translation";
import SectionHeading from "../../common/SectionHeading";

export type MainPageSectionProps = {
    children: React.ReactNode | React.ReactNode[],
    title_pl: string,
    title_en: string,
}

export default function MainPageSection(props: MainPageSectionProps) {
    return (
        <Box sx={{
            pl: {
                xs: '15%',
                sm: '10%',
                lg: '12.5%',
            },
            pr: {
                xs: '15%',
                sm: '10%',
                lg: '12.5%',
            },
        }}>
            <SectionHeading>
                <Translation pl={props.title_pl} en={props.title_en}/>
            </SectionHeading>
            {props.children}
        </Box>);
}