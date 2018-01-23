import { StackNavigator } from "react-navigation";

import Auth from "./Containers/Auth";
import BookRide from "./Containers/BookRide";
import ChooseRide from "./Containers/ChooseRide";
import TrackRide from "./Containers/TrackRide";
import Summary from "./Containers/Summary";

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
  },
  "Summary": {
    screen: Summary
  }
}, {
    headerMode: "none"
  });

export default RegisterScreen;