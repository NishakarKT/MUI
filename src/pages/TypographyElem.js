import React from "react";
import { Typography } from "@mui/material";

const TypographyElem = () => {
  return (
    <div>
      <Typography variant="h1">Heading h1</Typography> {/* Implemented with h1 tag*/}
      <Typography variant="h2">Heading h2</Typography> {/* Implemented with h2 tag*/}
      <Typography variant="h3">Heading h3</Typography> {/* Implemented with h3 tag*/}
      <Typography variant="h4">Heading h4</Typography> {/* Implemented with h4 tag*/}
      <Typography variant="h5">Heading h5</Typography> {/* Implemented with h5 tag*/}
      <Typography variant="h6">Heading h6</Typography> {/* Implemented with h6 tag*/}

      <Typography variant="h6" gutterBottom>Heading h6</Typography> {/* relative margin bottom*/}

      <Typography variant="h6" component="h1">Heading h6 with h1 tag</Typography> {/* Implemented with h1 tag*/}

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">Body 1 (Default Variant)</Typography>
      <Typography variant="body2">Body 2</Typography>
    </div>
  );
};

// https://mui.com/material-ui/customization/default-theme/ => MUI default theme
export default TypographyElem;
