import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { markField, selectFields, uncoverField } from "../gameSlice"
import { Button, Grid } from "./styled"


const GameField = () => {

    const fields = useSelector(selectFields);
    const dispatch = useDispatch();

    const onLeftClick = (id) => {
        const i = id - 1;
        dispatch(uncoverField(i));
    };

    const onRightClick = (event,id) => {
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
                    onClick={() => onLeftClick(field.id)}
                    onContextMenu={(event) => onRightClick(event, field.id)}
                >
                    {field.marked ? "!" : field.id}
                </Button>
            )
            }
        </Grid>
    )
}

export default GameField