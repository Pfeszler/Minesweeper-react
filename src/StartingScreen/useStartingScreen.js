
import { useDispatch } from "react-redux"
import { startGame, setDimensions, generateFields, addAdjacentFields, resetGame } from "../gameSlice"


const useStartingScreen = () => {
    const dispatch = useDispatch();

    const setNewGame = (height, width) => {
        dispatch(setDimensions({ height: 8, width: 8 }));
        dispatch(generateFields())
        dispatch(addAdjacentFields())
    }

    const onStartClick = (height, width) => {
        dispatch(startGame());
        setNewGame(height, width);

    }

    const onResetClick = (height, width) => {
        dispatch(resetGame());
        setNewGame(height, width);
    }

    return [onStartClick, onResetClick]
}

export default useStartingScreen