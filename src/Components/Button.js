import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { fontFamily } from "../../Assets/styles";
const { width, height } = Dimensions.get("window");

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.container, this.props.style]}
      onPress={this.props.onPress}>

      {/* Left Icon if available */}
      {this.props.leftIcon ? <Text></Text> : null}

      <View>
        {/* Button Title */}
        <Text style={[styles.title_style, this.props.title_style]}>
          {this.props.title}
        </Text>

        {/* Button Subtitle if available */}
        {this.props.subtitle != null ?
          <Text style={[styles.subtitle_style, this.props.subtitle_style]}>
            {this.props.subtitle}
          </Text>
          : null}
      </View>

      {/* Right Icon if available */}
      {this.props.rightIcon ? <Text></Text> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: width / 1.5,
    height: height / 11,
    paddingLeft: 10,
    alignItems: "center",
  },
  title_style: {
    color: "#000000",
    fontSize: width / 20,
    fontFamily: fontFamily,
    fontWeight: "100",
  },
  subtitle_style: {
    color: "#000000",
    fontSize: width / 15,
    fontFamily: fontFamily,
    fontWeight: "100",
  }
});

export default Button;