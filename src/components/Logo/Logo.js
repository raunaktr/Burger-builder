import React from "react";

import burgerLogo from "../../assets/Images/burger.svg";
import classes from "./Logo.css";

const logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Baga" />
  </div>
);

export default logo;
