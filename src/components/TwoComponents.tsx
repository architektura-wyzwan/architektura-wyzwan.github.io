import {Grid} from "@mui/material";

export type TwoComponentsProps = {
    children: React.ReactNode[],
    verticalReverse?: boolean,
    size1?: number,
    size2?: number,
    spacing?: any,
};

export default function TwoComponents(props: TwoComponentsProps) {
    const verticalReverse = props.verticalReverse ?? false;
    return <Grid container
                 direction={{
                     xs: verticalReverse ? 'column-reverse' : 'column',
                     lg: 'row',
                 }}
                 columns={{
                     xs: 1,
                     lg: (props.size1 ?? 1) + (props.size2 ?? 1),
                 }}
                 spacing={props.spacing ?? 2}
                 sx={{
                     justifyContent: "center", alignItems: "center",
                 }}
    >
        <Grid size={{
            xs: 1,
            lg: props.size1 ?? 1,
        }}>
            {props.children[0]}
        </Grid>
        <Grid size={{
            xs: 1,
            lg: props.size2 ?? 1,
        }}>
            {props.children[1]}
        </Grid>
    </Grid>
}