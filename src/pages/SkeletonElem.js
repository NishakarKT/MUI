import React, { useState, useEffect } from "react";
import { Stack, Skeleton, Box, Avatar } from "@mui/material";

const SkeletonElem = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);
    return (
        <Box p={2}>
            {/* <Stack spacing={2}>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={400} height={40} animation={false} />
                <Skeleton variant="rectangular" width={400} height={40} animation="pulse" />
                <Skeleton variant="rectangular" width={400} height={40} animation="wave" />
            </Stack> */}
            <Box>
                {loading ? <Skeleton variant="rectangular" width={256} height={144} /> : <img src="https://images.unsplash.com/photo-1670264736611-7d9866f51c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" width={256} height={144} alt="" />}
                <Stack direction={"row"} sx={{ width: "100%" }}>
                    {loading ? <Skeleton variant="circular" animation="wave" width={40} height={40} /> : <Avatar>BW</Avatar>}
                </Stack>
            </Box>
        </Box>
    );
};

export default SkeletonElem;