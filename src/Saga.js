import { takeLatest } from "redux-saga/effects";
import I18n from "react-native-i18n";
import { AlertAndroid } from "react-native";

export const NET_INFO = "NET_INFO";
export const NET_INFO_SNACK = "NET_INFO_SNACK";

export const netInfo = (payload) => ({ type: NET_INFO, payload });
export const netInfoSnack = payload => ({ type: NET_INFO_SNACK, payload });

export default function* goappSaga(dispatch) {
  yield takeLatest(NET_INFO_SNACK, handleNetInfo);
}

function* handleNetInfo(action) {
  try {
    if (action.payload.status) {
      AlertAndroid(I18n.t("internet_found"));
    } else if (!action.payload.status) {
      AlertAndroid(I18n.t("internet_not_found"));
    }
  } catch (error) {
    console.log("Error NetInfo: ", error);
  }
}