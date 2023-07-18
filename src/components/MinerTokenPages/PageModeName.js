import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PageModeName = ({ pageMode, timespan, page }) => {
    const router = useRouter();
    const [whiteMainText, setWhiteMainText] = useState("Top Miners");
    const [greyMainText, setGreyMainText] = useState("By TVL");
    const [greyCaptionText, setGreyCaptionText] = useState(
        `The top trending coins for the past hour with the highest increase in volume`
    );
    useEffect(() => {
        if (page === "Tokens") {
            setWhiteMainText("Top Crypto Currencies");
            setGreyMainText("By Volume");
            setGreyCaptionText(
                `The top trending coins for the past ${
                    timespan === "hour" ? "hour" : "24 hours"
                } with the highest increase in volume`
            );
        } else if (page === "Miners" && pageMode === "Trending") {
            setWhiteMainText("Top Miners");
            setGreyMainText("By TVL");
            setGreyCaptionText(
                `The top trending miners for the past ${
                    timespan === "hour" ? "hour" : "24 hours"
                } with the highest increase in TVL`
            );
        } else if (page === "Miners" && pageMode === "Upcoming") {
            setWhiteMainText("Upcoming");
            setGreyMainText("Miners");
            setGreyCaptionText(
                `The top trending miners for the past ${
                    timespan === "hour" ? "hour" : "24 hours"
                } with the highest increase in TVL`
            );
        }
    }, [page, pageMode]);
    return (
        <Box
            sx={{
                width: 1,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    width: 1,
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Typography
                    component="div"
                    sx={{
                        height: 2,
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: { xs: "20px", md: "35px" },
                        lineHeight: "16px",
                        color: "#ffffff",
                        margin: 0,
                        marginRight: "4px",
                    }}
                >
                    Top Coins and NFTs
                </Typography>
                <Typography
                    component="div"
                    sx={{
                        height: 2,
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: { xs: "20px", md: "35px" },
                        lineHeight: "16px",
                        color: "#0066ff",
                        margin: 0,
                        marginLeft: "6px",
                    }}
                >
                    By CoinGecko
                </Typography>
            </Box>

            <Box
                sx={{
                    width: 1,
                    display: "flex",
                    flexDirection: "column",
                    marginTop: { xs: "16px", md: "30px" },
                }}
            >
                <Typography
                    component="div"
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "23px",
                        color: "rgba(255,255,255,0.5)",

                        margin: 0,
                        gap: "4px",
                    }}
                >
                    This is a practice project for crypto or stock prices. This
                    webapp uses CoinGecko public API to feature data
                </Typography>
            </Box>
        </Box>
    );
};

export default PageModeName;
