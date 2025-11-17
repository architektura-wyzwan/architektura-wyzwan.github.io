import * as React from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CardMediaProps,
    PaletteColor,
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

export function StandardCard(props: StandardCardProps & CardMediaProps) {
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
                        const textColor = theme.typography.body2.color;
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

export function StandardRectangleCard(props: StandardSpecializedCardProps & CardMediaProps) {
    return (
        <StandardCard
            cardWidth={{
                xs: "70vw",
                sm: "100%",
            }}
            cardHeight={{
                xs: "40vw",
                xl: "310px",
            }}
            sx={{
                aspectRatio: '16 / 9',
                width: {
                    xs: "70vw",
                    sm: "100%",
                },
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
                width: {
                    xs: "40vw",
                    sm: "100%",
                },
            }}
            {...props}
        />
    )
}
