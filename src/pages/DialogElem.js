import React, { useState } from "react";
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

const DialogElem = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Button onClick={() => setOpen(true)}>Delete</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Delete Item</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you wish to delete this item?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => setOpen(false)}>Yes</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default DialogElem;