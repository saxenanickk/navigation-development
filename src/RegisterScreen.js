import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";
import Platify from "./Containers/Platify";
import Uber from "./Containers/Travel/Uber";
import Ola from "./Containers/Travel/Ola";

const App = StackNavigator({
  "Platify": {
    screen: Platify,
  },
  "Uber": {
    screen: Uber,
  },
  "Ola": {
    screen: Ola
  }
}, {
  headerMode: "none"
});

export default App;