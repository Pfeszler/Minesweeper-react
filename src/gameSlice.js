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
        startingId: false,
        mines: {
            quantity: 0,
            ids: [],
            marked: [],
        },
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
        setStartingId: (state, { payload }) => {
            state.startingId = payload
        },
        generateMines: ({ mines, dimensions }, { payload }) => {
            const area = dimensions.area;
            mines.quantity = payload.quantity;
            const id = payload.id;
            let i;
            let mineId = id;
            while (mineId === id) {
                mineId = Math.floor((Math.random() * area) + 1);
            };
            mines.ids.push(mineId);
            for (i = 1; i < payload.quantity; i++) {
                mineId = Math.floor((Math.random() * area) + 1);
                while (mineId === id || mines.ids.includes(mineId)) {
                    mineId = Math.floor((Math.random() * area) + 1);
                }
                mines.ids.push(mineId);

            }
        },
        plantMines: ({ mines, fields }) => {
            fields.forEach((field) => {
                if (mines.ids.includes(field.id)) {
                    field.mine = true;
                }
            })
        },
        uncoverField: (state, { payload }) => {
            const i = payload
            state.fields[i].uncovered = true;
        },
        markField: (state, { payload }) => {
            const i = payload;
            const mines = state.mines;
            state.fields[i].marked = !state.fields[i].marked;
            if (state.fields[i].mine === true && !(mines.marked.includes(state.fields[i].id))) {
                mines.marked.push(state.fields[i])
            };
        }

    }
});

export const {
    startGame,
    setDimensions,
    generateFields,
    setStartingId,
    generateMines,
    plantMines,
    uncoverField,
    markField,
} = gameSlice.actions;

export const selectGame = state => state.game;
export const selectStarted = state => selectGame(state).started
export const selectDimensions = state => selectGame(state).dimensions
export const selectFields = state => selectGame(state).fields
export const selectStartingId = state => selectGame(state).startingId;
export const selectMines = state => selectGame(state).mines;
export default gameSlice.reducer