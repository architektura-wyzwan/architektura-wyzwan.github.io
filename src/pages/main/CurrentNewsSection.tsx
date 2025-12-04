import * as React from "react";
import {Translation} from "../../components/Translation";
import {StandardRectangleCard} from "../../components/StandardCard";
import {articles} from "../../data/Articles";
import StandardGrid from "../../components/StandardGrid";
import MainPageSection from "./MainPageSection";
import {Carousel} from "../../components/Carousel";

function CurrentNewsSection() {
    const numberOfNews = Math.min(articles.length, 3);
    const news = articles.slice(0, numberOfNews);
    return (
        <MainPageSection title_pl="AKTUALNOŚCI" title_en="NEWS">
            {/*<Carousel*/}
            {/*    hideButtons={false}*/}
            {/*    space={17}*/}
            {/*    numberOfSlides={{*/}
            {/*        xs: 1,*/}
            {/*        sm: 2,*/}
            {/*        md: 2,*/}
            {/*        lg: 3,*/}
            {/*        xl: 3,*/}
            {/*    }}*/}
            {/*    nodeList={*/}
            {/*        news.map((news, index) =>*/}
            {/*            <StandardRectangleCard*/}
            {/*                url={"/article/" + (index)}*/}
            {/*                image={news.image}*/}
            {/*                cardTitle={<Translation pl={news.title_pl} en={news.title_en}/>}*/}
            {/*                cardDescription={<Translation pl={news.subtitle_pl} en={news.subtitle_en}/>}*/}
            {/*            />*/}
            {/*        )*/}
            {/*    }*/}
            {/*/>*/}
            <StandardGrid elements={news.map((news, index) => (
                <StandardRectangleCard
                    url={"/article/" + (index)}
                    image={news.image}
                    cardTitle={<Translation pl={news.title_pl} en={news.title_en}/>}
                    cardDescription={<Translation pl={news.subtitle_pl} en={news.subtitle_en}/>}
                />
            ))}/>
        </MainPageSection>
    );
}

export default CurrentNewsSection;
