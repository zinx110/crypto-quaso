import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
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
import SevenDComp from "./SevenDComp";

const MinerCard = ({ data, pageMode, page }) => {
    const router = useRouter();
    const handleRouting = () => {
        router.push(`Cryptocurrencies/${page}/${data.id}`);
    };
    useEffect(() => {
        console.log(pageMode);
    }, [pageMode]);
    return (
        <Card
            elevation={0}
            sx={{
                width: 1,
                maxWidth: 1398,
                height: "70px",
                borderRadius: "8px",
                boxShadow: "none",
                backgroundColor: "#1B202A",
            }}
        >
            <CardActionArea
                sx={{
                    width: 1,

                    height: 1,
                    borderRadius: "8px",
                }}
                onClick={handleRouting}
            >
                <Grid
                    container
                    spacing={0}
                    sx={{
                        width: 1,

                        height: 1,

                        borderRadius: "8px",
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
            </CardActionArea>
        </Card>
    );
};

export default MinerCard;

const Profile = ({ data, pageMode, page }) => (
    <ProfileGrid pageMode={pageMode} page={page}>
        <Box
            sx={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                position: "relative",
            }}
        >
            <Image layout="fill" src={data.image || ""} alt={data.name} />
        </Box>
        <Box
            sx={{
                height: "50px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: { xs: "8px", md: "15px" },
                    width: 1,
                }}
            >
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "24px",

                        color: "#f3f5f8",
                        display: "flex",
                    }}
                >
                    {data.name}
                </Typography>
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: { xs: "10px", md: "12px" },
                        lineHeight: "24px",

                        color: "rgba(243,245,248,0.25)",
                        display: "flex",
                    }}
                >
                    {data.symbol}
                </Typography>
            </Box>
            <Box
                sx={{
                    height: "24px",
                    display: "flex",
                    flexDirection: "row",
                    gap: { xs: "6px", md: "10px" },
                    width: 1,
                    marginTop: "2px",
                }}
            >
                <Box
                    sx={{
                        height: 1,
                        display: pageMode === "Trending" ? "flex" : "none",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: { xs: "1px", md: "1.6px" },
                        width: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "9px", md: "12px" },
                            height: { xs: "9px", md: "12px" },

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "2px",
                            position: "relative",
                        }}
                    >
                        <Image
                            layout="fill"
                            width="100%"
                            height="100%"
                            src={
                                data.price_change_percentage_1h_in_currency > 0
                                    ? "/assets/greenUp.svg"
                                    : "/assets/redDown.svg"
                            }
                            alt="."
                        />
                    </Box>
                    <Typography
                        sx={{
                            height: "24px",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 300,
                            fontSize: { xs: "10px", md: "12px" },
                            lineHeight: "24px",

                            color: "rgba(243,245,248,0.5)",
                        }}
                    >
                        1H
                    </Typography>{" "}
                    <Typography
                        sx={{
                            height: "24px",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 300,
                            fontSize: { xs: "10px", md: "12px" },
                            lineHeight: "24px",
                            color:
                                data.price_change_percentage_1h_in_currency > 0
                                    ? "#00a82f"
                                    : "#f22c2c",
                        }}
                    >
                        {new Intl.NumberFormat("en-IN", {
                            maximumFractionDigits: 2,
                        }).format(data.price_change_percentage_1h_in_currency)}
                        %
                    </Typography>
                </Box>
                <Box
                    sx={{
                        height: 1,
                        display: pageMode === "Trending" ? "flex" : "none",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: { xs: "1px", md: "1.6px" },
                        width: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "9px", md: "12px" },
                            height: { xs: "9px", md: "12px" },

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "2px",
                            position: "relative",
                        }}
                    >
                        <Image
                            layout="fill"
                            width="100%"
                            height="100%"
                            src={
                                data.price_change_percentage_24h_in_currency > 0
                                    ? "/assets/greenUp.svg"
                                    : "/assets/redDown.svg"
                            }
                            alt="."
                        />
                    </Box>
                    <Typography
                        sx={{
                            height: "24px",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 300,
                            fontSize: { xs: "10px", md: "12px" },
                            lineHeight: "24px",
                            color: "rgba(243,245,248,0.5)",
                        }}
                    >
                        24H
                    </Typography>
                    <Typography
                        sx={{
                            height: "24px",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 300,
                            fontSize: { xs: "10px", md: "12px" },
                            lineHeight: "24px",
                            color:
                                data.price_change_percentage_24h_in_currency > 0
                                    ? "#00a82f"
                                    : "#f22c2c",
                        }}
                    >
                        {new Intl.NumberFormat("en-IN", {
                            maximumFractionDigits: 2,
                        }).format(data.price_change_percentage_24h_in_currency)}
                        %
                    </Typography>
                </Box>
                <Box
                    sx={{
                        height: "18px",

                        display: pageMode !== "Trending" ? "flex" : "none",
                        flexDirection: "row",
                        alignItems: "center",

                        marginTop: "2px",
                        backgroundColor: "#0075ff",
                        padding: "0px 6px",
                        borderRadius: "3px",
                    }}
                >
                    <Typography
                        sx={{
                            height: "24px",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "10px",
                            lineHeight: "24px",
                            color: "#f3f5f8",
                        }}
                    >
                        {new Intl.DateTimeFormat("EN", {
                            day: "2-digit",
                        }).format(new Date(data.atl_date))}
                        -
                        {new Intl.DateTimeFormat("EN", {
                            month: "2-digit",
                        }).format(new Date(data.atl_date))}
                        -
                        {new Intl.DateTimeFormat("EN", {
                            year: "numeric",
                        }).format(new Date(data.atl_date))}
                    </Typography>
                </Box>
            </Box>
        </Box>
    </ProfileGrid>
);
const TVL = ({ data, pageMode, page }) => (
    <TVLGrid pageMode={pageMode} page={page}>
        <Box
            sx={{
                width: 1,
                height: 1,
                display: "flex",
                alignItems: "center",
            }}
        >
            <Typography
                component="div"
                noWrap
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "24px",
                    color: "#f3f5f8",
                    display: "flex",
                }}
            >
                {pageMode === "Trending" && data.tvl ? data.tvl : "N/A"}
            </Typography>
        </Box>
    </TVLGrid>
);

const Chain = ({ data, pageMode, page }) => (
    <ChainGrid pageMode={pageMode} page={page}>
        <Box
            sx={{
                width: 1,
                height: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: { xs: "6px", md: "10px" },
            }}
        >
            <Box
                sx={{
                    width: "22px",
                    height: "22px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    position: "relative",
                }}
            >
                <Image layout="fill" src={data.image || ""} alt={data.name} />
            </Box>
            <Box
                sx={{
                    width: "3px",
                    height: "22px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    position: "relative",
                }}
            >
                <Image layout="fill" src="/assets/colon.svg" alt={data.name} />
            </Box>
            <Typography
                sx={{
                    height: "24px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: { xs: "10px", md: "12px" },
                    lineHeight: "24px",

                    color: "rgba(243,245,248,0.7)",
                }}
            >
                {data.symbol}
            </Typography>
        </Box>
    </ChainGrid>
);

const Fees = ({ data, pageMode, page }) => (
    <FeesGrid pageMode={pageMode} page={page}>
        <Box
            sx={{
                width: "36px",
                height: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Typography
                component="div"
                noWrap
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "24px",
                    color: "#0075ff",
                    display: "flex",
                }}
            >
                {data.fees ? `${data.fees}/5` : "N/A"}
            </Typography>
        </Box>
    </FeesGrid>
);
const Daily = ({ data, pageMode, page }) => (
    <DailyGrid pageMode={pageMode} page={page}>
        <Box
            sx={{
                width: "36px",
                height: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Typography
                component="div"
                noWrap
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "24px",
                    color: "#f3f5f8",
                    display: "flex",
                }}
            >
                {" "}
                {data.daily ? `${data.daily}%` : "N/A"}
            </Typography>
        </Box>
    </DailyGrid>
);
const Launch = ({ data, pageMode, page }) => (
    <LaunchGrid pageMode={pageMode} page={page}>
        <Box
            sx={{
                width: "70px",
                height: 1,
                display: "flex",
                alignItems: "center",
            }}
        >
            <Typography
                component="div"
                noWrap
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "24px",
                    color: "#f3f5f8",
                    display: "flex",
                }}
            >
                {" "}
                {data.days ? `${data.days} Days` : "N/A"}
            </Typography>
        </Box>
    </LaunchGrid>
);

const Risk = ({ data, pageMode, page }) => {
    const [riskIcon, setRiskIcon] = useState("");
    const [risk, setRisk] = useState(0);

    useEffect(() => {
        function calculateRiskRating(data) {
            // Extract relevant data points
            const priceChangePercentage1h =
                data.price_change_percentage_1h_in_currency;
            const priceChangePercentage24h =
                data.price_change_percentage_24h_in_currency;
            const athChangePercentage = data.ath_change_percentage;
            const circulatingSupply = data.circulating_supply;

            // Define weights for each factor
            const priceChange1hWeight = 0.3;
            const priceChange24hWeight = 0.3;
            const athChangeWeight = 0.4;

            // Calculate risk rating
            const priceChange1hScore =
                Math.abs(priceChangePercentage1h) * priceChange1hWeight;
            const priceChange24hScore =
                Math.abs(priceChangePercentage24h) * priceChange24hWeight;
            const athChangeScore =
                Math.abs(athChangePercentage) * athChangeWeight;

            // Calculate the supply risk based on the ratio of the current circulating supply to the maximum supply
            const maxSupply = data.max_supply;
            const supplyRatio = circulatingSupply / maxSupply;
            const supplyScore = (1 - supplyRatio) * 100; // Weighted with full score

            // Calculate the overall risk rating
            const riskRating =
                priceChange1hScore +
                priceChange24hScore +
                athChangeScore +
                supplyScore;

            // Adjust the risk rating to be between 0 and 100
            const adjustedRiskRating = Math.min(
                Math.max(riskRating, Math.random() * 30),
                100
            );

            // Convert risk rating to a whole number
            const riskRatingPercentage = Math.round(adjustedRiskRating);

            return riskRatingPercentage;
        }
        setRisk(calculateRiskRating(data));
    }, [data]);

    useEffect(() => {
        if (risk <= 20) {
            setRiskIcon("/assets/risks/risk0_20.svg");
        } else if (risk <= 40) {
            setRiskIcon("/assets/risks/risk21_40.svg");
        } else if (risk <= 60) {
            setRiskIcon("/assets/risks/risk41_60.svg");
        } else if (risk <= 80) {
            setRiskIcon("/assets/risks/risk61_80.svg");
        } else if (risk <= 100) {
            setRiskIcon("/assets/risks/risk81_100.svg");
        }
    }, [risk]);

    return (
        <RiskGrid pageMode={pageMode} page={page}>
            <Box
                sx={{
                    width: "80px",
                    height: 1,
                    display: "flex",
                    alignItems: "center",

                    gap: { xs: "8px", md: "20px" },
                }}
            >
                <Box
                    sx={{
                        height: "33px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        margin: 0,
                    }}
                >
                    <CircularProgress
                        variant="determinate"
                        value={risk}
                        position="absolute"
                    />

                    <Box
                        sx={{
                            height: 1,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            margin: 0,
                        }}
                    >
                        <Typography
                            component="div"
                            noWrap
                            sx={{
                                fontFamily: "Roboto",
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "8px",
                                lineHeight: "9px",
                                color: "#ffffff",
                                display: "flex",
                                textAlign: "center",
                            }}
                        >
                            {`${risk}%`}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "19px",
                        height: "19px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 0,
                        position: "relative",
                    }}
                >
                    <Image
                        layout="fill"
                        src={riskIcon || "/assets/risks/risk0_20.svg"}
                        alt={data.name}
                    />
                </Box>
            </Box>
        </RiskGrid>
    );
};

const Price = ({ data, pageMode, page }) => (
    <PriceGrid pageMode={pageMode} page={page}>
        <Box
            sx={{
                width: 1,
                height: 1,
                display: "flex",
                alignItems: "center",
            }}
        >
            <Typography
                component="div"
                noWrap
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "24px",
                    color: "#f3f5f8",
                    display: "flex",
                }}
            >
                {data.current_price ? `${data.current_price}$` : "N/A"}
            </Typography>
        </Box>
    </PriceGrid>
);
const Volume = ({ data, pageMode, page }) => (
    <VolumeGrid pageMode={pageMode} page={page}>
        <Box
            sx={{
                width: 1,
                height: 1,
                display: "flex",
                alignItems: "center",
            }}
        >
            <Typography
                component="div"
                noWrap
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "24px",
                    color: "#f3f5f8",
                    display: "flex",
                }}
            >
                {" "}
                {data.total_volume ? `${data.total_volume}K` : "N/A"}
            </Typography>
        </Box>
    </VolumeGrid>
);

const MarketCap = ({ data, pageMode, page }) => (
    <MarketCapGrid pageMode={pageMode} page={page}>
        <Box
            sx={{
                width: "36px",
                height: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Typography
                component="div"
                noWrap
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "24px",
                    color: "#0075ff",
                    display: "flex",
                }}
            >
                {" "}
                {data.market_cap ? `${data.market_cap} M` : "N/A"}
            </Typography>
        </Box>
    </MarketCapGrid>
);

const SevenD = ({ data, pageMode, page }) => {
    const [riskIcon, setRiskIcon] = useState("");

    useEffect(() => {
        if (data.riskrate) {
            if (data.riskrate <= 20) {
                setRiskIcon("/assets/risks/risk0_20.svg");
            } else if (data.riskrate <= 40) {
                setRiskIcon("/assets/risks/risk21_40.svg");
            } else if (data.riskrate <= 60) {
                setRiskIcon("/assets/risks/risk41_60.svg");
            } else if (data.riskrate <= 80) {
                setRiskIcon("/assets/risks/risk61_80.svg");
            } else if (data.riskrate <= 100) {
                setRiskIcon("/assets/risks/risk81_100.svg");
            }
        }
    }, [data]);

    return (
        <SevenDGrid pageMode={pageMode} page={page}>
            <SevenDComp data={data} />
        </SevenDGrid>
    );
};
