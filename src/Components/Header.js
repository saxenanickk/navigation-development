import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Header = props => {
  return (
    <View style={[styles.headerStyle, this.props.headerStyle]}>
      <Text style={[styles.titleStyle, this.props.titleStyle]}>{this.props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    height: width / 15,
    backgroundColor: "#000000"
  },
  titleStyle: {
    color: "#ffffff",
    fontSize: width / 20,
    marginLeft: width / 20
  }
});

export default Header;