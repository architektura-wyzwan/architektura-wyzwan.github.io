import * as React from "react";
import {Grid} from "@mui/material";
import ImageCard from "./ImageCard";
import useVertical from "../hooks/UseVertical";

export default function TwoImages(props: {src_1: string, src_2: string}) {
    const vertical = useVertical();
    return <Grid container columns={2}
                 spacing={2}
                 sx={{
                     justifyContent: "center",
                     alignItems: "flex-start",
                 }}>
        <Grid size={1}>
            <ImageCard sx={{
                height: vertical ? '40vw' : '30vw',
                minWidth: vertical ? '40vw' : '30vw',
            }} src={props.src_1}/>
        </Grid>
        <Grid size={1}>
            <ImageCard sx={{
                height: vertical ? '40vw' : '30vw',
                minWidth: vertical ? '40vw' : '30vw',
            }} src={props.src_2}/>
        </Grid>
    </Grid>
}