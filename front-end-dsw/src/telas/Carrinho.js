import React, { Component } from 'react';
import UserProfile from "./Usuario.js";

class Page2 extends Component {

  componentWillMount(){
      console.log(UserProfile.getCarrinho());
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Page2;
