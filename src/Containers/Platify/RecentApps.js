import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const RecentApps = ({ navigation }) => (
  <View style={{ backgroundColor: "#fbfbfb", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text onPress={() => navigation.navigate("Home")}>RecentApps</Text>
  </View>
);

export default RecentApps;