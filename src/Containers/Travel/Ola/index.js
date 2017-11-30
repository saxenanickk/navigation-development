import App from "./App";
import React from "react";
import { runSaga } from "../../../../App";
import saga from "./Saga";
import { connect } from "react-redux";
import reducer from "./Reducer";
import * as Actions from "../../..//Saga";
import { getNewReducer } from "../../../../App";

class Ola extends React.Component {
	constructor(props) {
		super(props);
		getNewReducer(props.state, {name: "ola", reducer: reducer});
		runSaga(saga);
		console.disableYellowBox = true;
	}

	render() {
		return(
			<App/>
		);
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
		account: state.account,
		state: state
	};
}

export default connect(mapStateToProps, null, null, { withRef: true })(Ola);