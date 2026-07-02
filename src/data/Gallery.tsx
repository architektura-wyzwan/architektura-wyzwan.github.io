import {gallery2023Items} from "./gallery/2023";
import {gallery2024Items} from "./gallery/2024";
import {gallery2025Items} from "./gallery/2025";
import {gallery2026Items} from "./gallery/2026";

export type GalleryItem = string

export type Gallery = {
    year: number,
    items: GalleryItem[],
    authors: string,
}

export const galleryList: Gallery[] = [
    {
        year: 2026,
        items: gallery2026Items,
        authors: "Artur Brzozowski",
    },
    {
        year: 2025,
        items: gallery2025Items,
        authors: "Artur Brzozowski",
    },
    {
        year: 2024,
        items: gallery2024Items,
        authors: "Artur Brzozowski",
    },
    {
        year: 2023,
        items: gallery2023Items,
        authors: "Anita Kasprzyk, Krzysztof Koszewski, Bartosz Kucharski, Damian Miszewski",
    },
];
