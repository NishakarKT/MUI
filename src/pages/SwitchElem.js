import React, { useEffect, useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";

const SwitchElem = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {document.querySelector("#root").style.color = dark ? "white" : "black"}, [dark]);
  useEffect(() => {document.querySelector("#root").style.backgroundColor = dark ? "black" : "white"}, [dark]);
  return (
    <div>
      <FormControlLabel label="Off/On" control={<Switch size="small" color="warning" checked={dark} onChange={(e) => setDark(e.target.checked)} />} />
    </div>
  );
};

export default SwitchElem;
