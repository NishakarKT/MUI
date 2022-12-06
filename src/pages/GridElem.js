import React from "react";
import { Stack, Grid } from "@mui/material";

const GridElem = () => {
  return (
    <Stack>
      <Grid container my={2} px={2} py={2} bgcolor="yellow">
        <Grid xs={12} sm={6} md={3} item bgcolor="red">Item 1</Grid>
        <Grid xs={12} sm={6} md={3} item bgcolor="blue">Item 2</Grid>
        <Grid xs={12} sm={6} md={3} item bgcolor="green">Item 3</Grid>
        <Grid xs={12} sm={6} md={3} item bgcolor="orange">Item 4</Grid>
      </Grid>
      <Grid container my={2} px={2} py={2} bgcolor="yellow" gap={2}>
        <Grid xs={12} sm={5} item bgcolor="red">Item 1</Grid>
        <Grid xs={12} sm={5} item bgcolor="blue">Item 2</Grid>
        <Grid xs={12} sm={5} item bgcolor="red">Item 1</Grid>
        <Grid xs={12} sm={5} item bgcolor="blue">Item 2</Grid>
      </Grid>
      <Grid container my={2} px={2} py={2} bgcolor="yellow" rowGap={2}>
        <Grid xs={12} sm={5} item bgcolor="red">Item 1</Grid>
        <Grid xs={12} sm={5} item bgcolor="blue">Item 2</Grid>
        <Grid xs={12} sm={5} item bgcolor="red">Item 1</Grid>
        <Grid xs={12} sm={5} item bgcolor="blue">Item 2</Grid>
      </Grid>
      <Grid container my={2} px={2} py={2} bgcolor="yellow" columnGap={2}>
        <Grid xs={12} sm={5} item bgcolor="red">Item 1</Grid>
        <Grid xs={12} sm={5} item bgcolor="blue">Item 2</Grid>
        <Grid xs={12} sm={5} item bgcolor="red">Item 1</Grid>
        <Grid xs={12} sm={5} item bgcolor="blue">Item 2</Grid>
      </Grid>
      <Grid container my={2} px={2} py={2} bgcolor="yellow">
        <Grid xs={12} sm={3} item bgcolor="red">Item 1</Grid>
        <Grid xs={12} sm={9} item bgcolor="blue">Item 2</Grid>
        <Grid xs={12} sm={9} item bgcolor="green">Item 3</Grid>
        <Grid xs={12} sm={3} item bgcolor="orange">Item 4</Grid>
      </Grid>
    </Stack>
  )
};

// Grid component uses flexbox
// 12 columns in a grid container
// Each item can take with of 1 or more coumns
// 5 screen breakpoints: xs(mobile), sm(tablet), md(desktop), lg(large monitor), xl(larger monitor) 
// xs="auto" => width=fit-content

export default GridElem;
