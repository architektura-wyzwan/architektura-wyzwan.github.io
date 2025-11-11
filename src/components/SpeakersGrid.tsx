import {Speaker} from "../data/Speakers";
import {Grid} from "@mui/material";
import {StandardCircleCard} from "./StandardCard";
import {Translation} from "./Translation";
import * as React from "react";
import useVertical from "../hooks/UseVertical";

export type SpeakersGridProps = {
    items: Speaker[],
    wide?: boolean,
}

export function SpeakersGrid(props: SpeakersGridProps) {
    const wide = props.wide ?? false;
    const vertical = useVertical();
    return <Grid container
                 spacing={{
                     xs: 2,
                     md: 4,
                 }}
                 columns={{
                     xs: 2,
                     sm: vertical ? 3 : (wide ? 3 : 2),
                     md: (wide ? 3 : 3),
                     lg: (wide ? 4 : 4),
                 }}
                 direction="row"
                 sx={{
                     justifyContent: "center",
                 }}
    >
        {props.items.map((speaker) => (
            <Grid size={1}>
                <StandardCircleCard
                    image={speaker.image}
                    textInCenter={true}
                    cardTitle={speaker.name}
                    cardDescription={<Translation pl={speaker.description_pl} en={speaker.description_en}/>}
                />
            </Grid>
        ))}
    </Grid>
}

export function SpeakersGrid2(props: SpeakersGridProps) {
    const wide = props.wide ?? false;
    const vertical = useVertical();
    return <Grid container
                 spacing={{
                     xs: 2,
                     md: 4,
                 }}
                 columns={{
                     xs: 2,
                     sm: vertical ? 3 : (wide ? 3 : 2),
                     md: (wide ? 3 : 3),
                     lg: (wide ? 4 : 4),
                 }}
                 direction="row"
                 sx={{
                     justifyContent: "flex-start",
                 }}
    >
        {props.items.map((speaker) => (
            <Grid size={1}>
                <StandardCircleCard
                    image={speaker.image}
                    textInCenter={true}
                    cardTitle={speaker.name}
                    cardDescription={<Translation pl={speaker.description_pl} en={speaker.description_en}/>}
                />
            </Grid>
        ))}
    </Grid>
}