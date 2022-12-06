import React from "react";
import { Box, Stack, CircularProgress, LinearProgress } from "@mui/material";

const ProgressElem = () => {
    return (
        <Box p={2}>
            <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <CircularProgress />
                    <CircularProgress variant="determinate" value={60} />
                </Stack>
                <LinearProgress />
                <LinearProgress variant="determinate" value={50} />
            </Stack>
        </Box>
    );
};

export default ProgressElem;