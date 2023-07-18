import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

export default function TimeSelector({ timespan, setTimespan }) {
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setTimespan(newValue);
    }
  };

  return (
    <ToggleButtonGroup
      value={timespan}
      exclusive
      onChange={handleChange}
      aria-label="timespan selector"
      sx={{ display: "flex" }}
    >
      <ToggleButton
        value="hour"
        aria-label="one hour"
        sx={{
          height: "24px",
          marginLeft: "10px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px 10px",
          backgroundColor: timespan === "hour" ? "#0d1115" : "transparent",
          border: 0,
        }}
      >
        <Typography
          component="div"
          noWrap
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "14px",
            textAlign: "center",
            color: timespan === "hour" ? "#ffffff" : "rgba(125,133,147,0.5)",
          }}
        >
          1H
        </Typography>
      </ToggleButton>
      <ToggleButton
        value="day"
        aria-label="24 hours"
        sx={{
          height: "24px",
          marginLeft: "10px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px 10px",
          backgroundColor: timespan === "day" ? "#0d1115" : "transparent",
          border: 0,
        }}
      >
        <Typography
          component="div"
          noWrap
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "14px",
            textAlign: "center",
            color: timespan === "day" ? "#ffffff" : "rgba(125,133,147,0.5)",
          }}
        >
          24H
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
