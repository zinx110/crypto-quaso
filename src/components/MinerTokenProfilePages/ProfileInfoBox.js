import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import ComunityLinks from "./smallerComps/ComunityLinks";

const ProfileInfoBox = ({ data }) => {
    return (
        <Grid item xs={12} sm={6}>
            <Box
                sx={{
                    width: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: 0,
                    margin: 0,
                    marginTop: "10px",
                }}
            >
                <Box
                    sx={{
                        height: "20px",
                        display: {
                            xs: "flex",
                            md: "none",
                        },
                        alignItems: "center",
                        marginBottom: "24px",
                        gap: "9px",
                    }}
                >
                    <StarComp data={data} />
                </Box>

                <Top data={data} />
                <Mid data={data} />
                <Bottom data={data} />
            </Box>
        </Grid>
    );
};

export default ProfileInfoBox;

const Top = ({ data }) => (
    <Box
        sx={{
            width: 1,
            display: "flex",
            flexDirection: "row",
            padding: 0,
            margin: 0,
            gap: "16px",
        }}
    >
        <Box
            sx={{
                width: "55px",
                height: "55px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "999px",
                position: "relative",
            }}
        >
            <Image layout="fill" src={data?.image?.small || ""} alt="." />
        </Box>

        <Box
            sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: 0,
                margin: 0,
            }}
        >
            <TopRow1 data={data} />
            <TopRow2 data={data} />
        </Box>
    </Box>
);

const TopRow1 = ({ data }) => (
    <Box
        sx={{
            width: 1,
            height: "35px",
            display: "flex",
            flexDirection: "row",
            padding: 0,
            margin: 0,
            gap: "27px",
            alignItems: "center",
        }}
    >
        <Box
            sx={{
                height: "35px",
                display: "flex",
                flexDirection: "row",
                padding: 0,
                margin: 0,
                gap: "14px",
            }}
        >
            <Typography
                component="span"
                noWrap
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "30px",
                    lineHeight: "35px",

                    color: "#FFFFFF",
                    display: "flex",
                }}
            >
                {data?.name}
            </Typography>

            <Box
                sx={{
                    flex: 1,
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: " 6px",
                    backgroundColor: "rgba(243,245,248,0.05)",
                    borderRadius: "4px",
                }}
            >
                <Typography
                    component="span"
                    noWrap
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "12px",
                        lineHeight: "24px",
                        textTransform: "uppercase",

                        color: "rgba(243,245,248,0.5)",
                        display: "flex",
                    }}
                >
                    {data?.symbol}
                </Typography>
            </Box>
        </Box>
        <Box
            sx={{
                height: "20px",

                display: { xs: "none", md: "flex" },
                alignItems: "center",

                gap: "9px",
            }}
        >
            <StarComp data={data} />
        </Box>
    </Box>
);

const TopRow2 = ({ data }) => (
    <Box
        sx={{
            width: 1,
            display: "flex",
            flexDirection: "column",
            padding: 0,
            margin: 0,
            marginTop: "9px",
            gap: "11px",
        }}
    >
        <Typography
            component="div"
            sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "16px",

                color: "rgba(255,255,255,0.5)",
                display: "flex",
            }}
        >
            {data?.description?.en.split(".")[0]}.
        </Typography>

        <Box
            sx={{
                width: 1,
                height: "16px",
                display: "flex",
                flexDirection: "row",
                padding: 0,
                margin: 0,
                gap: "5px",
            }}
        >
            <Typography
                component="div"
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",

                    color: "rgba(255,255,255,0.25)",
                    display: "flex",
                }}
            >
                Launched Date:
            </Typography>
            <Typography
                component="div"
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "16px",

                    color: "rgba(255,255,255,0.5)",
                    display: "flex",
                }}
            >
                {Intl.DateTimeFormat("de-DE").format(
                    new Date(data?.market_data?.atl_date?.aed || "2019-05-24")
                )}
            </Typography>
        </Box>
    </Box>
);

const Mid = ({ data }) => (
    <Box
        sx={{
            width: 1,

            display: "flex",
            flexDirection: "column",
            marginTop: "50px",

            gap: "15px",
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
            Contract
        </Typography>
        <Box
            sx={{
                display: "flex",
            }}
        >
            <Card
                elevation={0}
                sx={{
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "23px",
                    padding: "8px 13px",
                    borderRadius: "5px",
                    backgroundColor: "rgba(243, 245, 248, 0.05)",
                }}
            >
                <Box
                    sx={{
                        height: "16px",
                        display: "flex",

                        alignItems: "center",
                        gap: "15px",
                    }}
                >
                    <Box
                        sx={{
                            width: "16px",
                            height: "16px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0,
                            borderRadius: "9999px",
                            position: "relative",
                        }}
                    >
                        <Image
                            layout="fill"
                            src={data?.image?.small || ""}
                            alt="."
                        />
                    </Box>

                    <Typography
                        component="span"
                        sx={{
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "16px",

                            color: "#FFFFFF",
                            display: "flex",
                        }}
                    >
                        0xeb8bbf45097343660D439dBca42053A135680163
                    </Typography>
                </Box>

                <CardActionArea
                    sx={{
                        width: "10px",
                        height: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 0,
                        position: "relative",
                    }}
                >
                    <Image
                        layout="fill"
                        src="/assets/copyBTNLogo.svg"
                        alt="."
                    />
                </CardActionArea>
            </Card>
        </Box>
    </Box>
);

const Bottom = ({ data }) => (
    <Box
        sx={{
            width: 1,

            display: { xs: "none", sm: "flex" },
        }}
    >
        <ComunityLinks />
    </Box>
);

const StarComp = ({ data }) => {
    console.log("dds", data);
    return (
        <>
            <Box
                sx={{
                    width: "12px",
                    height: "11px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    position: "relative",
                }}
            >
                <Image layout="fill" src="/assets/yellowStar.svg" alt="." />
            </Box>

            <Typography
                component="span"
                noWrap
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",

                    color: "#FFFFFF",
                    display: "flex",
                }}
            >
                {`${Intl.NumberFormat("en-US").format(
                    data?.community_data?.twitter_followers
                )} people like this`}
            </Typography>
        </>
    );
};
