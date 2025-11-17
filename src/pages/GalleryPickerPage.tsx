import * as React from "react";
import {StandardRectangleCard} from "../components/StandardCard";
import StandardGrid from "../components/StandardGrid";
import ArticleLayout from "../layout/ArticleLayout";
import urls from "../Urls";
import {galleryList} from "../data/Gallery";

function GalleryPickerPage() {
    return (
        <ArticleLayout title_pl="Galeria" title_en="Gallery" wide={false}>
            <StandardGrid elements={galleryList.map((gallery, index) =>
                    <StandardRectangleCard
                        url={urls.gallery(index)}
                        image={gallery.items[0]}
                        cardTitle={gallery.year}
                        cardDescription={""}
                    />
            )}/>
        </ArticleLayout>
    );
}

export default GalleryPickerPage;
