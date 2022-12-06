import React from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const ListElem = () => {
    return (
        <Box>
            <List>
                <ListItem>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary="List Item 1" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar><Avatar src="https://plus.unsplash.com/premium_photo-1661963919820-d201e373bb12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" /></ListItemAvatar>
                    <ListItemText primary="List Item 2" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary="List Item 3" secondary="Secndary Text for the  List Item" />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="List Item 3" secondary="Secndary Text for the  List Item" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default ListElem;