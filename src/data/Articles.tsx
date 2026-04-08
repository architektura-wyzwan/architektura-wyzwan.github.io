import {opening_pavilion_of_freedom} from "./news/opening_pavilion_of_freedom";
import {pavilion_of_freedom_award} from "./news/pavilion_of_freedom_award";
import {opening_pavilion_of_future} from "./news/opening_pavilion_of_future";
import {pavilion_of_future_new_location} from "./news/pavilion_of_future_new_location";
import {opening_pavilion_of_community} from "./news/opening_pavilion_of_community";
import {conference_2025} from "./news/conference_2025";
import {ArticleMetadata} from "../layout/Article";
import {Wierzbicka_award_2025} from "./news/Wierzbicka_award_2025";

// The last 3 articles will be displayed on the main page
export const articles: ArticleMetadata[] = [
    opening_pavilion_of_freedom,
    pavilion_of_freedom_award,
    opening_pavilion_of_future,
    pavilion_of_future_new_location,
    opening_pavilion_of_community,
    conference_2025,
    Wierzbicka_award_2025,
].reverse()
