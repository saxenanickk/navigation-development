import { combineReducers } from "redux";
import { NET_INFO } from "./Saga";

const initialState = {
  netConnectivity: null
}

const netInfo = (state = initialState, action) => {
  switch (action.type) {
    case NET_INFO:
      return {
        ...state,
        netConnectivity: action.payload
      };
    default:
      return state;
  }
};

export default function reducer(asyncReducers) {
  return combineReducers({
    goapp: netInfo,
    ...asyncReducers
  });
}
