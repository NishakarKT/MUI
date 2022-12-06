import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";

const TabsElem = () => {
    const [value, setValue] = useState("1");
    return (
        <TabContext value={value}>
            <Box width={300}>
                <TabList centered onChange={(e, newValue) => setValue(newValue)} textColor="secondary" indicatorColor="secondary" variant="scrollable" scrollButtons="auto">
                    <Tab value="1" label="Tab 1" icon={<HomeIcon />} iconPosition="start"/>
                    <Tab value="2" label="Tab 2" icon={<HomeIcon />} disabled/>
                    <Tab value="3" label="Tab 3" icon={<HomeIcon />}/>
                    <Tab value="4" label="Tab 4" icon={<HomeIcon />} iconPosition="start"/>
                    <Tab value="5" label="Tab 5" icon={<HomeIcon />} disabled/>
                    <Tab value="6" label="Tab 6" icon={<HomeIcon />}/>
                    <Tab value="7" label="Tab 7" icon={<HomeIcon />} iconPosition="start"/>
                    <Tab value="8" label="Tab 8" icon={<HomeIcon />} disabled/>
                    <Tab value="9" label="Tab 9" icon={<HomeIcon />}/>
                </TabList>
            </Box>
            <TabPanel value="1">Panel 1</TabPanel>
            <TabPanel value="2">Panel 2</TabPanel>
            <TabPanel value="3">Panel 3</TabPanel>
        </TabContext>
    );
};

export default TabsElem;