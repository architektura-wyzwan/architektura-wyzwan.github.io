import * as React from "react";
import {createContext, useContext, useState} from "react";

const LanguageContext = createContext("pl");
let languageSetter: React.Dispatch<React.SetStateAction<string>>;

export type LanguageContextProviderProps = {
    children: React.ReactNode;
}

export function LanguageContextProvider(props: LanguageContextProviderProps) {
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

export function useLanguage() {
    return useContext(LanguageContext);
}

export function setLanguage(language: string) {
    languageSetter(language);
}
