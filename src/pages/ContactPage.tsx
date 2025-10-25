import * as React from "react";
import PageLayout from "../layout/PageLayout";
import Contact from "../components/Contact";

export default function AgendaPage() {
    return (
        <PageLayout title_pl="Kontakt" title_en="Contact" wide={false}>
            <Contact inverted={false} light={false}/>
        </PageLayout>
    );
}
