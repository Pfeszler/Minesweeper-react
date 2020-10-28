import React from "react"
import { useSelector } from "react-redux"
import { selectFields } from "../gameSlice"
import { Button, Grid } from "./styled"


const GameField = () => {

    const fields = useSelector(selectFields)

    return (
        <Grid>
            {fields.map((field) =>
                <Button
                    key={field.id}
                >

                </Button>
            )
            }
        </Grid>
    )
}

export default GameField