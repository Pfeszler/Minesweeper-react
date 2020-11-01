import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {
    generateMines,
    markField,
    plantMines,
    resetGame,
    selectFields,
    selectUncoveredFields,
    setMinesAround,
    setStartingId,
    setWin,
    uncoverField,
    uncoverSafeFields,
    uncoverWhenSomethingUncovered
} from "../gameSlice";

const useGameField = () => {
    const dispatch = useDispatch();

    const uncoveredField = useSelector(selectUncoveredFields);
    const fields = useSelector(selectFields)

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

    return [onFirstClick, onLeftClick, onRightClick]
}

export default useGameField