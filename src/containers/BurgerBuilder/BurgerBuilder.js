import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { ...props };
  //   }
  state = {
    ingredients: {
      salad: 1,
      bacon: 0,
      cheese: 2,
      meat: 1,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
