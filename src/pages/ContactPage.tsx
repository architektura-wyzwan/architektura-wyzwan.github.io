import * as React from "react";
import PageLayout from "../common/PageLayout";
import {Translation} from "../common/Translation";
import Contact from "../common/Contact";
import { Box } from "@mui/material";

export default function AgendaPage() {
    return (
        <PageLayout title_pl="Kontakt" title_en="Contact" wide={false}>
            <Box sx={{pl: 4}}>
                <Translation pl="Sekretarz Konferencji" en="Secretary of the Conference"/>
                <br/>
                <Translation pl="mgr inż. arch. Magdalena Duda" en="MSc. Eng. Arch. Magdalena Duda"/>
            </Box>
            <Contact inverted={false}/>
        </PageLayout>
    );
}
