import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import LayoutMain from "../components/Layouts/LayoutMain";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CoinsProvider } from "../contexts/CoinsContext";

const theme = createTheme({
    typography: {
        fontFamily: "Roboto",
        button: {
            textTransform: "none",
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <LayoutMain>
                <CoinsProvider>
                    <Component {...pageProps} />
                </CoinsProvider>
            </LayoutMain>
        </ThemeProvider>
    );
}

export default MyApp;
