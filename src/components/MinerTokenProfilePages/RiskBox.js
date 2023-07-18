import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const RiskBox = () => {
  return (
    <Grid item xs={12} sm={6}>
      <Grid
        container
        spacing={0}
        sx={{
          height: 1,

          borderRadius: "8px",
          backgroundColor: "#1B202A",
        }}
      >
        <Grid1 />
        <Grid2 data={{ risk: 55 }} />
      </Grid>
    </Grid>
  );
};

export default RiskBox;

const Grid1 = ({ data }) => (
  <Grid
    item
    xs={12}
    md={6}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: { xs: "16px 25px", sm: "16px 25px", md: "22px 35px" },
      gap: "20px",
    }}
  >
    <Box
      sx={{
        width: 1,
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

          testTransform: "capitalize",

          color: "rgba(243,245,248,0.25)",
          display: "flex",
        }}
      >
        Risk Rating in %
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

    <MainBox data="" />
  </Grid>
);

const MainBox = ({ data }) => (
  <Box
    sx={{
      width: 1,

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      gap: "20px",
      borderRadius: "8px",
    }}
  >
    <Box
      sx={{
        height: "119px",
        width: "119px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        margin: 0,
      }}
    >
      <ProgressComp value={55} />

      <Box
        sx={{
          height: 1,
          width: 1,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          margin: 0,
        }}
      >
        <Typography
          component="div"
          noWrap
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "24px",
            color: "rgba(243,245,248,0.25)",
            display: "flex",
            textAlign: "center",
          }}
        >
          {`${55}%`}
        </Typography>
      </Box>
    </Box>

    <RiskImg data={{ riskrate: 50 }} />
  </Box>
);

const ProgressComp = (props) => (
  <Box sx={{ position: "relative" }}>
    <CircularProgress
      variant="determinate"
      sx={{
        color: "#0D1115",
      }}
      size={119}
      thickness={2}
      {...props}
      value={100}
    />
    <CircularProgress
      variant="determinate"
      sx={{
        position: "absolute",
        left: 0,
      }}
      size={119}
      thickness={2}
      {...props}
    />
  </Box>
);

const RiskImg = ({ data }) => {
  const [riskIcon, setRiskIcon] = useState("");
  const [riskText, setRiskText] = useState("");

  useEffect(() => {
    if (data.riskrate) {
      if (data.riskrate <= 20) {
        setRiskIcon("/assets/risks/risk0_20.svg");
        setRiskText("Very Low");
      } else if (data.riskrate <= 40) {
        setRiskIcon("/assets/risks/risk21_40.svg");
        setRiskText("Low");
      } else if (data.riskrate <= 60) {
        setRiskIcon("/assets/risks/risk41_60.svg");
        setRiskText("Average");
      } else if (data.riskrate <= 80) {
        setRiskIcon("/assets/risks/risk61_80.svg");
        setRiskText("High");
      } else if (data.riskrate <= 100) {
        setRiskIcon("/assets/risks/risk81_100.svg");
        setRiskText("Very High");
      }
    }
  }, [data]);

  return (
    <Box
      sx={{
        width: 1,
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        gap: { xs: "15px", md: "15px" },
      }}
    >
      <Box
        sx={{
          width: "19px",
          height: "19px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <img src={riskIcon} alt="." />
      </Box>

      <Typography
        component="span"
        noWrap
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "24px",

          color: "#00A82F",
        }}
      >
        {riskText}
      </Typography>
    </Box>
  );
};

const Grid2 = ({ data }) => (
  <Grid
    item
    xs={12}
    md={6}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: { xs: "16px 25px", sm: "16px 25px", md: "22px 35px" },
      gap: "20px",
    }}
  >
    <Box
      sx={{
        width: 1,
        height: "24px",

        display: "flex",
        alignItems: "center",

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

          color: "rgba(243,245,248,0.25)",
        }}
      >
        Highlights & Alerts
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

    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        gap: "9px",
      }}
    >
      {[
        "project relatively decentralized",
        "Large Market cap (top 25%)",
        "long running project",
      ].map((item, key) => (
        <SingleHighlight text={item} key={key} />
      ))}
    </Box>
  </Grid>
);

const SingleHighlight = ({ text }) => (
  <Box
    sx={{
      width: 1,

      display: "flex",

      gap: "11px",
    }}
  >
    <Box
      sx={{
        width: "11px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        margin: 0,
      }}
    >
      <Box
        sx={{
          width: "11px",
          height: "11px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <img
          width="100%"
          height="100%"
          src="/assets/highLightCheck.svg"
          alt="."
        />
      </Box>
    </Box>
    <Typography
      component="span"
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "24px",

        color: "#F3F5F8",
      }}
    >
      {text}
    </Typography>
  </Box>
);
