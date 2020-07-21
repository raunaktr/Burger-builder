import React from "react";

import burgerLogo from "../../assets/Images/burger.svg";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Baga" />
  </div>
);

export default logo;
