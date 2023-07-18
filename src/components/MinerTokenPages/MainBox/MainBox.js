import Box from "@mui/material/Box";
import React from "react";
import MinerCard from "./MinerCard";
import MinerCardTitle from "./MinerCardTitle";

import { useCoins } from "../../../contexts/CoinsContext";
import styles from "./scrollCss.module.css";

const MainBox = ({ pageMode, page }) => {
    const { coins } = useCoins();
    return (
        <Box
            className={styles.scroller}
            sx={{
                width: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflowX: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                ":-webkit-scrollbar": {
                    display: "none",
                },
                margin: 0,
            }}
        >
            <Box
                sx={{
                    width: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minWidth: "650px",
                    margin: 0,
                }}
            >
                <MinerCardTitle pageMode={pageMode} page={page} />
                <Box
                    sx={{
                        width: 1,

                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "10px",
                    }}
                >
                    {coins.map((coin, key) => (
                        <MinerCard
                            data={coin}
                            key={key}
                            page={page}
                            pageMode={pageMode}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default MainBox;

// name: "Vivy",
// nickname: "Florite",
// pfp: "/assets/minerpfp/Rectangle(2).png",
// hour: "plus",
// day: "minus",
// hourrate: 70.5,
// dayrate: -76,
// price: 1942.34,
// chainlogo: "/assets/chain/logo3.svg",
// fees: 1,
// days: 60,
// riskrate: 32,
