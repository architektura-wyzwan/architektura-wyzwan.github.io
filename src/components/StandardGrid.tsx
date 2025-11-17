import {Grid} from "@mui/material";

export default function StandardGrid(props: { elements: React.ReactNode[] }) {
    return (<Grid container
                  spacing={{
                      xs: 2,
                      md: 3,
                  }}
                  columns={{
                      xs: 1,
                      sm: 2,
                      lg: 3,
                  }}
                  direction="row"
                  sx={{
                      mt: 4,
                  }}>
        {props.elements.map((element) => <Grid size={1}>{element}</Grid>)}
    </Grid>);
}
