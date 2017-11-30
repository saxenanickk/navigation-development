import React from 'react';
import { DrawerNavigator } from "react-navigation";
import BookRide from "./Ride/BookRide";
import Settings from "./Account/Settings";
import CustomDrawer from "./CustomDrawer";

const App = DrawerNavigator({
  "BookRide": {
    screen: BookRide,
  },
  "Payment": {
    screen: Settings,
  },
  "Your Trips": {
    screen: Settings,
  },
  "Help": {
    screen: Settings,
  },
  "Free Rides": {
    screen: Settings,
  },
  "Settings": {
    screen: Settings,
  },
}, {
	contentComponent: CustomDrawer
});

export default App;