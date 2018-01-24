import React from 'react';
import RegisterScreen from "./RegisterScreen";

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RegisterScreen nav={this.props.nav} />
    );
  }
}