import React, { Component } from "react";
import {
  Text,
  View
} from "react-native";
import { connect } from "react-redux";

class Summary extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>SUMMARY</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
  };
}

export default connect(mapStateToProps, null, null, { withRef: true })(Summary);