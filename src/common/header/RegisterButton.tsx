import {Button} from "@mui/material";
import {Link} from "../Link";
import urls from "../../Urls";
import {Translation} from "../Translation";
import * as React from "react";

export default function RegisterButton() {
    return (<Link to={urls.register}>
        <Button variant="contained" disableElevation sx={(theme) => ({
            ...theme.typography.body1,
            padding: theme.spacing(1),
            textTransform: 'none',
        })}>
            <Translation pl="Zapisz się" en="Register"/>
        </Button>
    </Link>);
}
