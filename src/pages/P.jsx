import React, { useState } from "react";
import Loader from "../components/Loader";
import { useJwt } from "react-jwt";
const token = "Your JWT";
const P = () => {
    const { decodedToken, isExpired, reEvaluateToken } = useJwt(token);
    // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    // console.log(token)
    console.log(
        reEvaluateToken(token)
    )
    return (
        <>
        </>
    );

}

export default P