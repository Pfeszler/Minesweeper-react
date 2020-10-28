import React from "react"
import { useSelector } from "react-redux"
import { selectStarted } from "../gameSlice"


const StartingScreen = () => {

    const started = useSelector(selectStarted)

    return (
        <>
        { started ?
        <button>
            reset
        </button > :
        <button>
            start
        </button>
    }
        </>
    )
}

export default StartingScreen 