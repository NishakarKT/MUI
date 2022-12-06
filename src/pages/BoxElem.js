import React from "react";
import { Box } from "@mui/material";

const BoxElem = () => {
  return (
    <Box>
      <Box>Box is replacement of all containers with access to color palletes and hover, etc. type css customizations</Box>
      <Box sx={{ color: "warning.dark", "&:hover": { color: "primary.main", cursor: "pointer" } }}>div (default)</Box>
      <Box component="span">span</Box>
      <Box component="section">section</Box>
      <Box component="article">section</Box>
      {/* system style props */}
      <Box display="flex" alignItems="center" justifyContent="center" color="primary.dark" bgcolor="primary.light" m={2} p={2}>
        Style Props
      </Box>
      {/* p = n => n*8 px */}
      {/* https://mui.com/system/properties/ */}
    </Box>
  );
};

export default BoxElem;
