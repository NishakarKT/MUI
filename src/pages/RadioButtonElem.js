import React from "react";
import { Stack, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material";

const RadioButtonElem = () => {
  return (
    <div>
      <Stack>
        <FormControl>
          <FormLabel id="job-experience-group-label">Years of Experience</FormLabel>
          <RadioGroup name="job-experience-group" aria-labelledby="job-experience-group-label">
          <Stack direction="row">
            <FormControlLabel control={<Radio />} label="0-2" value="0" />
            <FormControlLabel control={<Radio />} label="2-4" value="2" />
            <FormControlLabel control={<Radio />} label=">4" value="4" />
          </Stack>
          </RadioGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Stack>
    </div>
  );
};

export default RadioButtonElem;
