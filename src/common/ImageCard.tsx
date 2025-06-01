import {Card, CardMedia, CardMediaProps} from "@mui/material";
import * as React from "react";

type ImageCardProps = {
	cropTop?: string;
	cropBottom?: string;
	cropLeft?: string;
	cropRight?: string;
	borderRadius?: number;
}

function ImageCard(props: ImageCardProps & CardMediaProps) {
	const cropTop = props.cropTop === undefined ? 0 : props.cropTop;
	const cropBottom = props.cropBottom === undefined ? 0 : props.cropBottom;
	const cropLeft = props.cropLeft === undefined ? 0 : props.cropLeft;
	const cropRight = props.cropRight === undefined ? 0 : props.cropRight;
	return (<Card
		elevation={0}
		sx={{
			backgroundColor: "transparent",
			borderRadius: props.borderRadius !== undefined ? props.borderRadius : "3",
		}}
	>
		<CardMedia
			component="img"
			sx={{
				mt: "-" + cropTop,
				mb: "-" + cropBottom,
				ml: "-" + cropLeft,
				mr: "-" + cropRight,
			}}
			{...(props as CardMediaProps)}
		/>
	</Card>);
}

export default ImageCard;
