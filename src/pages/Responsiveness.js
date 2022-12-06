import React from "react";
import { Box } from "@mui/system";

const Responsiveness = () => {
    return (
        <Box>
            <Box sx={{
                backgroundColor: "red",
                height: 200,
                width: {
                    xs: 200,
                    sm: 400,
                    md: 600,
                    lg: 800,
                    xl: 1000
                }
            }}></Box>
        </Box>
    );
};

export default Responsiveness;