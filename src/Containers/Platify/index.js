import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";
import Home from "./Home";
import RecentApps from "./RecentApps";
import Orders from "./Orders";
import Wallet from "./Wallet";
import Cart from "./Cart";

const platify = TabNavigator({
  Wallet: {
    screen: Wallet,
  },
  Orders: {
    screen: Orders,
  },
  Home: {
    screen: Home,
  },
  Recent: {
    screen: RecentApps,
  },
  Cart: {
    screen: Cart,
  },
}, {
    initialRouteName: "Home",
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      indicatorStyle: {
        backgroundColor: "#6896ec",
        height: 5,
        borderRadius: 2
      },
      activeBackgroundColor: "transparent",
      labelStyle: {
        fontSize: 8,
      },
      activeTintColor: '#000000',
      inactiveTintColor: "#afafaf",
      style: {
        borderWidth: 0,
        backgroundColor: "#fbfbfb",
        height: 55
      },
      tabStyle: {
        borderWidth: 0,
        borderColor: "#000000"
      }
    },
  });

export default platify;