import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = ({ onMenuClick }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          e-commerce
        </Typography>
        <Button color="inherit" onClick={onMenuClick}>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
