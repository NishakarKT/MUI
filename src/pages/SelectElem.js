import React, { useState, useEffect } from "react";
import { Select, Stack, TextField, MenuItem, InputLabel, FormControl } from "@mui/material";

const SelectElem = () => {
  const [country, setCountry] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => console.log(country), [country]);
  useEffect(() => console.log(countries), [countries]);

  return (
    <div style={{ padding: "20px" }}>
      <Stack>
      {/* with TextField ~ better */}
        <TextField fullWidth label="Single Select" value={country} onChange={(e) => setCountry(e.target.value)} select>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">United States of America</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
        <TextField fullWidth label="Multi Select" value={countries} onChange={(e) => setCountries(e.target.value)} select SelectProps={{ multiple: true }}>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">United States of America</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
        {/* with Select */}
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select fullWidth label="Age" value={countries} onChange={(e) => setCountries(e.target.value)} multiple={true}>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">United States of America</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </div>
  );
};

export default SelectElem;
