import * as React from "react";
import PageLayout from "../common/PageLayout";
import {Translation} from "../common/Translation";
import Contact from "../common/Contact";
import { Box } from "@mui/material";

export default function AgendaPage() {
    return (
        <PageLayout title_pl="Kontakt" title_en="Contact" wide={false}>
            <Contact inverted={false} light={false}/>
        </PageLayout>
    );
}
