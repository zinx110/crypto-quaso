import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const AuditReportBox2 = () => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      {[
        { text: "Backdoors", rate: 34 },
        { text: "Owner Privillages", rate: 52 },
        { text: "Fees Complexity (for miner)", rate: 96 },
        { text: "Team Background", rate: 20 },
        { text: "Auditors Notes", rate: 74 },
      ].map((item, key) => (
        <SingleUnit key={key} data={item} />
      ))}
    </Grid>
  );
};

export default AuditReportBox2;

const SingleUnit = ({ data }) => (
  <Box
    sx={{
      width: 1,

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      gap: "10px",
    }}
  >
    <Headers data={data} />

    <LinearProgress
      sx={{
        width: 1,
        height: "6px",
        borderRadius: "5px",
        backgroundColor: "rgba(243, 245, 248, 0.1)",
      }}
      variant="determinate"
      value={data.rate}
    />
  </Box>
);
const Headers = ({ data }) => (
  <Box
    sx={{
      width: 1,
      height: "24px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      gap: "30px",
    }}
  >
    <Box
      sx={{
        height: "24px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        gap: "12px",
      }}
    >
      <Typography
        component="span"
        noWrap
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "24px",

          color: "rgba(243,245,248,0.5)",
        }}
      >
        {data.text}
      </Typography>
      <Box
        sx={{
          width: "12px",
          height: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <img width="100%" height="100%" src="/assets/infoIcon.svg" alt="." />
      </Box>
    </Box>

    <Typography
      component="div"
      noWrap
      sx={{
        height: "24px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "24px",

        color: "rgba(243,245,248,0.5)",
      }}
    >
      {`${data.rate}%`}
    </Typography>
  </Box>
);
