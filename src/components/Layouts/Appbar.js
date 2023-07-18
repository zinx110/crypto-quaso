import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";

const Appbar = ({ drawerWidth, handleDrawerToggle }) => {
    const router = useRouter();

    console.log(router.route);
    const [route, setRoute] = useState("/");

    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
                backgroundColor: "#10161D",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <IconButton
                        color="inherit"
                        aria-label="icon"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            width: "48px",
                            height: "48px",
                            position: "relative",
                        }}
                    >
                        <Image
                            src="/assets/logo_main.svg"
                            alt="Crypto Quaso"
                            layout="fill"
                        />
                    </IconButton>
                    <Typography
                        variant="h1"
                        component="div"
                        sx={{
                            fontSize: "20px",
                            lineHeight: "16px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 700,

                            color: "white",
                            textDecoration: "none",
                            ml: "8px",
                            mr: "32px",
                        }}
                    >
                        Crypto Quaso
                    </Typography>

                    <Mid router={router} />

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ marginLeft: "auto", display: { md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Appbar;

const Mid = ({ router }) => (
    <>
        <Box
            sx={{
                flexGrow: 2,
                mr: "32px",
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
            }}
        >
            <Searchbar />
        </Box>
        <Box
            sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
            }}
        >
            <Button
                onClick={() => {
                    router.push("/");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
            >
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontSize: "14px",
                        lineHeight: "20px",

                        mr: 2,

                        fontStyle: "normal",
                        fontFamily: "Roboto",
                        fontWeight: 400,

                        color: "#A4A6AB",
                        textDecoration: "none",
                    }}
                    marginLeft={2}
                >
                    Coins
                </Typography>
            </Button>
            <Button
                onClick={() => {
                    router.push("/Miners");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
            >
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontSize: "14px",
                        lineHeight: "20px",

                        mr: 2,

                        fontStyle: "normal",
                        fontFamily: "Roboto",
                        fontWeight: 400,

                        color: "#A4A6AB",
                        textDecoration: "none",
                    }}
                    marginLeft={2}
                >
                    Miners
                </Typography>
            </Button>

            <Button
                onClick={() => {
                    router.push("/ContactUs");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
            >
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontSize: "14px",
                        lineHeight: "20px",
                        mr: 2,

                        fontStyle: "normal",
                        fontFamily: "Roboto",
                        fontWeight: 400,

                        color: "#A4A6AB",
                        textDecoration: "none",
                    }}
                    marginLeft={2}
                >
                    Contact us
                </Typography>
            </Button>
        </Box>
    </>
);
