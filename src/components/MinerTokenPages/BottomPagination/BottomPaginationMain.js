import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PaginationMain from "./PaginationMain";

const BottomPaginationMain = () => {
  return (
    <Box
      sx={{
        width: 1,

        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: { xs: "30px", md: "50px" },
        gap: "10px",
      }}
    >
      <Typography
        component="div"
        noWrap
        sx={{
          flex: 1,
          minWidth: "150px",
          marginRight: "50px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          color: "rgba(243,245,248,0.5)",
        }}
      >{`${1} - ${3} out of ${3}`}</Typography>

      <PaginationMain />
    </Box>
  );
};

export default BottomPaginationMain;
