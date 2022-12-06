import React, { useState } from "react";
import { Stack, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const CheckBoxElem = () => {
  const [skills, setSkills] = useState([]);
  return (
    <div>
      <Stack>
        <FormControlLabel label="I accept the Terms and Conditions" control={<Checkbox />} />
        <FormControlLabel label="I accept the Privacy Policy" control={<Checkbox checked={true} />} />
      </Stack>
      <Stack>
        {/* custom checkbox */}
        <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
      </Stack>
      <Stack>
        <FormControl>
          <FormLabel>Skilled in:-</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={(e) => {
                    const idx = skills.indexOf(e.target.value);
                    if (idx === -1) setSkills((skills) => [...skills, e.target.value]);
                    else setSkills((skills) => skills.filter((skill) => skill !== e.target.value));
                  }}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={(e) => {
                    const idx = skills.indexOf(e.target.value);
                    if (idx === -1) setSkills((skills) => [...skills, e.target.value]);
                    else setSkills((skills) => skills.filter((skill) => skill !== e.target.value));
                  }}
                />
              }
            />
            <FormControlLabel
              label="JS"
              value="js"
              control={
                <Checkbox
                  checked={skills.includes("js")}
                  onChange={(e) => {
                    const idx = skills.indexOf(e.target.value);
                    if (idx === -1) setSkills((skills) => [...skills, e.target.value]);
                    else setSkills((skills) => skills.filter((skill) => skill !== e.target.value));
                  }}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Stack>
    </div>
  );
};

export default CheckBoxElem;
