import * as React from "react";
import {Grid} from "@mui/material";
import {StandardRectangleCard} from "../components/StandardCard";
import StandardGrid from "../components/StandardGrid";
import ArticleLayout from "../layout/ArticleLayout";
import urls from "../Urls";
import {galleryList} from "../data/Gallery";

function GalleryPickerPage() {
    return (
        <ArticleLayout title_pl="Galeria" title_en="Gallery" wide={false}>
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
        </ArticleLayout>
    );
}

export default GalleryPickerPage;
