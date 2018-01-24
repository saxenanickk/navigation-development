import React, { Component } from "react";
import {
  Text,
  View
} from "react-native";
import { connect } from "react-redux";

class Settings extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>SETTINGS</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
  };
}

export default connect(mapStateToProps, null, null, { withRef: true })(Settings);