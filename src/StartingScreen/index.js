import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectStarted, setDimensions, startGame } from "../gameSlice"


const StartingScreen = () => {

    const started = useSelector(selectStarted);
    const dispatch = useDispatch();

    const onStartClick = () => {
        dispatch(startGame());
        dispatch(setDimensions({ height: 8, width: 8 }));
    }

    return (
        <>
            { started ?
                <button
                >
                    reset
        </button > :
                <button
                    onClick={() => onStartClick()}
                >
                    start
        </button>
            }
        </>
    )
}

export default StartingScreen 