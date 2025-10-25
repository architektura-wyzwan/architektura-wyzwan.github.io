import {Translation} from "../components/Translation";
import {Grid} from "@mui/material";
import * as React from "react";
import {Speaker} from "../data/Speakers";
import {StandardCircleCard} from "../components/StandardCard";

export function speakers_grid(items: Speaker[], wide: boolean = false) {
    return (vertical: boolean) => {
        return <Grid container
                     spacing={{
                         xs: 2,
                         md: 4,
                     }}
                     columns={{
                         xs: 2,
                         sm: vertical ? 3 : (wide ? 4 : 2),
                         md: (wide ? 5 : 3),
                         lg: (wide ? 6 : 4),
                     }}
                     direction="row"
                     sx={{
                         justifyContent: "center",
                     }}
        >
            {items.map((speaker, _) => (
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
}
