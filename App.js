import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import Platify from "./src/RegisterScreen";
import reducer from "./src/Reducer";
import saga from "./src/Saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer(), applyMiddleware(sagaMiddleware, logger));
export const runSaga = sagaMiddleware.run;
runSaga(saga);

const asyncReducers = {};

export const getNewReducer = (data, newModuleInfo) => {
  asyncReducers[newModuleInfo.name] = newModuleInfo.reducer;
  store.replaceReducer(reducer(asyncReducers));
};

export default class App extends React.Component {
  constructor() {
    super();
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={store}>
        <Platify />
      </Provider>
    );
  }
}
