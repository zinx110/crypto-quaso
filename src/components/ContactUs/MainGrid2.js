import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const MainGrid2 = () => {
    return (
        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
                sx={{
                    width: 1,
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    textAlign: "center",
                    fontWeight: 400,
                    fontSize: "32px",
                    lineHeight: "38px",
                    color: "#FFFFFF",
                    marginTop: { xs: "30px", md: "40px" },
                    marginBottom: { xs: "50px", md: "80px" },
                }}
            >
                This is our product
            </Typography>

            <Grid
                container
                spacing={6}
                sx={{
                    flex: 1,
                }}
            >
                <Box1 />
                <Box2 />
                <Box3 />
            </Grid>
        </Grid>
    );
};

export default MainGrid2;

const Box1 = () => (
    <Grid
        item
        xs={12}
        md={4}
        lg={4}
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
        }}
    >
        <Box
            sx={{
                width: "204px",
                height: "204px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                marginBottom: { xs: "30px", sm: "66px" },
            }}
        >
            <img
                width="100%"
                height="100%"
                src="/assets/contactUs/5.png"
                alt="."
            />
        </Box>

        <Typography
            sx={{
                width: 1,
                minHeight: "38px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#FFFFFF",
            }}
        >
            Why do we use it?
        </Typography>
        <Typography
            sx={{
                width: 1,
                minHeight: "38px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                textAlign: "center",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "16px",
                color: "rgba(255, 255, 255, 0.5)",
            }}
        >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for &apos;lorem
            ipsum&apos; will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
        </Typography>
    </Grid>
);

const Box2 = () => (
    <Grid
        item
        xs={12}
        md={4}
        lg={4}
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
        }}
    >
        <Box
            sx={{
                width: "204px",
                height: "204px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                marginBottom: { xs: "30px", sm: "66px" },
            }}
        >
            <img
                width="100%"
                height="100%"
                src="/assets/contactUs/4.png"
                alt="."
            />
        </Box>

        <Typography
            sx={{
                width: 1,
                minHeight: "38px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#FFFFFF",
            }}
        >
            Where can I get some?
        </Typography>
        <Typography
            sx={{
                width: 1,
                minHeight: "38px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                textAlign: "center",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "16px",
                color: "rgba(255, 255, 255, 0.5)",
            }}
        >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
        </Typography>
    </Grid>
);

const Box3 = () => (
    <Grid
        item
        xs={12}
        md={4}
        lg={4}
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
        }}
    >
        <Box
            sx={{
                width: "204px",
                height: "204px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                marginBottom: { xs: "30px", sm: "66px" },
            }}
        >
            <img
                width="100%"
                height="100%"
                src="/assets/contactUs/2.png"
                alt="."
            />
        </Box>

        <Typography
            sx={{
                width: 1,
                minHeight: "38px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#FFFFFF",
            }}
        >
            Where does it come from?
        </Typography>
        <Typography
            sx={{
                width: 1,
                minHeight: "38px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                textAlign: "center",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "16px",
                color: "rgba(255, 255, 255, 0.5)",
            }}
        >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of `de Finibus Bonorum et Malorum` (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, `Lorem ipsum dolor sit
            amet..`, comes from a line in section 1.10.32.
        </Typography>
    </Grid>
);
