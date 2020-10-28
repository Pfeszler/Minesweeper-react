import { createSlice } from "@reduxjs/toolkit"


const gameSlice = createSlice({
    name: "game",
    initialState: {
        started: false,
        fields: [],
    },
    reducers: {
        startGame: state => {
            state.started = true;
        }

    }

});

export const {
    startGame
} = gameSlice.actions;

export const selectGame = state => state.game;
export const selectStarted = state => selectGame(state).started
export const selectFields = state => selectGame(state).fields
export default gameSlice.reducer