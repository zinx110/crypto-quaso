import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import palette from "@mui/system/palette";

import Close from "@mui/icons-material/Close";

import Image from "next/image";
import { useRouter } from "next/router";

import NavbarOptions from "./NavbarOptions";

const Navbar = ({
  container,

  handleDrawerToggle,
  mobileOpen,
  setMobileOpen,
}) => {
  const router = useRouter();

  return (
    <Box
      component="nav"
      sx={{
        width: { md: "100%" },
        flexShrink: { md: 0 },
      }}
      backgroundColor="#10161D"
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            height: 1,
            backgroundColor: "#10161D",
          },
        }}
      >
        <Toolbar></Toolbar>

        <NavbarOptions setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
      </Drawer>
    </Box>
  );
};

export default Navbar;
