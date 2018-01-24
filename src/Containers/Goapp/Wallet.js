import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Wallet = ({ navigation }) => (
  <View style={{ backgroundColor: "#fbfbfb", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text onPress={() => navigation.navigate("Home")}>Wallet</Text>
  </View>
);

export default Wallet;