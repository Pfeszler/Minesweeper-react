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
            state.dimensions.area = payload.width * payload.height;
        },
        generateFields: (state) => {
            const dimensions = state.dimensions;
            let i;
            for (i = 1; i < dimensions.area + 1; i++) {
                state.fields.push({
                    id: i,
                    uncovered: false,
                    marked: false
                }
                );
            };

        },
        uncoverField: (state, { payload }) => {
            const i = payload
            state.fields[i].uncovered = true
        },
        markField: (state, { payload }) => {
            const i = payload
            state.fields[i].marked = !state.fields[i].marked
        }

    }
});

export const {
    startGame,
    setDimensions,
    generateFields,
    uncoverField,
    markField
} = gameSlice.actions;

export const selectGame = state => state.game;
export const selectStarted = state => selectGame(state).started
export const selectDimensions = state => selectGame(state).dimensions
export const selectFields = state => selectGame(state).fields
export default gameSlice.reducer