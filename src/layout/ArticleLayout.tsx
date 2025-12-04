import {Box, Typography} from "@mui/material";
import * as React from "react";
import {Translation} from "../components/Translation";
import Layout from "./Layout";

export type PageLayoutProps = {
    children: React.ReactNode | React.ReactNode[],
    title_pl: string,
    title_en: string,
}

export default function ArticleLayout(props: PageLayoutProps) {
    return (<Layout>
        <Box sx={{
            mt: '50px',
            mb: '50px',
        }}>
            <Typography variant="h1"
                        gutterBottom={true}
                        sx={{mb: 4}}
            >
                <Translation pl={props.title_pl} en={props.title_en}/>
            </Typography>
            {props.children}
        </Box>
    </Layout>);
}