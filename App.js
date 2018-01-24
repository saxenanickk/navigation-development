import React from "react";
import { Platform, NativeModules } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import Goapp from "./src/";
import reducer from "./src/Reducer";
import goappSaga from "./src/Saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer(), applyMiddleware(sagaMiddleware, logger));
export const runSaga = sagaMiddleware.run;
runSaga(goappSaga);

const asyncReducers = {};

export const getNewReducer = (data, newModuleInfo) => {
  asyncReducers[newModuleInfo.name] = newModuleInfo.reducer;
  store.replaceReducer(reducer(asyncReducers));
};

export default class App extends React.Component {
  constructor() {
    super();
    console.disableYellowBox = true;
    // If we have an Android phone
    if (Platform.OS === "android") {
      langRegionLocale = NativeModules.I18nManager.localeIdentifier || "";
    } else if (Platform.OS === "ios") {
      langRegionLocale = NativeModules.SettingsManager.settings.AppleLocale || "";
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Goapp />
      </Provider>
    );
  }
}
