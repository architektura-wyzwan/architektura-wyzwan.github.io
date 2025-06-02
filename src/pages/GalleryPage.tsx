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
    const galleryFirstColumn = galleryItem.items.filter((_ , id) => id % 3 === 0);
    const gallerySecondColumn = galleryItem.items.filter((_ , id) => id % 3 === 1);
    const galleryThirdColumn = galleryItem.items.filter((_ , id) => id % 3 === 2);
    const galleryItemList = ([] as string[]).concat(galleryFirstColumn, gallerySecondColumn, galleryThirdColumn);
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
                {galleryItemList.map((item) => (
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