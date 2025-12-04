import * as React from "react";
import {Translation} from "../../components/Translation";
import SectionHeading from "../../components/SectionHeading";
import Layout from "../../layout/Layout";

export type MainPageSectionProps = {
    children: React.ReactNode | React.ReactNode[],
    title_pl: string,
    title_en: string,
    wide?: boolean,
}

export default function MainPageSection(props: MainPageSectionProps) {
    return (
        <Layout>
            <SectionHeading>
                <Translation pl={props.title_pl} en={props.title_en}/>
            </SectionHeading>
            {props.children}
        </Layout>);
}