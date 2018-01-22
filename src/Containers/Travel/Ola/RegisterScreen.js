import { StackNavigator } from "react-navigation";

import Auth from "./Containers/Auth";
import BookRide from "./Containers/BookRide";
import ChooseRide from "./Containers/ChooseRide";
import TrackRide from "./Containers/TrackRide";

const RegisterScreen = StackNavigator({
  "Auth": {
    screen: Auth
  },
  "BookRide": {
    screen: BookRide
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