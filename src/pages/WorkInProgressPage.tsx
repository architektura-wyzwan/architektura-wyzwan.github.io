import {Box, Stack, Typography} from '@mui/material';
import * as React from 'react';
import {Translation} from "../common/Translation";
import SettingsIcon from '@mui/icons-material/Settings';

function WorkInProgressPage() {
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
                <SettingsIcon
                    sx={{
                        animation: "spin 3s linear infinite",
                        "@keyframes spin": {
                            "0%": {
                                transform: "rotate(0deg)",
                            },
                            "100%": {
                                transform: "rotate(360deg)",
                            },
                        },
                        width: '10vmin',
                        height: '10vmin',
                    }}
                />
                <Box>
                    <Typography variant="h2" sx={{mb: "1rem"}}>
                        <Translation pl="Prace w toku..." en="Coming soon..."/>
                    </Typography>
                    <Typography variant="h6">
                        <Translation pl="Tu jeszcze nic nie ma, ale dzielnie pracujemy, żeby to zmienić." en="There's nothing here yet, but we're working hard to change that."/>
                    </Typography>
                </Box>
            </Stack>
        </div>
    )
}

export default WorkInProgressPage;
