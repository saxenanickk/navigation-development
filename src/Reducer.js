import { combineReducers } from "redux";
import { HELLO } from "./Saga";

const initialState = {
  home: null,
  work: null
};

const main = (state = initialState, action) => {
  switch (action.type) {
	case HELLO:
		return {
			...state,
			home: action.payload
		};
  default:
    return state;
  }
};

const second = (state = initialState, action) => {
  switch (action.type) {
	case HELLO:
		return {
			...state,
			home: action.payload
		};
  default:
    return state;
  }
};

const platify = combineReducers({
  main: main,
  second: second
});

export default function reducer(asyncReducers) {
  return combineReducers({
    platify: platify,
    ...asyncReducers
  });
}
