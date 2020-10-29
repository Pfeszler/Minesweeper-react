import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { generateMines, markField, plantMines, selectFields, selectStartingId, setMinesAround, setStartingId, uncoverField } from "../gameSlice"
import { Button, Grid } from "./styled"


const GameField = () => {

    const fields = useSelector(selectFields);
    const startingId = useSelector(selectStartingId)
    const dispatch = useDispatch();

    const onFirstClick = (id) => {
        const i = id - 1;
        dispatch(generateMines({ quantity: 10, id: id }));
        dispatch(plantMines());
        dispatch(setMinesAround())
        dispatch(uncoverField(i));
        dispatch(setStartingId(id));
    };

    const onLeftClick = (id) => {
        const i = id - 1;
        dispatch(uncoverField(i));
    };

    const onRightClick = (event, id) => {
        event.preventDefault()
        const i = id - 1;
        dispatch(markField(i))
    }

    return (
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
    )
}

export default GameField