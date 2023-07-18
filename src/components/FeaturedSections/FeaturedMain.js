import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Featured from "./Featured";

const FeaturedMain = ({ pageMode, timespan }) => {
    return (
        <Box
            sx={{
                width: 1,
                display: "flex",
                flexWrap: { xs: "wrap" },
                marginTop: { xs: "27px", sm: "31px" },
                gap: "10px",
            }}
        >
            <Featured name={"Trending Coins"} data={infos} />
            <Featured name={"Top NFTs"} data={infos2} />
        </Box>
    );
};

export default FeaturedMain;

//
// infos
//

const infos = [
    {
        hash: 1,
        name: "USDC",
        icon: "",
        color: "#0075ff",
        iconfirst: "",
    },
    {
        hash: 2,
        name: "ETH",
        icon: "",
        color: "",
        iconfirst: "",
    },
    {
        hash: 3,
        name: "RING",
        icon: "",
        color: "#ffcc01",
        iconfirst: "/assets/featured/dLogo.svg",
    },
    {
        hash: 1,
        name: "MLK",
        icon: "",
        color: "",
        iconfirst: "",
    },
    {
        hash: 2,
        name: "USDC",
        icon: "",
        color: "",
        iconfirst: "",
    },
    {
        hash: 3,
        name: "BTC",
        icon: "",
        color: "#00e5c9",
        iconfirst: "",
    },
    {
        hash: 1,
        name: "MTGO",
        icon: "",
        color: "",
        iconfirst: "",
    },
    {
        hash: 2,
        name: "DIFF",
        icon: "",
        color: "#f22c2c",
        iconfirst: "",
    },
    {
        hash: 3,
        name: "HEX",
        icon: "",
        color: "#6667ab",
        iconfirst: "/assets/featured/hexLogo.svg",
    },
    {
        hash: 1,
        name: "OMEGA",
        icon: "/assets/featured/oxSaudisLogo.svg",
        color: "",
        iconfirst: "",
    },
    {
        hash: 2,
        name: "RVLT",
        icon: "",
        color: "",
        iconfirst: "",
    },
    {
        hash: 3,
        name: "MAGIC",
        icon: "",
        color: "0075ff",
        iconfirst: "",
    },
    {
        hash: 1,
        name: "USDC",
        icon: "",
        color: "",
        iconfirst: "",
    },
    {
        hash: 2,
        name: "FHM",
        icon: "/assets/featured/oxSaudisLogo.svg",
        color: "",
        iconfirst: "",
    },
    {
        hash: 3,
        name: "IKURA",
        icon: "",
        color: "",
        iconfirst: "",
    },
];

const infos2 = [
    {
        hash: 1,
        name: "WBTC",

        color: "",
        up: "true",
        rate: 80.5,
    },

    {
        hash: 2,
        name: "BabyDoge",

        color: "",
        up: "false",
        rate: 80.5,
    },

    {
        hash: 3,
        name: "FINN",

        color: "#f22c2c",
        up: "true",
        rate: 80.5,
    },

    {
        hash: 1,
        name: "USDC",

        color: "",
        up: "true",
        rate: 80.5,
    },

    {
        hash: 2,
        name: "BLUES",

        color: "",
        up: "false",
        rate: 80.5,
    },

    {
        hash: 3,
        name: "TSUKA",

        color: "",
        up: "true",
        rate: 80.5,
    },

    {
        hash: 1,
        name: "ARGO",

        color: "",
        up: "false",
        rate: 80.5,
    },

    {
        hash: 2,
        name: "MAGE",

        color: "#f22c2c",
        up: "false",
        rate: 80.5,
    },

    {
        hash: 3,
        name: "META",

        color: "",
        up: "true",
        rate: 80.5,
    },
    {
        hash: 1,
        name: "USDC",

        color: "#ffcc01",
        up: "true",
        rate: 80.5,
    },
];
