import * as React from "react";
import {speakers} from "../../data/Speakers";
import MainPageSection from "./MainPageSection";
import useVertical from "../../utils/UseVertical";
import {speakers_grid} from "../../common/ArticleParts";

export default function SpeakersPage() {
    const vertical = useVertical();
    return (
        <MainPageSection title_pl="PRELEGENCI" title_en="SPEAKERS" wide={true}>
            {speakers_grid(speakers, true)(vertical)}
        </MainPageSection>
    );
}
