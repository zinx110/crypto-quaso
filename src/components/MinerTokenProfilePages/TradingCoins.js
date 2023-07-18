import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import styles from "../MinerTokenPages/MainBox/scrollCss.module.css";

const TradingCoins = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <Typography
        component="div"
        noWrap
        sx={{
          height: "16px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        Trading Coins
      </Typography>

      <Box
        className={styles.scroller}
        sx={{
          width: 1,
          height: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflowX: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",

          ":-webkit-scrollbar": {
            display: "none",
          },
          margin: 0,
        }}
      >
        <Box
          sx={{
            height: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {[
            { up: true, uprate: 1.5 },
            { up: true, uprate: 1.5 },
            { up: true, uprate: 1.5 },
            { up: true, uprate: 1.5 },
            { up: true, uprate: 1.5 },
            { up: true, uprate: 1.5 },
            { up: true, uprate: 1.5 },
          ].map((data, key) => (
            <CardComp data={data} key={key} />
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default TradingCoins;

const CardComp = ({ data }) => (
  <Box
    sx={{
      width: "255px",
      height: 1,
      display: "flex",
      flexDirection: "row",
      overflow: "visible",

      padding: 0,
    }}
  >
    <Card
      elevation={0}
      sx={{
        width: 1,
        height: 1,
        display: "flex",
        flexDirection: "row",
        overflow: "visible",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "30px",
        padding: "12px 16px",
        paddingRight: "20px",
        backgroundColor: " #0D1115",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          height: "45px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "999px",
          }}
        >
          <img
            width="100%"
            height="100%"
            src="/assets/minerpfp/Rectangle.png"
            alt="."
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            margin: 0,
          }}
        >
          <Typography
            component="div"
            noWrap
            sx={{
              height: "22px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",

              color: " #F3F5F8",
            }}
          >
            Elon
          </Typography>
          <Typography
            component="div"
            noWrap
            sx={{
              height: "22px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",

              color: " rgba(243, 245, 248, 0.5)",
            }}
          >
            Trading Coins
          </Typography>
        </Box>
      </Box>

      <Box sx={{ height: "45px", display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            height: "24px",
            display: "flex",
            flexDirection: "row",

            alignItems: "center",
            gap: "7px",
          }}
        >
          <Box
            sx={{
              width: { xs: "13px", md: "13px" },
              height: { xs: "10px", md: "10px" },

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              height="100%"
              src={data.up ? "/assets/greenUp.svg" : "/assets/redDown.svg"}
              alt="."
            />
          </Box>
          <Typography
            sx={{
              height: "24px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: { xs: "14px", md: "14px" },
              lineHeight: "24px",

              color: data.up ? "#00A82F" : "#f22c2c",
            }}
          >
            {`${data.uprate}%`}
          </Typography>
        </Box>
      </Box>
    </Card>
  </Box>
);
