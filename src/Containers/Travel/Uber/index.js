import App from "./App";
import React from "react";
import { runSaga } from "../../../../App";
import saga from "./Saga";
import { connect } from "react-redux";
import reducer from "./Reducer";
import * as Actions from "../../../Saga";
import { getNewReducer } from "../../../../App";

class Uber extends React.Component {
  constructor(props) {
    super(props);
    getNewReducer(props.state, { name: "uber", reducer: reducer });
    runSaga(saga);
    console.disableYellowBox = true;
  }

  componentWillUnmount() {
    console.log("Uber Exit");
  }

  render() {
    return (
      <App navigation={this.props.navigation} />
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state.account,
    state: state
  };
}

export default connect(mapStateToProps, null, null, { withRef: true })(Uber);