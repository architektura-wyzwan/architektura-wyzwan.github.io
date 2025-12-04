import * as React from "react";
import {speakers} from "../../data/Speakers";
import MainPageSection from "./MainPageSection";
import {CircleGrid} from "../../components/CircleGrid";

export default function SpeakersSection() {
    return (
        <MainPageSection title_pl="PRELEGENCI" title_en="SPEAKERS" wide={true}>
            <CircleGrid items={speakers} centered={true}/>
        </MainPageSection>
    );
}
