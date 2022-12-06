import React, { useState } from "react";
import { Stack, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionElem = () => {
  const [expanded, setExpanded] = useState("");
  return (
    <Stack spacing={10}>
      <Stack>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum scelerisque felis sit amet egestas. Duis imperdiet sapien velit, non lacinia lacus sodales a. Donec sed metus ullamcorper, cursus lacus non, accumsan metus. Mauris pellentesque viverra enim at placerat. Duis turpis tortor, cursus et elementum vel, sodales in dui. In.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum scelerisque felis sit amet egestas. Duis imperdiet sapien velit, non lacinia lacus sodales a. Donec sed metus ullamcorper, cursus lacus non, accumsan metus. Mauris pellentesque viverra enim at placerat. Duis turpis tortor, cursus et elementum vel, sodales in dui. In.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum scelerisque felis sit amet egestas. Duis imperdiet sapien velit, non lacinia lacus sodales a. Donec sed metus ullamcorper, cursus lacus non, accumsan metus. Mauris pellentesque viverra enim at placerat. Duis turpis tortor, cursus et elementum vel, sodales in dui. In.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum scelerisque felis sit amet egestas. Duis imperdiet sapien velit, non lacinia lacus sodales a. Donec sed metus ullamcorper, cursus lacus non, accumsan metus. Mauris pellentesque viverra enim at placerat. Duis turpis tortor, cursus et elementum vel, sodales in dui. In.</Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
      <Stack>
        <Typography>Expand only one!</Typography>
        <Accordion expanded={expanded === "panel1"} onChange={(e, isExpanded) => isExpanded ? setExpanded("panel1") : null}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum scelerisque felis sit amet egestas. Duis imperdiet sapien velit, non lacinia lacus sodales a. Donec sed metus ullamcorper, cursus lacus non, accumsan metus. Mauris pellentesque viverra enim at placerat. Duis turpis tortor, cursus et elementum vel, sodales in dui. In.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"} onChange={(e, isExpanded) => isExpanded ? setExpanded("panel2") : null}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum scelerisque felis sit amet egestas. Duis imperdiet sapien velit, non lacinia lacus sodales a. Donec sed metus ullamcorper, cursus lacus non, accumsan metus. Mauris pellentesque viverra enim at placerat. Duis turpis tortor, cursus et elementum vel, sodales in dui. In.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel3"} onChange={(e, isExpanded) => isExpanded ? setExpanded("panel3") : null}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum scelerisque felis sit amet egestas. Duis imperdiet sapien velit, non lacinia lacus sodales a. Donec sed metus ullamcorper, cursus lacus non, accumsan metus. Mauris pellentesque viverra enim at placerat. Duis turpis tortor, cursus et elementum vel, sodales in dui. In.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel4"} onChange={(e, isExpanded) => isExpanded ? setExpanded("panel4") : null}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum scelerisque felis sit amet egestas. Duis imperdiet sapien velit, non lacinia lacus sodales a. Donec sed metus ullamcorper, cursus lacus non, accumsan metus. Mauris pellentesque viverra enim at placerat. Duis turpis tortor, cursus et elementum vel, sodales in dui. In.</Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default AccordionElem;