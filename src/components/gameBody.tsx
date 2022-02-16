import React, { useCallback, useEffect, useState } from "react";
import useEventListener from "../hooks/events";
import WordleLetter from "./wordleLetter";

export default function GameBody() {
    const answer: string = "BOTTLE";
    const [state, setState] = useState<string[]>(["", "", "", "", "", ""]);
    const newColor: string[][] = [];
    for (let i = 0; i < state.length; i++) {
        newColor.push([]);
        for (let j = 0; j < state.length; j++) {
            newColor[i].push("white");
        }
    }
    const [color, setColor] = useState<string[][]>(newColor);

    const [pos, setPosState] = useState<number>(0);
    const onPress = (event: any) => {
        if (state[pos].length < 6 && event.key !== "Enter") {
            const newState = [...state];
            newState[pos] += event.key.toUpperCase();
            const j =newState[pos].length-1
            const i = pos
            validateLetter(i, j, event.key.toUpperCase())
            setState(newState);
        }
        if (event.key === "Enter" && pos < state.length - 1) {
            setPosState((prev) => prev + 1);
        }
    };
    const validateLetter = (i: number, j: number, letter: string) => {
        if (
            answer.split("").find((e) => {
                return e === letter;
            })
        ) {
            const newCol = [...color];
            newCol[i][j] = "green";
            setColor(newCol);
        } else {
            const newCol = [...color];
            newCol[i][j] = "gray";
            setColor(newCol);
        }
        
    };
    console.log(state);
    console.log(color);

    useEventListener("keypress", onPress);

    return (
        <div className="flex flex-col">
            {state.map((e, ind) => (
                <div className="flex flex-row">
                    {e.split("").map((ele, i) => (
                        <div key={`${ind}-${i}`}>
                            <WordleLetter letter={ele} color={color[ind][i]}/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
