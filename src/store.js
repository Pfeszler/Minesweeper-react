import { configureStore } from "@reduxjs/toolkit"
import gameReducer from "./gameSlice"
import createSagaMiddleware from "redux-saga"
import { gameSaga } from "./gameSaga"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        game: gameReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(gameSaga)


export default store