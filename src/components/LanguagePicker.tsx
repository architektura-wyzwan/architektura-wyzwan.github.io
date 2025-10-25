import {setLanguage, useLanguage} from "../hooks/UseLanguage";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import * as React from "react";

export default function LanguagePicker() {
    const language = useLanguage();
    return (
        <Select
            labelId="language-select-label"
            id="language-simple-select"
            value={language}
            label="Language"
            onChange={(event: SelectChangeEvent) => {
                setLanguage(event.target.value as string);
            }}
        >
            <MenuItem value={"pl"}>PL</MenuItem>
            <MenuItem value={"en"}>EN</MenuItem>
        </Select>
    )
}
