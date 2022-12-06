import React from "react";
import { createTheme, ThemeProvider, colors, Box, styled } from "@mui/material";

const theme = createTheme({
    status:{
        danger: "red",
    },
    palette: {
        secondary: {
            main: colors.orange[500]
        }
    }
});

const StyledBox = styled(Box)(() => ({
    height: "250px",
    width: "250px",
    backgroundColor: theme.status.danger,
}));

const CustomizingTheme = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ color: "secondary.main" }}>CustomizingTheme</Box>
            <StyledBox />
        </ThemeProvider>
    );
};

export default CustomizingTheme;