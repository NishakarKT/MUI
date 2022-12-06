import React from "react";
import { Box, Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const BadgeElem = () => {
    return (
        <Box p={4}>
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <Badge badgeContent={0}><MailIcon /></Badge>
                <Badge badgeContent={0} showZero><MailIcon /></Badge>
                <Badge badgeContent={5}><MailIcon /></Badge>
                <Badge badgeContent={5} color="primary"><MailIcon /></Badge>
                <Badge badgeContent={5} color="secondary"><MailIcon /></Badge>
                <Badge badgeContent={5} color="warning"><MailIcon /></Badge>
                <Badge badgeContent={5} color="info"><MailIcon /></Badge>
                <Badge badgeContent={5} color="error"><MailIcon /></Badge>
                <Badge badgeContent={5} color="success"><MailIcon /></Badge>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Badge badgeContent={100} color="error"><MailIcon /></Badge>
                <Badge badgeContent={100} color="error" max={999}><MailIcon /></Badge>
                <Badge badgeContent={1000} color="error" max={999}><MailIcon /></Badge>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Badge variant="dot" color="error"><MailIcon /></Badge>
                <Badge variant="dot" color="error" invisible><MailIcon /></Badge>
            </Stack>
        </Stack>
        </Box>
    );
};

export default BadgeElem;