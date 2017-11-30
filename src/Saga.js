import { takeEvery, takeLatest, call, put } from "redux-saga/effects";

export const HELLO = "HELLO";

export const hello = (payload) => ({ type: HELLO, payload });

export default function* saga(dispatch) {
	yield takeLatest(HELLO, handleHello);
}

function* handleHello(action) {
}