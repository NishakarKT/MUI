import React from "react";
import { Box, Stack, Avatar, AvatarGroup } from "@mui/material";

const AvatarElem = () => {
    return (
        <Box>
            <Stack>
                <AvatarGroup>
                    <Avatar sx={{ backgroundColor: "primary.light" }}>BW</Avatar>
                    <Avatar sx={{ backgroundColor: "secondary.light" }}>BW</Avatar>
                    <Avatar src="" alt="default">BW</Avatar>
                    <Avatar src="" alt="default"></Avatar>
                    <Avatar src="https://images.unsplash.com/photo-1670253302160-97eb5eaf4a92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="person">BW</Avatar>
                </AvatarGroup>
                <AvatarGroup max={3}>
                    <Avatar variant="square" sx={{ backgroundColor: "primary.light" }}>BW</Avatar>
                    <Avatar variant="rounded" sx={{ backgroundColor: "secondary.light" }}>BW</Avatar>
                    <Avatar src="" alt="default">BW</Avatar>
                    <Avatar src="" alt="default"></Avatar>
                    <Avatar src="https://images.unsplash.com/photo-1670253302160-97eb5eaf4a92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="person">BW</Avatar>
                </AvatarGroup>
            </Stack>
        </Box>
    );
};

export default AvatarElem;