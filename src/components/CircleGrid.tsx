import {Speaker} from "../data/Speakers";
import {Grid} from "@mui/material";
import {StandardCircleCard} from "./StandardCard";
import {Translation} from "./Translation";
import * as React from "react";

export type SpeakersGridProps = {
    items: Speaker[],
    centered?: boolean,
}

export function CircleGrid(props: SpeakersGridProps) {
    const centered = props.centered ?? false;
    return <Grid container
                 spacing={{
                     xs: 2,
                     md: 4,
                 }}
                 columns={{
                     xs: 1,
                     sm: 2,
                     md: 3,
                     lg: 4,
                 }}
                 direction="row"
                 sx={{
                     justifyContent: {
                         xs: "center", // Override for column=1 only
                         sm: centered ? "center" : "flex-start"
                     },
                 }}
    >
        {props.items.map((speaker) => (
            <Grid size={1}
                  sx={{
                      maxWidth: {
                          xs: "200px",
                          md: "initial",
                      },
                      minWidth: {
                          xs: "initial",
                          // md: "240px",
                      }
                  }}
            >
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
