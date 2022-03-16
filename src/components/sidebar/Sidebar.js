import React, { useState } from "react";

import classes from "./Sidebar.module.css";
import Button from "../UI/Button";
import IconBox from "../icons/IconBox";
import IconAbout from "../icons/IconAbout";
import HighlightTask from "./HighlightTask";
import HighlightAbout from "./HighlightAbout";

export default function Sidebar(props) {
  const [highlight, setHighlight] = useState(true);

  function renderAddTodoExit() {
    setHighlight(true);
    props.onRenderAddTodo();
  }

  function renderAboutExit() {
    setHighlight(false);
    props.onRenderAbout();
  }

  return (
    <>
      <section className={classes.sidebar} style={props.hideSidebar ? {width: '0'} : {width: '10vw'}}>
        <div className={classes.title}>Todo App</div>
        <HighlightTask onHighlight={highlight}>
          {(prop) => (
            <Button onClick={renderAddTodoExit}>
              <IconBox />
              Tasks
            </Button>
          )}
        </HighlightTask>

        <HighlightAbout onHighlight={highlight}>
          {(prop) => (
            <Button onClick={renderAboutExit}>
              <IconAbout />
              About
            </Button>
          )}
        </HighlightAbout>
      </section>
    </>
  );
}
