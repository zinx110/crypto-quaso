import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Box1 = () => {
  return (
    <Box
      sx={{
        width: "400px",
        boxShadow: "2px 4px 5px rgba(0,0,0,0.28)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "comlumn",
        padding: "30px 17px",
        gap: "20px",
      }}
    >
      {[1, 2, 3].map((item, key) => (
        <SingleLine data={""} key={key} />
      ))}

      <Typography
        sx={{
          height: "24px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
          color: "rgba(243,245,24,0.5)",
          marginTop: "38px",
        }}
      >
        ETH
      </Typography>
    </Box>
  );
};

export default Box1;

const SingleLine = ({ data }) => (
  <Box
    sx={{
      width: 1,
      height: "32px",
      display: "flex",
      alignItems: "center",
      gap: "19px",
    }}
  >
    <Box
      sx={{
        flex: 1,
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: "32px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <Box
          sx={{
            width: "32px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "999px",
          }}
        >
          <img src="/assets/minerpfp/Rectangle(1).png" alt="." />
        </Box>
        <Typography
          sx={{
            height: "24px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#F3F5F8",
            margin: 0,
          }}
        >
          Axie Anfinity
        </Typography>
      </Box>

      <Typography
        sx={{
          height: "24px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24px",
          color: "rgba(243,245,24,0.1)",
          margin: 0,
        }}
      >
        Games
      </Typography>
    </Box>

    <Box
      sx={{
        width: "50px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "6px",
      }}
    >
      <Box
        sx={{
          width: "8px",
          height: "13px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/assets/ETH-grey.svg" alt="." />
      </Box>
      <Typography
        sx={{
          height: "24px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24px",
          color: "rgba(243,245,24,0.1)",
          margin: 0,
        }}
      >
        ETH
      </Typography>
    </Box>
  </Box>
);

const Sponsored = () => (
  <Box
    sx={{
      flex: 1,
      height: "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
    }}
  >
    <Box
      sx={{
        flex: 1,
        height: "32px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <Box
        sx={{
          width: "32px",
          height: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "999px",
        }}
      >
        <img src="/assets/minerpfp/Rectangle(1).png" alt="." />
      </Box>
      <Typography
        sx={{
          height: "24px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#F3F5F8",
          margin: 0,
        }}
      >
        Axie Anfinity
      </Typography>
    </Box>

    <Typography
      sx={{
        height: "24px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
        color: "#0075FF",
        margin: 0,
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et
    </Typography>
  </Box>
);
