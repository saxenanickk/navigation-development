import {
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Platform
} from "react-native";
const { width, height } = Dimensions.get("window");

const RecentPlace = props => {
  return (
    <View style={styles.container}>
      {Platform.OS == "ios" ?
        <ActivityIndicator color={"#3FAAD3"} />
        : <ActivityIndicator color={"#3FAAD3"} size={50} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    position: "absolute",
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    opacity: 0.5
  }
});

export default RecentPlace;