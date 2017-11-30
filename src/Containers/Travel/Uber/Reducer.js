import { combineReducers } from "redux";
import { BYE } from "./Saga";

const initialState = {
  place: null,
  id: null
};

const main = (state = initialState, action) => {
  switch (action.type) {
	case BYE:
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
