import { combineReducers } from "redux";
import { HI } from "./Saga";

const initialState = {
  place: null,
  id: null
};

const main = (state = initialState, action) => {
  switch (action.type) {
	case HI:
		return {
			...state,
			place: action.payload
		};
  default:
    return state;
  }
};

export default reducer = combineReducers({
  myPlace: main
});
