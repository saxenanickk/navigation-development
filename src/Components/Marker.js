import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ToastAndroid
} from "react-native";
import MapView from "react-native-maps";
import { fontFamily } from "../../Assets/styles";

const { width, height } = Dimensions.get("window");

const Marker = props => {
  return (
    <MapView.Marker
      onPress={() => ToastAndroid.show("Feature is not enabled in Demo App.", ToastAndroid.SHORT)}
      coordinate={this.props.latlng}
      onDragEnd={this.props.onDrag}>
      {this.props.markerType == "destination" ?
        <View style={styles.container}>
          <View style={[styles.destinationTextMarker]}>
            <Text style={styles.destinationText} numberOfLines={1} ellipsizeMode={"tail"}>{this.props.locationText}</Text>
          </View>
          <Image source={require("../../../assets/DestinationPointBlackSquareUber.png")} style={{ width: 15, height: 15 }}>
            <Text style={{ width: 0, height: 0 }}>{Math.random()}</Text>
          </Image>
        </View> :
        <View style={styles.container}>
          <View style={[styles.originTextMarker]}>
            <View style={[styles.etaContainer]}>
              <Text style={{ fontFamily: fontFamily, color: "#ffffff" }}>
                {isNaN(this.props.eta) ?
                  this.props.eta
                  : this.props.eta + " min"}
              </Text>
            </View>
            <Text style={[styles.originText]} numberOfLines={1} ellipsizeMode={"tail"}>{this.props.locationText}</Text>
          </View>
          <Image source={require("../../../assets/OriginPointBlackCircleUber.png")} style={{ width: 15, height: 15 }}>
            <Text style={{ width: 0, height: 0 }}>{Math.random()}</Text>
          </Image>
        </View>}
    </MapView.Marker>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
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