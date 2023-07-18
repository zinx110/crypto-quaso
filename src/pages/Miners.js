import Box from "@mui/material/Box";
import Head from "next/head";
import React, { useState } from "react";
import FeaturedMain from "../components/FeaturedSections/FeaturedMain";

import PageModeName from "../components/MinerTokenPages/PageModeName";

import BottomPaginationMain from "../components/MinerTokenPages/BottomPagination/BottomPaginationMain";
import MainBox from "../components/MinerTokenPages/MainBox/MainBox";
import PageModeMain from "../components/MinerTokenPages/PageModes/PageModesMain";

const Miners = () => {
    const [pageMode, setPageMode] = useState("Trending");
    const [timespan, setTimespan] = useState("hour");

    return (
        <>
            <Head>
                <title>Crypto Quaso | Miners </title>
                <meta name="description" content="Crypto currency app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                sx={{
                    width: 1,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <PageModeName
                    pageMode={pageMode}
                    timespan={timespan}
                    page={"Miners"}
                />
                <FeaturedMain pageMode={pageMode} timespan={timespan} />
                <PageModeMain
                    pageMode={pageMode}
                    setPageMode={setPageMode}
                    timespan={timespan}
                    setTimespan={setTimespan}
                />
                <MainBox pageMode={pageMode} page={"Miners"} />
                <BottomPaginationMain />
            </Box>
        </>
    );
};

export default Miners;
