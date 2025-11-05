import * as React from "react";
import ArticleLayout from "../layout/ArticleLayout";
import {Address, SocialLinks} from "../components/Contact";
import {Stack} from "@mui/material";

export default function AgendaPage() {
    return (
        <ArticleLayout title_pl="Kontakt" title_en="Contact" wide={false}>
            <Stack direction="column">
                <Address light={false} dense={false}/>
                <SocialLinks inverted={false} dense={false}/>
            </Stack>
        </ArticleLayout>
    );
}
