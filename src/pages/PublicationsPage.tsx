import * as React from 'react';
import {Translation} from "../components/Translation";
import {StandardRectangleCard} from "../components/StandardCard";
import {publications} from "../data/Publications";
import ArticleLayout from "../layout/ArticleLayout";
import StandardGrid from "../components/StandardGrid";
import urls from "../Urls";

function PublicationsPage() {
    return (<ArticleLayout title_pl="Publikacje" title_en="Publications" wide={false}>
        <StandardGrid elements={publications.map((publication) =>
            <a href={publication.url} download style={{textDecoration: "none"}}>
                <StandardRectangleCard
                    url={urls.publications}
                    image={publication.image}
                    cardTitle={publication.title}
                    cardDescription={<Translation pl={publication.description_pl} en={publication.description_en}/>}
                />
            </a>
        )}/>
    </ArticleLayout>)
}

export default PublicationsPage;
