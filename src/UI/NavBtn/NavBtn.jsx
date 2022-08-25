import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import classes from "./NavBtn.module.css";
const NavBtn = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className={classes.btn}
    >
      <span
        style={{ backgroundColor: dotColor }}
        className={classes["bg__icon"]}
      ></span>
      {icon}
    </button>
  </TooltipComponent>
);

export default NavBtn;
