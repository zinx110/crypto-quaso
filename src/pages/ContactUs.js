import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MainGrid1 from "../components/ContactUs/MainGrid1";
import MainGrid2 from "../components/ContactUs/MainGrid2";
import MainGrid3 from "../components/ContactUs/MainGrid3";

const ContactUs = () => {
  const router = useRouter();
  const [page, setPage] = useState("");
  const [pageProfile, setPageProfile] = useState("");
  useEffect(() => {
    if (router.isReady) {
      console.log(router.route);
      setPage(router.route);
    }
  }, [router.isReady]);

  return (
    <Box sx={{ width: 1, display: "flex", flexDirection: "column" }}>
      <Grid
        container
        spacing={5}
        sx={{
          display: "flex",
          marginTop: { xs: "0px", md: "20px" },
        }}
      >
        <MainGrid1 />
        <MainGrid2 />
        <MainGrid3 />
      </Grid>
    </Box>
  );
};

export default ContactUs;
