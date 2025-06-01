import * as React from "react";
import {Box, Grid} from "@mui/material";
import {StandardCircleCard} from "../../common/StandardCard";
import {Translation} from "../../common/Translation";
import {speakers} from "../../data/Speakers";
import SectionHeading from "../../common/SectionHeading";

export default function SpeakersPage() {
    return (
        <Box>
            <Box sx={{
                pl: {
                    xs: '15%',
                    sm: '10%',
                    lg: '12.5%',
                },
                pr: {
                    xs: '15%',
                    sm: '10%',
                    lg: '12.5%',
                },
            }}>
                <SectionHeading>
                    <Translation pl="PRELEGENCI" en="SPEAKERS"/>
                </SectionHeading>
            </Box>
            <Grid container
                  spacing={{
                      xs: 2,
                      md: 4,
                  }}
                  direction="row"
                  sx={{
                      justifyContent: "center",
                  }}
            >
                {speakers.map((speaker, _) => (
                    <Grid>
                        <StandardCircleCard
                            image={speaker.image}
                            textInCenter={true}
                            cardTitle={speaker.name}
                            cardDescription={<Translation pl={speaker.description_pl} en={speaker.description_en}/>}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
