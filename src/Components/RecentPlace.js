import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { fontFamily } from "../../Assets/styles";
import Icon from "./Icon";
const { width, height } = Dimensions.get("window");

const RecentPlace = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
      <View style={[styles.placeStyle, this.props.placeStyle]}>
        <Icon name={this.props.name} size={this.props.size} color={this.props.color} iconType={this.props.iconType} />
      </View>
      <Text style={[styles.placeNameStyle, this.props.placeNameStyle]}>{this.props.placeName || "Unknown"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 4,
    height: width / 4,
    borderRadius: width / 10,
    justifyContent: "center",
    alignItems: "center"
  },
  placeStyle: {
    elevation: 5,
    width: width / 6,
    height: width / 6,
    borderRadius: width / 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  placeNameStyle: {
    fontFamily: fontFamily,
    fontWeight: "bold",
    color: "#000000",
    fontSize: 12
  }
});

export default RecentPlace;