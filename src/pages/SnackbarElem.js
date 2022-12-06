import React, { useState } from "react";
import { Box, Snackbar, Button, Alert } from "@mui/material";

const SnackbarElem = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Button onClick={() => setOpen(true)}>Open</Button>
            <Snackbar message="Clicked" autoHideDuration={5000} open={open} onClose={() => setOpen(false)} />
            <Snackbar message="Clicked" autoHideDuration={5000} open={open} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} />
            <Snackbar message="Clicked" autoHideDuration={5000} open={open} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} />
            <Snackbar message="Clicked" autoHideDuration={5000} open={open} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "center", horizontal: "left" }} />
            <Snackbar message="Clicked" autoHideDuration={5000} open={open} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "center", horizontal: "center" }} />
            <Snackbar message="Clicked" autoHideDuration={5000} open={open} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "center", horizontal: "right" }} />
            <Snackbar message="Clicked" autoHideDuration={5000} open={open} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "top", horizontal: "left" }} />
            <Snackbar message="Clicked" autoHideDuration={5000} open={open} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }} />
            <Snackbar message="Clicked" autoHideDuration={5000} open={open} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default SnackbarElem;