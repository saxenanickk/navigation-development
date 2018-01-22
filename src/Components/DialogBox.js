import React from "react";
import Dialog from "react-native-dialog";
import { View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

class DialogBox extends React.Component {

  constructor(props) {
    super(props);
    console.log("Dialog");
    this.state = {
      visible: props.visible,
    };
  }

  render() {
    return (
      <View>
        <Dialog.Container visible={this.props.onVisible}>
          <Dialog.Title>Action</Dialog.Title>
          <Dialog.Description>
            Are you sure ?
              </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={this.props.onCancel} />
          <Dialog.Button label="Delete" onPress={this.props.onConfirm} />
        </Dialog.Container>
      </View>
    );
  }
}

export default DialogBox;