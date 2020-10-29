import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectFields, uncoverField } from "../gameSlice"
import { Button, Grid } from "./styled"


const GameField = () => {

    const fields = useSelector(selectFields);
    const dispatch = useDispatch();

    const onLeftClick = (id) => {
        const i = id - 1;
        dispatch(uncoverField(i));
    };

    return (
        <Grid>
            {fields.map((field) =>
                <Button
                    key={field.id}
                    disabled={field.uncovered}
                    onClick={() => onLeftClick(field.id)}
                >
                    {field.id}
                </Button>
            )
            }
        </Grid>
    )
}

export default GameField