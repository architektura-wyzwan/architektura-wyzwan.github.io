import * as React from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CardMediaProps,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";

type StandardCardProps = {
    url?: string;
    cardWidth: any;
    cardHeight?: any;
    cardTitle: any;
    cardDescription: any;
    textInCenter?: boolean;
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
            }}>
                <Box sx={{flex: 1}}>
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

                            display: "block",
                            overflow: "hidden",

                            "::before": {
                                background: "linear-gradient(to right, " + backgroundColorOpacityFull + " 0%, " + backgroundColor + " 50%)",
                                content: "'\u00A0'",
                                display: "block",
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
                </Box>
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
    return (
        <StandardCard
            cardWidth={{
                xs: "70vw",
                sm: "100%",
            }}
            cardHeight={props.cardDescription === "" ? undefined : {
                xs: "200px",
                sm: "249px",
                md: "322px",
                lg: "308px",
                xl: "332px",
            }}
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
                xs: "40vw",
                sm: "100%",
            }}
            sx={{
                borderRadius: '50%',
                aspectRatio: '1 / 1',
            }}
            {...props}
        />
    )
}
