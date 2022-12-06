import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
const skillObjs = [{id: 1, label: "HTML"}, {id: 2, label: "CSS"}, {id: 3, label: "JavaScript"}, {id: 4, label: "TypeScript"}, {id: 5, label: "React"}];

const AutoCompleteElem = () => {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState({});
  return (
    <Stack>
      <p>{val1}</p>
      <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label="Skills?" />} value={val1} onChange={(e, val) => setVal1(val)} />
      <Autocomplete options={skillObjs} renderInput={(params) => <TextField {...params} label="Skills?" />} value={val2} onChange={(e, val) => setVal2(val)} />
      <p>{val2.id}. {val2.label}</p>
    </Stack>
  );
};

export default AutoCompleteElem;
