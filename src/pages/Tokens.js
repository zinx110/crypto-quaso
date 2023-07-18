import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Tokens = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/");
    }, [router]);

    return <></>;
};

export default Tokens;
