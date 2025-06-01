import {Box, Stack, Typography} from '@mui/material';
import * as React from 'react';
import {useParams} from "react-router-dom";
import {ArticleContent} from "../data/Articles";
import NotFoundPage from "./NotFoundPage";
import {Translation} from "../common/Translation";
import PageLayout from "../common/PageLayout";
import useVertical from '../utils/UseVertical';
import {big_image} from "../common/ArticleParts";

type ArticlePageProps = {
    article?: ArticleContent,
    articleList?: ArticleContent[],
}

function ArticlePage(props: ArticlePageProps) {
    const vertical = useVertical();
    let params = useParams();
    let article: ArticleContent;
    if (props.article !== undefined) {
        article = props.article;
    } else if (props.articleList !== undefined) {
        const articleId = params.articleId as string;
        const articleNumber = parseInt(articleId);
        if (articleNumber.toString() !== articleId) {
            return <NotFoundPage/>
        }
        if (!(0 <= articleNumber && articleNumber < props.articleList.length)) {
            return <NotFoundPage/>
        }
        article = props.articleList[articleNumber];
    } else {
        return <NotFoundPage/>;
    }
    return (
        <PageLayout title_pl={article.title_pl} title_en={article.title_en} wide={false}>
            <Stack direction="column" spacing={3}>
                {article.subtitle_pl !== undefined
                    ? <Box>
                        <Typography variant="body2"
                                    sx={{
                                        textAlign: "justify",
                                        textJustify: "inter-word",
                                    }}>
                            <Translation
                                pl={article.subtitle_pl}
                                en={article.subtitle_en}/>
                        </Typography>
                    </Box>
                    : <></>
                }
                {article.image !== undefined
                    ? <Box>{big_image(article.image)(vertical)}</Box>
                    : <></>}
                <Box>{article.content.map(content => <Box sx={{mt: 3}}>{content(vertical)}</Box>)}</Box>
            </Stack>
        </PageLayout>
    )
}

export default ArticlePage;
