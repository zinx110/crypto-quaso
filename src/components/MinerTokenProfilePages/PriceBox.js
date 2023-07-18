import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ComunityLinks from "./smallerComps/ComunityLinks";
import TimeSelectorMenu from "./smallerComps/TimeSelectorMenu";

const PriceBox = ({ data }) => {
    const router = useRouter();
    const [page, setPage] = useState("");
    const [pageProfile, setPageProfile] = useState("");
    useEffect(() => {
        if (router.isReady) {
            console.log(router.query);
            setPage(router.query.cryptos[0]);
            setPageProfile(router.query.cryptos[1]);
        }
    }, [router.isReady]);

    return (
        <Grid item xs={12} sm={6}>
            <Box
                sx={{
                    width: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 0,
                    margin: 0,
                    marginTop: "10px",
                }}
            >
                <Top data={data} />

                <Bottom data={data} />
                <Bottom2 data={data} />
            </Box>
        </Grid>
    );
};

export default PriceBox;

const Top = ({ data }) => {
    const router = useRouter();
    const [page, setPage] = useState("");
    const [pageProfile, setPageProfile] = useState("");
    useEffect(() => {
        if (router.isReady) {
            console.log(router.query);
            setPage(router.query.cryptos[0]);
            setPageProfile(router.query.cryptos[1]);
        }
    }, [router.isReady]);
    return (
        <Box
            sx={{
                width: 1,

                display: "flex",
                flexDirection: "column",

                gap: "14px",
            }}
        >
            <Typography
                component="div"
                noWrap
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                    },
                    lineHeight: "16px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    display: "flex",
                }}
            >
                {data?.name} Price
            </Typography>
            <Box
                sx={{
                    height: "56px",
                    display: "flex",

                    gap: "11px",

                    backgroundColor: "transparent",
                }}
            >
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "48px",
                        lineHeight: "56px",

                        color: "#FFFFFF",
                    }}
                >
                    {Intl.NumberFormat(undefined, {
                        style: "currency",
                        currency: "USD",
                    }).format(data?.market_data?.current_price?.usd)}
                </Typography>

                <Box
                    sx={{
                        height: "24px",
                        display: "flex",
                        flexDirection: "row",

                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "13px", md: "13px" },
                            height: { xs: "10px", md: "10px" },

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <Image
                            layout="fill"
                            src={
                                data?.market_data
                                    ?.market_cap_change_percentage_24h > 0
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
                            fontSize: { xs: "14px", md: "14px" },
                            lineHeight: "24px",

                            color:
                                data?.market_data
                                    ?.market_cap_change_percentage_24h > 0
                                    ? "#00A82F"
                                    : "#f22c2c",
                        }}
                    >
                        {`${data?.market_data?.market_cap_change_percentage_24h}%`}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: 1,
                    maxWidth: "400px",

                    display: page === "Tokens" ? "flex" : "none",
                    flexDirection: "row",
                    alignItems: "center",

                    gap: "9px",
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

                        color: "rgba(255,255,255,0.5)",
                    }}
                >
                    {`Low: ${Intl.NumberFormat(undefined, {
                        style: "currency",
                        currency: "USD",
                    }).format(data?.market_data?.current_price?.usd)}`}
                </Typography>
                <Box
                    sx={{
                        height: "6px",
                        flex: 1,
                    }}
                >
                    <Box
                        sx={{
                            height: "22px",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "5px",
                        }}
                    >
                        <LinearProgress
                            sx={{
                                width: 1,
                                height: "6px",
                                borderRadius: "5px",
                                backgroundColor: "rgba(243, 245, 248, 0.1)",
                            }}
                            variant="determinate"
                            value={32}
                        />
                        <Box
                            sx={{
                                height: "8px",
                                width: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                marginLeft: `${32}%`,
                                transform: "translateX(-5px)",
                                position: "relative",
                            }}
                        >
                            <Image
                                layout="fill"
                                src="/assets/blueProgressMarker.svg"
                                alt="."
                            />
                        </Box>
                    </Box>
                </Box>

                <Typography
                    component="div"
                    noWrap
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "16px",

                        color: "rgba(255,255,255,0.5)",
                    }}
                >
                    {`High: ${Intl.NumberFormat(undefined, {
                        style: "currency",
                        currency: "USD",
                    }).format(2925.56)}`}
                </Typography>
                <Box
                    sx={{
                        height: "24px",
                    }}
                >
                    <TimeSelectorMenu />
                </Box>
            </Box>
        </Box>
    );
};

const Bottom = ({ data }) => (
    <Grid
        container
        spacing={1}
        sx={{
            marginTop: "60px",
        }}
    >
        <Grid item xs={12} md={6}>
            <Paper
                sx={{
                    width: 1,
                    height: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: {
                        xs: "7px 22px",
                        md: "7px 15px ",
                        lg: "7px 22px ",
                    },
                    backgroundColor: "#1B202A",
                    gap: { xs: "8px", md: "2px", lg: "4px" },
                }}
            >
                <Paper1 data={data} />
            </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
            <Paper
                sx={{
                    width: 1,
                    height: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: {
                        xs: "7px 22px",
                        md: "7px 15px ",
                        lg: "7px 22px ",
                    },
                    backgroundColor: "#1B202A",
                    gap: "8px",
                }}
            >
                <Paper2 data={data} />
            </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
            <Paper
                sx={{
                    width: 1,
                    height: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: {
                        xs: "7px 22px",
                        md: "7px 15px ",
                        lg: "7px 22px ",
                    },
                    backgroundColor: "#1B202A",
                    gap: "8px",
                }}
            >
                <Paper3 data={data} />
            </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
            <Paper
                sx={{
                    width: 1,
                    height: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: {
                        xs: "7px 22px",
                        md: "7px 15px ",
                        lg: "7px 22px ",
                    },
                    backgroundColor: "#1B202A",
                    gap: "8px",
                }}
            >
                <Paper4 data={data} />
            </Paper>
        </Grid>
    </Grid>
);

const Paper1 = ({ data }) => {
    const router = useRouter();
    const [page, setPage] = useState("");
    const [pageProfile, setPageProfile] = useState("");
    useEffect(() => {
        if (router.isReady) {
            console.log(router.query);
            setPage(router.query.cryptos[0]);
            setPageProfile(router.query.cryptos[1]);
        }
    }, [router.isReady]);

    return (
        <>
            <Box
                sx={{
                    height: "24px",
                    display: "flex",
                    alignItems: "center",

                    gap: { xs: "12px", md: "8px", lg: "8px" },
                }}
            >
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "24px",

                        color: "rgba(243,245,248,0.5)",
                        display: "flex",
                    }}
                >
                    {page === "Tokens" ? "Market Cap" : "Fees (Buy and Sell)"}
                </Typography>
                <Box
                    sx={{
                        width: "12px",
                        height: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 0,
                        position: "relative",
                    }}
                >
                    <Image
                        width="100%"
                        height="100%"
                        src="/assets/infoIcon.svg"
                        alt="."
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    height: 1,
                    display: "flex",
                    alignItems: "center",

                    gap: { xs: "5px", md: "2px", lg: "3px" },
                }}
            >
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        display: page === "Tokens" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "16px",

                        color: "#FFFFFF",
                    }}
                >
                    {Intl.NumberFormat(undefined, {
                        style: "currency",
                        currency: "USD",
                    }).format(2456800.0)}
                </Typography>

                <Typography
                    component="div"
                    noWrap
                    sx={{
                        display: page === "Miners" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "12px",
                            md: "12px",
                            lg: "12px",
                        },
                        lineHeight: "16px",

                        color: "#F22C2C",
                    }}
                >
                    {`Buy ${10}%`}
                </Typography>
                <Divider
                    orientation="vertical"
                    sx={{
                        height: 1,
                        width: "2px",
                        display: page === "Miners" ? "flex" : "none",
                        margin: {
                            xs: "0px 2px",
                            sm: "0pc",
                            md: "0px",
                            lg: "0px 2px",
                        },
                        backgroundColor: "rgba(243, 245, 248, 0.25)",
                    }}
                />
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        display: page === "Miners" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "12px",
                            md: "12px",
                            lg: "12px",
                        },
                        lineHeight: "16px",

                        color: "#00A82F",
                    }}
                >
                    {`Sell ${5}%`}
                </Typography>
            </Box>
        </>
    );
};
const Paper2 = ({ data }) => {
    const router = useRouter();
    const [page, setPage] = useState("");
    const [pageProfile, setPageProfile] = useState("");
    useEffect(() => {
        if (router.isReady) {
            console.log(router.query);
            setPage(router.query.cryptos[0]);
            setPageProfile(router.query.cryptos[1]);
        }
    }, [router.isReady]);

    return (
        <>
            <Box
                sx={{
                    height: "24px",
                    display: "flex",
                    alignItems: "center",

                    gap: "12px",
                }}
            >
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "24px",

                        color: "rgba(243,245,248,0.5)",
                        display: "flex",
                    }}
                >
                    {page === "Tokens" ? "Total Supply" : "Daily Yield"}
                </Typography>
                <Box
                    sx={{
                        width: "12px",
                        height: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 0,
                        position: "relative",
                    }}
                >
                    <Image layout="fill" src="/assets/infoIcon.svg" alt="." />
                </Box>
            </Box>
            <Box
                sx={{
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
                        display: page === "Tokens" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "16px",

                        color: "#FFFFFF",
                    }}
                >
                    {Intl.NumberFormat(undefined, {
                        style: "currency",
                        currency: "USD",
                    }).format(2456800.0)}
                </Typography>

                <Typography
                    component="div"
                    noWrap
                    sx={{
                        display: page === "Miners" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "16px",

                        color: "#FFFFFF",
                    }}
                >
                    {`${5}%`}
                </Typography>
            </Box>
        </>
    );
};
const Paper3 = ({ data }) => {
    const router = useRouter();
    const [page, setPage] = useState("");
    const [pageProfile, setPageProfile] = useState("");
    useEffect(() => {
        if (router.isReady) {
            console.log(router.query);
            setPage(router.query.cryptos[0]);
            setPageProfile(router.query.cryptos[1]);
        }
    }, [router.isReady]);

    return (
        <>
            <Box
                sx={{
                    height: "24px",
                    display: "flex",
                    alignItems: "center",

                    gap: "12px",
                }}
            >
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "24px",

                        color: "rgba(243,245,248,0.5)",
                        display: "flex",
                    }}
                >
                    {page === "Tokens" ? "Max Supply" : "1H Volume"}
                </Typography>
                <Box
                    sx={{
                        width: "12px",
                        height: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 0,
                        position: "relative",
                    }}
                >
                    <Image layout="fill" src="/assets/infoIcon.svg" alt="." />
                </Box>
            </Box>
            <Box
                sx={{
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
                        display: page === "Tokens" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "16px",

                        color: "#FFFFFF",
                    }}
                >
                    {Intl.NumberFormat(undefined, {
                        style: "currency",
                        currency: "USD",
                    }).format(2456800.0)}
                </Typography>

                <Box
                    sx={{
                        width: { xs: "11px", md: "11px" },
                        height: { xs: "8px", md: "8px" },

                        display: page === "Miners" ? "flex" : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <Image
                        layout="fill"
                        src={
                            80.5 > 0
                                ? "/assets/greenUp.svg"
                                : "/assets/redDown.svg"
                        }
                        alt="."
                    />
                </Box>

                <Typography
                    component="div"
                    noWrap
                    sx={{
                        display: page === "Miners" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "16px",

                        color: "rgba(243, 245, 248, 0.5)",
                    }}
                >
                    1H
                </Typography>
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        display: page === "Miners" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "16px",

                        color: 80.5 > 0 ? "#00A82F" : "#F22C2C",
                    }}
                >
                    {`${80.5}%`}
                </Typography>
            </Box>
        </>
    );
};
const Paper4 = ({ data }) => {
    const router = useRouter();
    const [page, setPage] = useState("");
    const [pageProfile, setPageProfile] = useState("");
    useEffect(() => {
        if (router.isReady) {
            console.log(router.query);
            setPage(router.query.cryptos[0]);
            setPageProfile(router.query.cryptos[1]);
        }
    }, [router.isReady]);

    return (
        <>
            <Box
                sx={{
                    height: "24px",
                    display: "flex",
                    alignItems: "center",

                    gap: "12px",
                }}
            >
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "24px",

                        color: "rgba(243,245,248,0.5)",
                        display: "flex",
                    }}
                >
                    {page === "Tokens" ? "24H Trading Vol" : "24H Volume"}
                </Typography>
                <Box
                    sx={{
                        width: "12px",
                        height: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 0,
                        position: "relative",
                    }}
                >
                    <Image layout="fill" src="/assets/infoIcon.svg" alt="." />
                </Box>
            </Box>
            <Box
                sx={{
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
                        display: page === "Tokens" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "16px",

                        color: "#FFFFFF",
                    }}
                >
                    {Intl.NumberFormat(undefined, {
                        style: "currency",
                        currency: "USD",
                    }).format(2456800.0)}
                </Typography>

                <Box
                    sx={{
                        width: { xs: "11px", md: "11px" },
                        height: { xs: "8px", md: "8px" },

                        display: page === "Miners" ? "flex" : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <Image
                        layout="fill"
                        src={
                            -10.4 > 0
                                ? "/assets/greenUp.svg"
                                : "/assets/redDown.svg"
                        }
                        alt="."
                    />
                </Box>

                <Typography
                    component="div"
                    noWrap
                    sx={{
                        display: page === "Miners" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "16px",

                        color: "rgba(243, 245, 248, 0.5)",
                    }}
                >
                    24H
                </Typography>
                <Typography
                    component="div"
                    noWrap
                    sx={{
                        display: page === "Miners" ? "flex" : "none",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                        },
                        lineHeight: "16px",

                        color: -10.4 > 0 ? "#00A82F" : "#F22C2C",
                    }}
                >
                    {`${-10.4}%`}
                </Typography>
            </Box>
        </>
    );
};

const Bottom2 = ({ data }) => (
    <Box
        sx={{
            width: 1,

            display: { xs: "flex", sm: "none" },
        }}
    >
        <ComunityLinks />
    </Box>
);
