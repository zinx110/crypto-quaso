import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import React from "react";
import styles from "./pageseceltor.module.css";

const PageModeSelector = ({ setPageMode, pageMode }) => {
    return (
        <Box
            sx={{
                height: "35px",
                width: { xs: "200px", sm: "220px", md: "241px" },
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    width: 1,
                    height: "35px",
                    padding: "3px",
                    backgroundColor: "#0d1115",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        width: 1,
                        height: 1,
                        padding: 0,

                        borderRadius: "5px",
                        display: "flex",
                    }}
                >
                    <Box
                        className={
                            pageMode === "Trending" ? styles.left : styles.right
                        }
                        sx={{
                            position: "absolute",

                            width: "50%",
                            height: "28px",
                            backgroundColor: "#0075ff",
                            borderRadius: "5px",
                            margin: 0,
                        }}
                    ></Box>
                </Box>
            </Box>
            <ButtonGroup
                sx={{
                    position: "absolute",
                    width: 1,
                    height: "35px",
                    backgroundColor: "#transparent",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Button
                    disableRipple
                    sx={{
                        flex: 1,
                        height: "28px",
                        backgroundColor: "transparent",
                        border: 0,
                        borderRadius: "5px",
                        margin: 0,
                        ":hover": { backgroundColor: "transparent", border: 0 },
                    }}
                    onClick={() => {
                        setPageMode((prev) =>
                            prev === "Trending" ? "Upcoming" : "Trending"
                        );
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "14px",
                            textAlign: "center",
                            color:
                                pageMode === "Trending"
                                    ? "#f3f5f8"
                                    : "rgba(125,133,147,0.5)",
                        }}
                    >
                        Detailed
                    </Typography>
                </Button>
                <Button
                    disableRipple
                    sx={{
                        flex: 1,
                        height: "28px",
                        backgroundColor: "transparent",
                        border: 0,
                        borderRadius: "5px",
                        margin: 0,
                        ":hover": { backgroundColor: "transparent", border: 0 },
                    }}
                    onClick={() => {
                        setPageMode((prev) =>
                            prev === "Trending" ? "Upcoming" : "Trending"
                        );
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "14px",
                            textAlign: "center",
                            color:
                                pageMode === "Upcoming"
                                    ? "#f3f5f8"
                                    : "rgba(125,133,147,0.5)",
                        }}
                    >
                        Compact
                    </Typography>
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default PageModeSelector;
