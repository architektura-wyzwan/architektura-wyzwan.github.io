import {gallery2023Items} from "./gallery/2023";
import {gallery2024Items} from "./gallery/2024";

export type GalleryItem = string

export type Gallery = {
    year: number,
    items: GalleryItem[],
    authors: string,
}

export const galleryList: Gallery[] = [
    {
        year: 2023,
        items: gallery2023Items,
        authors: "autorzy",
    },
    {
        year: 2024,
        items: gallery2024Items,
        authors: "autorzy",
    },
];
