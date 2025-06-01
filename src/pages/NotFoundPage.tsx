import {Stack, Typography} from '@mui/material';
import * as React from 'react';
import {Translation} from "../common/Translation";

function NotFoundPage() {
    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Typography variant="h1" sx={{mb: "1rem"}}>
                    404
                </Typography>
                <Typography variant="h3" sx={{mb: "1rem"}}>
                    <Translation pl="Strona nie istnieje" en="Page not found"/>
                </Typography>
            </Stack>
        </div>
    )
}

export default NotFoundPage;
