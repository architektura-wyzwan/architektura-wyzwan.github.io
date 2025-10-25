import {Box, Stack, Typography} from "@mui/material";
import * as React from "react";
import PageLayout from "./PageLayout";
import {Translation} from "../components/Translation";
import {useLanguage} from "../hooks/UseLanguage";
import BigImage from "./article/BigImage";

export type ArticleMetadata = {
    title_pl: string;
    title_en: string;
    subtitle_pl?: string;
    subtitle_en?: string;
    image?: string; // Can be unset only for articles without miniatures (like About, or previous editions). All news must have this set
    content: (() => React.JSX.Element)
}

function Subtitle(props: { subtitle_pl: string | undefined, subtitle_en: string | undefined }) {
    const language = useLanguage();
    if ((language === "pl" && props.subtitle_pl === undefined) ||
        (language === "en" && props.subtitle_en === undefined)) {
        return <></>;
    }
    return (<Box>
        <Typography variant="body2"
                    sx={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                    }}>
            <Translation
                pl={props.subtitle_pl}
                en={props.subtitle_en}/>
        </Typography>
    </Box>);
}

function CoverImage(props: { image: string | undefined }) {
    if (props.image === undefined) {
        return <></>;
    }
    return <BigImage src={props.image}/>
}

export function Article(props: {article: ArticleMetadata}) {
    let metadata = props.article;
    return (
        <PageLayout title_pl={metadata.title_pl} title_en={metadata.title_en} wide={false}>
            <Stack direction="column" spacing={3}>
                <Subtitle subtitle_pl={metadata.subtitle_pl} subtitle_en={metadata.subtitle_en}/>
                <CoverImage image={metadata.image}/>
                {metadata.content()}
            </Stack>
        </PageLayout>
    )
}