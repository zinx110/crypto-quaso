import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const MainGrid3 = () => {
    return (
        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
            <Grid
                container
                spacing={6}
                sx={{
                    flex: 1,
                    marginTop: { xs: "50px", sm: "120px" },
                    marginBottom: { xs: "50px", sm: "120px" },
                }}
            >
                <Box1 />
                <Box2 />
            </Grid>
        </Grid>
    );
};

export default MainGrid3;

const Box1 = () => (
    <Grid
        item
        xs={12}
        md={4.25}
        lg={4.25}
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Box
            component="div"
            sx={{
                height: "275px",
                width: "275px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: { xs: "30px", md: "0px" },
            }}
        >
            <img
                src="/assets/contactUs/3.png"
                alt="."
                width="100%"
                height="100%"
            />
        </Box>
    </Grid>
);

const Box2 = () => (
    <Grid
        item
        xs={12}
        md={7.75}
        lg={7.75}
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}
    >
        <Typography
            sx={{
                width: 1,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "47px",
                color: "#FFFFFF",
                marginBottom: "12px",
            }}
        >
            Contact Us
        </Typography>
        <Typography
            sx={{
                width: 1,
                minHeight: "33px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#FFFFFF",
                marginBottom: "7px",
            }}
        >
            Contact us now !
        </Typography>
        <Typography
            sx={{
                width: 1,

                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "rgba(255, 255, 255, 0.5)",
                marginBottom: "16px",
            }}
        >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
        </Typography>
        <Typography
            sx={{
                width: 1,

                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "rgba(255, 255, 255, 0.5)",
                marginBottom: "40px",
            }}
        >
            To begin diving in our turf, be in touch with us through the links
            to our community platforms provided below.
        </Typography>

        <LinkButtons />
    </Grid>
);

const LinkButtons = () => (
    <Box
        sx={{
            height: "20px",
            display: "flex",
            alignItems: "center",
            gap: "40px",

            backgroundColor: "transparent",
        }}
    >
        <Button
            sx={{
                height: "20px",
                width: "26px",
                padding: 0,
                minHeight: 0,
                minWidth: 0,
            }}
        >
            <img
                src="/assets/social/facebook.svg"
                alt="facebook"
                height={"20px"}
            />
        </Button>

        <Button
            sx={{
                height: "20px",
                width: "26px",
                padding: 0,
                minHeight: 0,
                minWidth: 0,
            }}
        >
            <img
                src="/assets/social/telegram.svg"
                alt="telegram"
                height={"20px"}
            />
        </Button>

        <Button
            sx={{
                height: "20px",
                width: "26px",
                padding: 0,
                minHeight: 0,
                minWidth: 0,
            }}
        >
            <img
                src="/assets/social/discord.svg"
                alt="discord"
                height={"20px"}
            />
        </Button>

        <Button
            sx={{
                height: "20px",
                width: "26px",
                padding: 0,
                minHeight: 0,
                minWidth: 0,
            }}
        >
            <img
                src="/assets/social/twitter.svg"
                alt="twitter"
                width={"20px"}
            />
        </Button>
    </Box>
);
