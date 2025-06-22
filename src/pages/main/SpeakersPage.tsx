import * as React from "react";
import {Grid} from "@mui/material";
import {StandardCircleCard} from "../../common/StandardCard";
import {Translation} from "../../common/Translation";
import {speakers} from "../../data/Speakers";
import MainPageSection from "./MainPageSection";
import useVertical from "../../utils/UseVertical";

export default function SpeakersPage() {
    const vertical = useVertical();
    return (
        <MainPageSection title_pl="PRELEGENCI" title_en="SPEAKERS" wide={true}>
            <Grid container
                  spacing={{
                      xs: 2,
                      md: 4,
                  }}
                  columns={{
                      xs: 2,
                      sm: vertical ? 3 : 4,
                      md: 5,
                      lg: 6,
                  }}
                  direction="row"
                  sx={{
                      justifyContent: "center",
                  }}
            >
                {speakers.map((speaker, _) => (
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
        </MainPageSection>
    );
}
