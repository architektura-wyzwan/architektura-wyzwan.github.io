import {Grid} from "@mui/material";

export default function StandardGrid({children}: { children?: React.ReactNode }) {
    return (<Grid container
                  spacing={{
                      xs: 2,
                      sm: 3,
                      md: 3,
                  }}
                  columns={{
                      xs: 1,
                      sm: 2,
                      md: 3,
                  }}
                  direction="row"
                  sx={{
                      mt: 4,
                  }}>
        {children}
    </Grid>);
}
