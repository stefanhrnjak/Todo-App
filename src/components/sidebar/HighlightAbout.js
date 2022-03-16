import React from "react";

import classes from './Highlight.module.css'

export default function HighlightAbout(props) {

  return (
    <div className={classes.background}
      style={
        !props.onHighlight
          ? { backgroundColor: "rgb(121, 182, 242)" }
          : { backgroundColor: "transparent" }
      }
    >
      {props.children()}
    </div>
  );
}
