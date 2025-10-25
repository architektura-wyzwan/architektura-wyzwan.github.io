import {Stack, Typography} from '@mui/material';
import * as React from 'react';
import {Translation} from "../components/Translation";

function NotFoundPage() {
    return (
        <div
            style={{
                position: 'relative',
                left: '50vw',
                transform: 'translate(-50%, -50%)',
                marginTop: '40vh',
                marginBottom: '30vh',
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
