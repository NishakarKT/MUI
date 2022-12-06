import React from "react";
import { Box, Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const ChipElem = () => {
    return (
        <Box>
            <Stack direction="row" spacing={1}>
                <Chip label="HTML" />
                <Chip size="small" label="CSS" />
                <Chip color="primary" label="JS" />
                <Chip variant="outlined" label="TS" />
                <Chip icon={<FaceIcon />} label="TS" />
                <Chip label="TS" avatar={<Avatar src="https://images.unsplash.com/photo-1670264736611-7d9866f51c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" />} />
                <Chip label="Add" onClick={() => alert("Clicked")} />
                <Chip label="Delete" color="error" onClick={() => alert("Clicked")} onDelete={() => alert("Deleted")} />
            </Stack>
        </Box>
    );
};

// used for filter

export default ChipElem;