import React, { useState } from "react";
import { Stack, AppBar, Toolbar, Button, IconButton, Box, Typography, Menu, MenuItem } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MenuElem = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit"><CatchingPokemonIcon /></IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Pokemon</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">Pricing</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit" onClick={e => setAnchorEl(e.target)} endIcon={<KeyboardArrowDownIcon />}>Resources</Button>
                        <Button color="inherit">Log In</Button>
                    </Stack>
                    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
                        <MenuItem onClick={() => setAnchorEl(null)} color="inherit">Blog</MenuItem>
                        <MenuItem onClick={() => setAnchorEl(null)} color="inherit">Podcast</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

// positioning: https://mui.com/material-ui/react-popover/

export default MenuElem;