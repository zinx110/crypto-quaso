import React, { useState, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";

export default function Breadcrumb() {
  const router = useRouter();
  const [page, setPage] = useState("");
  const [pageProfile, setPageProfile] = useState("");
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
      setPage(router.query.cryptos[0]);
      setPageProfile(router.query.cryptos[1]);
    }
  }, [router.isReady]);

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={() => {
        router.push("/");
      }}
    >
      <Typography
        component="div"
        noWrap
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16px",

          color: "rgba(255, 255, 255, 0.5)",
          display: "flex",
        }}
      >
        Cryptocurrencies
      </Typography>
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href={`/${page}`}
      onClick={() => {
        router.push(`/${page}`);
      }}
    >
      <Typography
        component="div"
        noWrap
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16px",

          color: "rgba(255, 255, 255, 0.5)",
          display: "flex",
        }}
      >
        {page}
      </Typography>
    </Link>,
    <Typography
      component="div"
      key="3"
      noWrap
      sx={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "16px",

        color: "#FFFFFF",
        display: "flex",
      }}
    >
      {pageProfile}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          color: "rgba(255, 255, 255, 0.5)",
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
