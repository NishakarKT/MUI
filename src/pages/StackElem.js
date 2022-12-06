import React from "react";
import { Box, Stack, Divider } from "@mui/material";

const StackElem = () => {
  return (
    <Box>
      <Box>Stack is one-directional (default direction is column) flex-box</Box>
      <Stack spacing={1}>
        <Box width={100} height={100} bgcolor="red"></Box>
        <Box width={100} height={100} bgcolor="yellow"></Box>
        <Box width={100} height={100} bgcolor="green"></Box>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Box width={100} height={100} bgcolor="red"></Box>
        <Box width={100} height={100} bgcolor="yellow"></Box>
        <Box width={100} height={100} bgcolor="green"></Box>
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={1}>
        <Box width={100} height={100} bgcolor="red"></Box>
        <Box width={100} height={100} bgcolor="yellow"></Box>
        <Box width={100} height={100} bgcolor="green"></Box>
      </Stack>
      <Stack direction="row-reverse" spacing={1}>
        <Box width={100} height={100} bgcolor="red"></Box>
        <Box width={100} height={100} bgcolor="yellow"></Box>
        <Box width={100} height={100} bgcolor="green"></Box>
      </Stack>
      <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem />}>
        <Box width={100} height={100} bgcolor="red"></Box>
        <Box width={100} height={100} bgcolor="yellow"></Box>
        <Box width={100} height={100} bgcolor="green"></Box>
      </Stack>
    </Box>
  );
};

export default StackElem;
