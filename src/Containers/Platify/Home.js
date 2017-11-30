import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Home: ", props);
  }

  render() {
    return (
      <View style={{ backgroundColor: "#fbfbfb", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => this.props.navigation.navigate("Uber")}>Open Uber</Text>
      </View>
    );
  }
}