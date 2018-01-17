import { View } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

const Icon = props => {
  return (
    <View>
      {this.props.iconType == "font_awesome" ?
        <FontAwesomeIcon
          style={this.props.style}
          name={this.props.iconName}
          size={this.props.iconSize}
          color={this.props.iconColor} />
        : this.props.iconType == "material" ?
          <MaterialIcon
            style={this.props.style}
            name={this.props.iconName}
            size={this.props.iconSize}
            color={this.props.iconColor} />
          : this.props.iconType == "simple_line" ?
            <SimpleLineIcon
              style={this.props.style}
              name={this.props.iconName}
              size={this.props.iconSize}
              color={this.props.iconColor} /> : null}
    </View>
  );
}

export default Icon;