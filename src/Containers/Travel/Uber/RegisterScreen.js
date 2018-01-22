import { StackNavigator } from "react-navigation";

import Auth from "./Containers/Auth";
import Home from "./Containers/Home";
import ChooseRide from "./Containers/ChooseRide";
import TrackRide from "./Containers/TrackRide";
import CustomDrawer from "./CustomDrawer";

const RegisterScreen = StackNavigator({
  "Auth": {
    screen: Auth
  },
  "Home": {
    screen: Home
  },
  "ChooseRide": {
    screen: ChooseRide
  },
  "TrackRide": {
    screen: TrackRide
  }
}, {
    headerMode: "none"
  });

export default RegisterScreen;