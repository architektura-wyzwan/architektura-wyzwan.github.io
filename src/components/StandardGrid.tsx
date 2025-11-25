import {Grid} from "@mui/material";

export default function StandardGrid(props: { elements: React.ReactNode[] }) {
    return (<Grid container
                  rowSpacing={{
                      xs: 2,
                      md: 3,
                  }}
                  columnSpacing={2}
                  columns={{
                      xs: 1,
                      sm: 2,
                      lg: 3,
                  }}
                  direction="row"
                  sx={{
                      justifyContent: {
                          xs: "center", // For columns=1 only
                          sm: "initial",
                      }
                  }}>
        {props.elements.map((element) =>
            <Grid size={1}
                  sx={{
                      maxWidth: {
                          xs: "300px",
                          sm: "initial",
                      }
                  }}>
                {element}
            </Grid>)}
    </Grid>);
}
