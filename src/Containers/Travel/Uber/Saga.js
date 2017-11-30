import { takeEvery, takeLatest, call, put } from "redux-saga/effects";

export const BYE = "BYE";

export const bye = (payload) => ({ type: BYE, payload });

export default function* saga(dispatch) {
	console.log("Started");
	yield takeLatest(BYE, handleBye);
}

function* handleBye(action) {
}