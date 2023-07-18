import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";

import Close from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import SearchIcon from "@mui/icons-material/Search";
import Searchbar from "./Searchbar";
import { useRouter } from "next/router";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NavbarOptions({ setMobileOpen, mobileOpen }) {
  const theme = useTheme();
  const router = useRouter();
  const handleDrawerClose = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Drawer
      sx={{
        width: "100%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "100%",
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={mobileOpen}
    >
      <Container>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            aria-label="close drawer"
            edge="end"
            sx={{ color: "white", padding: 0 }}
          >
            <Close />
          </IconButton>
        </DrawerHeader>

        <Searchbar />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "15px 25px",
                gap: "10px",
                margin: "5px 0px",
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: "20px",
                  lineHeight: "20px",
                  mr: 2,

                  fontStyle: "normal",
                  fontFamily: "Roboto",
                  fontWeight: 400,

                  color: "#A4A6AB",
                  textDecoration: "none",

                  textAlign: "left",
                }}
                onClick={() => {
                  router.push("/");
                  handleDrawerClose();
                }}
              >
                Tokens
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "15px 25px",
                gap: "10px",
                margin: "5px 0px",
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: "20px",
                  lineHeight: "20px",
                  mr: 2,

                  fontStyle: "normal",
                  fontFamily: "Roboto",
                  fontWeight: 400,

                  color: "#A4A6AB",
                  textDecoration: "none",

                  textAlign: "left",
                }}
                onClick={() => {
                  router.push("/Miners");
                  handleDrawerClose();
                }}
              >
                Miners
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "15px 25px",
                gap: "10px",
                margin: "5px 0px",
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: "20px",
                  lineHeight: "20px",
                  mr: 2,

                  fontStyle: "normal",
                  fontFamily: "Roboto",
                  fontWeight: 400,

                  color: "#A4A6AB",
                  textDecoration: "none",

                  textAlign: "left",
                }}
              >
                NFT
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "15px 25px",
                gap: "10px",
                margin: "5px 0px",
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: "20px",
                  lineHeight: "20px",
                  mr: 2,

                  fontStyle: "normal",
                  fontFamily: "Roboto",
                  fontWeight: 400,

                  color: "#A4A6AB",
                  textDecoration: "none",

                  textAlign: "left",
                }}
                onClick={() => {
                  router.push("/ContactUs");
                  handleDrawerClose();
                }}
              >
                Contact us
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Container>
    </Drawer>
  );
}
