import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

const ComunityLinks = ({ data }) => (
  <Box
    sx={{
      width: 1,

      display: "flex",
      flexDirection: "column",
      marginTop: { xs: "50px", md: "30px" },

      gap: "20px",
    }}
  >
    <Typography
      component="div"
      noWrap
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "16px",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.25)",
        display: "flex",
      }}
    >
      Community Links
    </Typography>
    <Box
      sx={{
        height: "32px",
        display: "flex",
        alignItems: "center",
        gap: "35px",

        backgroundColor: "transparent",
      }}
    >
      <Button sx={{ height: "20px", padding: 0, minHeight: 0, minWidth: 0 }}>
        <img src="/assets/social/twitter.svg" alt="twitter" height={"20px"} />
      </Button>

      <Button sx={{ height: "20px", padding: 0, minHeight: 0, minWidth: 0 }}>
        <img src="/assets/social/telegram.svg" alt="telegram" height={"20px"} />
      </Button>
      <Button sx={{ height: "20px", padding: 0, minHeight: 0, minWidth: 0 }}>
        <img src="/assets/social/facebook.svg" alt="facebook" height={"20px"} />
      </Button>
      <Button sx={{ height: "20px", padding: 0, minHeight: 0, minWidth: 0 }}>
        <img src="/assets/social/discord.svg" alt="discord" height={"20px"} />
      </Button>
    </Box>
  </Box>
);

export default ComunityLinks;
