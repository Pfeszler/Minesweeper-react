import { createSlice } from "@reduxjs/toolkit"
import { setAdjacentFields } from "./setAdjacentFields";


const gameSlice = createSlice({
    name: "game",
    initialState: {
        started: false,
        dimensions: {
            width: 0,
            height: 0,
            area: 0,
            adjacentFields: [],

        },
        fields: [],
        startingId: false,
        mines: {
            quantity: 0,
            ids: [],
        },
        uncoveredFields: [],
        win: false
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
                    marked: false,
                    mine: false,
                    adjacentFields: [],
                    minesAround: 0
                }
                );
            };

        },
        addAdjacentFields: (state) => {
            const fields = state.fields;
            const dimensions = state.dimensions;
            fields.forEach((field) => {
                field.adjacentFields = setAdjacentFields(dimensions, field);
            });
        },
        setStartingId: (state, { payload }) => {
            state.startingId = payload;
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
        setMinesAround: (state) => {
            const fields = state.fields
            const minedFields = fields.filter(({ mine }) => mine === true)

            fields.forEach((field) => {
                let minesAroundList = []
                field.adjacentFields.forEach((number) => {
                    const mineAround = minedFields.filter(({ id }) => id === number);
                    if (mineAround.length > 0) {
                        minesAroundList.push(mineAround)
                    }
                })
                field.minesAround = minesAroundList.length
            })
        },
        uncoverField: (state, { payload }) => {
            const i = payload
            state.fields[i].uncovered = true;
            state.uncoveredFields.push(state.fields[i].id)
        },
        uncoverSafeFields: (state, { payload }) => {
            const fields = state.fields;
            const i = payload;
            fields[i].adjacentFields.forEach((number) => {
                const adjacenField = fields.find(({ id }) => id === number);
                adjacenField.uncovered = true;
                state.uncoveredFields.push(adjacenField.id)
            })
        },
        uncoverWhenSomethingUncovered: (state) => {
            const fields = state.fields
            fields.forEach((field) => {
                if (field.mine === false && field.uncovered === false) {
                    let adjacentList = []
                    field.adjacentFields.forEach((number) => {
                        const adjacenField = fields.find(({ id }) => id === number)
                        adjacentList.push(adjacenField)
                    })
                    const adjacentSafeFields = adjacentList.find(({ mine, uncovered, minesAround }) => (
                        mine === false && uncovered === true && minesAround === 0))
                    if (adjacentSafeFields !== undefined) {
                        field.uncovered = true
                        state.uncoveredFields.push(field.id)
                    }
                }
            });

        },
        markField: (state, { payload }) => {
            const i = payload;
            state.fields[i].marked = !state.fields[i].marked;
        },
        setWin: (state) => {
            const fields = state.fields
            const markedMines = fields.filter(({ marked, mine }) => marked === true && mine && true)
            const minesQuantity = state.mines.quantity
            if (markedMines.length === minesQuantity) {
                state.win = true
            }
        },
        resetGame: (state) => {
            state.fields = []
            state.mines = {
                quantity: 0,
                ids: [],
            };
            state.uncoveredFields = [];
            state.startingId = undefined;
            state.win = false
        }
    }
});

export const {
    startGame,
    setDimensions,
    generateFields,
    addAdjacentFields,
    setStartingId,
    generateMines,
    plantMines,
    setMinesAround,
    uncoverField,
    uncoverSafeFields,
    uncoverWhenSomethingUncovered,
    markField,
    setWin,
    resetGame
} = gameSlice.actions;

export const selectGame = state => state.game;
export const selectStarted = state => selectGame(state).started
export const selectDimensions = state => selectGame(state).dimensions
export const selectFields = state => selectGame(state).fields
export const selectStartingId = state => selectGame(state).startingId;
export const selectMines = state => selectGame(state).mines;
export const selectUncoveredFields = state => selectGame(state).uncoveredFields
export const selectWin = state => selectGame(state).win
export default gameSlice.reducer