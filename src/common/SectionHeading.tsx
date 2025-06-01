import * as React from "react";
import {Typography} from "@mui/material";

export default function SectionHeading({children}: { children: React.ReactNode }) {
    return (
        <Typography variant="h3"
                    display={{
                        xs: "flex",
                        sm: "normal",
                    }}
                    justifyContent={{
                        xs: "center",
                        sm: "normal",
                    }}
                    alignItems={{
                        xs: "center",
                        sm: "normal",
                    }}
                    sx={{
                        ml: {
                            xs: 0,
                            sm: 8,
                        },
                        mb: 4
                    }}
        >
            {children}
        </Typography>
    )
}
