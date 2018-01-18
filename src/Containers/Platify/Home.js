import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  StyleSheet,
  BackHandler,
  ToastAndroid,
  TouchableWithoutFeedback,
  ScrollView,
  NetInfo
} from 'react-native';
import I18n from "../../Assets/strings/i18n";
import Interactable from "react-native-interactable";

import AppIcon from "../../Components/Applcon";
import { fontFamily } from "../../Assets/styles";

const { width, height } = Dimensions.get("window");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 3,
      addressTitle: null,
      addressValue: null
    }
  }

  openDialog(data) {
    // if (this.props.netInfo) {
    //   this.props.navigator.showSnackbar({
    //     text: I18n.t("coming_soon"),
    //     actionText: I18n.t("done_text"),
    //     actionId: "fabClicked",
    //     actionColor: "67e6b1",
    //     textColor: "#6896ec",
    //     backgroundColor: "#000000",
    //     duration: "long"
    //   });
    // } else {
    //   this.props.navigator.showSnackbar({
    //     text: "Internet connectivity unavailable.",
    //     textColor: "#ffffff",
    //     backgroundColor: "#C30021",
    //     duration: "indefinite"
    //   });
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ marginLeft: width / 25, fontSize: 24, fontFamily: fontFamily, fontWeight: "bold", color: "#fbfbfb" }}>{I18n.t("coming_soon_header")}</Text>
          <View style={[styles.headerItem, { elevation: 5, paddingLeft: width / 25, backgroundColor: "#fbfbfb", borderBottomLeftRadius: width / 20, borderTopLeftRadius: width / 20 }]}>
            <View style={{ alignItems: "flex-start", marginRight: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <Text numberOfLines={1} ellipsizeMode={"tail"} style={{ borderWidth: 0, width: width / 4, fontFamily: fontFamily, color: "#7f7f7f", fontWeight: "bold", fontSize: 13 }}>{this.state.addressTitle != null ? this.state.addressTitle.toUpperCase() : "Unknown"}</Text>
              </View>
              <Text numberOfLines={1} ellipsizeMode={"tail"} style={{ borderWidth: 0, width: width / 4, fontFamily: fontFamily, color: "#afafaf", fontSize: width / 35 }}>{this.state.addressValue != null ? this.state.addressValue : "Unknown"}</Text>
            </View>
          </View>
        </View>
        <View style={{ width: width, height: height, marginBottom: height / 15, borderWidth: 0 }}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <View style={{ backgroundColor: "#67e6b1", width: width, paddingLeft: width / 25, paddingRight: width / 25, height: height / 8, alignItems: "center", flexDirection: "row", justifyContent: "space-around" }}>
              <AppIcon title={"Grofers"} icon={require("../../Assets/img/Grofers.png")} onPress={() => { this.openDialog("Groffers"); }} />
              <AppIcon title={"UrbanLadder"} icon={require("../../Assets/img/UrbanLadder.png")} onPress={() => { this.openDialog("Food Panda"); }} />
              <AppIcon title={"Little"} icon={require("../../Assets/img/Little.png")} onPress={() => { this.openDialog("Little"); }} />
              <AppIcon title={"FreshMenu"} icon={require("../../Assets/img/Freshmenu.png")} onPress={() => { this.openDialog("Fresh Menu"); }} />
            </View>
            <View style={{ backgroundColor: "#5ed7be", width: width, paddingLeft: width / 25, paddingRight: width / 25, height: height / 8, alignItems: "center", flexDirection: "row", justifyContent: "space-around" }}>
              <AppIcon title={"BookMyShow"} icon={require("../../Assets/img/BMS.png")} onPress={() => { this.openDialog("Book My Show"); }} />
              <AppIcon title={"Swiggy"} icon={require("../../Assets/img/Swiggy.png")} onPress={() => { this.openDialog("Swiggy"); }} />
              <AppIcon title={"UrbanClap"} icon={require("../../Assets/img/UrbanClap.png")} onPress={() => { this.openDialog("Urban Clap"); }} />
              <AppIcon title={"FoodPanda"} icon={require("../../Assets/img/Foodpanda.png")} onPress={() => { this.openDialog("FoodPanda"); }} />
            </View>
            <View style={{ backgroundColor: "#54c6c9", width: width, paddingLeft: width / 25, paddingRight: width / 25, height: height / 8, alignItems: "center", flexDirection: "row", justifyContent: "space-around" }}>
              <AppIcon title={"Cleartrip"} icon={require("../../Assets/img/Cleartrip.png")} onPress={() => { this.openDialog("Food"); }} />
              <AppIcon title={"Via"} icon={require("../../Assets/img/Via.png")} onPress={() => { this.openDialog("Travel"); }} />
              <AppIcon title={"Bills"} icon={require("../../Assets/img/Bills.png")} onPress={() => { this.openDialog("Bills"); }} />
              <AppIcon title={"Fashion"} icon={require("../../Assets/img/Fashion.png")} onPress={() => { this.openDialog("Fashion"); }} />
            </View>
            <View style={{ backgroundColor: "#52afdb", width: width, paddingLeft: width / 25, paddingRight: width / 25, height: height / 8, alignItems: "center", flexDirection: "row", justifyContent: "space-around" }}>
              <AppIcon title={"Food"} icon={require("../../Assets/img/Food.png")} onPress={() => { this.openDialog("Food"); }} />
              <AppIcon title={"Travel"} icon={require("../../Assets/img/Travel.png")} onPress={() => { this.openDialog("Travel"); }} />
              <AppIcon title={"Hotels"} icon={require("../../Assets/img/Hotels.png")} onPress={() => { this.openDialog("Hotles"); }} />
              <AppIcon title={"Create"} icon={require("../../Assets/img/Create.png")} onPress={() => { this.openDialog("Create"); }} />
            </View>
            <View style={{ backgroundColor: "#6896ec", width: width, paddingLeft: width / 25, paddingRight: width / 25, height: height / 4, justifyContent: "center" }}>
              <Text style={{ fontSize: 24, fontFamily: fontFamily, fontWeight: "bold", color: "#fbfbfb" }}>{I18n.t("live_apps")}</Text>
              <View style={{ width: width / 2.2, height: height / 5.5, alignItems: "center", flexDirection: "row", justifyContent: "space-around", backgroundColor: "transparent" }}>
                <AppIcon title={"Uber"} icon={require("../../Assets/img/uber.png")} onPress={() => {
                  this.props.navigation.navigate("Uber");
                  // if (this.props.netInfo) {
                  //   loadUber();
                  // } else {
                  //   this.props.navigator.showSnackbar({
                  //     text: "Internet connectivity unavailable.",
                  //     textColor: "#ffffff",
                  //     backgroundColor: "#C30021",
                  //     duration: "indefinite"
                  //   });
                  // }
                }} />
                <AppIcon title={"Ola"} icon={require("../../Assets/img/Ola.png")} onPress={() => {
                  this.props.navigation.navigate("Ola")
                  // if (this.props.netInfo) {
                  //   loadOla();
                  // } else {
                  //   this.props.navigator.showSnackbar({
                  //     text: "Internet connectivity unavailable.",
                  //     textColor: "#ffffff",
                  //     backgroundColor: "#C30021",
                  //     duration: "indefinite"
                  //   });
                  // }
                }} />
              </View>
            </View>
            <View style={{ backgroundColor: "#6896ec", width: width, paddingLeft: width / 25, paddingRight: width / 25, height: height / 4, justifyContent: "center" }} />
          </ScrollView>
        </View>
        <Interactable.View
          style={styles.panelContainer}
          ref={(iview) => this.iview = iview}
          verticalOnly={true}
          snapPoints={[{ y: height / 1.35 }, { y: height / 20 }]}
          boundaries={{ top: 20 }}
          initialPosition={{ y: height / 1.35 }}
          dragWithSpring={{ tension: 5000, damping: 0.5 }}
          animatedValueY={this._deltaY}>
          <View style={{ alignItems: "center", opacity: 1, backgroundColor: "transparent", width: width, height: height / 1.2 }}>
            <TouchableWithoutFeedback onPress={() => { this.iview.snapTo({ index: 1 }); }}>
              <Image style={{ justifyContent: "center", alignItems: "center", width: width, height: height / 15 }} source={require("../../Assets/img/Searchtab.png")}>
                {/* <Text onPress={() => { this.iview.snapTo({ index: 1 }); }} style={{ color: "#6f6f6f", marginTop: width / 12, fontFamily: fontFamily }}>{I18n.t("all_apps")}</Text> */}
              </Image>
            </TouchableWithoutFeedback>
            <View style={{ flex: 1, backgroundColor: "#fbfbfb", justifyContent: "center", alignItems: "center", borderWidth: 0, width: width, height: height / 1.3 }}>
              <View style={{ borderWidth: 0.5, borderColor: "#afafaf", backgroundColor: "#ffffff", flexDirection: "row", paddingLeft: width / 20, justifyContent: "flex-start", alignItems: "center", width: width / 1.2, borderRadius: 30 }}>
                <Image source={require("../../Assets/img/Search_Icon.png")} style={{ width: width / 20, height: height / 30 }} />
                <TextInput underlineColorAndroid={"transparent"} placeholder={I18n.t("search_here")} style={{ marginLeft: width / 30, width: width / 1.6, backgroundColor: "#ffffff", fontFamily: fontFamily }} />
              </View>
              <View style={{ marginTop: width / 20, justifyContent: "space-between", borderWidth: 0, borderColor: "#afafaf", flex: 0.9 }}>
                <View style={{ width: width, elevation: 2, flex: 2 }}>
                  <View style={{ width: width, backgroundColor: "#efefef" }}>
                    <Text style={{ paddingLeft: width / 15, fontFamily: fontFamily, color: "#7f7f7f", fontWeight: "bold", fontSize: 14 }}>Food</Text>
                  </View>
                  <View style={{ marginTop: height / 150, flex: 0.9, alignItems: "center", width: width, flexDirection: "row", justifyContent: "space-around" }}>
                    <AppIcon title={"Licious"} icon={require("../../Assets/img/Licious.png")} onPress={() => { this.openDialog("Groffers"); }} />
                    <AppIcon title={"FoodPanda"} icon={require("../../Assets/img/FPNormal.png")} onPress={() => { this.openDialog("Food Panda"); }} />
                    <AppIcon title={"Swiggy"} icon={require("../../Assets/img/SwiggyNormal.png")} onPress={() => { this.openDialog("Swiggy"); }} />
                    <AppIcon title={"FreshMenu"} icon={require("../../Assets/img/FMNormal.png")} onPress={() => { this.openDialog("Fresh Menu"); }} />
                  </View>
                </View>
                <View style={{ width: width, elevation: 2, flex: 2 }}>
                  <View style={{ width: width, backgroundColor: "#efefef" }}>
                    <Text style={{ paddingLeft: width / 15, fontFamily: fontFamily, color: "#7f7f7f", fontWeight: "bold", fontSize: 14 }}>Travel</Text>
                  </View>
                  <View style={{ marginTop: height / 100, flex: 0.9, alignItems: "center", width: width, flexDirection: "row", justifyContent: "space-around" }}>
                    <AppIcon title={"ClearTrip"} icon={require("../../Assets/img/CleartripNormal.png")} onPress={() => { this.openDialog("Groffers"); }} />
                    <AppIcon title={"MakeMyTrip"} icon={require("../../Assets/img/MMTNormal.png")} onPress={() => { this.openDialog("Food Panda"); }} />
                    <AppIcon title={"Yatra"} icon={require("../../Assets/img/Yatra.png")} onPress={() => { this.openDialog("Little"); }} />
                    <AppIcon title={"RedBus"} icon={require("../../Assets/img/RedbusNormal.png")} onPress={() => { this.openDialog("Fresh Menu"); }} />
                  </View>
                </View>
                <View style={{ width: width, elevation: 2, flex: 2 }}>
                  <View style={{ width: width, backgroundColor: "#efefef" }}>
                    <Text style={{ paddingLeft: width / 15, fontFamily: fontFamily, color: "#7f7f7f", fontWeight: "bold", fontSize: 14 }}>Shopping</Text>
                  </View>
                  <View style={{ marginTop: height / 100, flex: 0.9, alignItems: "center", width: width, flexDirection: "row", justifyContent: "space-around" }}>
                    <AppIcon title={"Snapdeal"} icon={require("../../Assets/img/SnapdealNormal.png")} onPress={() => { this.openDialog("Groffers"); }} />
                    <AppIcon title={"Flipkart"} icon={require("../../Assets/img/FKNormal.png")} onPress={() => { this.openDialog("Food Panda"); }} />
                    <AppIcon title={"Grofers"} icon={require("../../Assets/img/GrofersNormal.png")} onPress={() => { this.openDialog("Little"); }} />
                    <AppIcon title={"Voonik"} icon={require("../../Assets/img/VoonikNormal.png")} onPress={() => { this.openDialog("Fresh Menu"); }} />
                  </View>
                </View>
                <View style={{ width: width, elevation: 2, flex: 2 }}>
                  <View style={{ width: width, backgroundColor: "#efefef" }}>
                    <Text style={{ paddingLeft: width / 15, fontFamily: fontFamily, color: "#7f7f7f", fontWeight: "bold", fontSize: 14 }}>Hotels</Text>
                  </View>
                  <View style={{ marginTop: height / 150, flex: 0.9, width: width, alignItems: "center", flexDirection: "row", justifyContent: "space-around" }}>
                    <AppIcon title={"Oyo"} icon={require("../../Assets/img/OyoNormal.png")} onPress={() => { this.openDialog("Groffers"); }} />
                    <AppIcon title={"Airbnb"} icon={require("../../Assets/img/AirbnbNormal.png")} onPress={() => { this.openDialog("Food Panda"); }} />
                    <AppIcon title={"Treebo"} icon={require("../../Assets/img/TreeboNormal.png")} onPress={() => { this.openDialog("Little"); }} />
                    <AppIcon title={"MakeMyTrip"} icon={require("../../Assets/img/MMTNormal.png")} onPress={() => { this.openDialog("Fresh Menu"); }} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Interactable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  header: {
    zIndex: 20,
    elevation: 0,
    backgroundColor: "#67e6b1",
    flexDirection: "row",
    width: width,
    justifyContent: "space-between",
    height: height / 12,
    borderWidth: 0,
    alignItems: "center"
  },
  headerItem: {
    width: width / 3,
    height: height / 18,
    borderWidth: 0,
    flexDirection: "row",
    alignItems: "center"
  },
  panelContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  tabItem: {
    width: width / 7,
    height: height / 17,
    borderTopColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  goButton: {
    width: width / 4,
    height: height / 11,
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
});