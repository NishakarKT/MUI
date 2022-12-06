import React from "react";
import { Box, Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const AlertElem = () => {
    return (
        <Box p={2}>
            <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <Alert severity="error">This is an Error Alert</Alert>
                    <Alert severity="warning">This is a Warning Alert</Alert>
                    <Alert severity="info">This is an Info Alert</Alert>
                    <Alert severity="success">This is a Success Alert</Alert>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Alert variant="outlined" severity="error">This is an Error Alert</Alert>
                    <Alert variant="outlined" severity="warning">This is a Warning Alert</Alert>
                    <Alert variant="outlined" severity="info">This is an Info Alert</Alert>
                    <Alert variant="outlined" severity="success">This is a Success Alert</Alert>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Alert variant="filled" severity="error"><AlertTitle>Title</AlertTitle>This is an Error Alert</Alert>
                    <Alert variant="filled" severity="warning"><AlertTitle>Title</AlertTitle>This is a Warning Alert</Alert>
                    <Alert variant="filled" severity="info"><AlertTitle>Title</AlertTitle>This is an Info Alert</Alert>
                    <Alert variant="filled" severity="success"><AlertTitle>Title</AlertTitle>This is a Success Alert</Alert>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Alert variant="outlined" icon={<CheckIcon />} severity="error">This is an Error Alert</Alert>
                    <Alert variant="outlined" icon={<CheckIcon />} severity="warning">This is a Warning Alert</Alert>
                    <Alert variant="outlined" icon={<CheckIcon />} severity="info">This is an Info Alert</Alert>
                    <Alert variant="outlined" icon={<CheckIcon />} severity="success">This is a Success Alert</Alert>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Alert onClose={() => alert("Closed!")} severity="error">This is an Error Alert</Alert>
                    <Alert onClose={() => alert("Closed!")} severity="warning">This is a Warning Alert</Alert>
                    <Alert onClose={() => alert("Closed!")} severity="info">This is an Info Alert</Alert>
                    <Alert onClose={() => alert("Closed!")} severity="success">This is a Success Alert</Alert>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Alert action={<Button variant="contained">Close</Button>} severity="error">This is an Error Alert</Alert>
                    <Alert action={<Button variant="contained">Close</Button>} severity="warning">This is a Warning Alert</Alert>
                    <Alert action={<Button variant="contained">Close</Button>} severity="info">This is an Info Alert</Alert>
                    <Alert action={<Button variant="contained">Close</Button>} severity="success">This is a Success Alert</Alert>
                </Stack>
            </Stack>
        </Box>
    );
};

export default AlertElem;