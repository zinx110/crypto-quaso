import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const MainGrid1 = () => {
    return (
        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
            <Grid
                container
                spacing={6}
                sx={{
                    flex: 1,
                }}
            >
                <Box1 />
                <Box2 />
            </Grid>
        </Grid>
    );
};

export default MainGrid1;

const Box1 = () => (
    <Grid
        item
        xs={12}
        md={6}
        lg={8}
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "16px",
        }}
    >
        <Typography
            sx={{
                width: 1,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "35px",
                lineHeight: "41px",
                color: "#FFFFFF",
                marginBottom: "40px",
            }}
        >
            What is Lorem Ipsum?
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
            }}
        >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
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
            }}
        >
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
        </Typography>
    </Grid>
);

const Box2 = () => (
    <Grid
        item
        xs={12}
        md={6}
        lg={4}
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
                width: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                component="div"
                sx={{
                    width: "336px",
                    height: "336px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src="/assets/contactUs/1.png"
                    alt="."
                    width="100%"
                    height="100%"
                />
            </Box>
        </Box>
    </Grid>
);
