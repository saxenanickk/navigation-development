import { takeEvery, takeLatest, call, put } from "redux-saga/effects";

export const HI = "HI";

export const hi = (payload) => ({ type: HI, payload });

export default function* saga(dispatch) {
	console.log("Started");
	yield takeLatest(HI, handleHi);
}

function* handleHi(action) {
}