import ImageCard from "../../components/ImageCard";
import * as React from "react";
// import useVertical from "../../hooks/UseVertical";

export default function BigImage(props: {src: string}) {
    // const vertical = useVertical();
    return <><ImageCard
        // sx={crop ? {maxHeight: vertical ? '40vw' : '30vw'} : {}}
        src={props.src}/>
        {/*{image_label(vertical, label)}*/}
    </>;
}