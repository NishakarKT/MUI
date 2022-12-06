import React from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TooltipElem = () => {
    return (
        <Box>
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete" placement="right">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete" arrow enterDelay={500} leaveDelay={1000}>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default TooltipElem;