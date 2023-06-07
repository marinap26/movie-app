import React from "react";

export default function Error({error}){
    return (
        <>
            <h2>Error occurred!</h2>
            <h4>{error.message}</h4>
        </>
    )
}