import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const SidebarDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarDrawer;
