import React from "react";

import classes from "./TodoItem.module.css";

import IconPlus from "../icons/IconPlus";

// Outputs each individual list item

export default function TodoItem(props) {
  return (
    <>
      <button className={classes.btn} onClick={props.onRemoveItem}>
        <IconPlus />
      </button>

      <span className={classes.text}>{props.item.text}</span>
    </>
  );
}