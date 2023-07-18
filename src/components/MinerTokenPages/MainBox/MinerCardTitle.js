import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {
  ChainGrid,
  DailyGrid,
  FeesGrid,
  LaunchGrid,
  MarketCapGrid,
  PriceGrid,
  ProfileGrid,
  RiskGrid,
  SevenDGrid,
  TVLGrid,
  VolumeGrid,
} from "./CardTemplate";

const MinerCardTitle = ({ data, pageMode, page }) => {
  useEffect(() => {
    console.log(pageMode);
  }, [pageMode]);
  return (
    <Box
      elevation={0}
      sx={{
        width: 1,
        maxWidth: 1398,

        boxShadow: "none",
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          width: 1,

          maxWidth: 1398,
          height: "17px",
          borderRadius: "8px",
          boxShadow: "none",
          marginTop: { xs: "17px", sm: "28px" },
          marginBottom: { xs: "17px", sm: "20px" },
          display: "flex",
          alignItems: "center",

          padding: { xs: "8px 15px", md: "10px 20px" },
        }}
      >
        <Profile data={data} pageMode={pageMode} page={page} />
        <Price data={data} pageMode={pageMode} page={page} />
        <TVL data={data} pageMode={pageMode} page={page} />
        <Chain data={data} pageMode={pageMode} page={page} />
        <MarketCap data={data} pageMode={pageMode} page={page} />

        <Fees data={data} pageMode={pageMode} page={page} />
        <Daily data={data} pageMode={pageMode} page={page} />

        <Launch data={data} pageMode={pageMode} page={page} />

        <Risk data={data} pageMode={pageMode} page={page} />
        <Volume data={data} pageMode={pageMode} page={page} />
        <SevenD data={data} pageMode={pageMode} page={page} />
      </Grid>
    </Box>
  );
};

export default MinerCardTitle;

const Profile = ({ data, pageMode, page }) => (
  <ProfileGrid pageMode={pageMode} page={page}>
    <Typography
      component="div"
      noWrap
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",

        testTransform: "uppercase",

        color: "rgba(243,245,248,0.5)",
        display: "flex",
      }}
    >
      {page === "Tokens" ? "Coin" : "Miner"}
    </Typography>
  </ProfileGrid>
);
const TVL = ({ data, pageMode, page }) => (
  <TVLGrid pageMode={pageMode} page={page}>
    <Typography
      component="div"
      noWrap
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",

        testTransform: "uppercase",

        color: "rgba(243,245,248,0.5)",
        display: "flex",
      }}
    >
      TVL
    </Typography>
  </TVLGrid>
);

const Chain = ({ data, pageMode, page }) => (
  <ChainGrid pageMode={pageMode} page={page}>
    <Typography
      component="div"
      noWrap
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",

        testTransform: "uppercase",

        color: "rgba(243,245,248,0.5)",
        display: "flex",
      }}
    >
      Chain
    </Typography>
  </ChainGrid>
);

const Fees = ({ data, pageMode, page }) => (
  <FeesGrid pageMode={pageMode} page={page}>
    <Box
      sx={{
        width: 1,
        height: 1,
        display: "flex",
        alignItems: "center",

        gap: "5px",
      }}
    >
      <Typography
        component="div"
        noWrap
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",

          testTransform: "uppercase",

          color: "rgba(243,245,248,0.5)",
          display: "flex",
        }}
      >
        Fees
      </Typography>
      <Box
        sx={{
          width: "19px",
          height: "19px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <img src="/assets/infoIcon.svg" alt="." />
      </Box>
    </Box>
  </FeesGrid>
);
const Daily = ({ data, pageMode, page }) => (
  <DailyGrid pageMode={pageMode} page={page}>
    <Typography
      component="div"
      noWrap
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",

        testTransform: "uppercase",

        color: "rgba(243,245,248,0.5)",
        display: "flex",
      }}
    >
      Daily
    </Typography>
  </DailyGrid>
);
const Launch = ({ data, pageMode, page }) => (
  <LaunchGrid pageMode={pageMode} page={page}>
    <Typography
      component="div"
      noWrap
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",

        testTransform: "uppercase",

        color: "rgba(243,245,248,0.5)",
        display: "flex",
      }}
    >
      Launch
    </Typography>
  </LaunchGrid>
);

const Risk = ({ data, pageMode, page }) => {
  return (
    <RiskGrid pageMode={pageMode} page={page}>
      <Box
        sx={{
          width: "85px",
          height: 1,
          display: "flex",
          alignItems: "center",

          gap: "5px",
        }}
      >
        <Typography
          component="div"
          noWrap
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "16px",

            testTransform: "uppercase",

            color: "rgba(243,245,248,0.5)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Risk Rating
        </Typography>
        <Box
          sx={{
            width: "19px",
            height: "19px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          }}
        >
          <img src="/assets/infoIcon.svg" alt="." />
        </Box>
      </Box>
    </RiskGrid>
  );
};

const Price = ({ data, pageMode, page }) => (
  <PriceGrid pageMode={pageMode} page={page}>
    <Typography
      component="div"
      noWrap
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",

        testTransform: "uppercase",

        color: "rgba(243,245,248,0.5)",
        display: "flex",
      }}
    >
      Price
    </Typography>
  </PriceGrid>
);
const Volume = ({ data, pageMode, page }) => (
  <VolumeGrid pageMode={pageMode} page={page}>
    <Typography
      component="div"
      noWrap
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",

        testTransform: "uppercase",

        color: "rgba(243,245,248,0.5)",
        display: "flex",
      }}
    >
      Volume
    </Typography>
  </VolumeGrid>
);

const MarketCap = ({ data, pageMode, page }) => (
  <MarketCapGrid pageMode={pageMode} page={page}>
    <Typography
      component="div"
      noWrap
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",

        testTransform: "uppercase",

        color: "rgba(243,245,248,0.5)",
        display: "flex",
      }}
    >
      Market Cap
    </Typography>
  </MarketCapGrid>
);

const SevenD = ({ data, pageMode, page }) => {
  return (
    <SevenDGrid pageMode={pageMode} page={page}>
      <Typography
        component="div"
        noWrap
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",

          testTransform: "uppercase",

          color: "rgba(243,245,248,0.5)",
          display: "flex",
        }}
      >
        7D Vol
      </Typography>
    </SevenDGrid>
  );
};
