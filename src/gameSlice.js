import { createSlice } from "@reduxjs/toolkit"


const gameSlice = createSlice({
    name: "game",
    initialState: {
        started: false,
        dimensions: {
            width: 0,
            height: 0,
            area: 0,
        },
        fields: [],
    },
    reducers: {
        startGame: state => {
            state.started = true;
        },
        setDimensions: (state, { payload }) => {
            state.dimensions.height = payload.height;
            state.dimensions.width = payload.width;
            state.dimensions.area = payload.width * payload.height
        },

    }

});

export const {
    startGame,
    setDimensions,
} = gameSlice.actions;

export const selectGame = state => state.game;
export const selectStarted = state => selectGame(state).started
export const selectDimensions = state => selectGame(state).dimensions
export const selectFields = state => selectGame(state).fields
export default gameSlice.reducer