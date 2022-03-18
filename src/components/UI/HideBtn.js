import React from "react";

import classes from './HideBtn.module.css'
import IconChevron from "../icons/IconChevron";

export default function HideBtn(props) {
  return (
    <button className={classes.hideBtn} onClick={props.onClick}>
      <IconChevron
        style={
          props.rotate
            ? { transform: "rotate(180deg)" }
            : { transform: "rotate(0deg)" }
        }
      />
    </button>
  );
}
