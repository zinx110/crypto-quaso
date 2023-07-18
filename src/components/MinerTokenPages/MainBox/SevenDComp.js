import Box from "@mui/material/Box";
import React, { useEffect } from "react";

import { useState } from "react";
import { VerticalBarSeries, XYPlot } from "react-vis";

const SevenDComp = ({ data }) => {
    const [arr, setArr] = useState(
        data.sparkline_in_7d.price
            .filter((item, index) => index % 25 === 0)
            .map((item, index) => ({
                x: index + "a",
                y: item,
            }))
    );

    const arqr = { backgroundColor: "#00CEFF" };
    return (
        <Box sx={{ width: "62px", height: "32px" }}>
            <XYPlot
                xType="ordinal"
                width={62}
                height={32}
                margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
                <VerticalBarSeries data={arr} color="#00CEFF" />
            </XYPlot>
        </Box>
    );
};

export default SevenDComp;
