
import { useDispatch } from "react-redux"
import { startGame, setDimensions, generateFields, addAdjacentFields, resetGame } from "../gameSlice"


const useStartingScreen = () => {
    const dispatch = useDispatch();

    const setNewGame = () => {
        dispatch(setDimensions({ height: 8, width: 8 }));
        dispatch(generateFields())
        dispatch(addAdjacentFields())
    }

    const onStartClick = () => {
        dispatch(startGame());
        setNewGame();

    }

    const onResetClick = () => {
        dispatch(resetGame());
        setNewGame();
    }

    return [onStartClick, onResetClick]
}

export default useStartingScreen