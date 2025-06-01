import * as React from "react";
import {createContext, useContext, useState} from "react";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";

const LanguageContext = createContext("pl");
let languageSetter: React.Dispatch<React.SetStateAction<string>>;

type TranslationProps = {
	pl: any;
	en: any;
}

function Translation(props: TranslationProps) {
	const language = useContext(LanguageContext);
	return (
		<>{language === "pl" ? props.pl : props.en}</>
	)
}

function LanguagePicker() {
	const language = useContext(LanguageContext);
	return (
		<Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			value={language}
			label="Language"
			onChange={(event: SelectChangeEvent) => {
				languageSetter(event.target.value as string);
			}}
		>
			<MenuItem value={"pl"}>PL</MenuItem>
			<MenuItem value={"en"}>EN</MenuItem>
		</Select>
	)
}

type LanguageContextProviderProps = {
	children: React.ReactNode;
}

function LanguageContextProvider(props: LanguageContextProviderProps) {
	let browser_language = navigator.language;
	if (browser_language !== "pl" && browser_language !== "en") {
		browser_language = "en"
	}
	const [language, setLanguage] = useState<string>(browser_language);
	languageSetter = setLanguage;
	return (
		<LanguageContext.Provider value={language}>
			{props.children}
		</LanguageContext.Provider>);
}

export {Translation, LanguagePicker, LanguageContext, LanguageContextProvider};
