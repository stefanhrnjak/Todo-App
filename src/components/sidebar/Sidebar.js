import React from "react";

import classes from "./Sidebar.module.css";
import Button from "../UI/Button";
import IconBox from "../icons/IconBox";
import IconAbout from "../icons/IconAbout";

export default function Sidebar(props) {
  return (
    <>
      <section className={classes.sidebar}>
        <div>Todo App</div>
        <Button onClick={props.onRenderAddTodo}>
          <IconBox />
          Tasks
        </Button>
        <Button onClick={props.onRenderAbout}>
          <IconAbout />
          About
        </Button>
      </section>
    </>
  );
}
