import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: alpha("#0D1115", 1),
  "&:hover": {
    backgroundColor: alpha("#0D1115", 1),
  },
  margin: "20px 0px",

  width: "100%",
  height: { xs: "60px", md: "36px" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: alpha("#ffffff", 0.25),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: alpha("#ffffff", 0.25),
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "20px",
  fontFamily: "Roboto",
  width: "100%",
  height: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: alpha("#ffffff", 1),
  },
}));

export default function Searchbar({ setMobileOpen }) {
  const theme = useTheme();
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search for collections..."
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
