import * as React from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, CardMediaProps, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import useVertical from "../utils/UseVertical";

type StandardCardProps = {
    url?: string;
    cardWidth: any;
    cardImageHeight: any;
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
                backgroundColor: "transparent",
            }}
        >
            <Box>
                <CardMedia
                    component="img"
                    image={props.image}
                    sx={{
                        height: props.cardImageHeight,
                        ...props.sx
                    }}
                />
            </Box>
            <CardContent>
                <Box display="flex" justifyContent={textInCenter ? "center" : "initial"} alignItems={textInCenter ? "center" : "initial"} flexDirection="column">
                    <Typography gutterBottom variant="cardTitle" component="div" sx={{textAlign: textInCenter ? "center" : "initial"}}>
                        {props.cardTitle}
                    </Typography>
                    <Typography variant="body2" sx={{textAlign: textInCenter ? "center" : "initial"}}>
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
            cardImageHeight={{
                xs: "35vw",
                sm: "20vw",
                md: "15vw",
            }}
            sx={{
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
            cardImageHeight={{}}
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
