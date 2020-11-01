import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    generateMines,
    markField,
    plantMines,
    resetGame,
    selectFields,
    selectStartingId,
    selectUncoveredFields,
    selectWin,
    setMinesAround,
    setStartingId,
    setWin,
    uncoverField,
    uncoverSafeFields,
    uncoverWhenSomethingUncovered
} from "../gameSlice"
import { Button, Grid } from "./styled"


const GameField = () => {

    const fields = useSelector(selectFields);
    const startingId = useSelector(selectStartingId);
    const uncoveredField = useSelector(selectUncoveredFields);
    const win = useSelector(selectWin);

    const dispatch = useDispatch();

    useEffect(() => { dispatch(uncoverWhenSomethingUncovered()) }, [uncoveredField, dispatch])

    const onFirstClick = (id) => {
        dispatch(generateMines({ quantity: 10, id: id }));
        dispatch(plantMines());
        dispatch(setMinesAround())
        dispatch(setStartingId(id));
    };

    const onLeftClick = (id) => {
        const i = id - 1;
        dispatch(uncoverField(i));
        if (fields[i].mine) {
            alert("przegrałeś")
            dispatch(resetGame())
        }
        if (fields[i].minesAround === 0 && fields[i].mine === false) {
            dispatch(uncoverSafeFields(i))
        }

    };

    const onRightClick = (event, id) => {
        event.preventDefault()
        const i = id - 1;
        dispatch(markField(i))
        dispatch(setWin())
    }

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