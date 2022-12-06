import React, { useState } from "react";
import { Paper, Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const BottomNavigationElem = () => {
    const [value, setValue] = useState(0);
    return (
        <Box>
            <BottomNavigation showLabels value={value} sx={{ positon: "absolute", bottom: 0, left: 0, width: "100%" }} onChange={(event, newValue) => {
                setValue(newValue);
            }}>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="People" icon={<PersonIcon />} />
            </BottomNavigation>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="People" icon={<PersonIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
};

export default BottomNavigationElem;