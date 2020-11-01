import React from "react"
import { useSelector } from "react-redux"
import { selectStarted } from "../gameSlice"
import useStartingScreen from "./useStartingScreen";


const StartingScreen = () => {

    const started = useSelector(selectStarted);
    const [onStartClick, onResetClick] = useStartingScreen()


    return (
        <>
            { started ?
                <button
                    onClick={() => onResetClick()}
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