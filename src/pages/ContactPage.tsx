import * as React from "react";
import ArticleLayout from "../layout/ArticleLayout";
import {Address, SocialLinks} from "../components/Contact";
import {Stack} from "@mui/material";

// Component defining the Contact page
// url: https://architectureofchallenges.pl/contact
//
// The contact page displays in a column the address and links to social accounts.
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
