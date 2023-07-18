import React from "react";
import styles from "./pageseceltor.module.css";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TimeSelector from "./TimeSelector";
import PageModeSelector from "./PageModeSelector";

const PageModeMain = ({ setPageMode, pageMode, timespan, setTimespan }) => {
  return (
    <Box
      sx={{
        width: 1,
        marginTop: { xs: "56px", md: "64px" },
        display: "flex",
        justifyContent: "space-between",

        gap: { xs: "20px", md: "30px", lg: "45px" },

        flexWrap: "wrap",
      }}
    >
      <PageModeSelector setPageMode={setPageMode} pageMode={pageMode} />
      <TimeSelector timespan={timespan} setTimespan={setTimespan} />
    </Box>
  );
};

export default PageModeMain;
