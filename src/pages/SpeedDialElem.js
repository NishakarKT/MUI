import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Box } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

const SpeedDialElem = () => {
    return (
        <Box>
            <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: "fixed", bottom: 16, right: 16 }} icon={<SpeedDialIcon openIcon={<EditIcon />} />}>
                <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy"  tooltipOpen />
                <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
                <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
            </SpeedDial>
        </Box>
    );
};

export default SpeedDialElem;