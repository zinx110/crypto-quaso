import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";

const options = [
  { short: "24H", long: "24h Low/High" },
  { short: "1M", long: "1m Low/High" },
  { short: "1Y", long: "1y Low/High" },
];

export default function TimeSelectorMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List
        aria-expanded={open ? "true" : undefined}
        sx={{
          height: "24px",
          padding: "1px 7px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1B2128",

          borderRadius: "5px",
          gap: "10px",
          ":hover": { backgroundColor: "#0B1118", cursor: "pointer" },
        }}
        onClick={handleClickListItem}
      >
        <Typography
          sx={{
            height: "24px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: { xs: "10px", md: "10px" },
            lineHeight: "24px",

            color: "rgba(243, 245, 248, 0.5)",
          }}
        >
          {options[selectedIndex].short}
        </Typography>
        <Box
          sx={{
            width: { xs: "5px", md: "5px" },
            height: { xs: "4px", md: "4px" },

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img height="100%" src={"/assets/dropDownArrow.svg"} alt="." />
        </Box>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",

            borderRadius: "5px",

            backgroundColor: "#1B2128",

            boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.22)",

            "& .MuiMenu-list": {
              padding: " 0",
            },
            "& .MuiMenuItem-root": {
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: { xs: "10px", md: "10px" },
              lineHeight: "24px",

              color: "rgba(243, 245, 248, 0.5)",
              "&:active": {
                backgroundColor: "#1B2128",
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option.long}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
