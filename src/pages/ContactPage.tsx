import * as React from "react";
import PageLayout from "../common/PageLayout";
import Contact from "../common/Contact";

export default function AgendaPage() {
    return (
        <PageLayout title_pl="Kontakt" title_en="Contact" wide={false}>
            <Contact inverted={false} light={false}/>
        </PageLayout>
    );
}
