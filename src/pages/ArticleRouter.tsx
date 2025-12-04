import * as React from 'react';
import {useParams} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import {Article, ArticleMetadata} from "../layout/Article";

type ArticlePageProps = {
    articleList: ArticleMetadata[],
}

function ArticleRouter(props: ArticlePageProps) {
    let params = useParams();
    const articleId = params.articleId as string;
    const articleNumber = parseInt(articleId);
    if (articleNumber.toString() !== articleId) {
        return <NotFoundPage/>
    }
    if (!(0 <= articleNumber && articleNumber < props.articleList.length)) {
        return <NotFoundPage/>
    }
    return (
        <Article article={props.articleList[articleNumber]}/>
    )
}

export default ArticleRouter;
