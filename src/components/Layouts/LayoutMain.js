import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import PropTypes from "prop-types";
import React, { useState } from "react";

import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Navbar from "./Navbar";

import Appbar from "./Appbar";
import FooterMain from "./FooterMain";

const drawerWidth = 240;

const LayoutMain = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#10161D",
                width: 1,

                minHeight: "100vh",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#10161D",
                    width: 1,
                    flexGrow: 1,
                    p: 0,

                    position: "relative",
                }}
            >
                <CssBaseline />
                <Appbar
                    handleDrawerToggle={handleDrawerToggle}
                    drawerWidth={drawerWidth}
                />
                <Navbar
                    drawerWidth={drawerWidth}
                    handleDrawerToggle={handleDrawerToggle}
                    mobileOpen={mobileOpen}
                    container={container}
                    setMobileOpen={setMobileOpen}
                />

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 0,
                        width: 1,
                    }}
                >
                    <Container maxWidth="lg" sx={{ paddingTop: "50px" }}>
                        <Toolbar disableGutters />

                        {props.children}
                    </Container>
                </Box>

                <FooterMain />
            </Box>
        </Box>
    );
};

export default LayoutMain;
