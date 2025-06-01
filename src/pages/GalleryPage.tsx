import {ImageList, ImageListItem, Typography} from "@mui/material";
import * as React from "react";
import PageLayout from "../common/PageLayout";
import {galleryList} from "../data/Gallery";
import NotFoundPage from "./NotFoundPage";
import {useParams} from "react-router-dom";
import { Translation } from "../common/Translation";

function GalleryPage() {
    let params = useParams();
    const galleryId = params.galleryId as string;
    const galleryNumber = parseInt(galleryId);
    if (galleryNumber.toString() !== galleryId) {
        return <NotFoundPage/>
    }
    if (!(0 <= galleryNumber && galleryNumber < galleryList.length)) {
        return <NotFoundPage/>
    }
    const galleryItem = galleryList[galleryNumber];
    return (
        <PageLayout
            title_pl={"Galeria " + galleryItem.year}
            title_en={"Gallery " + galleryItem.year}
            wide={false}>
            <Typography variant="body2" sx={{mb: 2}}>
                <Translation pl={"Fotografie autorstwa: "} en={"Photos by: "}/>
                {galleryItem.authors}
            </Typography>
            <ImageList variant="masonry" cols={3} gap={8}>
                {galleryItem.items.map((item) => (
                    <ImageListItem
                        key={item}
                    >
                        <img
                            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item}?w=248&fit=crop&auto=format`}
                            alt={item}
                            style={{
                                borderRadius: 5,
                            }}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </PageLayout>
    );
}

export default GalleryPage;