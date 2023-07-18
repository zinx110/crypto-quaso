import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useCoins } from "../../../contexts/CoinsContext";

const theme = createTheme({
    typography: {
        fontFamily: "Roboto",
        color: "rgba(243,245,248,0.5)",
        pagination: {
            color: "rgba(243,245,248,0.5)",
        },
        button: {
            textTransform: "none",
        },
    },
    palette: {
        primary: {
            main: "rgba(243,245,248,0.25)",
        },
    },
});

const PaginationMain = () => {
    const { page, setPage } = useCoins();
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <Box
            sx={{
                flex: 1,
                minWidth: "280px",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
                position: "relative",
            }}
        >
            <ThemeProvider theme={theme}>
                <Pagination
                    count={10}
                    siblingCount={1}
                    shape="rounded"
                    color="primary"
                    page={page}
                    onChange={handleChange}
                    sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "24px",
                        ".MuiPaginationItem-root": {
                            color: "rgba(243,245,248,0.5)",
                        },
                    }}
                />
            </ThemeProvider>
        </Box>
    );
};

export default PaginationMain;
