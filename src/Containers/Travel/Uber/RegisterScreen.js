import { StackNavigator } from "react-navigation";

import Auth from "./Containers/Auth";
import Home from "./Containers/Home";
import ChooseRide from "./Containers/ChooseRide";
import TrackRide from "./Containers/TrackRide";

const RegisterScreen = StackNavigator({
  "Home": {
    screen: Home
  },
  "Auth": {
    screen: Auth
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