import { View } from "react-native";

const Seperator = props => {
  return (
    <View style={[
      {
        width: this.props.width || 1,
        height: this.props.height || 1,
        backgroundColor: this.props.color
      },
      this.props.style
    ]} />
  );
}

export default Seperator;