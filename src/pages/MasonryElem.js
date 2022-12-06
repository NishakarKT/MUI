import React from "react";
import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";

const heights = [100, 130, 70, 150, 200, 50, 70, 250, 150, 40];

// Optimizes space => used in image gallery

const MasonryElem = () => {
    return (
        <Box p={2}>
            <Masonry>
                {heights.map((height, index) => <Box sx={{ height }} bgcolor="yellow" key={index}>{index + 1}</Box>)}
            </Masonry>
        </Box>
    );
};

export default MasonryElem;