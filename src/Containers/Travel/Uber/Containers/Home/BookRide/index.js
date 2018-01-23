import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { DrawerNavigator, NavigationActions } from 'react-navigation';
import Settings from "../Account/Settings";
import CustomDrawer from "../CustomDrawer";

const { width, height } = Dimensions.get("window");

export default class BookRide extends React.Component {
  constructor(props) {
    super(props);
    console.log("Book Ride: ", props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <TouchableOpacity onPress={() => {
          console.log(this.props);
          this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: "Platify" })
            ]
          }));
        }}>
          <View style={{ width: width, height: height / 10, backgroundColor: "#000000" }} />
        </TouchableOpacity>
      </View>
    );
  }
}