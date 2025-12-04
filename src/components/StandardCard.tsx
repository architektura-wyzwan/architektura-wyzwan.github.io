import * as React from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CardMediaProps,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { useIsXs } from "../hooks/UseDimensionHooks";

type StandardCardProps = {
    url?: string;
    cardWidth: any;
    cardMaxWidth?: any;
    cardHeight?: any;
    cardTitle: any;
    cardDescription: any;
    textInCenter?: boolean;
    hideOverflowText?: boolean;
}

type StandardSpecializedCardProps = {
    url?: string;
    cardTitle: any;
    cardDescription: any;
    textInCenter?: boolean;
}

type WrapInNavigateActionProps = {
    url: string | undefined;
    children: React.ReactNode;
}

function WrapInNavigateAction(props: WrapInNavigateActionProps) {
    let navigate = useNavigate();
    if (props.url !== undefined) {
        return (
            <CardActionArea onClick={() => {
                window.scrollTo(0, 0);
                navigate(props.url as string);
            }}>
                {props.children}
            </CardActionArea>)
    }
    return (<>{props.children}</>);
}

function StandardCard(props: StandardCardProps & CardMediaProps) {
    const textInCenter = props.textInCenter !== undefined ? props.textInCenter : false;
    return <WrapInNavigateAction url={props.url}>
        <Card
            elevation={0}
            sx={{
                boxShadow: "none",
                minWidth: props.cardWidth,
                height: props.cardHeight !== undefined ? props.cardHeight : "initial",
                backgroundColor: "transparent",
            }}
        >
            <CardMedia
                component="img"
                image={props.image}
                sx={{
                    width: props.cardWidth,
                    ...props.sx
                }}
            />
            <CardContent sx={{
                display: "flex",
                justifyContent: textInCenter ? "center" : "initial",
                alignItems: textInCenter ? "center" : "initial",
                flexDirection: "column",
                width: props.cardWidth,
            }}>
                    <Typography gutterBottom variant="cardTitle" component="div"
                                sx={{textAlign: textInCenter ? "center" : "initial"}}>
                        {props.cardTitle}
                    </Typography>
                    <Typography variant="body2" component="div" sx={(theme) => {
                        const backgroundColor = theme.palette.background.default;
                        const backgroundColorOpacityFull = "color-mix(in srgb, " + backgroundColor + ", transparent 100%)";
                        return {
                            textAlign: textInCenter ? "center" : "justify",
                            textJustify: textInCenter ? "initial" : "inter-word",
                            textWrap: textInCenter ? "balance" : "initial",

                            display: "block",
                            width: "100%",
                            // overflow: "hidden",

                            "::before": {
                                background: "linear-gradient(to right, " + backgroundColorOpacityFull + " 0%, " + backgroundColor + " 50%)",
                                content: "'\u00A0'",
                                display: props.hideOverflowText ? "block" : "none",
                                position: "absolute",
                                right: 0,
                                bottom: 0,
                                width: "25%",
                                textAlign: "center",
                            },
                        }
                    }}>
                        {props.cardDescription}
                    </Typography>
            </CardContent>
        </Card>
    </WrapInNavigateAction>;
}

// This is a component defining a "standard" rectangle grid with a rectangular image, a title and a description.
// This component is used to display a short description of an article, a publication, etc.
// Width is derived from a parent component (StandardGrid), and height is set constant to display up to 5 lines of
// description and then fade-away any leftover text.
//
// aspectRatio defines the aspect ratio of the displayed image.
//
// If there is any clipping at the end of the description, change the cardHeight value by a couple pixels.
// To change the number of lines displayed at a certain screen width, also adjust the cardHeight value carefully.
export function StandardRectangleCard(props: StandardSpecializedCardProps & CardMediaProps) {
    const isXs = useIsXs();
    return (
        <StandardCard
            cardWidth={{
                xs: "100%",
            }}
            cardHeight={props.cardDescription === "" ? undefined : {
                xs: "initial",
                sm: "249px",
                md: "322px",
                lg: "308px",
                xl: "332px",
            }}
            hideOverflowText={!isXs}
            sx={{
                aspectRatio: '16 / 9',
            }}
            {...props}
        />
    )
}

export function StandardCircleCard(props: StandardSpecializedCardProps & CardMediaProps) {
    return (
        <StandardCard
            cardWidth={{
                xs: "100%",
            }}
            sx={{
                borderRadius: '50%',
                aspectRatio: '1 / 1',
            }}
            hideOverflowText={false}
            {...props}
        />
    )
}
