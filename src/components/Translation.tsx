import * as React from "react";
import {useLanguage} from "../hooks/UseLanguage";
import {Typography} from "@mui/material";

export type TranslationProps = {
	pl: any;
	en: any;
	variant?: TypographyVariant;
}

export type TypographyVariant =
	'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'body1'
	| 'body2'
	| 'caption'
	| 'button'
	| 'overline'
	| 'inherit'
	| 'very_bold'
	| 'bold'
	| 'bolder'
	| 'regular'
	| 'lighter'
	| 'light'
	| 'very_light'
	| 'cardTitle';
export function Translation(props: TranslationProps) {
	const language = useLanguage();
	const translation = <>{language === "pl" ? props.pl : props.en}</>
	if (props.variant === undefined) {
		return translation;
	}
	return (
		<Typography
			variant={props.variant as TypographyVariant}>
			{translation}
		</Typography>
	)
}
