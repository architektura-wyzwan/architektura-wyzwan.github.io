import {Box, Typography} from "@mui/material";
import * as React from "react";
import {Translation} from "../components/Translation";
import Layout from "./Layout";

export type PageLayoutProps = {
    children: React.ReactNode | React.ReactNode[],
    title_pl: string,
    title_en: string,
    wide: boolean,
}

export default function ArticleLayout(props: PageLayoutProps) {
    return (<Layout wide={props.wide}>
        <Box sx={{
            mt: '50px',
            mb: '50px',
        }}>
            <Typography variant="h2"
                        gutterBottom={true}
                        sx={props.wide ? {mb: 4} : {}}
            >
                <Translation pl={props.title_pl} en={props.title_en}/>
            </Typography>
            {props.children}
        </Box>
    </Layout>);
}