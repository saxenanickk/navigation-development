import React, { Component } from "react";
import {
  Text,
  View
} from "react-native";
import { connect } from "react-redux";

class TrackRide extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>TRACKRIDE</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
  };
}

export default connect(mapStateToProps, null, null, { withRef: true })(TrackRide);