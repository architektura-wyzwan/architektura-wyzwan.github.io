import * as React from "react";
import {Grid} from "@mui/material";
import {Translation} from "../../common/Translation";
import {StandardRectangleCard} from "../../common/StandardCard";
import {articles} from "../../data/Articles";
import StandardGrid from "../../common/StandardGrid";
import MainPageSection from "./MainPageSection";

function NewsPage() {
    const numberOfNews = Math.min(articles.length, 3)
    const news = articles.slice(0, numberOfNews);
    return (
        <MainPageSection title_pl="AKTUALNOŚCI" title_en="NEWS">
            <StandardGrid>
                {news.map((news, index) => (
                    <Grid size={1}>
                        <StandardRectangleCard
                            url={"/article/" + (articles.length - numberOfNews + index)}
                            image={news.image}
                            cardTitle={<Translation pl={news.title_pl} en={news.title_en}/>}
                            cardDescription={<Translation pl={news.subtitle_pl} en={news.subtitle_en}/>}
                        />
                    </Grid>
                ))}
            </StandardGrid>
        </MainPageSection>
    );
}

export default NewsPage;
