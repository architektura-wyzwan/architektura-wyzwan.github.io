import {ImageList, ImageListItem, Typography, useTheme} from "@mui/material";
import * as React from "react";
import ArticleLayout from "../layout/ArticleLayout";
import {galleryList} from "../data/Gallery";
import NotFoundPage from "./NotFoundPage";
import {useParams} from "react-router-dom";
import { Translation } from "../components/Translation";
import useWindowDimensions from "../hooks/UseWindowDimensions";

function useNumberOfColumns() {
    const {width} = useWindowDimensions();
    const theme = useTheme();
    const isXs = width < theme.breakpoints.values.sm;
    const isSm = width < theme.breakpoints.values.md;
    if (isXs) return 1;
    if (isSm) return 2;
    return 3;
}

function GalleryPage() {
    let params = useParams();
    const galleryId = params.galleryId as string;
    const galleryNumber = parseInt(galleryId);
    const numberOfColumns = useNumberOfColumns();
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
        <ArticleLayout
            title_pl={"Galeria " + galleryItem.year}
            title_en={"Gallery " + galleryItem.year}>
            <Typography variant="body2" sx={{mb: 2}}>
                <Translation pl={"Fotografie autorstwa: "} en={"Photos by: "}/>
                {galleryItem.authors}
            </Typography>
            <ImageList variant="masonry" cols={numberOfColumns} gap={8}>
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
        </ArticleLayout>
    );
}

export default GalleryPage;