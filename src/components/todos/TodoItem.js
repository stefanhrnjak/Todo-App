import React from "react";

import classes from "./TodoItem.module.css";

import IconPlus from "../icons/IconPlus";

export default function TodoItem(props) {
  return (
    <>
      <button className={classes.btn} onClick={props.onRemoveItem}>
        <IconPlus />
      </button>

      <span>{props.item.text}</span>
    </>
  );
}