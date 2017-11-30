import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

export default class Settings extends React.Component {

	static navigationOptions = {
		drawerLockMode: "locked-closed"
	};

	constructor(props) {
		super(props);
		console.log("Settings: ", props);
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Settings</Text>
			</View>
		);
	}
}