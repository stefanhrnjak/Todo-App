import React from "react";

import classes from "./Icons.module.css";

export default function IconChevron(props) {
  return (
    <svg
      className={classes.iconChevron}
      style={props.style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <title>chevron-left</title>
      <path d="M12.452 4.516c0.446 0.436 0.481 1.043 0 1.576l-3.747 3.908 3.747 3.908c0.481 0.533 0.446 1.141 0 1.574-0.445 0.436-1.197 0.408-1.615 0-0.418-0.406-4.502-4.695-4.502-4.695-0.223-0.217-0.335-0.502-0.335-0.787s0.112-0.57 0.335-0.789c0 0 4.084-4.287 4.502-4.695s1.17-0.436 1.615 0z"></path>
    </svg>
  );
}