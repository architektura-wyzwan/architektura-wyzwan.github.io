import * as React from "react";
import {speakers} from "../../data/Speakers";
import MainPageSection from "./MainPageSection";
import {SpeakersGrid} from "../../components/SpeakersGrid";

export default function SpeakersSection() {
    return (
        <MainPageSection title_pl="PRELEGENCI" title_en="SPEAKERS" wide={true}>
            <SpeakersGrid items={speakers} wide={true}/>
        </MainPageSection>
    );
}
