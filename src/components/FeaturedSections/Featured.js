import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useCoins } from "../../contexts/CoinsContext";

const Featured = ({ name, data }) => {
    const { trending } = useCoins();
    console.log(name);
    return (
        <Card
            elevation={0}
            sx={{
                flex: 1,
                minWidth: "300px",
                height: "45px",
                backgroundColor: "#1B202A",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",

                padding: { xs: "8px 12px", md: "8px 24px" },
                marginTop: "11px",
            }}
        >
            <Box
                sx={{
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    alignItems: "center",
                }}
            >
                <Image
                    layout="fill"
                    src={
                        name === "Trending Coins"
                            ? "/assets/featured/featuredStar.svg"
                            : "/assets/featured/topGainer.svg"
                    }
                    alt="."
                />
            </Box>
            <Box
                sx={{
                    height: "16px",
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "15px",
                        lineHeight: "16px",
                        color: "#ffffff",
                        marginLeft: "12px",
                        display: "flex",
                    }}
                >
                    {name}
                </Typography>
            </Box>
            <Divider
                flexItem
                orientation="vertical"
                sx={{
                    marginLeft: { xs: "15px", md: "28px" },
                    marginRight: { xs: "12px", md: "20px" },
                    backgroundColor: "#ffffff",
                }}
            />

            <Box
                component={MarqueeComp}
                sx={{
                    flex: 1,
                    display: "flex",
                    height: "24px",
                }}
            >
                {name === "Trending Coins"
                    ? trending?.coins?.map((info, key) => (
                          <InfoBox
                              key={key}
                              info={info?.item}
                              name={name}
                              index={key}
                          />
                      ))
                    : trending?.nfts?.map((info, key) => (
                          <InfoBox
                              key={key}
                              info={info}
                              name={name}
                              index={key}
                          />
                      ))}
            </Box>
        </Card>
    );
};

export default Featured;

//
// Info Boxes
//
const InfoBox = ({ info, name, index }) => {
    const uptick = Math.random() > 0.5;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                gap: "4px",
                height: "24px",
                marginRight: "20px",
            }}
        >
            {info.thumb && (
                <Box
                    sx={{
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                        alignItems: "center",
                    }}
                >
                    <Image layout="fill" src={info.thumb} alt="?" />
                </Box>
            )}

            <Typography
                sx={{
                    height: "24px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "24px",
                    color: info.color ? info.color : "rgba(255,255,255,0.5)",
                    margin: 0,
                }}
            >
                {info.score ? `#${info.score + 1}` : `#${index + 1}`}
            </Typography>
            <Typography
                sx={{
                    height: "24px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "24px",
                    color: info.color ? info.color : "#ffffff",
                    margin: 0,
                }}
            >
                {info.name}
            </Typography>

            {name === "Trending Coins" && (
                <Box
                    sx={{
                        width: "10px",
                        height: "10px",
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                        alignItems: "center",
                    }}
                >
                    <Image
                        layout="fill"
                        src={
                            info.icon
                                ? info.icon
                                : "/assets/featured/questionCircle.svg"
                        }
                        alt="?"
                    />
                </Box>
            )}
            {name === "Top NFTs" && (
                <Box
                    sx={{
                        display: { xs: "flex", md: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                        gap: "6px",
                        height: "24px",
                    }}
                >
                    <Box
                        sx={{
                            width: "7px",
                            height: "6px",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            layout="fill"
                            src={
                                uptick
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
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "24px",
                            color: uptick ? "#00a82f" : "#F22C2C",
                            margin: 0,
                        }}
                    >
                        {`${new Intl.NumberFormat("en-IN", {
                            maximumFractionDigits: 0,
                        }).format(Math.random() * 30)}%`}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

const MarqueeComp = ({ children }) => (
    <Marquee speed={20} delay={2} gradient={false}>
        {children}
    </Marquee>
);
