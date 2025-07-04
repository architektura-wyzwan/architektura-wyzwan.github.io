import * as React from "react";
import PageLayout from "../common/PageLayout";
import {Translation} from "../common/Translation";
import Contact from "../common/Contact";
import { Box } from "@mui/material";

export default function AgendaPage() {
    return (
        <PageLayout title_pl="Kontakt" title_en="Contact" wide={false}>
            <Box sx={{pl: 4}}>
                <Translation pl="Profesor Arch. Anna Maria Wierzbicka" en="Professor Arch. Anna Maria Wierzbicka"/>
                <br/>
                <Translation pl="arch. Magdalena Duda" en="Arch. Magdalena Duda"/>
            </Box>
            <Contact inverted={false}/>
        </PageLayout>
    );
}
