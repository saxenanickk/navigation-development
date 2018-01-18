import React from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  StyleSheet
} from "react-native";

import { fontFamily } from "../Assets/styles";

const { width, height } = Dimensions.get("window");

const AppIcon = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}>
      <Image source={props.icon} style={styles.iconStyle} />
      <Text style={styles.titleStyle}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    width: width / 4,
    height: width / 6,
    borderWidth: 0
  },
  titleStyle: {
    fontFamily: fontFamily,
    fontSize: width / 30,
    color: "#000000"
  },
  iconStyle: {
    borderColor: "#6f6f6f",
    borderWidth: 0,
    borderRadius: 9,
    width: width / 9,
    height: width / 9
  }
});

export default AppIcon;