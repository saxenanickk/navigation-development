import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

const { width, height } = Dimensions.get("window");
export default class BookRide extends React.Component {
	constructor(props) {
		super(props);
		console.log("Book Ride: ", props);
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
				<View style={{ width: width, height: height/10, backgroundColor: "#000000" }}/>
			</View>
		);
	}
}