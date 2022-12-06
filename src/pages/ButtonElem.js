import React from "react";
import { Button, Stack, Divider, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const ButtonElem = () => {
  return (
    <div>
      <Stack spacing={1} direction="row">
        <Button variant="text">Text Variant</Button>
        <Button variant="text" href="https://google.com" target={"_blank"}>
          Text Variant (Anchor Tag)
        </Button>{" "}
        {/* add href and element becomes anchor tag */}
        <Button variant="contained">Text Variant</Button>{" "}
        {/* grab user's attention => used for primary actions */}
        <Button variant="outlined">Text Variant</Button>{" "}
        {/* Intermediate b/w text and contained => used for secondary actions */}
      </Stack>
      <Stack
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        flexWrap="wrap"
        direction="row"
      >
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "primary.light" }}
        >
          primary.light
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "primary.main" }}
        >
          primary.main
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "primary.dark" }}
        >
          primary.dark
        </Button>

        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "secondary.light" }}
        >
          secondary.light
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "secondary.main" }}
        >
          secondary.main
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "secondary.dark" }}
        >
          secondary.dark
        </Button>

        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "warning.light" }}
        >
          warning.light
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "warning.main" }}
        >
          warning.main
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "warning.dark" }}
        >
          warning.dark
        </Button>

        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "error.light" }}
        >
          error.light
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "error.main" }}
        >
          error.main
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "error.dark" }}
        >
          error.dark
        </Button>

        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "info.light" }}
        >
          info.light
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "info.main" }}
        >
          info.main
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "info.dark" }}
        >
          info.dark
        </Button>

        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "success.light" }}
        >
          success.light
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "success.main" }}
        >
          success.main
        </Button>
        <Button
          variant="text"
          sx={{ color: "white", backgroundColor: "success.dark" }}
        >
          success.dark
        </Button>
      </Stack>
      <Stack display="block" direction="row" spacing={1}>
        {" "}
        {/* Adding "block" is imp since default value "flex" has its own size*/}
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium" disableElevation>
          Medium
        </Button>{" "}
        {/* disable elevation ~ box-shadow disabled */}
        <Button variant="contained" size="large" disableRipple>
          Large
        </Button>{" "}
        {/* disable ripple effect on click*/}
      </Stack>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" startIcon={<SearchRoundedIcon />}>
          Left Icon
        </Button>
        <Button variant="contained" endIcon={<SendRoundedIcon />}>
          Right Icon
        </Button>
        <Button
          variant="contained"
          startIcon={<SearchRoundedIcon />}
          endIcon={<SendRoundedIcon />}
        >
          Both Icons
        </Button>
      </Stack>
      <Stack direction="row">
        <IconButton
          size="small"
          sx={{ color: "white", backgroundColor: "error.light" }}
        >
          <SearchRoundedIcon />
        </IconButton>
        <IconButton
          size="medium"
          sx={{ color: "white", backgroundColor: "error.light" }}
        >
          <SearchRoundedIcon />
        </IconButton>
        <IconButton
          size="large"
          sx={{ color: "white", backgroundColor: "error.light" }}
        >
          <SearchRoundedIcon />
        </IconButton>
      </Stack>
      <Stack>
        <ButtonGroup variant="outlined" color="secondary" size="small">
          <Button>Left</Button>
          <Button variant="contained">Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" orientation="vertical">
          <Button>Left</Button>
          <Button variant="contained">Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="contained">Left</Button>
          <Button variant="outlined">Center</Button>
          <Button variant="contained">Right</Button>
        </ButtonGroup>
        <ToggleButtonGroup value="bold" size="small" color="secondary" exclusive> {/* exclusive: select only one*/}
          <ToggleButton value="bold"><SearchRoundedIcon /></ToggleButton>
          <ToggleButton value="italic"><SearchRoundedIcon /></ToggleButton>
          <ToggleButton value="underlined"><SearchRoundedIcon /></ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup value="bold" size="small" color="primary" orientation="vertical">
          <ToggleButton value="bold"><SearchRoundedIcon /></ToggleButton>
          <ToggleButton value="italic"><SearchRoundedIcon /></ToggleButton>
          <ToggleButton value="underlined"><SearchRoundedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  );
};

// For colors: https://mui.com/material-ui/customization/palette/

export default ButtonElem;
