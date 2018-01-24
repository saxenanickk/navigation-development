import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Cart = ({ navigation }) => (
  <View style={{ backgroundColor: "#fbfbfb", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text onPress={() => navigation.navigate("Ola")}>Cart</Text>
  </View>
);

export default Cart;