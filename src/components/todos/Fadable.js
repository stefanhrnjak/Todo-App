import React, { useState } from "react";

import classes from "./TodoItem.module.css";

// Fades in and out todo list items on page when added/removed

export default function Fadable(props) {
  const [fadeOut, setFadeOut] = useState(false);

  const onStartFadeout = () => {
    setFadeOut(true);

    setTimeout(() => {
      props.onFinishFadeout();
    }, props.timeout);
  };

  return (
    <li
      className={classes.li}
      style={
        fadeOut
          ? { animation: `fadeout ${props.timeout / 1000}s linear forwards` }
          : { animation: `fadein  ${props.timeout / 1000}s linear forwards` }
      }
    >
      {props.children({ onStartFadeout })}
    </li>
  );
}
