import React from "react";
import { Button, Stack, Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const AppBarElem = () => {
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
                    <Button color="inherit">Log In</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    </Box>
  );
};

export default AppBarElem;