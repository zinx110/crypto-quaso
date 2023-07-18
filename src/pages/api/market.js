// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
    try {
        const res = await axios.get(req.body.url);
        const data = await res.data;

        res.status(200).data(data);
        console.log(data);
    } catch (error) {
        res.status(400).data([]);
        console.log(error);
    }
}
