import React from "react";
import { Box, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

// npm i @mui/lab

const LoadingButtonElem = () => {
  return (
    <Box p={2}>
      <Stack direction="row" spacing={2}>
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton loading variant="outlined">Submit</LoadingButton>
        <LoadingButton loading loadingIndicator="Loading..." variant="outlined">Submit</LoadingButton>
        <LoadingButton variant="outlined" loadingPosition="start" startIcon={<SaveIcon />}>Save</LoadingButton>
        <LoadingButton loading variant="outlined" loadingPosition="start" startIcon={<SaveIcon />}>Save</LoadingButton>
      </Stack>
    </Box>
  );
};

export default LoadingButtonElem;