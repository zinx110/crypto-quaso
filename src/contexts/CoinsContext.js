import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const CoinsContext = createContext({});

const apiUrl = "https://api.coingecko.com/api/v3/coins/markets";
export const CoinsProvider = ({ children }) => {
    const [orderAsc, setOrderAsc] = useState(false);
    const [page, setPage] = useState(1);
    const [coins, setCoins] = useState([]);
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        const order = orderAsc ? "market_cap_asc" : "market_cap_desc";
        const orderVol = orderAsc ? "volume_asc" : "volume_desc";

        const url = `${apiUrl}?vs_currency=usd&order=${order}&per_page=10&page=${page}&sparkline=true&price_change_percentage=1h%2C24h&locale=en&precision=2`;

        const fetchCoins = async () => {
            try {
                const res = await axios.get(url);
                const data = await res.data;
                setCoins(data);
                console.log("all", data);
            } catch (error) {
                console.log(error.message);
                if (error.message === "Network Error") {
                    console.log(
                        `${error.message}:  You may have requested a few pages in a short time, the api limits the requests because of free tier. Sorry about that`
                    );
                }
            }
        };
        fetchCoins();
    }, [page, orderAsc]);

    useEffect(() => {
        const trendingUrl = "https://api.coingecko.com/api/v3/search/trending";
        const fetchCoins = async () => {
            try {
                const res = await axios.get(trendingUrl);
                const data = await res.data;
                setTrending(data);
                console.log(data);
            } catch (error) {
                console.log(error.message);
                if (error.message === "Network Error") {
                    console.log(
                        `${error.message}:  You may have requested a few pages in a short time, the api limits the requests because of free tier. Sorry about that`
                    );
                }
            }
        };
        fetchCoins();
    }, []);

    return (
        <CoinsContext.Provider
            value={{
                coins,
                trending,
                page,
                setPage,
            }}
        >
            {children}
        </CoinsContext.Provider>
    );
};
export const useCoins = () => {
    return useContext(CoinsContext);
};
