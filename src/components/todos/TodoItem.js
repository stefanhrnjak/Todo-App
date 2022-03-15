import React from "react";

import classes from "./TodoItem.module.css";

import IconPlus from "../icons/IconPlus";
import { useContext } from "react/cjs/react.production.min";

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