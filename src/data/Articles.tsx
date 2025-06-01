import React from "react";
import {opening_pavilion_of_freedom} from "./news/opening_pavilion_of_freedom";
import {pavilion_of_freedom_award} from "./news/pavilion_of_freedom_award";
import {opening_pavilion_of_future} from "./news/opening_pavilion_of_future";
import {pavilion_of_future_new_location} from "./news/pavilion_of_future_new_location";

export type ArticleContent = {
    title_pl: string;
    title_en: string;
    subtitle_pl?: string;
    subtitle_en?: string;
    image?: string; // Can be unset only for pages without miniatures (like About, or previous editions). All news must have this set
    content: ((vertical: boolean) => React.JSX.Element)[];
}

// Last 3 articles will be displayed on the main page
export const articles: ArticleContent[] = [
    opening_pavilion_of_freedom,
    pavilion_of_freedom_award,
    opening_pavilion_of_future,
    pavilion_of_future_new_location,
].reverse()
