import { StackNavigator } from "react-navigation";
import Goapp from "./Containers/Goapp";
import Uber from "./Containers/Travel/Uber";
import Ola from "./Containers/Travel/Ola";

const RegisterScreen = StackNavigator({
  Goapp: {
    screen: Goapp,
  },
  Uber: {
    screen: Uber,
  },
  Ola: {
    screen: Ola,
  },
}, {
    headerMode: "none",
  });

export default RegisterScreen;