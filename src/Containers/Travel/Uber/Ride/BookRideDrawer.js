import React from "react";
import { DrawerNavigator, NavigationActions } from 'react-navigation';
import BookRide from "./BookRide";
import Settings from "../Account/Settings";
import CustomDrawer from "../CustomDrawer";

const UberDrawer = DrawerNavigator({
  "BookRide": {
		screen: BookRide
  },
  "Payment": {
    screen: Settings
  },
  "Your Trips": {
    screen: Settings
  },
  "Help": {
    screen: Settings
  },
  "Free Rides": {
    screen: Settings
  },
  "Settings": {
    screen: Settings
  },
}, {
	contentComponent: CustomDrawer
});

export default class BookRideDrawer extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return(
			<UberDrawer/>
		);
	}
}