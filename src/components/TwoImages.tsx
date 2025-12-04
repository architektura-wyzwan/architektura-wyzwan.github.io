import * as React from "react";
import ImageCard from "./ImageCard";
import TwoComponents from "./TwoComponents";

export default function TwoImages(props: { src_1: string, src_2: string }) {
    return <TwoComponents>
        <ImageCard src={props.src_1}/>
        <ImageCard src={props.src_2}/>
    </TwoComponents>
}