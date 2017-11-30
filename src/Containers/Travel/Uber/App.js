import React from 'react';
import { StackNavigator } from "react-navigation";
import BookRideDrawer from "./Ride/BookRideDrawer";
import Settings from "./Account/Settings";
import CustomDrawer from "./CustomDrawer";

const UberStack = StackNavigator({
  "BookRideDrawer": {
    screen: BookRideDrawer
  },
  "ChooseRide": {
    screen: Settings
  },
  "TrackRide": {
    screen: Settings
  },
  "Summary": {
    screen: Settings
  }
}, {
  headerMode: "none"
});

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <UberStack nav={this.props.navigation}/>
    );
  }

}