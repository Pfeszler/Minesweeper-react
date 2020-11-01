import React from "react"
import { useSelector } from "react-redux"
import {
    selectFields,
    selectStartingId,
    selectWin,
} from "../gameSlice"
import { Button, Grid } from "./styled"
import useGameField from "./useGameField"


const GameField = () => {

    const fields = useSelector(selectFields);
    const startingId = useSelector(selectStartingId);
    const win = useSelector(selectWin);

    const [onFirstClick, onLeftClick, onRightClick] = useGameField()

    return (
        <>
            {win ?
                <h1>You Won</h1> :
                <Grid>
                    {fields.map((field) =>
                        <Button
                            key={field.id}
                            disabled={field.uncovered}
                            onClick={startingId ? () => onLeftClick(field.id) : () => onFirstClick(field.id)}
                            onContextMenu={(event) => onRightClick(event, field.id)}
                        >
                            {field.uncovered ? (field.mine ? "!" : (field.minesAround === 0 ? "" : field.minesAround)) : ""}
                            {field.marked ? "@" : ""}
                        </Button>
                    )
                    }
                </Grid>
            }
        </>
    )
}

export default GameField