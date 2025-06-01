import * as React from "react";
import {Grid} from "@mui/material";
import {StandardRectangleCard} from "../common/StandardCard";
import StandardGrid from "../common/StandardGrid";
import PageLayout from "../common/PageLayout";
import urls from "../Urls";
import {galleryList} from "../data/Gallery";

function AllGalleryPage() {
    return (
        <PageLayout title_pl="Galeria" title_en="Gallery" wide={true}>
            <StandardGrid>
                {galleryList.map((gallery, index) => (
                    <Grid size={1}>
                        <StandardRectangleCard
                            url={urls.gallery(index)}
                            image={gallery.items[0]}
                            cardTitle={gallery.year}
                            cardDescription={""}
                        />
                    </Grid>
                ))}
            </StandardGrid>
        </PageLayout>
    );
}

export default AllGalleryPage;
