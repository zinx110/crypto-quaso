import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const sizes = (pageMode, page) => {
    const minerTrend = {
        profile: 3.5,
        price: 0,
        tvl: 1.5,
        chain: 1.25,
        marketcap: 0,
        fees: 1.25,
        daily: 1.25,
        launch: 1.25,
        risk: 2,
        volume: 0,
        sevenD: 0,
    };
    const minerUpcoming = {
        profile: 3.75,
        price: 0,
        tvl: 1.75,
        chain: 1.5,
        marketcap: 0,
        fees: 1.5,
        daily: 1.5,
        launch: 0,
        risk: 2,
        volume: 0,
        sevenD: 0,
    };
    const coinTrend = {
        profile: 3.5,
        price: 1.5,
        tvl: 0,
        chain: 1.1,
        marketcap: 1.4,
        fees: 0,
        daily: 0,
        launch: 0,
        risk: 1.75,
        volume: 1.5,
        sevenD: 1.25,
    };
    const coinUpcoming = {
        profile: 4,
        price: 0,
        tvl: 0,
        chain: 2,
        marketcap: 2,
        fees: 0,
        daily: 0,
        launch: 0,
        risk: 2,
        volume: 2,
        sevenD: 0,
    };
    let gridSize;

    if (page === "Coins" && pageMode === "Trending") gridSize = coinTrend;
    if (page === "Coins" && pageMode === "Upcoming") gridSize = coinUpcoming;
    if (page === "Miners" && pageMode === "Trending") gridSize = minerTrend;
    if (page === "Miners" && pageMode === "Upcoming") gridSize = minerUpcoming;

    return gridSize;
};

const CardTemplate = ({ children, pageMode, page }) => {
    useEffect(() => {
        console.log(pageMode);
    }, [pageMode]);
    return (
        <Grid
            item
            xs={pageMode === "Trending" ? 3.5 : 3.75}
            sx={{
                width: 1,
                height: 1,
                display: "flex",
                alignItems: "center",
                gap: { xs: "10px", md: "32px" },
            }}
        >
            {children}
        </Grid>
    );
};

export default CardTemplate;

export const ProfileGrid = ({ children, pageMode, page }) => (
    <Grid
        item
        xs={sizes(pageMode, page).profile}
        sx={{
            display: sizes(pageMode, page).profile ? "flex" : "none",
            alignItems: "center",

            gap: { xs: "10px", md: "32px" },
        }}
    >
        {children}
    </Grid>
);
export const TVLGrid = ({ children, pageMode, page }) => (
    <Grid
        item
        xs={sizes(pageMode, page).tvl}
        sx={{
            display: sizes(pageMode, page).tvl ? "flex" : "none",
            alignItems: "center",
        }}
    >
        {children}
    </Grid>
);

export const ChainGrid = ({ children, pageMode, page }) => (
    <Grid
        item
        xs={sizes(pageMode, page).chain}
        sx={{
            display: sizes(pageMode, page).chain ? "flex" : "none",
            alignItems: "center",
        }}
    >
        {children}
    </Grid>
);

export const FeesGrid = ({ children, pageMode, page }) => (
    <Grid
        item
        xs={sizes(pageMode, page).fees}
        sx={{
            display: sizes(pageMode, page).fees ? "flex" : "none",
            alignItems: "center",
        }}
    >
        {children}
    </Grid>
);
export const DailyGrid = ({ children, pageMode, page }) => (
    <Grid
        item
        xs={sizes(pageMode, page).daily}
        sx={{
            display: sizes(pageMode, page).daily ? "flex" : "none",
            alignItems: "center",
        }}
    >
        {children}
    </Grid>
);
export const LaunchGrid = ({ children, pageMode, page }) => (
    <Grid
        item
        xs={sizes(pageMode, page).launch}
        sx={{
            display: sizes(pageMode, page).launch ? "flex" : "none",
            alignItems: "center",
        }}
    >
        {children}
    </Grid>
);

export const RiskGrid = ({ children, pageMode, page }) => {
    return (
        <Grid
            item
            xs={sizes(pageMode, page).risk}
            sx={{
                display: sizes(pageMode, page).risk ? "flex" : "none",
                alignItems: "center",
            }}
        >
            {children}
        </Grid>
    );
};

// tokens

export const PriceGrid = ({ children, pageMode, page }) => (
    <Grid
        item
        xs={sizes(pageMode, page).price}
        sx={{
            display: sizes(pageMode, page).price ? "flex" : "none",
            alignItems: "center",
        }}
    >
        {children}
    </Grid>
);
export const VolumeGrid = ({ children, pageMode, page }) => (
    <Grid
        item
        xs={sizes(pageMode, page).volume}
        sx={{
            display: sizes(pageMode, page).volume ? "flex" : "none",
            alignItems: "center",
        }}
    >
        {children}
    </Grid>
);
export const MarketCapGrid = ({ children, pageMode, page }) => (
    <Grid
        item
        xs={sizes(pageMode, page).marketcap}
        sx={{
            display: sizes(pageMode, page).marketcap ? "flex" : "none",
            alignItems: "center",
        }}
    >
        {children}
    </Grid>
);
export const SevenDGrid = ({ children, pageMode, page }) => (
    <Grid
        item
        xs={sizes(pageMode, page).sevenD}
        sx={{
            display: sizes(pageMode, page).sevenD ? "flex" : "none",
            alignItems: "center",
        }}
    >
        {children}
    </Grid>
);
