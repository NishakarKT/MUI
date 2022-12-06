import React from "react";
import { TextField, Stack, InputAdornment } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const TextFieldElem = () => {
  return (
    <div>
      <Stack spacing={1}>
        <Stack direction="row" spacing={1}>
          <TextField variant="outlined" label="Text Field 1" />
          <TextField variant="standard" label="Text Field 2" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField variant="filled" label="Text Field 3" />
          <TextField variant="standard" label="Text Field 4" />
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Stack direction="row" spacing={1}>
          <TextField variant="outlined" label="Text Field 5" size="small" color="primary" />
          <TextField variant="outlined" label="Text Field 6" size="medium" color="secondary" />
          <TextField variant="filled" label="Text Field 7" size="large" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField variant="outlined" label="Text Field 8" value="Required" type="password" required />
          <TextField variant="outlined" label="Text Field 9" value="Disabled" disabled />
          <TextField variant="outlined" label="Text Field 9" value="Read Only" InputProps={{ readOnly: true }} />
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField label="Text Field 10" helperText="Hello" />
          <TextField label="Text Field 11" error={true} helperText="Error" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField label="Text Field 12" InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
          <TextField label="Text Field 13" InputProps={{ endAdornment: <InputAdornment position="end">$</InputAdornment> }} />
          <TextField label="Text Field 14" InputProps={{ endAdornment: <InputAdornment position="end"><VisibilityRoundedIcon /></InputAdornment> }} />
        </Stack>
      </Stack>
    </div>
  );
};

export default TextFieldElem;
