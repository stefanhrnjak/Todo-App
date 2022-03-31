import React, { useState } from "react";

import classes from "./Sidebar.module.css";
import Button from "../UI/Button";
import IconBox from "../icons/IconBox";
import IconAbout from "../icons/IconAbout";
import HighlightTask from "./HighlightTask";
import HighlightAbout from "./HighlightAbout";

// The sidebar

export default function Sidebar(props) {
  const [highlight, setHighlight] = useState(true);

  // Changes highlighted button on sidebar when clicked
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
      <section className={props.hideSidebar ? classes.sidebarHide : classes.sidebar}>
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
