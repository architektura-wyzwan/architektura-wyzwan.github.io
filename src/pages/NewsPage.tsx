import * as React from "react";
import {Translation} from "../components/Translation";
import {StandardRectangleCard} from "../components/StandardCard";
import {articles} from "../data/Articles";
import StandardGrid from "../components/StandardGrid";
import ArticleLayout from "../layout/ArticleLayout";
import urls from "../Urls";

function NewsPage() {
    return (
        <ArticleLayout title_pl="Aktualności" title_en="News" wide={true}>
            <StandardGrid elements={
                articles.map((news, index) => (
                    <StandardRectangleCard
                        url={urls.article(index)}
                        image={news.image}
                        cardTitle={<Translation pl={news.title_pl} en={news.title_en}/>}
                        cardDescription={<Translation pl={news.subtitle_pl} en={news.subtitle_en}/>}
                    />
                ))}/>
        </ArticleLayout>
    );
}

export default NewsPage;
