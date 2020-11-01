import { put, select, takeLatest, } from "redux-saga/effects"
import { selectStartingId, setStartingId, uncoverField, } from "./gameSlice"

function* setStartingIDhandler() {
    const id = yield select(selectStartingId)
    yield put(uncoverField(id - 1))
}

export function* gameSaga() {
    yield takeLatest(setStartingId.type, setStartingIDhandler)
}