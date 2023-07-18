import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import PropTypes from "prop-types";
import React, { useState } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import Navbar from "./Navbar";

import { useRouter } from "next/router";

import Appbar from "./Appbar";

const drawerWidth = 240;

const FooterMain = (props) => {
    return (
        <Box
            component="footer"
            sx={{
                flexGrow: 1,
                p: 0,
                width: 1,
                marginTop: {
                    xs: "20px",
                    md: "60px",
                },
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 5, md: 10, lg: 12 }}>
                    <Appname />
                    <ExploreGrid />
                    <AboutUsGrid />
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                        <Copyright />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FooterMain;

const Appname = () => (
    <Grid item xs={12} sm={4} md={4}>
        <Box
            sx={{
                width: 1,
                height: "42px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Box sx={{ height: "100%" }}>
                <img
                    src="/assets/logo_main.svg"
                    alt="Crypto Quaso"
                    height={"32px"}
                />
            </Box>

            <Typography
                variant="h4"
                component="div"
                sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontStyle: "normal",

                    fontFamily: "Roboto",
                    fontWeight: 700,

                    color: "white",
                    textDecoration: "none",
                    marginLeft: "10px",
                }}
            >
                Crypto Quaso
            </Typography>
        </Box>
        <Box
            sx={{
                width: 1,
                height: "20px",
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
            }}
        >
            {" "}
            <Box sx={{ height: "20px", marginRight: "30px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <img
                        src="/assets/social/apple.svg"
                        alt="apple"
                        height={"20px"}
                    />
                </Button>
            </Box>
            <Box sx={{ height: "20px", marginRight: "30px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <img
                        src="/assets/social/twitter.svg"
                        alt="twitter"
                        height={"20px"}
                    />
                </Button>
            </Box>
            <Box sx={{ height: "20px", marginRight: "30px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <img
                        src="/assets/social/telegram.svg"
                        alt="telegram"
                        height={"17px"}
                    />
                </Button>
            </Box>{" "}
            <Box sx={{ height: "20px", marginRight: "30px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <img
                        src="/assets/social/instagram.svg"
                        alt="instagram"
                        height={"20px"}
                    />
                </Button>
            </Box>
        </Box>
        <Box
            sx={{
                width: 1,

                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
            }}
        >
            <Copyright />
        </Box>
    </Grid>
);

const ExploreGrid = () => {
    const router = useRouter();

    return (
        <Grid
            item
            xs={6}
            sm={4}
            md={4}
            sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", sm: "center" },
            }}
        >
            <Box
                sx={{
                    width: 1,
                    maxWidth: "130px",
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                }}
            >
                <Box sx={{ width: "100%", marginBottom: "20px" }}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#ffffff",
                            textDecoration: "none",
                        }}
                    >
                        Home
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", marginBottom: "20px" }}>
                    <Button
                        sx={{
                            height: "20px",
                            padding: 0,
                            minHeight: 0,
                            minWidth: 0,
                        }}
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                width: 1,
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontStyle: "normal",

                                fontFamily: "Roboto",
                                fontWeight: 400,

                                color: "#757677",
                                textDecoration: "none",
                            }}
                        >
                            Coins
                        </Typography>
                    </Button>
                </Box>
                <Box sx={{ width: "100%", marginBottom: "20px" }}>
                    <Button
                        sx={{
                            height: "20px",
                            padding: 0,
                            minHeight: 0,
                            minWidth: 0,
                        }}
                        onClick={() => {
                            router.push("/Miners");
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                width: 1,
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontStyle: "normal",

                                fontFamily: "Roboto",
                                fontWeight: 400,

                                color: "#757677",
                                textDecoration: "none",
                            }}
                        >
                            Miners
                        </Typography>
                    </Button>
                </Box>
                <Box sx={{ width: "100%", marginBottom: "20px" }}>
                    <Button
                        sx={{
                            height: "20px",
                            padding: 0,
                            minHeight: 0,
                            minWidth: 0,
                        }}
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                width: 1,
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontStyle: "normal",

                                fontFamily: "Roboto",
                                fontWeight: 400,

                                color: "#757677",
                                textDecoration: "none",
                            }}
                        >
                            NFT
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
};

const AboutUsGrid = () => {
    const router = useRouter();

    return (
        <Grid
            item
            xs={6}
            sm={4}
            md={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
        >
            <Box
                sx={{
                    width: 1,
                    maxWidth: "130px",
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                }}
            >
                <Box sx={{ width: "100%", marginBottom: "20px" }}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#ffffff",
                            textDecoration: "none",
                        }}
                    >
                        About Us
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", marginBottom: "20px" }}>
                    <Button
                        sx={{
                            height: "20px",
                            padding: 0,
                            minHeight: 0,
                            minWidth: 0,
                        }}
                        onClick={() => {
                            router.push("/ContactUs");
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                width: 1,
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontStyle: "normal",

                                fontFamily: "Roboto",
                                fontWeight: 400,

                                color: "#757677",
                                textDecoration: "none",
                            }}
                        >
                            Contact Us
                        </Typography>
                    </Button>
                </Box>
                <Box sx={{ width: "100%", marginBottom: "20px" }}>
                    <Button
                        sx={{
                            height: "20px",
                            padding: 0,
                            minHeight: 0,
                            minWidth: 0,
                        }}
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                width: 1,
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontStyle: "normal",

                                fontFamily: "Roboto",
                                fontWeight: 400,

                                color: "#757677",
                                textDecoration: "none",
                            }}
                        >
                            Disclaimer
                        </Typography>
                    </Button>
                </Box>
                <Box sx={{ width: "100%", marginBottom: "20px" }}>
                    <Button
                        sx={{
                            height: "20px",
                            padding: 0,
                            minHeight: 0,
                            minWidth: 0,
                        }}
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                width: 1,
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontStyle: "normal",

                                fontFamily: "Roboto",
                                fontWeight: 400,

                                color: "#757677",
                                textDecoration: "none",
                            }}
                        >
                            Privacy Policy
                        </Typography>
                    </Button>
                </Box>
                <Box sx={{ width: "100%", marginBottom: "20px" }}>
                    <Button
                        sx={{
                            height: "20px",
                            padding: 0,
                            minHeight: 0,
                            minWidth: 0,
                        }}
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                width: 1,
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontStyle: "normal",

                                fontFamily: "Roboto",
                                fontWeight: 400,

                                color: "#757677",
                                textDecoration: "none",
                            }}
                        >
                            Terms of use
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
};

const LinksResources = () => (
    <Grid item xs={6} sm={6} md={3}>
        <Box
            sx={{
                width: 1,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
            }}
        >
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        width: 1,
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontStyle: "normal",

                        fontFamily: "Roboto",
                        fontWeight: 400,

                        color: "#ffffff",
                        textDecoration: "none",
                    }}
                >
                    Resources
                </Typography>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Knowledge Base
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        FAQ
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Learn
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Blog
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Sitemap
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Terms of use
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Privacy Policy
                    </Typography>
                </Button>
            </Box>
        </Box>
    </Grid>
);

const LinksSolutions = () => (
    <Grid item xs={6} sm={6} md={3}>
        <Box
            sx={{
                width: 1,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
            }}
        >
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        width: 1,
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontStyle: "normal",

                        fontFamily: "Roboto",
                        fontWeight: 400,

                        color: "#ffffff",
                        textDecoration: "none",
                    }}
                >
                    Solutions
                </Typography>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Alerts
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Coin Analytics
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Coin API
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Mint Day
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <Button
                    sx={{
                        height: "20px",
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: 1,
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontStyle: "normal",

                            fontFamily: "Roboto",
                            fontWeight: 400,

                            color: "#757677",
                            textDecoration: "none",
                        }}
                    >
                        Partnerships
                    </Typography>
                </Button>
            </Box>
        </Box>
    </Grid>
);

const Copyright = () => (
    <Box
        sx={{
            width: 1,
            height: "48px",

            display: "flex",
            flexDirection: "column",

            marginTop: "40px",
        }}
    >
        <Box
            sx={{
                width: 1,
                height: "24px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h4"
                component="div"
                sx={{
                    width: 1,
                    fontSize: "12px",
                    lineHeight: "24px",
                    fontStyle: "normal",

                    fontFamily: "Roboto",
                    fontWeight: 400,

                    color: "#757677",
                    textDecoration: "none",
                }}
            >
                © 2022 Crypto Quaso , Inc.
            </Typography>
        </Box>
        <Box
            sx={{
                width: 1,
                height: "24px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h4"
                component="div"
                sx={{
                    width: 1,
                    fontSize: "12px",
                    lineHeight: "24px",
                    fontStyle: "normal",

                    fontFamily: "Roboto",
                    fontWeight: 400,

                    color: "#757677",
                    textDecoration: "none",
                }}
            >
                All rights reserved.
            </Typography>
        </Box>
    </Box>
);
