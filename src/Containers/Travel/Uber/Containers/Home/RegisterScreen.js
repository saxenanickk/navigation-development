import React from "react";
import { DrawerNavigator, NavigationActions } from 'react-navigation';
import Account from "./Account";
import BookRide from "./BookRide";
import Payment from "./Payment";
import Settings from "./Settings";
import CustomDrawer from "./CustomDrawer";

const UberDrawer = DrawerNavigator({
  "BookRide": {
    screen: BookRide
  },
  "Account": {
    screen: Account,
  },
  "Payment": {
    screen: Payment
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
    return (
      <UberDrawer navigation={this.props.navigation} />
    );
  }
}