import React, { useState } from "react";
import { Button, Box, Drawer, Typography } from "@mui/material";

const DrawerElem = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Button onClick={() => setOpen(true)}>Open</Button>
            <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
                <Box p={2} bgcolor="yellow" role="presentation">
                    <Typography variant="h6">Hello</Typography>
                    <Typography variant="body2">Hello There</Typography>
                </Box>
            </Drawer>
        </Box>
    );
};

export default DrawerElem;