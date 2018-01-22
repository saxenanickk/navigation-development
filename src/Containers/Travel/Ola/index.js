import React from "react";
import { connect } from "react-redux";

import App from "./App";
import saga from "./Saga";
import reducer from "./Reducer";
import * as Actions from "../../..//Saga";
import { runSaga } from "../../../../App";
import { getNewReducer } from "../../../../App";

class Ola extends React.Component {
	constructor(props) {
		super(props);
		getNewReducer(props.state, { name: "ola", reducer: reducer });
		runSaga(saga);
		console.disableYellowBox = true;
	}

	render() {
		return (
			<App />
		);
	}
}

function mapStateToProps(state) {
	return {
		account: state.account,
		state: state
	};
}

export default connect(mapStateToProps, null, null, { withRef: true })(Ola);