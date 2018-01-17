import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import MapView from "react-native-maps";
import { fontFamily } from "../../Assets/styles";

const { width, height } = Dimensions.get("window");

const Marker = props => {
  return (
    <MapView.Marker
      onPress={() => alert("Hey")}
      coordinate={this.props.latlng}
      onDragEnd={this.props.onDrag}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.destinationText} numberOfLines={1} ellipsizeMode={"tail"}>{this.props.locationText}</Text>
        <Image source={require("../../../assets/DestinationPointBlackSquareUber.png")} style={{ width: 15, height: 15 }}>
          <Text style={{ width: 0, height: 0 }}>{Math.random()}</Text>
        </Image>
      </View>
    </MapView.Marker>
  );
}

const styles = StyleSheet.create({
  originTextMarker: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    elevation: 5,
    width: width / 3,
    height: 30,
    backgroundColor: "#ffffff"
  },
  destinationTextMarker: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 2,
    elevation: 5,
    width: width / 3,
    height: 30,
    backgroundColor: "#ffffff"
  },
  etaContainer: {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    width: width / 8,
    height: 30,
    backgroundColor: "#000000"
  },
  originText: {
    color: "#000000",
    fontSize: height / 50,
    marginLeft: 5,
    marginRight: 5,
    width: 4.5 * width / 24,
    fontFamily: fontFamily
  },
  destinationText: {
    color: "#000000",
    fontSize: height / 50,
    fontFamily: fontFamily
  }
});