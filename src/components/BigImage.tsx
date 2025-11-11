import ImageCard from "./ImageCard";
import * as React from "react";

export default function BigImage(props: { src: string }) {
    return <ImageCard src={props.src}/>;
}