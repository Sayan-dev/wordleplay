import React, { ReactNode } from "react";

interface props {
    letter: string;
    color: "gray" | "yellow" | "green" | "white" | string;
}

export default function WordleLetter(props: props) {
    //   const getColoredLayer = (color: "grey" | "yellow" | "green" | "white",children:React.ReactNode) => {

    //   }
    return (
        <div
            className={`container text-center text-xl m-1 w-12 h-12 flex items-center justify-center text-white bg-${props.color}-500`}
        >
            {props.letter}
        </div>
    );
}
