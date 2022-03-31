import React from "react";

import classes from './HideBtn.module.css'
import IconChevron from "../icons/IconChevron";

// The show/hide sidebar button
// It re-renders when changing from tasks to about page, so remembering the orientation matters

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
