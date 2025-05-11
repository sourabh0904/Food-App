import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

export default ProfileClass;
