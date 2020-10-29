import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { generateMines, markField, plantMines, selectFields, selectStartingId, setStartingId, uncoverField } from "../gameSlice"
import { Button, Grid } from "./styled"


const GameField = () => {

    const fields = useSelector(selectFields);
    const startingId = useSelector(selectStartingId)
    const dispatch = useDispatch();

    const onFirstClick = (id) => {
        dispatch(generateMines({ quantity: 10, id: id }));
        dispatch(plantMines());
        dispatch(setStartingId(id))
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
                    {field.marked ? "!" : field.id} {field.mine ? "@" : ""}
                </Button>
            )
            }
        </Grid>
    )
}

export default GameField