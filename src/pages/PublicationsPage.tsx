import * as React from 'react';
import {Grid} from "@mui/material";
import {Translation} from "../common/Translation";
import {StandardRectangleCard} from "../common/StandardCard";
import {publications} from "../data/Publications";
import PageLayout from "../common/PageLayout";
import StandardGrid from "../common/StandardGrid";

function PublicationsPage() {
    return (<PageLayout title_pl="Publikacje" title_en="Publications" wide={true}>
        <StandardGrid>
            {publications.map((publication, _) => (
                <Grid size={1}>
                    <a href={publication.url} download style={{textDecoration: "none"}}>
                    <StandardRectangleCard
                        // url={publication.url}
                        image={publication.image}
                        cardTitle={publication.title}
                        cardDescription={<Translation pl={publication.description_pl} en={publication.description_en}/>}
                    />
                    </a>
                </Grid>
            ))}
        </StandardGrid>
    </PageLayout>)
}

export default PublicationsPage;
