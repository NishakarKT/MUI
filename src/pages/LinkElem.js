import React from "react";
import { Stack, Link, Typography } from "@mui/material";

const LinkElem = () => {
    return (
        <Stack spacing={2} direction="row">
            <Link href="#">Link</Link>
            <Link href="#" color="secondary">Link</Link>
            <Link href="#" underline="hover">Link</Link>
            <Link href="#" underline="none">Link</Link>
            {/* variant = <a></a> by default */}
            <Link variant="h6">Link</Link>
            <Typography variant="h6">
                <Link variant="inherit">Link</Link> {/* variant is inherited if not specified from the wrapper */}
            </Typography>
        </Stack>
    );
};

export default LinkElem;