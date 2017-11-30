import React from "react";
import {
	ScrollView, 
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions
} from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import * as Actions from "./Saga";

const { width, height } = Dimensions.get("window");
class CustomDrawerContentComponent extends React.Component {
	constructor(props) {
		super(props);
		console.log("Drawer: ", props);
		props.dispatch(Actions.bye("Nikhil"));
	}

	render() {
		return (
			<ScrollView>
				{/* <Text>{this.props.val!= null ? this.props.val : "NA"}</Text> */}
				<SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
					{this.props.items.map((data, key) => {
						if(data.key == "BookRide") {
							return(null);
						} else {
							return(
								<TouchableOpacity key={key} onPress={() => this.props.navigation.navigate(data.routeName)}>
									<View style={{ flex: 1, height: height/12, justifyContent: "center" }}>
										<Text>{data.key}</Text>
									</View>
								</TouchableOpacity>
							);
						}
					})}
					{/* <DrawerItems {this.props}>
						
					</DrawerItems> */}
				</SafeAreaView>
			</ScrollView>
		);
	}
}

function mapStateToProps(state) {
  console.log(state);
  return {
		val: state
	};
}

export default connect(mapStateToProps, null, null, { withRef: true })(CustomDrawerContentComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});