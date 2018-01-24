import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Orders = ({ navigation }) => (
  <View style={{ backgroundColor: "#fbfbfb", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text onPress={() => navigation.navigate("Home")}>Orders</Text>
  </View>
);

export default Orders;