import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import AuditReport from "../../components/MinerTokenProfilePages/AuditReport";
import Breadcrumb from "../../components/MinerTokenProfilePages/Breadcrumb";
import PriceBox from "../../components/MinerTokenProfilePages/PriceBox";
import ProfileInfoBox from "../../components/MinerTokenProfilePages/ProfileInfoBox";
import TradingCoins from "../../components/MinerTokenProfilePages/TradingCoins";

const CoinProfile = () => {
    const router = useRouter();
    const [page, setPage] = useState("");
    const [pageProfile, setPageProfile] = useState("");
    useEffect(() => {
        if (router.isReady) {
            console.log(router.query);
            setPage(router.query.cryptos[0]);
            setPageProfile(router.query.cryptos[1]);
        }
    }, [router.isReady, router.query.cryptos, router.query]);
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const url = `https://api.coingecko.com/api/v3/coins/${router.query.cryptos[1]}?localization=en&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;
                const res = await axios.get(url);
                const data = await res.data;
                setData(data);
                console.log("crypto", data);
            } catch (error) {
                console.log(error.message);
                if (error.message === "Network Error") {
                    console.log(
                        `${error.message}:  You may have requested a few pages in a short time, the api limits the requests because of free tier. Sorry about that`
                    );
                }
            }
        };
        if (router.isReady) {
            fetchCoins();
        }
    }, [router.isReady, router.query.cryptos]);

    return (
        <Box
            sx={{
                width: 1,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Breadcrumb />
            <Grid
                container
                spacing={{ xs: 5, sm: 5, md: 3, lg: 4 }}
                sx={{
                    display: "flex",
                    marginTop: { xs: "0px", md: "20px" },
                }}
            >
                <ProfileInfoBox data={data} />
                <PriceBox data={data} />
                <AuditReport data={data} />
                <TradingCoins data={data} />
            </Grid>
        </Box>
    );
};

export default CoinProfile;
