import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import RiskBox from "./RiskBox";
import AuditReportBox2 from "./AuditReportBox2";

const AuditReport = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <Typography
        component="div"
        noWrap
        sx={{
          height: "16px",
          marginTop: "10px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        Audit Report
      </Typography>

      <Grid
        container
        spacing={5}
        sx={{
          flex: 1,
          // boxShadow: "2px 4px 5px rgba(0,0,0,0.28)",
          // borderRadius: "8px",
        }}
      >
        <RiskBox data={""} />
        <AuditReportBox2 data={""} />
      </Grid>
    </Grid>
  );
};

export default AuditReport;
