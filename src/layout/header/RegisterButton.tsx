import {Button} from "@mui/material";
import {Link} from "../../components/Link";
import urls from "../../Urls";
import {Translation} from "../../components/Translation";
import * as React from "react";

export default function RegisterButton() {
    return (<Link to={urls.register}>
        <Button variant="contained" disableElevation sx={(theme) => ({
            ...theme.typography.body1,
            backgroundColor: theme.palette.primary.dark,
            fontSize: {
                xs: '0.75rem',
                sm: '1rem',
            },
            lineHeight: 1.5,
            padding: theme.spacing(1),
            textTransform: 'none',
        })}>
            <Translation pl="Zapisz się" en="Register"/>
        </Button>
    </Link>);
}
